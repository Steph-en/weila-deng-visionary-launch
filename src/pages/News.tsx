import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Newspaper, TrendingUp, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { newsArticles, newsCategories, type NewsArticle } from "@/data/news";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const categoryIcons = {
  'announcement': Megaphone,
  'project-update': TrendingUp,
  'industry-insight': Newspaper,
};

const NewsCard = ({ article, index }: { article: NewsArticle; index: number }) => {
  const Icon = categoryIcons[article.category];
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-all duration-300"
    >
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
            <Icon className="w-4 h-4 text-gold" />
          </div>
          <span className="text-xs font-medium text-gold uppercase tracking-wider">
            {article.category.replace('-', ' ')}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{article.author}</span>
          </div>
        </div>

        {/* Read More */}
        <button className="inline-flex items-center gap-2 text-sm font-medium text-gold group-hover:gap-3 transition-all duration-300">
          Read More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.article>
  );
};

const FeaturedNews = ({ article }: { article: NewsArticle }) => {
  const Icon = categoryIcons[article.category];
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-gradient-to-br from-navy via-navy/95 to-navy/90 rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      <div className="relative p-8 md:p-10">
        {/* Featured Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">
            Featured
          </span>
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-gold/70" />
            <span className="text-xs text-gold/70 uppercase tracking-wider">
              {article.category.replace('-', ' ')}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4 group-hover:text-gold transition-colors">
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="text-white/70 leading-relaxed mb-6 max-w-2xl">
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Read More */}
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-medium rounded-lg hover:bg-gold/90 transition-colors group-hover:gap-3 transition-all duration-300">
          Read Full Article
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.article>
  );
};

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredArticles = activeCategory === 'all'
    ? newsArticles
    : newsArticles.filter(article => article.category === activeCategory);

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured || activeCategory !== 'all');

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
          <div className="container-elegant">
            <div className="max-w-3xl">
              <span className="text-refined text-gold block mb-4">News & Updates</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Latest from Jakdam Group
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay informed about our project announcements, industry insights, and company milestones.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {activeCategory === 'all' && featuredArticles.length > 0 && (
          <section className="section-padding bg-background">
            <div className="container-elegant">
              <div className="grid md:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <FeaturedNews key={article.id} article={article} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Filter & Articles */}
        <section ref={sectionRef} className="section-padding bg-muted/30">
          <div className="container-elegant">
            {/* Category Filter */}
            <div className={cn(
              "flex flex-wrap gap-3 mb-12 opacity-0",
              isVisible && "animate-fade-in"
            )}>
              {newsCategories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === category.value
                      ? "bg-gold text-navy shadow-gold"
                      : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-gold/50"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {regularArticles.map((article, index) => (
                  <NewsCard key={article.id} article={article} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {regularArticles.length === 0 && (
              <div className="text-center py-16">
                <Newspaper className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">No articles found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default News;
