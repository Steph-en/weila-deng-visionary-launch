import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-elegant section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <span className="font-serif text-xl font-semibold text-navy">W</span>
              </div>
              <span className="font-serif text-2xl font-medium">Weila Deng</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Together, we can build bridges of opportunity and illuminate paths 
              to prosperity across continents.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Team", path: "/team" },
                { name: "News", path: "/news" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+233592763541"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  <Phone size={16} />
                  <span>+233-592-763-541</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@weiladeng.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  <Mail size={16} />
                  <span>info@weiladeng.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Weila Deng. All Rights Reserved.
            </p>
            <p className="text-primary-foreground/40 text-sm">
              Designed with purpose and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
