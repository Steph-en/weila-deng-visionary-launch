import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { categories } from "@/data/projects";

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilter = ({ activeFilter, onFilterChange }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => onFilterChange(category.slug)}
          className={cn(
            "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
            activeFilter === category.slug
              ? "text-navy"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {activeFilter === category.slug && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-gradient-gold rounded-full"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
          <span className="relative z-10">{category.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
