import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flag, Star, Expand, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { timelineEvents, type TimelineEvent } from "@/data/timeline";

const categoryIcons = {
  'founding': Flag,
  'milestone': Star,
  'expansion': Expand,
  'award': Award,
};

const categoryColors = {
  'founding': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'milestone': 'bg-gold/20 text-gold border-gold/30',
  'expansion': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'award': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const TimelineItem = ({ 
  event, 
  index, 
  isActive, 
  onClick 
}: { 
  event: TimelineEvent; 
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const Icon = categoryIcons[event.category];
  const isLeft = index % 2 === 0;

  return (
    <div className={cn(
      "relative flex items-center gap-4 md:gap-8",
      isLeft ? "md:flex-row" : "md:flex-row-reverse"
    )}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        onClick={onClick}
        className={cn(
          "flex-1 cursor-pointer group",
          isLeft ? "md:text-right" : "md:text-left"
        )}
      >
        <div className={cn(
          "p-6 rounded-xl border transition-all duration-300",
          isActive 
            ? "bg-navy border-gold shadow-gold" 
            : "bg-background border-border hover:border-gold/50"
        )}>
          {/* Year Badge */}
          <span className={cn(
            "inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 transition-colors",
            isActive ? "bg-gold/20 text-gold" : "bg-muted text-muted-foreground"
          )}>
            {event.year}
          </span>
          
          {/* Title */}
          <h3 className={cn(
            "font-serif text-lg md:text-xl mb-2 transition-colors",
            isActive ? "text-white" : "text-foreground group-hover:text-gold"
          )}>
            {event.title}
          </h3>
          
          {/* Description */}
          <p className={cn(
            "text-sm leading-relaxed",
            isActive ? "text-white/70" : "text-muted-foreground"
          )}>
            {event.description}
          </p>
        </div>
      </motion.div>

      {/* Center Point */}
      <div className="relative z-10 flex-shrink-0 hidden md:flex">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
            isActive 
              ? "bg-gold border-gold scale-110" 
              : cn("bg-background", categoryColors[event.category])
          )}
        >
          <Icon className={cn(
            "w-5 h-5 transition-colors",
            isActive ? "text-navy" : ""
          )} />
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
};

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className={cn(
            "text-refined text-gold block mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Our Journey
          </span>
          <h2 className={cn(
            "font-serif text-3xl md:text-4xl text-foreground mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.1s' }}>
            25 Years of Building Excellence
          </h2>
          <p className={cn(
            "text-muted-foreground opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.2s' }}>
            From a small construction firm to a leading infrastructure development company, 
            explore the milestones that shaped Jakdam Group.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          
          {/* Timeline Items */}
          <div className="space-y-6 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={event.year}
                event={event}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className={cn(
          "flex flex-wrap justify-center gap-6 mt-16 pt-8 border-t border-border opacity-0",
          isVisible && "animate-fade-in"
        )} style={{ animationDelay: '0.5s' }}>
          {Object.entries(categoryIcons).map(([category, Icon]) => (
            <div key={category} className="flex items-center gap-2">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center border",
                categoryColors[category as keyof typeof categoryColors]
              )}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-sm text-muted-foreground capitalize">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
