import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Ms. Weila Deng's dedication to empowering communities is truly inspiring. She leads with heart and delivers real change.",
    author: "Sophia L.",
    role: "Community Advocate",
  },
  {
    quote: "Ms. Deng's ability to turn ideas into impactful projects is unmatched. She's a true visionary and a pleasure to work with.",
    author: "Michael K.",
    role: "Project Collaborator",
  },
  {
    quote: "Working with Ms. Weila Deng has been transformative. Her leadership and innovative approach create opportunities that inspire success.",
    author: "John M.",
    role: "Business Partner",
  },
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-elegant max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={cn(
            "text-refined text-gold block mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Testimonials
          </span>
          <h2 className={cn(
            "font-serif text-3xl md:text-4xl text-foreground opacity-0",
            isVisible && "animate-fade-in"
          )} style={{ animationDelay: '0.1s' }}>
            Words of Partnership
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className={cn(
          "relative opacity-0",
          isVisible && "animate-fade-in"
        )} style={{ animationDelay: '0.2s' }}>
          {/* Quote Icon */}
          <div className="absolute -top-4 left-0 md:left-8">
            <Quote className="w-16 h-16 text-gold/20" />
          </div>

          {/* Testimonial Content */}
          <div className="relative min-h-[200px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-700",
                  index === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                )}
              >
                <blockquote className="text-center px-4 md:px-16">
                  <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <footer>
                    <div className="w-12 h-px bg-gold mx-auto mb-4" />
                    <cite className="not-italic">
                      <span className="block font-medium text-foreground mb-1">
                        {testimonial.author}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {testimonial.role}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "bg-gold w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
