import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Users, Briefcase, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Globe,
    title: "Foreign Policy",
    description: "Inspiring innovation through impactful international diplomacy and cross-border partnerships.",
  },
  {
    icon: Users,
    title: "Human Rights",
    description: "Empowering young leaders with the tools and vision to drive transformative change.",
  },
  {
    icon: Briefcase,
    title: "Creating Jobs",
    description: "Building sustainable employment opportunities that uplift communities worldwide.",
  },
];

const MissionSection = () => {
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
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-elegant">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className={cn(
              "text-refined text-gold block mb-4 opacity-0",
              isVisible && "animate-fade-in"
            )}>
              Mission & Vision
            </span>
            <h2 className={cn(
              "font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight opacity-0",
              isVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.1s' }}>
              A Vision for Global Collaboration
            </h2>
            <div className={cn(
              "w-24 h-px bg-gradient-to-r from-gold to-transparent mb-8 opacity-0",
              isVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.2s' }} />
            
            <p className={cn(
              "text-muted-foreground text-lg leading-relaxed mb-6 opacity-0",
              isVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.3s' }}>
              At the heart of Madam Weila Deng's journey lies a deep commitment to driving 
              global collaboration, empowering the next generation, and fostering economic growth.
            </p>
            <p className={cn(
              "text-muted-foreground leading-relaxed mb-8 opacity-0",
              isVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.4s' }}>
              Her work is a testament to her belief that progress is rooted in collaboration, 
              empowerment, and sustainable development. She envisions a future where international 
              partnerships thrive, young leaders drive transformative change, and industries 
              flourish to deliver meaningful employment.
            </p>

            <Link to="/about" className={cn(
              "opacity-0",
              isVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.5s' }}>
              <Button variant="elegant" className="group">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Right - Pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={cn(
                  "group flex items-start gap-5 p-6 rounded-lg bg-cream-dark hover:bg-card transition-colors duration-300 opacity-0",
                  isVisible && "animate-fade-in-right"
                )}
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-soft group-hover:shadow-gold transition-shadow duration-300">
                  <pillar.icon className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
