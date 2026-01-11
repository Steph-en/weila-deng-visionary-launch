import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: 15, suffix: "+", label: "Years In Business" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 3254, suffix: "", label: "Share Our Cause" },
  { value: 2800, suffix: "+", label: "Active Beneficiaries" },
];

const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-cream-dark">
      <div className="container-elegant">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "text-center group opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number */}
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>

              {/* Decorative line */}
              <div className="w-0 h-px bg-gold mx-auto mb-3 group-hover:w-12 transition-all duration-500" />

              {/* Label */}
              <div className="text-muted-foreground text-sm tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
