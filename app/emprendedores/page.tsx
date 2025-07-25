import { Building, Users, Headphones, Shield, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function EmprendedoresPage() {
  const businessSolutions = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Oficinas y Empresas",
      description: "Conexiones dedicadas para oficinas con múltiples usuarios y alta demanda de ancho de banda.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Comercios",
      description: "Soluciones para puntos de venta, restaurantes y comercios que requieren conexión estable.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Coworking",
      description: "Infraestructura de red para espacios de trabajo compartido y centros de negocios.",
    },
  ]

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Velocidad Garantizada",
      description: "Ancho de banda dedicado y velocidades simétricas para subida y bajada.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Seguridad Avanzada",
      description: "Firewall empresarial y protección contra amenazas cibernéticas.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Soporte Prioritario",
      description: "Atención técnica especializada 24/7 con tiempos de respuesta garantizados.",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "IP Estática",
      description: "Direcciones IP fijas para servidores, cámaras de seguridad y aplicaciones empresariales.",
    },
  ]

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Soluciones para Emprendedores</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Impulsa tu negocio con nuestras soluciones de conectividad empresarial. Tecnología confiable para
            emprendedores que buscan crecer.
          </p>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Soluciones por Sector</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {businessSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{solution.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Características Empresariales</h2>
          <p className="text-lg text-gray-600">
            Todo lo que tu negocio necesita para mantenerse conectado y productivo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir nuestras soluciones empresariales?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Instalación Profesional</h4>
                    <p className="text-gray-600">Técnicos especializados en infraestructura empresarial</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">SLA Garantizado</h4>
                    <p className="text-gray-600">Acuerdos de nivel de servicio con 99.9% de disponibilidad</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Escalabilidad</h4>
                    <p className="text-gray-600">Crece tu ancho de banda según las necesidades de tu negocio</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Precios Competitivos</h4>
                    <p className="text-gray-600">Tarifas empresariales adaptadas a tu presupuesto</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solicita una Cotización</h3>
              <p className="text-gray-600 mb-6">
                Nuestro equipo de especialistas analizará las necesidades de tu negocio y te proporcionará una solución
                personalizada.
              </p>
              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  <Link href="/contacto">Solicitar cotización</Link>
                </Button>
                <p className="text-sm text-gray-500 text-center">Respuesta en menos de 24 horas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Impulsa tu negocio con la mejor conectividad</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a cientos de empresas en Naranjos que confían en nuestras soluciones de conectividad para hacer crecer
            sus negocios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contacto">Hablar con un especialista</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Ver casos de éxito
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
