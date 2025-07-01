import { Flame, Thermometer, Clock, Users, ChefHat } from "lucide-react"

const tips = [
  {
    icon: Flame,
    title: "Cómo encender el carbón perfecto",
    description:
      "El secreto está en crear una base uniforme de brasas. Usa papel periódico y astillas secas para un encendido parejo que durará toda la cocción.",
    tip: "Tip: Espera 20-30 minutos hasta que las llamas desaparezcan y tengas brasas rojas.",
  },
  {
    icon: Thermometer,
    title: "Temperatura ideal para Brisket",
    description:
      "El brisket requiere cocción lenta a 225°F (107°C). La paciencia es clave: puede tomar de 12 a 16 horas para un resultado perfecto.",
    tip: "Tip: Usa un termómetro de carne para verificar que alcance 195°F internamente.",
  },
  {
    icon: Clock,
    title: "Tiempos de cocción por corte",
    description:
      "Cada corte tiene su tiempo: costillas 4-6 horas, pulled pork 8-10 horas, alitas 1-2 horas. La clave está en no apresurarse.",
    tip: "Tip: \"When it's done, it's done\" - el BBQ no se puede apurar.",
  },
  {
    icon: Users,
    title: "Maridaje perfecto con bebidas",
    description:
      "Las costillas combinan perfectamente con cerveza oscura, el brisket con vino tinto robusto, y el pulled pork con bebidas cítricas.",
    tip: "Tip: Siempre ten agua disponible para limpiar el paladar entre bocados.",
  },
  {
    icon: ChefHat,
    title: "El arte del rub de especias",
    description:
      "Un buen rub debe aplicarse 2-4 horas antes de cocinar. La sal extrae humedad y luego la reabsorbe con los sabores.",
    tip: "Tip: Menos es más - sal, pimienta negra y páprika son la base perfecta.",
  },
]

export default function EducationalSection() {
  return (
    <section id="tips" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Secretos del <span className="text-orange-500">Pitmaster</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprende los trucos y técnicas que hemos perfeccionado durante más de 20 años. Conviértete en el maestro de
            la parrilla que siempre quisiste ser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-orange-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6 mx-auto">
                <tip.icon size={32} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{tip.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{tip.description}</p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <p className="text-orange-700 font-medium text-sm">{tip.tip}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Descargar Guía Completa del BBQ
          </button>
        </div>
      </div>
    </section>
  )
}
