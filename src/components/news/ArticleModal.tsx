import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { NewsArticle } from "@/data/news";

interface ArticleModalProps {
  article: NewsArticle | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ArticleModal = ({ article, open, onOpenChange }: ArticleModalProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [imgLoading, setImgLoading] = useState(true);

  const gallery: string[] = article
    ? (article.images && article.images.length > 0
        ? article.images
        : article.image
          ? [article.image]
          : [])
    : [];

  useEffect(() => {
    setActiveImage(0);
    setImgLoading(true);
  }, [article?.id]);

  const next = () => setActiveImage((i) => (i + 1) % gallery.length);
  const prev = () => setActiveImage((i) => (i - 1 + gallery.length) % gallery.length);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background">
        <AnimatePresence mode="wait">
          {article && (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {/* Image / Carousel — only render if article has images */}
              {gallery.length > 0 && (
                <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden">
                  {imgLoading && (
                    <div className="absolute inset-0 animate-pulse bg-muted" />
                  )}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={gallery[activeImage]}
                      src={gallery[activeImage]}
                      alt={article.title}
                      onLoad={() => setImgLoading(false)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  {gallery.length > 1 && (
                    <>
                      <button
                        onClick={prev}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-foreground" />
                      </button>
                      <button
                        onClick={next}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-foreground" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {gallery.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImage(i)}
                            aria-label={`Go to image ${i + 1}`}
                            className={cn(
                              "h-1.5 rounded-full transition-all",
                              i === activeImage ? "w-6 bg-gold" : "w-1.5 bg-background/70"
                            )}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              <ScrollArea className="max-h-[60vh]">
                <div className="p-6 md:p-8">
                  <DialogHeader className="space-y-3 text-left">
                    <span className="text-xs font-medium text-gold uppercase tracking-wider">
                      {article.category.replace("-", " ")}
                    </span>
                    <DialogTitle className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
                      {article.title}
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      {article.excerpt}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mt-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    {article.author && (
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        <span>{article.author}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="prose prose-sm md:prose-base max-w-none mt-6 text-foreground/90 leading-relaxed">
                    <p className="text-base md:text-lg text-muted-foreground italic mb-4">
                      {article.excerpt}
                    </p>
                    <p className="whitespace-pre-line">{article.content}</p>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;