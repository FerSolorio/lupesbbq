import { Award, Clock, Heart, Truck } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Más de 20 años de experiencia",
    description: "Recetas perfeccionadas generación tras generación",
  },
  {
    icon: Heart,
    title: "Ingredientes premium",
    description: "Solo usamos los mejores cortes y especias naturales",
  },
  {
    icon: Clock,
    title: "Proceso artesanal",
    description: "Ahumado lento con madera de mezquite auténtica",
  },
  {
    icon: Truck,
    title: "Entrega garantizada",
    description: "Cadena de frío mantenida hasta tu puerta",
  },
]

export default function ValueProposition() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué elegir <span className="text-orange-500">Lupes BBQ</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No somos solo otro restaurante. Somos una familia que ha dedicado su vida a perfeccionar el arte del BBQ
            auténtico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6 mx-auto group-hover:bg-orange-400 transition-colors duration-300">
                <value.icon size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Nuestra Promesa</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            "Cada producto que sale de nuestras cocinas lleva el mismo amor y dedicación que ponemos en nuestros
            restaurantes. Si no estás 100% satisfecho, nosotros tampoco lo estamos."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">LG</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">Luis González</p>
              <p className="text-gray-400">Fundador & Pitmaster</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
