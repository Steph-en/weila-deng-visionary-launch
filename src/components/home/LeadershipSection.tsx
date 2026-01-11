import { useEffect, useRef, useState } from "react";
import { Lightbulb, Globe, Building2, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import solarProject from "@/assets/solar-project.jpg";
import leadershipMeeting from "@/assets/leadership-meeting.jpg";

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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Achievement Cards */}
          <div className="lg:col-span-5 space-y-6">
            {achievements.slice(0, 2).map((achievement, index) => (
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

          {/* Center Column - Featured Image */}
          <div className={cn(
            "lg:col-span-4 relative opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.5s' }}>
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden group">
              <img 
                src={leadershipMeeting} 
                alt="Leadership meeting" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-gold text-sm uppercase tracking-wider">Empowering Innovation</span>
                <p className="text-primary-foreground mt-2 text-sm leading-relaxed">
                  Welcome to the official website of Madam Weila Deng — a visionary leader, 
                  accomplished entrepreneur, and dedicated philanthropist.
                </p>
                <Link to="/about" className="inline-flex items-center text-gold text-sm mt-4 group/link">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - More Cards + Image */}
          <div className="lg:col-span-3 space-y-6">
            {achievements.slice(2).map((achievement, index) => (
              <div
                key={index}
                className={cn(
                  "group card-elegant relative overflow-hidden opacity-0",
                  isVisible && "animate-fade-in-up"
                )}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-gold group-hover:w-full transition-all duration-500" />
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Small Feature Image */}
            <div className={cn(
              "relative rounded-lg overflow-hidden h-48 opacity-0",
              isVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.8s' }}>
              <img 
                src={solarProject} 
                alt="Solar project in Africa" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-primary-foreground text-sm font-medium">$40M Solar Project</span>
                <p className="text-primary-foreground/70 text-xs">Sierra Leone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
