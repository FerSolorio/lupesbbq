import { Package, Star, ChevronRight } from "lucide-react"

const bbqBoxes = [
  {
    name: "Parrillero Principiante",
    description: "Perfecto para tu primera experiencia BBQ en casa",
    includes: ["2 Smoked Sausages", "1 kg Boneless", "500g Alitas", "Salsa BBQ especial", "Guía de cocción"],
    price: "Desde $899",
    popular: false,
  },
  {
    name: "Maestro del Asador",
    description: "Para los que buscan la experiencia completa",
    includes: [
      "1 kg Baby Back Ribs",
      "800g Brisket",
      "1 kg Pulled Pork",
      "2 Salsas premium",
      "Rub de especias",
      "Manual del pitmaster",
    ],
    price: "Desde $1,599",
    popular: true,
  },
  {
    name: "Rey de la Parrilla",
    description: "La experiencia premium para verdaderos conocedores",
    includes: [
      "1.5 kg Baby Back Ribs",
      "1 kg Brisket Premium",
      "1 kg Pulled Pork",
      "500g Smoked Sausage",
      "3 Salsas gourmet",
      "Kit completo de especias",
    ],
    price: "Desde $2,299",
    popular: false,
  },
]

export default function BBQBoxSection() {
  return (
    <section id="bbq-box" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-orange-500">BBQ Boxes</span> Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Paquetes completos diseñados para diferentes niveles de experiencia. Todo lo que necesitas para convertirte
            en un maestro del BBQ.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bbqBoxes.map((box, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                box.popular ? "ring-2 ring-orange-500 scale-105" : ""
              }`}
            >
              {box.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-1">
                    <Star size={16} fill="currentColor" />
                    <span className="font-semibold text-sm">Más Popular</span>
                  </div>
                </div>
              )}

              {/* Box Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Package size={48} className="text-orange-500 mx-auto mb-2" />
                  <p className="text-orange-600 font-medium">{box.name}</p>
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{box.name}</h3>
                <p className="text-gray-600 mb-4">{box.description}</p>
                <div className="text-3xl font-bold text-orange-500 mb-6">{box.price}</div>
              </div>

              <div className="space-y-3 mb-8">
                <h4 className="font-semibold text-gray-900 text-center mb-4">Incluye:</h4>
                {box.includes.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  box.popular
                    ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl"
                    : "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                }`}
              >
                Ver más detalles
                <ChevronRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
