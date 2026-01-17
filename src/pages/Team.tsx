import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Building2, Zap, Droplets, Car, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { departments, companyStats } from "@/data/team";

const departmentIcons: Record<string, React.ElementType> = {
  "Executive Management": Users,
  "Construction Division": Building2,
  "Highway & Infrastructure": Car,
  "Water Resources": Droplets,
  "Energy Division": Zap,
};

const Team = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [structureVisible, setStructureVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const structureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeroVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStructureVisible(true);
      },
      { threshold: 0.1 }
    );

    if (structureRef.current) observer.observe(structureRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-navy"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-elegant relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-refined text-gold-light mb-4 block">
              Our People
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground mb-6 leading-tight">
              Leadership &
              <span className="block text-gradient-gold">Management</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto mb-8">
              Meet the dedicated team driving Jakdam Group's vision of excellence in construction and infrastructure development across West Africa.
            </p>
            <div className="divider-gold-long mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-elegant">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="font-serif text-4xl md:text-5xl font-medium text-gradient-gold mb-2">
                {companyStats.totalEmployees}+
              </div>
              <p className="text-muted-foreground text-sm">Employees</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="font-serif text-4xl md:text-5xl font-medium text-gradient-gold mb-2">
                {companyStats.keyIndustries}
              </div>
              <p className="text-muted-foreground text-sm">Key Industries</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="font-serif text-4xl md:text-5xl font-medium text-gradient-gold mb-2">
                {companyStats.majorProjects}+
              </div>
              <p className="text-muted-foreground text-sm">Major Projects</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="font-serif text-4xl md:text-5xl font-medium text-gradient-gold mb-2">
                {companyStats.officeLocations}
              </div>
              <p className="text-muted-foreground text-sm">Office Locations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section ref={structureRef} className="section-padding bg-background">
        <div className="container-elegant">
          <div className="text-center mb-16">
            <span
              className={cn(
                "text-refined text-accent mb-3 block transition-all duration-700",
                structureVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Our Structure
            </span>
            <h2
              className={cn(
                "font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 transition-all duration-700 delay-100",
                structureVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Organizational Departments
            </h2>
            <div
              className={cn(
                "divider-gold mx-auto transition-all duration-700 delay-200",
                structureVisible ? "opacity-100" : "opacity-0"
              )}
            />
          </div>

          <div className="space-y-8">
            {departments.map((dept, deptIndex) => {
              const Icon = departmentIcons[dept.name] || Building2;
              return (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={structureVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: deptIndex * 0.1 }}
                  className="p-8 rounded-xl bg-card border border-border hover:shadow-elevated transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-gold/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-foreground">
                        {dept.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{dept.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dept.members.map((member, memberIndex) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={structureVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: deptIndex * 0.1 + memberIndex * 0.05 + 0.2 }}
                        className="group p-5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-navy font-medium text-sm">
                            {member.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground text-sm">{member.name}</h4>
                            <p className="text-gold text-xs">{member.title}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {member.bio}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-elegant">
          <div className="text-center mb-12">
            <span className="text-refined text-accent mb-3 block">Our Values</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              What Drives Us
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "Committed to delivering the highest quality in every project we undertake.",
              },
              {
                title: "Integrity",
                description: "Operating with transparency, honesty, and ethical standards in all our dealings.",
              },
              {
                title: "Innovation",
                description: "Embracing new technologies and methods to improve construction and infrastructure.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-gold mx-auto flex items-center justify-center mb-4">
                  <ChevronRight className="w-5 h-5 text-navy" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
