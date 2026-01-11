import { useEffect, useRef, useState } from "react";
import { Heart, Scale, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

const impactAreas = [
  {
    icon: Heart,
    title: "Medical Impact",
    description: "Championing accessible healthcare initiatives, ensuring communities thrive through improved medical resources and sustainable health programs.",
  },
  {
    icon: Scale,
    title: "Human Rights",
    description: "Dedicated to justice and equality, advocating for human rights and fostering dignity and fairness for all individuals.",
  },
  {
    icon: Gift,
    title: "Giving Back",
    description: "Through philanthropic efforts, empowering communities by creating sustainable opportunities and driving positive, lasting change.",
  },
];

const ImpactSection = () => {
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
    <section ref={sectionRef} className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="container-elegant relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={cn(
            "text-refined text-gold block mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Creating Lasting Change
          </span>
          <h2 className={cn(
            "font-serif text-3xl md:text-4xl lg:text-5xl mb-6 opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.1s' }}>
            Areas of Impact
          </h2>
          <div className={cn(
            "flex justify-center mb-6 opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.2s' }}>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactAreas.map((area, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-8 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-500 opacity-0",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                <area.icon className="w-6 h-6 text-navy" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl mb-4 group-hover:text-gold transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {area.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-gold group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
