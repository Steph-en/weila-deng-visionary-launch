import { useEffect, useRef, useState } from "react";
import { Shield, Sparkles, Heart, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Every endeavor is conducted with honesty and transparency, building trust across all partnerships.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Turning challenges into opportunities through creative solutions and forward-thinking strategies.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "Striving to uplift individuals and communities, fostering meaningful and lasting change.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Where mutual respect and shared goals lead to extraordinary achievements together.",
  },
];

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-cream-dark">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={cn(
            "text-refined text-gold block mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Our Guiding Principles
          </span>
          <h2 className={cn(
            "font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.1s' }}>
            Values That Define Leadership
          </h2>
          <div className={cn(
            "flex justify-center mb-6 opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.2s' }}>
            <div className="divider-gold-long" />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={cn(
                "group text-center opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute inset-0 w-20 h-20 bg-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                <div className="relative w-16 h-16 rounded-full bg-background shadow-soft flex items-center justify-center group-hover:shadow-gold transition-shadow duration-300">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Decorative underline */}
              <div className="mt-6 mx-auto w-0 h-px bg-gold group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
