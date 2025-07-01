// app/page.tsx
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import ProductCarousel from "@/app/components/ProductCarousel";
import BBQBoxSection from "@/app/components/BBQBoxSection";
import EducationalSection from "@/app/components/EducationalSection";
import ValueProposition from "@/app/components/ValueProposition";
import FinalCTA from "@/app/components/FinalCTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductCarousel />
      <BBQBoxSection />
      <EducationalSection />
      <ValueProposition />
      <FinalCTA />
      <Footer />
    </main>
  );
}
