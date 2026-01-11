import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CTASection = () => {
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
    <section ref={sectionRef} className="section-padding bg-cream-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-gold/10 to-transparent blur-3xl" />
      </div>

      <div className="container-elegant relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={cn(
            "font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Together We Can Make
            <span className="block text-gradient-gold mt-2">Something Great</span>
          </h2>

          <div className={cn(
            "flex justify-center mb-8 opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.1s' }}>
            <div className="divider-gold-long" />
          </div>

          <p className={cn(
            "text-muted-foreground text-lg leading-relaxed mb-10 opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.2s' }}>
            Collaboration is at the heart of progress. From empowering youth to creating 
            sustainable jobs and fostering global partnerships, your ideas and efforts 
            are invaluable in building a brighter future.
          </p>

          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.3s' }}>
            <Link to="/contact">
              <Button variant="elegant" size="xl" className="group">
                Let's Connect
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="elegant-outline" size="xl">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
