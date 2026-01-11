import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import diplomaticMeeting from "@/assets/diplomatic-meeting.jpg";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className={cn(
            "relative opacity-0 order-2 lg:order-1",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-lg overflow-hidden shadow-xl group">
              <img 
                src={diplomaticMeeting} 
                alt="International partnership" 
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-primary-foreground/10 backdrop-blur-md rounded-lg p-4 border border-primary-foreground/20">
                  <p className="text-primary-foreground text-sm font-medium">
                    "Progress is rooted in collaboration, empowerment, and sustainable development."
                  </p>
                  <span className="text-gold text-xs mt-2 block">— Madam Weila Deng</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-gold/20 rounded-lg -z-10" />
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h2 className={cn(
              "font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight opacity-0",
              isVisible && "animate-fade-in"
            )}>
              Together We Can Make
              <span className="block text-gradient-gold mt-2">Something Great</span>
            </h2>

            <div className={cn(
              "w-24 h-px bg-gradient-to-r from-gold to-transparent mb-8 opacity-0",
              isVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.1s' }} />

            <p className={cn(
              "text-muted-foreground text-lg leading-relaxed mb-6 opacity-0",
              isVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.2s' }}>
              Collaboration is at the heart of progress. From empowering youth to creating 
              sustainable jobs and fostering global partnerships, your ideas and efforts 
              are invaluable in building a brighter future.
            </p>

            <p className={cn(
              "text-muted-foreground leading-relaxed mb-10 opacity-0",
              isVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.3s' }}>
              Let's connect and make something great — together.
            </p>

            <div className={cn(
              "flex flex-col sm:flex-row items-start gap-4 opacity-0",
              isVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.4s' }}>
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
      </div>
    </section>
  );
};

export default CTASection;
