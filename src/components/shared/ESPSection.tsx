import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Building2, Hotel } from "lucide-react";
import { cn } from "@/lib/utils";
import espLogo from "@/assets/esp/esp-logo.png.asset.json";
import espAirbnb from "@/assets/esp/esp-airbnb.png.asset.json";
import espTower from "@/assets/esp/esp-tower.png.asset.json";
import espVillasAerial from "@/assets/esp/esp-villas-aerial.png.asset.json";
import espVilla from "@/assets/esp/esp-villa.png.asset.json";
import espTownhouses from "@/assets/esp/esp-townhouses.png.asset.json";
import espSitePlan from "@/assets/esp/esp-siteplan.png.asset.json";

const featuredProjects = [
  { src: espAirbnb.url, title: "ESP airBNB", detail: "Hospitality Development" },
  { src: espTower.url, title: "ESP Residential Tower", detail: "Mixed-Use High-Rise" },
  { src: espVilla.url, title: "Contemporary Villa", detail: "Luxury Residence" },
  { src: espTownhouses.url, title: "Townhouse Collection", detail: "Gated Residences" },
  { src: espVillasAerial.url, title: "Villa Estate", detail: "Aerial Masterplan" },
  { src: espSitePlan.url, title: "Estate Site Plan", detail: "Architectural Layout" },
];

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
          <div
            className={cn(
              "flex justify-center mb-8 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.05s" }}
          >
            <div className="rounded-xl bg-navy px-8 py-6 shadow-elevated">
              <img
                src={espLogo.url}
                alt="ESP International logo"
                loading="lazy"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>
          </div>
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

        {/* Featured Projects */}
        <div className="mt-20 md:mt-24">
          <div className="text-center mb-10 md:mb-14">
            <span
              className={cn(
                "text-refined text-gold block mb-4 opacity-0",
                isVisible && "animate-fade-in"
              )}
            >
              Portfolio
            </span>
            <h3
              className={cn(
                "font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 opacity-0",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: "0.1s" }}
            >
              Featured ESP Projects
            </h3>
            <div className="flex justify-center">
              <div className="divider-gold-long" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <figure
                key={project.title}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-border bg-card opacity-0",
                  isVisible && "animate-fade-in-up"
                )}
                style={{ animationDelay: `${0.15 + index * 0.08}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.src}
                    alt={`${project.title} — ${project.detail} by ESP International`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-5">
                  <h4 className="font-serif text-lg text-foreground group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">{project.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESPSection;
