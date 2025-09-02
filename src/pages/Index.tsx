import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedTractors from "@/components/FeaturedTractors";
import FeaturedImplements from "@/components/FeaturedImplements";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedTractors />
        <FeaturedImplements />
        <TrustSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
