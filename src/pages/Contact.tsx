import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

        <div className="container-elegant relative z-10">
          <div className="max-w-3xl">
            <span className={cn(
              "text-refined text-gold block mb-4 opacity-0",
              heroVisible && "animate-fade-in"
            )}>
              Contact
            </span>
            <h1 className={cn(
              "font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 opacity-0",
              heroVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.1s' }}>
              Let's Connect
            </h1>
            <div className={cn(
              "w-24 h-px bg-gradient-to-r from-gold to-transparent mb-8 opacity-0",
              heroVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.2s' }} />
            <p className={cn(
              "text-primary-foreground/70 text-lg md:text-xl leading-relaxed opacity-0",
              heroVisible && "animate-fade-in"
            )} style={{ animationDelay: '0.3s' }}>
              Together, we can build bridges of opportunity and illuminate paths 
              to prosperity across continents.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-2">Send a Message</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or want to discuss a potential collaboration? 
                Fill out the form below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-gold focus:ring-gold"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-gold focus:ring-gold"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-gold focus:ring-gold"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-gold focus:ring-gold resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="elegant"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <div className="bg-cream-dark rounded-lg p-8 md:p-10 mb-8">
                <h3 className="font-serif text-2xl text-foreground mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <a
                    href="tel:+233592763541"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-soft group-hover:shadow-gold transition-shadow duration-300">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="text-foreground group-hover:text-gold transition-colors duration-300">
                        +233-592-763-541
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@weiladeng.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-soft group-hover:shadow-gold transition-shadow duration-300">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="text-foreground group-hover:text-gold transition-colors duration-300">
                        info@weiladeng.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-soft">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground">
                        Guangdong Province, China
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-primary rounded-lg p-8 text-primary-foreground">
                <h3 className="font-serif text-xl mb-4">Follow Along</h3>
                <p className="text-primary-foreground/70 text-sm mb-6">
                  Connect on social media for updates and insights.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-11 h-11 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-11 h-11 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-11 h-11 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8 p-8 border border-border rounded-lg">
                <h3 className="font-serif text-xl text-foreground mb-2">Stay Updated</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Subscribe to the newsletter for insights and updates.
                </p>
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-background"
                  />
                  <Button variant="elegant" size="default">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
