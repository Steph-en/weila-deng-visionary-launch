import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-50",
            "w-12 h-12 rounded-full",
            "bg-gradient-gold shadow-gold",
            "flex items-center justify-center",
            "cursor-pointer",
            "hover:scale-110 hover:shadow-lg",
            "active:scale-95",
            "transition-all duration-300 ease-out",
            "group"
          )}
          aria-label="Scroll to top"
        >
          <ArrowUp 
            className="w-5 h-5 text-navy transition-transform duration-300 group-hover:-translate-y-0.5" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
