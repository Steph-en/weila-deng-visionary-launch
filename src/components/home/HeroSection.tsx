import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroPortrait from "@/assets/hero-portrait2.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  // Staggered text animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const portraitVariants = {
    hidden: { opacity: 0, scale: 0.85, x: 60 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.5 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1] as const,
        delay: 1.2,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.4 + i * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY, scale }}
      >
        <img 
          src={heroBg} 
          alt="Infrastructure development" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
      </motion.div>

      {/* Animated Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
      />
      
      {/* Animated Gold Accent Lines */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-48 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      />

      {/* Subtle particle-like floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold/30"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <motion.div 
        className="container-elegant relative z-10 pt-24 pb-16"
        style={{ y: contentY, opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Staggered Animation */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pre-headline */}
            <motion.div variants={itemVariants}>
              <span className="text-refined text-gold tracking-widest">
                Leadership That Transcends Borders
              </span>
            </motion.div>

            {/* Main Headline with special animation */}
            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground mt-8 mb-8 leading-tight"
              variants={nameVariants}
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Weila Deng
              </motion.span>
            </motion.h1>

            {/* Decorative Line with grow animation */}
            <motion.div
              className="flex justify-center lg:justify-start mb-8"
              variants={lineVariants}
              style={{ originX: 0 }}
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent lg:from-gold lg:via-gold lg:to-transparent" />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="font-serif text-xl md:text-2xl text-primary-foreground/80 italic mb-6"
              variants={itemVariants}
            >
              Visionary Leader • Entrepreneur • Philanthropist
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-primary-foreground/60 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12"
              variants={itemVariants}
            >
              With over two decades of experience in global business management, 
              fostering growth, innovation, and social impact across continents.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <Link to="/about">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" className="group">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero-outline" size="xl">
                    Let's Connect
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Portrait with enhanced entrance */}
          <motion.div 
            className="relative hidden lg:block"
            variants={portraitVariants}
            initial="hidden"
            animate="visible"
            style={{ y: portraitY }}
          >
            <div className="relative">
              {/* Animated decorative frame */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-lg blur-xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) }}
              />
              <motion.div 
                className="absolute -top-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-lg"
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold/30 rounded-lg"
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]) }}
              />
              
              {/* Portrait Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={heroPortrait} 
                  alt="Madam Weila Deng" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge with bounce-in */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-gradient-gold px-6 py-3 rounded-lg shadow-gold"
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
              >
                <span className="text-navy font-medium text-sm">20+ Years of Impact</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievement Highlights with staggered entrance */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Years in Business", value: "20+" },
            { label: "Countries Impacted", value: "5+" },
            { label: "Lives Touched", value: "2800+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={statVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="text-center bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10"
            >
              <div className="font-serif text-3xl md:text-4xl text-gold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/50 text-sm tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{ opacity }}
        aria-label="Scroll to content"
      >
        <span className="text-xs tracking-widest uppercase"></span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
