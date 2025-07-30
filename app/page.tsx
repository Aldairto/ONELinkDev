import Link from "next/link"
import { Wifi, Users, MapPin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Carousel from "./components/carousel"

export default function Home() {
  const services = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Internet Fibra Óptica",
      description: "Conexión ultra rápida y estable con tecnología de fibra óptica desde 30 Mbps hasta 500 Mbps.",
      href: "/internet",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pymes",
      description: "Soluciones especiales para pequeñas y medianas empresas con soporte técnico especializado.",
      href: "/emprendedores",
    },
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section with Carousel */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Conectamos tu mundo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Internet de fibra óptica de alta calidad en Naranjos, Veracruz. Descubre nuestros planes diseñados para cada
            necesidad, desde 30 Mbps hasta 500 Mbps.
          </p>
        </div>
        <Carousel />
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600">Soluciones de conectividad para hogares y empresas</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white bg-transparent"
                  >
                    <Link href={service.href}>Ver más</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">¿Listo para conectarte?</h2>
              <p className="text-lg mb-6">
                Contáctanos hoy y descubre la mejor conexión de internet en Naranjos, Veracruz.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Lázaro Cárdenas #37 Zona Centro, 92300 Naranjos, Ver.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <a
                    href="https://wa.me/527681003969?text=Hola,%20me%20interesa%20información%20sobre%20sus%20servicios%20de%20internet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    +52 768 100 3969
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Facebook className="w-5 h-5" />
                  <a
                    href="https://www.facebook.com/share/1Fr9R3MxBU/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Síguenos en Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contacto">Solicitar información</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
