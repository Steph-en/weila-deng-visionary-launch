import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "group rounded-xl overflow-hidden bg-card border border-border hover:shadow-elevated transition-all duration-500"
      )}
    >
      <Link to={`/projects/${project.id}`}>
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <span className="inline-block px-3 py-1 rounded-full bg-gold/90 text-navy text-xs font-medium">
              {project.category}
            </span>
            <span className="inline-block px-2 py-1 rounded bg-white/20 text-white text-xs">
              {project.status}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-gold transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
            <MapPin size={14} />
            <span>{project.location}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
            <span>View Project</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
