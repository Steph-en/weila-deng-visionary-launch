import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import ValuesSection from "@/components/home/ValuesSection";
import ImpactSection from "@/components/home/ImpactSection";
import MissionSection from "@/components/home/MissionSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import JakdamTestimonialsSection from "@/components/home/JakdamTestimonialsSection";
import TimelineSection from "@/components/home/TimelineSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LeadershipSection />
        <ValuesSection />
        <ImpactSection />
        <MissionSection />
        <StatsSection />
        {/* <TestimonialsSection /> */}
        <JakdamTestimonialsSection />
        {/* <TimelineSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
