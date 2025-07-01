import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  const quickLinks = [
    { name: "Productos", href: "#productos" },
    { name: "BBQ Boxes", href: "#bbq-box" },
    { name: "Tips BBQ", href: "#tips" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ]

  const legalLinks = [
    { name: "Aviso de Privacidad", href: "#" },
    { name: "Términos y Condiciones", href: "#" },
    { name: "Política de Cookies", href: "#" },
    { name: "Política de Devoluciones", href: "#" },
  ]

  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="w-40 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white font-bold text-xl">Lupes BBQ</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Más de 20 años llevando el auténtico sabor del BBQ a las familias mexicanas. Ahora también en tu hogar.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Av. Revolución 1234</p>
                  <p className="text-gray-300">Col. Centro, CDMX</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-orange-500 flex-shrink-0" />
                <p className="text-gray-300">+52 (55) 1234-5678</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-orange-500 flex-shrink-0" />
                <p className="text-gray-300">hola@lupesbbq.com</p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Lupes BBQ. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Hecho con ❤️ para los amantes del BBQ</p>
        </div>
      </div>
    </footer>
  )
}
