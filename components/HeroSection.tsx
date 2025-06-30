import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            El sabor auténtico del <span className="text-orange-500">BBQ</span>
            <br />
            ahora en tu hogar
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Lleva la experiencia completa de Lupes BBQ a tu parrilla con nuestros productos congelados premium,
            marinados y ahumados con la receta secreta de más de 20 años.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              Conoce nuestros productos
              <ChevronRight size={20} />
            </button>

            <button className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Ver BBQ Boxes
            </button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 relative">
            <div className="w-full h-64 md:h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">BBQ</span>
                </div>
                <p className="text-gray-600 font-medium">Imagen Hero - Productos BBQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
