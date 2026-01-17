import { useEffect, useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Building2, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Jakdam Group delivered our headquarters project on time and exceeded all quality expectations. Their professionalism and attention to detail made them the ideal construction partner.",
    author: "Dr. Kofi Mbeki",
    role: "Director, Ghana Maritime Authority",
    icon: Building2,
  },
  {
    quote: "The ESP Heights residential development showcases world-class construction standards. Jakdam Group's expertise in luxury high-rise projects is unmatched in the region.",
    author: "Sarah Okonkwo",
    role: "Real Estate Developer",
    icon: Award,
  },
  {
    quote: "Our highway infrastructure project was completed with remarkable efficiency. Jakdam Group demonstrated exceptional project management and engineering capabilities.",
    author: "Eng. Kwame Asante",
    role: "Ministry of Roads & Highways",
    icon: Building2,
  },
  {
    quote: "The irrigation project has transformed agricultural productivity in our region. Jakdam Group's commitment to community development is evident in their work.",
    author: "Hon. Ama Dufie",
    role: "Ghana Irrigation Development Authority",
    icon: Users,
  },
  {
    quote: "From concept to completion, Jakdam Group maintained the highest standards of quality and safety. They are a trusted partner for large-scale construction projects.",
    author: "Chief Nana Yaw",
    role: "Traditional Council Representative",
    icon: Award,
  },
];

const JakdamTestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  const currentTestimonial = testimonials[activeIndex];
  const IconComponent = currentTestimonial.icon;

  return (
    <section ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container-elegant max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={cn(
            "text-refined text-gold block mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Client Testimonials
          </span>
          <h2 className={cn(
            "font-serif text-3xl md:text-4xl text-foreground opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.1s' }}>
            Trusted by Leaders
          </h2>
          <p className={cn(
            "mt-4 text-muted-foreground max-w-2xl mx-auto opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.2s' }}>
            Hear from our partners and clients about their experience working with Jakdam Group
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className={cn(
          "relative opacity-0",
          isVisible && "animate-fade-in"
        )} style={{ animationDelay: '0.3s' }}>
          {/* Quote Icon */}
          <div className="absolute -top-4 left-0 md:left-8 z-10">
            <Quote className="w-16 h-16 text-gold/20" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-all duration-300 hover:scale-110 hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-all duration-300 hover:scale-110 hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Content */}
          <div className="relative min-h-[280px] md:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <blockquote className="text-center px-4 md:px-8">
                  {/* Icon Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-gold" />
                    </div>
                  </div>
                  
                  <p className="font-serif text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-8 italic">
                    "{currentTestimonial.quote}"
                  </p>
                  <footer>
                    <div className="w-16 h-px bg-gold mx-auto mb-4" />
                    <cite className="not-italic">
                      <span className="block font-semibold text-foreground text-lg mb-1">
                        {currentTestimonial.author}
                      </span>
                      <span className="text-muted-foreground">
                        {currentTestimonial.role}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "bg-gold w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={cn(
          "grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-border opacity-0",
          isVisible && "animate-fade-in"
        )} style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="font-serif text-2xl md:text-3xl text-gold mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-2xl md:text-3xl text-gold mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-2xl md:text-3xl text-gold mb-1">25+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JakdamTestimonialsSection;
