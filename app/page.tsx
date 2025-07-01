// app/page.tsx
import Header from "@/app/components/Header.tsx";
import HeroSection from "@/app/components/HeroSection.tsx";
import ProductCarousel from "@/app/components/ProductCarousel.tsx";
import BBQBoxSection from "@/app/components/BBQBoxSection.tsx";
import EducationalSection from "@/app/components/EducationalSection.tsx";
import ValueProposition from "@/app/components/ValueProposition.tsx";
import FinalCTA from "@/app/components/FinalCTA.tsx";
import Footer from "@/app/components/Footer.tsx";

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
