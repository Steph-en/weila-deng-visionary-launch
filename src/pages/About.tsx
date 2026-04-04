import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, BookOpen, Utensils, Waves } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutPortrait from "@/assets/about-portrait2.png";
import speakingEvent from "@/assets/speaking-event2.png";
import solarProject from "@/assets/solar-project.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import suiming from "@/assets/Suiming-Group.jpg";
import speaking from "@/assets/speaking.jpg";

const About = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [journeyVisible, setJourneyVisible] = useState(false);
  const [philosophyVisible, setPhilosophyVisible] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);

  // Parallax for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroBackgroundY = useTransform(heroScrollProgress, [0, 1], ["0%", "25%"]);
  const heroContentY = useTransform(heroScrollProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0.4]);
  const heroPortraitY = useTransform(heroScrollProgress, [0, 1], ["0%", "10%"]);

  useEffect(() => {
    setHeroVisible(true);

    const observers: IntersectionObserver[] = [];

    const createObserver = (ref: React.RefObject<HTMLDivElement>, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setter(true);
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      observers.push(observer);
    };

    createObserver(storyRef, setStoryVisible);
    createObserver(journeyRef, setJourneyVisible);
    createObserver(philosophyRef, setPhilosophyVisible);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const milestones = [
    {
      year: "2003",
      title: "CEO of Suiming Group",
      description: "Transformed a local enterprise into an internationally recognized high-tech company.",
      image: suiming,
    },
    {
      year: "2016",
      title: "CEO of Jakdam Group Limited",
      description: "Expanded leadership to a diversified conglomerate with capabilities in construction and hydropower.",
      image: speaking,
    },
    {
      year: "2016-2018",
      title: "Sierra Leone Commercial Counsellor",
      description: "Strengthened Sino-African economic relations as Commercial Counsellor in Guangzhou.",
      image: solarProject,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative pt-24 pb-0 md:pt-32 bg-gradient-navy overflow-hidden">
        {/* Background Pattern with Parallax */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: heroBackgroundY }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/4 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl"
          style={{ y: useTransform(heroScrollProgress, [0, 1], ["0%", "40%"]) }}
        />

        <div className="container-elegant relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Left Content with Parallax */}
            <motion.div 
              className="pb-16 md:pb-24"
              style={{ y: heroContentY, opacity: heroOpacity }}
            >
              <span className={cn(
                "text-refined text-gold block mb-4 opacity-0",
                heroVisible && "animate-fade-in"
              )}>
                About
              </span>
              <h1 className={cn(
                "font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 opacity-0",
                heroVisible && "animate-fade-in"
              )} style={{ animationDelay: '0.1s' }}>
                Weila Deng
              </h1>
              <div className={cn(
                "w-24 h-px bg-gradient-to-r from-gold to-transparent mb-8 opacity-0",
                heroVisible && "animate-fade-in"
              )} style={{ animationDelay: '0.2s' }} />
              <p className={cn(
                "text-primary-foreground/70 text-lg md:text-xl leading-relaxed opacity-0",
                heroVisible && "animate-fade-in"
              )} style={{ animationDelay: '0.3s' }}>
                A visionary leader in international business, establishing herself as a 
                prominent figure in global commerce, particularly in fostering economic 
                ties between Asia and Africa.
              </p>
            </motion.div>

            {/* Right - Portrait with Parallax */}
            <motion.div 
              className={cn(
                "relative opacity-0",
                heroVisible && "animate-fade-in"
              )} 
              style={{ animationDelay: '0.4s', y: heroPortraitY }}
            >
              <div className="relative">
                {/* Decorative frame with parallax */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-lg hidden md:block"
                  style={{ y: useTransform(heroScrollProgress, [0, 1], ["0%", "-15%"]) }}
                />
                
                {/* Portrait */}
                <div className="relative rounded-t-lg overflow-hidden shadow-2xl">
                  <img 
                    src={aboutPortrait} 
                    alt="Madam Weila Deng" 
                    className="w-full h-[45vh] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className={cn(
                "text-refined text-gold block mb-4 opacity-0",
                storyVisible && "animate-fade-in"
              )}>
                The Journey
              </span>
              <h2 className={cn(
                "font-serif text-3xl md:text-4xl text-foreground mb-6 opacity-0",
                storyVisible && "animate-fade-in"
              )} style={{ animationDelay: '0.1s' }}>
                From Sichuan to the World
              </h2>
              <div className={cn(
                "w-24 h-px bg-gradient-to-r from-gold to-transparent mb-8 opacity-0",
                storyVisible && "animate-fade-in"
              )} style={{ animationDelay: '0.2s' }} />
              <div className={cn("space-y-6 opacity-0", storyVisible && "animate-fade-in")} style={{ animationDelay: '0.3s' }}>
                <p className="text-muted-foreground leading-relaxed">
                  With roots in Longchang City, Sichuan, China, Ms. Deng has built an exemplary 
                  career marked by strategic innovation and cross-cultural leadership.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Under her stewardship, Suiming Group has achieved remarkable growth, establishing 
                  manufacturing facilities across multiple continents and securing significant 
                  international contracts. The company's expansion includes a landmark 25,000 
                  square meter facility in Guangdong Province.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Her influence extends beyond corporate leadership into the realm of international 
                  diplomacy, including the successful execution of a US$40 million solar street 
                  lamp project in Sierra Leone.
                </p>
              </div>
            </div>

            {/* Education Card */}
            <div className={cn(
              "bg-cream-dark rounded-lg p-8 md:p-10 opacity-0",
              storyVisible && "animate-fade-in-right"
            )} style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                  <GraduationCap className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">Educational Foundation</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-gold pl-6">
                  <h4 className="font-medium text-foreground mb-1">Bachelor of Arts in Marketing</h4>
                  <p className="text-muted-foreground text-sm">Sichuan Normal University</p>
                </div>
                <div className="border-l-2 border-gold pl-6">
                  <h4 className="font-medium text-foreground mb-1">Master's Degree in Psychology</h4>
                  <p className="text-muted-foreground text-sm">Sichuan Normal University</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-8 leading-relaxed">
                This distinctive blend of business acumen and emotional intelligence has enabled 
                her to navigate complex international negotiations and build lasting cross-cultural 
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Journey */}
      <section ref={journeyRef} className="section-padding bg-cream-dark">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={cn(
              "text-refined text-gold block mb-4 opacity-0",
              journeyVisible && "animate-fade-in"
            )}>
              Leadership Journey
            </span>
            <h2 className={cn(
              "font-serif text-3xl md:text-4xl text-foreground mb-6 opacity-0",
              journeyVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.1s' }}>
              Milestones of Impact
            </h2>
          </div>

          {/* Timeline with Images */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center opacity-0",
                  journeyVisible && "animate-fade-in-up",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Image */}
                <div className={cn(
                  "relative rounded-lg overflow-hidden group",
                  index % 2 === 1 && "lg:order-2"
                )}>
                  <img 
                    src={milestone.image} 
                    alt={milestone.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-gradient-gold px-4 py-2 rounded-md">
                    <span className="font-serif text-navy font-medium">{milestone.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={cn(
                  "space-y-4",
                  index % 2 === 1 && "lg:order-1 lg:text-right"
                )}>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground">{milestone.title}</h3>
                  <div className={cn(
                    "w-16 h-px bg-gradient-to-r from-gold to-transparent",
                    index % 2 === 1 && "lg:ml-auto lg:bg-gradient-to-l"
                  )} />
                  <p className="text-muted-foreground text-lg leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Personal */}
      <section ref={philosophyRef} className="section-padding bg-primary text-primary-foreground">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Philosophy */}
            <div>
              <span className={cn(
                "text-refined text-gold block mb-4 opacity-0",
                philosophyVisible && "animate-fade-in"
              )}>
                Philosophy & Approach
              </span>
              <h2 className={cn(
                "font-serif text-3xl md:text-4xl mb-6 opacity-0",
                philosophyVisible && "animate-fade-in"
              )} style={{ animationDelay: '0.1s' }}>
                Sustainable Development
              </h2>
              <div className={cn(
                "w-24 h-px bg-gradient-to-r from-gold to-transparent mb-8 opacity-0",
                philosophyVisible && "animate-fade-in"
              )} style={{ animationDelay: '0.2s' }} />
              <p className={cn(
                "text-primary-foreground/70 leading-relaxed mb-6 opacity-0",
                philosophyVisible && "animate-fade-in"
              )} style={{ animationDelay: '0.3s' }}>
                At the core of Ms. Deng's leadership philosophy lies a deep commitment to 
                sustainable development and mutual benefit in international commerce.
              </p>
              <p className={cn(
                "text-primary-foreground/70 leading-relaxed opacity-0",
                philosophyVisible && "animate-fade-in"
              )} style={{ animationDelay: '0.4s' }}>
                She believes in creating business ecosystems that not only generate profit 
                but also contribute meaningfully to local economic development. This approach 
                has proven particularly successful in emerging markets.
              </p>
            </div>

            {/* Personal Interests */}
            <div className={cn("opacity-0", philosophyVisible && "animate-fade-in-right")} style={{ animationDelay: '0.4s' }}>
              <h3 className="font-serif text-2xl mb-8">Personal Commitment</h3>
              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                Beyond professional achievements, Ms. Deng maintains a strong commitment to 
                personal growth and development, reflecting a balanced approach to leadership.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: Waves, label: "Swimming" },
                  { icon: Utensils, label: "Cooking" },
                  { icon: BookOpen, label: "Reading" },
                ].map((interest, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary-foreground/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors duration-300">
                      <interest.icon className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-sm text-primary-foreground/60">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-elegant text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Ready to Connect?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's explore how we can work together to create meaningful impact.
          </p>
          <Link to="/contact">
            <Button variant="elegant" size="xl" className="group">
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
