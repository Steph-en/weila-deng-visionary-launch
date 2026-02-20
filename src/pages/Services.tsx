import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Globe,
  Lightbulb,
  Users,
  TrendingUp,
  Building2,
  Handshake,
  Award,
  Target,
} from "lucide-react";
import diplomaticMeeting from "@/assets/diplomatic-meeting2.png";
import leadershipMeeting from "@/assets/leadership-meeting2.png";
import speakingEvent from "@/assets/speaking-event2.png";
import communityEmpowerment from "@/assets/community-empowerment.jpg";

const services = [
  {
    icon: Globe,
    title: "Global Leadership & Diplomacy",
    description:
      "Strategic counsel bridging Eastern and Western business cultures, facilitating cross-continental partnerships and diplomatic engagements.",
    highlights: [
      "China-Africa trade facilitation",
      "Government-to-business liaison",
      "International protocol advisory",
    ],
    image: diplomaticMeeting,
    impact: { metric: "5+", label: "Countries Connected" },
  },
  {
    icon: Lightbulb,
    title: "Innovation & Enterprise Development",
    description:
      "Spearheading transformative business ventures in construction, energy, and manufacturing that create lasting economic value.",
    highlights: [
      "Infrastructure project management",
      "Sustainable energy initiatives",
      "Manufacturing & supply chain",
    ],
    image: leadershipMeeting,
    impact: { metric: "50+", label: "Major Projects" },
  },
  {
    icon: Users,
    title: "Community Impact & Empowerment",
    description:
      "Driving social change through affordable housing, education, and economic programs that uplift underserved communities.",
    highlights: [
      "Affordable housing programs",
      "Skills training & employment",
      "Women's economic empowerment",
    ],
    image: communityEmpowerment,
    impact: { metric: "2800+", label: "Lives Impacted" },
  },
  {
    icon: TrendingUp,
    title: "Strategic Advisory & Consulting",
    description:
      "Offering high-level business strategy and market entry consulting for organizations expanding into African and Asian markets.",
    highlights: [
      "Market entry strategy",
      "Joint venture structuring",
      "Risk assessment & mitigation",
    ],
    image: speakingEvent,
    impact: { metric: "20+", label: "Years of Expertise" },
  },
];

const caseStudies = [
  {
    title: "Ghana Maritime Authority HQ",
    category: "Infrastructure Leadership",
    description:
      "Led the development of the 8-story landmark headquarters, establishing new standards for public infrastructure in West Africa.",
    results: ["15,000 sqm modern facility", "200+ jobs created", "LEED-inspired design"],
    icon: Building2,
  },
  {
    title: "China-Ghana Trade Partnership",
    category: "Diplomatic Achievement",
    description:
      "Brokered a multi-sector trade agreement facilitating $50M+ in bilateral trade across construction materials and energy sectors.",
    results: ["$50M+ trade facilitated", "3 industries connected", "Ongoing partnership"],
    icon: Handshake,
  },
  {
    title: "Kpong Irrigation Expansion",
    category: "Social Impact",
    description:
      "Oversaw the expansion of the irrigation system serving 10,000+ farmers, boosting agricultural productivity by 40%.",
    results: ["10,000+ farmers benefited", "3,000 hectares irrigated", "40% productivity gain"],
    icon: Award,
  },
];

const Services = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: backgroundY, scale: backgroundScale }}>
          <div className="absolute inset-0 bg-gradient-navy" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--gold)/0.15)_0%,_transparent_50%)]" />
        </motion.div>

        <motion.div className="container-elegant relative z-10" style={{ y: contentY, opacity: contentOpacity }}>
          <div className="max-w-3xl">
            <span className={cn("text-refined text-gold block mb-4 opacity-0", heroVisible && "animate-fade-in")}>
              What We Do
            </span>
            <h1
              className={cn(
                "font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 opacity-0",
                heroVisible && "animate-fade-in"
              )}
              style={{ animationDelay: "0.1s" }}
            >
              Leadership, Innovation <br />& <span className="text-gradient-gold">Lasting Impact</span>
            </h1>
            <motion.div
              className={cn("w-24 h-px bg-gradient-to-r from-gold to-transparent mb-8 opacity-0", heroVisible && "animate-fade-in")}
              style={{ animationDelay: "0.2s" }}
            />
            <p
              className={cn("text-primary-foreground/70 text-lg md:text-xl leading-relaxed opacity-0", heroVisible && "animate-fade-in")}
              style={{ animationDelay: "0.3s" }}
            >
              From boardrooms to communities, we deliver transformative services that bridge continents, spark innovation, and create enduring value.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="text-center mb-16">
            <span className="text-refined text-accent mb-3 block">Our Services</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              Areas of Excellence
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="space-y-24">
            {services.map((service, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    isReversed && "lg:[direction:rtl]"
                  )}
                >
                  {/* Image */}
                  <div className={cn("relative group", isReversed && "lg:[direction:ltr]")}>
                    <div className="relative rounded-xl overflow-hidden shadow-elevated">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                    </div>
                    {/* Impact badge */}
                    <motion.div
                      className="absolute -bottom-4 right-8 bg-gradient-gold px-5 py-3 rounded-lg shadow-gold"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-navy font-serif text-2xl font-medium block">{service.impact.metric}</span>
                      <span className="text-navy/70 text-xs">{service.impact.label}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={cn(isReversed && "lg:[direction:ltr]")}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-gold/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="font-serif text-2xl font-medium text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-3 text-sm text-foreground">
                          <Target className="w-4 h-4 text-gold flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-muted/30">
        <div className="container-elegant">
          <div className="text-center mb-16">
            <span className="text-refined text-accent mb-3 block">Case Studies</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              Impact in Action
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-card rounded-xl border border-border p-8 hover:shadow-elevated hover:border-gold/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-gold/10 flex items-center justify-center mb-6 group-hover:bg-gradient-gold/20 transition-colors">
                  <study.icon className="w-7 h-7 text-gold" />
                </div>
                <span className="text-xs text-gold font-medium tracking-wider uppercase">{study.category}</span>
                <h3 className="font-serif text-xl font-medium text-foreground mt-2 mb-3">{study.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{study.description}</p>
                <ul className="space-y-2">
                  {study.results.map((result) => (
                    <li key={result} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {result}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-navy">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
              Ready to Make an Impact Together?
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Whether you're exploring partnerships, seeking advisory, or building the next big project — let's start a conversation.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
