import AIGCSection from "./AIGCSection";
import DoodleDecorations from "./DoodleDecorations";
import FloatingNavButton from "./FloatingNavButton";
import FooterContact from "./FooterContact";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import RetrospectiveSection from "./RetrospectiveSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <DoodleDecorations />

      <HeroSection />
      <div className="paper-divider" />
      <PortfolioSection />
      <div className="paper-divider" />
      <RetrospectiveSection />
      <div className="paper-divider" />
      <AIGCSection />
      <div className="paper-divider" />
      <section id="contact" className="scroll-mt-28">
        <FooterContact />
      </section>
      <FloatingNavButton />
    </main>
  );
}
