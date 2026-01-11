import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Users, Briefcase, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import speakingEvent from "@/assets/speaking-event.jpg";
import partnershipSigning from "@/assets/partnership-signing.jpg";

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
    <section ref={sectionRef} className="section-padding bg-background overflow-hidden">
      <div className="container-elegant">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Images */}
          <div className={cn(
            "lg:col-span-5 relative opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={speakingEvent} 
                  alt="Madam Weila Deng speaking at conference" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>

              {/* Secondary Image - Floating */}
              <div className="absolute -bottom-8 -right-8 w-48 md:w-56 rounded-lg overflow-hidden shadow-xl border-4 border-background hidden md:block">
                <img 
                  src={partnershipSigning} 
                  alt="Partnership signing ceremony" 
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/30 rounded-lg" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 lg:pl-8">
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
              empowerment, and sustainable development.
            </p>

            {/* Pillars */}
            <div className="space-y-4 mb-8">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={cn(
                    "group flex items-start gap-4 p-4 rounded-lg bg-cream-dark hover:bg-card transition-colors duration-300 opacity-0",
                    isVisible && "animate-fade-in-right"
                  )}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-soft group-hover:shadow-gold transition-shadow duration-300">
                    <pillar.icon className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className={cn(
              "opacity-0",
              isVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.8s' }}>
              <Button variant="elegant" className="group">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
