"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
    name: "Smoked Sausage",
    description: "Salchicha ahumada artesanal con especias secretas, perfecta para la parrilla.",
    category: "Embutidos",
  },
  {
    name: "Boneless",
    description: "Costillas deshuesadas marinadas 24 horas, listas para asar.",
    category: "Costillas",
  },
  {
    name: "Alitas",
    description: "Alitas de pollo con nuestro rub especial, crujientes por fuera, jugosas por dentro.",
    category: "Pollo",
  },
  {
    name: "Baby Back Ribs",
    description: "Las costillas más tiernas, ahumadas lentamente con madera de mezquite.",
    category: "Costillas Premium",
  },
  {
    name: "Brisket",
    description: "Pecho de res ahumado por 12 horas, el rey del BBQ texano.",
    category: "Res Premium",
  },
  {
    name: "Pulled Pork",
    description: "Cerdo desmenuzado ahumado, perfecto para tacos y tortas.",
    category: "Cerdo",
  },
  {
    name: "BBQ Tradicional",
    description: "Mix de nuestros mejores cortes, envasado al vacío para máxima frescura.",
    category: "Mix Premium",
  },
]

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= products.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, products.length - itemsPerView) : prev - 1))
  }

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Productos <span className="text-orange-500">Congelados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada producto está preparado con la misma pasión y técnica que usamos en nuestros restaurantes. Listos para
            que disfrutes el auténtico sabor BBQ en casa.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} className={currentIndex === 0 ? "text-gray-300" : "text-gray-700"} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            disabled={currentIndex + itemsPerView >= products.length}
          >
            <ChevronRight
              size={24}
              className={currentIndex + itemsPerView >= products.length ? "text-gray-300" : "text-gray-700"}
            />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Product Image Placeholder */}
                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-lg">BBQ</span>
                        </div>
                        <p className="text-gray-500 text-sm">{product.name}</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {product.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / itemsPerView) === index ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
