import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FounderCredential = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-background">
      <div className="container-elegant">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center opacity-0",
            isVisible && "animate-fade-in"
          )}
        >
          <span className="text-refined text-gold block mb-4">
            Founder of ESP International
          </span>
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
            Entrepreneurship, property development and hospitality.
          </p>
          <div className="flex justify-center my-6">
            <div className="divider-gold-long" />
          </div>
          <Link
            to="/about#esp-international"
            className="inline-flex items-center gap-1 text-gold text-sm group"
          >
            Discover ESP International
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FounderCredential;
