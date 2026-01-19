import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/Weila-Deng-Logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    // { name: "Team", path: "/team" },
    // { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-elegant flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2 transition-all duration-500"
        >
          <div 
            className={cn(
              "rounded-full bg-gradient-gold flex items-center justify-center shadow-gold transition-all duration-500",
              isScrolled ? "w-8 h-8" : "w-10 h-10"
            )}
          >
            <span 
              className={cn(
                "font-serif font-semibold text-navy transition-all duration-500",
                isScrolled ? "text-sm" : "text-lg"
              )}
            >
              <img src={logoImage} alt="Weila Deng Logo" />
            </span>
          </div>
          <div className="hidden sm:block overflow-hidden">
            <span 
              className={cn(
                "font-serif font-medium tracking-wide text-foreground transition-all duration-500 block",
                isScrolled ? "text-lg" : "text-xl"
              )}
            >
              Weila Deng
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative text-sm font-medium tracking-wide transition-all duration-300 py-1",
                "hover:-translate-y-0.5",
                location.pathname === link.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
                "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 after:ease-out",
                location.pathname === link.path
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="group">
            <Button 
              variant="elegant" 
              size="sm"
              className="transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Let's Connect
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-elevated overflow-hidden transition-all duration-500",
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-elegant py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-medium tracking-wide py-2 transition-colors",
                location.pathname === link.path
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="elegant" className="w-full mt-2">
              Let's Connect
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
