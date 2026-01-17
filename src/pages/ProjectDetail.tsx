import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Building2, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = featuredProjects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = featuredProjects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? featuredProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < featuredProjects.length - 1 ? featuredProjects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        </div>

        <div className="container-elegant relative z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-gold-light hover:text-gold transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Projects</span>
            </Link>

            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/90 text-navy text-sm font-medium mb-4">
              {project.category}
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground mb-4 leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                <span>{project.location}</span>
              </div>
              {project.year && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span>{project.year}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-gold" />
                <span>{project.status}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-elegant">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {project.fullDescription}
              </p>

              {/* Highlights */}
              <div className="mb-12">
                <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                  Key Highlights
                </h3>
                <ul className="space-y-4">
                  {project.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              {project.gallery.length > 0 && (
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="relative aspect-video rounded-xl overflow-hidden group"
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Specifications */}
              {project.specifications && (
                <div className="p-6 rounded-xl bg-card border border-border mb-6">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-6">
                    Project Specifications
                  </h3>
                  <div className="space-y-4">
                    {project.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center pb-3 border-b border-border last:border-0 last:pb-0"
                      >
                        <span className="text-muted-foreground text-sm">{spec.label}</span>
                        <span className="text-foreground font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Client Info */}
              {project.client && (
                <div className="p-6 rounded-xl bg-card border border-border mb-6">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                    Client
                  </h3>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
              )}

              {/* CTA */}
              <div className="p-6 rounded-xl bg-gradient-navy text-center">
                <h3 className="font-serif text-lg font-medium text-primary-foreground mb-3">
                  Interested in a Similar Project?
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Contact us to discuss your construction needs.
                </p>
                <Link to="/contact">
                  <Button variant="secondary" size="sm" className="w-full">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-border">
        <div className="container-elegant">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <div className="text-left">
                  <span className="text-xs text-muted-foreground block">Previous</span>
                  <span className="font-medium">{prevProject.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
              >
                <div>
                  <span className="text-xs text-muted-foreground block">Next</span>
                  <span className="font-medium">{nextProject.title}</span>
                </div>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
