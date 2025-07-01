import { ChevronRight, Phone, Mail } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Empieza tu experiencia <br />
          <span className="text-orange-100">BBQ hoy mismo</span>
        </h2>

        <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          No esperes más para disfrutar del auténtico sabor del BBQ en la comodidad de tu hogar. Tu parrilla nunca
          volverá a ser la misma.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="bg-white text-orange-500 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
            Ver Productos
            <ChevronRight size={24} />
          </button>

          <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300">
            Contactar Ahora
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-orange-100">
            <Phone size={24} />
            <span className="text-lg font-medium">+52 (55) 1234-5678</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-orange-100">
            <Mail size={24} />
            <span className="text-lg font-medium">hola@lupesbbq.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}
