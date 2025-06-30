import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProductCarousel from "@/components/ProductCarousel"
import BBQBoxSection from "@/components/BBQBoxSection"
import EducationalSection from "@/components/EducationalSection"
import ValueProposition from "@/components/ValueProposition"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

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
  )
}
