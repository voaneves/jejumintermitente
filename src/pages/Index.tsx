import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AuthorSection from "@/components/AuthorSection";
import ProductSection from "@/components/ProductSection";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    // Sugestão: adicionei um 'overflow-x-hidden' para evitar barras de rolagem horizontais indesejadas
    <div className="min-h-screen font-poppins overflow-x-hidden">
      <HeroSection />
      <BenefitsSection />
      <AuthorSection />
      <ProductSection />
      <BonusSection />
      <TestimonialsSection />
      <OfferSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
