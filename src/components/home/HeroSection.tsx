import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Infrastructure development" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-gentle" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-pulse-gentle animation-delay-300" />
      
      {/* Floating Gold Accent Lines */}
      <div className="absolute top-1/3 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-float animation-delay-200" />

      <div className="container-elegant relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Pre-headline */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="text-refined text-gold tracking-widest">
                Leadership That Transcends Borders
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground mt-8 mb-8 leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Weila Deng
            </h1>

            {/* Decorative Line */}
            <div className="flex justify-center lg:justify-start mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent lg:from-gold lg:via-gold lg:to-transparent" />
            </div>

            {/* Subtitle */}
            <p className="font-serif text-xl md:text-2xl text-primary-foreground/80 italic mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Visionary Leader • Entrepreneur • Philanthropist
            </p>

            {/* Description */}
            <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              With over two decades of experience in global business management, 
              fostering growth, innovation, and social impact across continents.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Link to="/about">
                <Button variant="hero" size="xl" className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Let's Connect
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Portrait */}
          <div className="relative hidden lg:block opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-lg blur-xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-lg" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold/30 rounded-lg" />
              
              {/* Portrait Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={heroPortrait} 
                  alt="Madam Weila Deng" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-gold px-6 py-3 rounded-lg shadow-gold">
                <span className="text-navy font-medium text-sm">20+ Years of Impact</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Highlights - Mobile/Tablet */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          {[
            { label: "Years in Business", value: "20+" },
            { label: "Countries Impacted", value: "5+" },
            { label: "Lives Touched", value: "2800+" },
          ].map((stat, index) => (
            <div key={index} className="text-center bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10">
              <div className="font-serif text-3xl md:text-4xl text-gold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/50 text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors cursor-pointer opacity-0 animate-fade-in"
        style={{ animationDelay: '1.3s' }}
        aria-label="Scroll to content"
      >
        <span className="text-xs tracking-widest uppercase"></span>
        <ChevronDown className="w-5 h-5 animate-float" />
      </button>
    </section>
  );
};

export default HeroSection;
