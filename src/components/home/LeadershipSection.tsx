import { useEffect, useRef, useState } from "react";
import { Lightbulb, Globe, Building2, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
  {
    icon: Globe,
    title: "Global Vision",
    description: "Secured a $40M solar project contract in Sierra Leone, collaborating with President Koroma.",
  },
  {
    icon: Building2,
    title: "Strategic Expansion",
    description: "Pioneered the establishment of multiple subsidiaries in Africa, fostering economic development.",
  },
  {
    icon: Award,
    title: "Operational Excellence",
    description: "Relocated Suiming Group's headquarters to a state-of-the-art 25,000 sqm facility.",
  },
  {
    icon: Lightbulb,
    title: "Empowering Innovation",
    description: "Transformed local enterprises into internationally recognized high-tech companies.",
  },
];

const LeadershipSection = () => {
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={cn(
            "text-refined text-gold block mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Visionary Leadership
          </span>
          <h2 className={cn(
            "font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.1s' }}>
            Building Bridges Across Continents
          </h2>
          <div className={cn(
            "flex justify-center mb-6 opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.2s' }}>
            <div className="divider-gold-long" />
          </div>
          <p className={cn(
            "text-muted-foreground text-lg leading-relaxed opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.3s' }}>
            From transforming enterprises to fostering international partnerships, 
            discover the milestones that define a legacy of impact.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={cn(
                "group card-elegant relative overflow-hidden opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-gold group-hover:w-full transition-all duration-500" />
              
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
