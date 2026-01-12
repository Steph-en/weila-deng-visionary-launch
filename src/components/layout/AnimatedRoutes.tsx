import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import PageTransition from "./PageTransition";
import ScrollProgress from "./ScrollProgress";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollProgress />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
