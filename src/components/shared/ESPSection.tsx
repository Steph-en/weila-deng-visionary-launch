import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Building2, Hotel } from "lucide-react";
import { cn } from "@/lib/utils";

const ventures = [
  {
    name: "ESP Ghana",
    focus: "Real Estate & Property Development",
    href: "https://esp-ghana.com/",
    cta: "Explore ESP Ghana",
    icon: Building2,
  },
  {
    name: "ESP Hotel",
    focus: "Hospitality & Luxury Accommodation",
    href: "https://www.esphotel.com/",
    cta: "Explore ESP Hotel",
    icon: Hotel,
  },
];

const ESPSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="esp-international"
      aria-labelledby="esp-heading"
      className="section-padding bg-background"
    >
      <div className="container-elegant">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <span
            className={cn(
              "text-refined text-gold block mb-4 opacity-0",
              isVisible && "animate-fade-in"
            )}
          >
            Founder
          </span>
          <h2
            id="esp-heading"
            className={cn(
              "font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            ESP International
          </h2>
          <div
            className={cn(
              "flex justify-center mb-6 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="divider-gold-long" />
          </div>
          <p
            className={cn(
              "text-muted-foreground text-lg leading-relaxed opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.3s" }}
          >
            Building experiences across real estate, property development and
            hospitality — entrepreneurship remains at the heart of Weila Yeng's
            professional story.
          </p>
        </div>

        {/* Ventures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {ventures.map((venture, index) => (
            <a
              key={venture.name}
              href={venture.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${venture.cta} — ${venture.focus} (opens in a new tab)`}
              className={cn(
                "group card-elegant relative overflow-hidden block opacity-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-gold group-hover:w-full transition-all duration-500" />

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <venture.icon className="w-6 h-6 text-navy" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300 break-words">
                    {venture.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed break-words">
                    {venture.focus}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm mt-5">
                    {venture.cta}
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p
          className={cn(
            "text-muted-foreground/80 text-sm text-center mt-10 max-w-2xl mx-auto opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: "0.6s" }}
        >
          Explore the ventures associated with ESP International.
        </p>
      </div>
    </section>
  );
};

export default ESPSection;
