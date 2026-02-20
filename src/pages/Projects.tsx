import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Building2, Car, Paintbrush, Zap, Factory, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ProjectCard from "@/components/projects/ProjectCard";
import { featuredProjects, keyAreas, notableBuildings, highwayProjects, waterProjects,  } from "@/data/projects";

const areaIcons = {
  construction: Building2,
  automobile: Car,
  interior: Paintbrush,
  energy: Zap,
  concrete: Factory,
};

const Projects = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [areasVisible, setAreasVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeRegion, setActiveRegion] = useState("all");
  const heroRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const filteredProjects = useMemo(() => {
    let result = featuredProjects;
    if (activeFilter !== "all") {
      result = result.filter((project) => project.categorySlug === activeFilter);
    }
    // if (activeRegion !== "all") {
    //   result = result.filter((project) => project.region === activeRegion);
    // }
    return result;
  }, [activeFilter, activeRegion]);

  useEffect(() => {
    setHeroVisible(true);

    const createObserver = (
      ref: React.RefObject<HTMLElement>,
      setter: (value: boolean) => void
    ) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setter(true);
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const areasObs = createObserver(areasRef, setAreasVisible);
    const projectsObs = createObserver(projectsRef, setProjectsVisible);

    return () => {
      areasObs.disconnect();
      projectsObs.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-navy"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_hsl(var(--navy))_70%)]" />
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </motion.div>

        <div className="container-elegant relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-refined text-gold-light mb-4 block">
              Jakdam Group of Companies
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground mb-6 leading-tight">
              Building Tomorrow's
              <span className="block text-gradient-gold">Infrastructure Today</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto mb-8">
              A comprehensive Chinese-Ghanaian partnership delivering excellence in construction, 
              energy, and infrastructure across West Africa with 358+ dedicated professionals.
            </p>
            <div className="divider-gold-long mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section ref={areasRef} className="section-padding bg-background">
        <div className="container-elegant">
          <div className="text-center mb-16">
            <span
              className={cn(
                "text-refined text-accent mb-3 block transition-all duration-700",
                areasVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              Our Expertise
            </span>
            <h2
              className={cn(
                "font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 transition-all duration-700 delay-100",
                areasVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              Five Key Areas of Operation
            </h2>
            <div
              className={cn(
                "divider-gold mx-auto transition-all duration-700 delay-200",
                areasVisible ? "opacity-100" : "opacity-0"
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {keyAreas.map((area, index) => {
              const Icon = areaIcons[area.slug as keyof typeof areaIcons] || Building2;
              return (
                <div
                  key={area.title}
                  className={cn(
                    "group p-6 rounded-xl bg-card border border-border hover:border-gold/30 hover:shadow-gold transition-all duration-500",
                    areasVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                  style={{
                    transitionDelay: areasVisible ? `${index * 100 + 300}ms` : "0ms",
                  }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold/10 flex items-center justify-center mb-4 group-hover:bg-gradient-gold/20 transition-colors">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section with Filter */}
      <section ref={projectsRef} className="section-padding bg-muted/30">
        <div className="container-elegant">
          <div className="text-center mb-12">
            <span
              className={cn(
                "text-refined text-accent mb-3 block transition-all duration-700",
                projectsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              Portfolio
            </span>
            <h2
              className={cn(
                "font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 transition-all duration-700 delay-100",
                projectsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              Featured Projects
            </h2>
            <div
              className={cn(
                "divider-gold mx-auto transition-all duration-700 delay-200",
                projectsVisible ? "opacity-100" : "opacity-0"
              )}
            />
          </div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <ProjectFilter
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            {/* Region Filter */}
            {/* <div className="mt-4 flex flex-wrap justify-center gap-2">
              {regions.map((region) => (
                <button
                  key={region.slug}
                  onClick={() => setActiveRegion(region.slug)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border",
                    activeRegion === region.slug
                      ? "bg-navy text-primary-foreground border-navy"
                      : "text-muted-foreground border-border hover:border-gold/50 hover:text-foreground"
                  )}
                >
                  {region.label}
                </button>
              ))}
            </div> */}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isVisible={projectsVisible}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Lists Section */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Notable Buildings */}
            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Notable Buildings
                </h3>
              </div>
              <ul className="space-y-3">
                {notableBuildings.map((building, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <ArrowRight className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span>{building}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highway Projects */}
            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Highway & Urban Roads
                </h3>
              </div>
              <ul className="space-y-3">
                {highwayProjects.map((project, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <ArrowRight className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Water Resources */}
            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Water Resources
                </h3>
              </div>
              <ul className="space-y-3">
                {waterProjects.map((project, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <ArrowRight className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-navy">
        <div className="container-elegant">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif text-4xl md:text-5xl font-medium text-gradient-gold mb-2">
                358+
              </div>
              <p className="text-primary-foreground/70 text-sm">Employees</p>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl font-medium text-gradient-gold mb-2">
                5
              </div>
              <p className="text-primary-foreground/70 text-sm">Key Industries</p>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl font-medium text-gradient-gold mb-2">
                50+
              </div>
              <p className="text-primary-foreground/70 text-sm">Major Projects</p>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl font-medium text-gradient-gold mb-2">
                6
              </div>
              <p className="text-primary-foreground/70 text-sm">Office Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-elegant text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Partner With Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us in building infrastructure that transforms communities and drives sustainable development across Africa.
          </p>
          <Link to="/contact">
            <Button className="group bg-gradient-gold text-navy hover:opacity-90">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
