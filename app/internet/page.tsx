import { Check, Wifi, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function InternetPage() {
  const plans = [
    {
      name: "Plata",
      speed: "30 Mbps",
      price: "$200/mes",
      features: [
        "Velocidad de 30 Mbps simétrico",
        "Fibra óptica",
        "Instalación gratuita",
        "Soporte técnico 24/7",
        "Router WiFi incluido",
      ],
      popular: false,
    },
    {
      name: "Oro",
      speed: "80 Mbps",
      price: "$350/mes",
      features: [
        "Velocidad de 80 Mbps simétrico",
        "Fibra óptica premium",
        "Instalación gratuita",
        "Soporte técnico 24/7",
        "Router WiFi de alta gama",
        "IP estática disponible",
      ],
      popular: true,
    },
    {
      name: "Plus",
      speed: "250 Mbps",
      price: "$500/mes",
      features: [
        "Velocidad de 250 Mbps simétrico",
        "Fibra óptica ultra rápida",
        "Instalación gratuita",
        "Soporte técnico prioritario",
        "Router WiFi 6",
        "IP estática incluida",
        "Ancho de banda garantizado",
      ],
      popular: false,
    },
    {
      name: "Diamante",
      speed: "500 Mbps",
      price: "$650/mes",
      features: [
        "Velocidad de 500 Mbps simétrico",
        "Fibra óptica de máxima velocidad",
        "Instalación gratuita",
        "Soporte técnico VIP",
        "Router WiFi 6 Pro",
        "IP estática incluida",
        "Ancho de banda dedicado",
        "Monitoreo 24/7",
      ],
      popular: false,
    },
  ]

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Velocidad Ultra Rápida",
      description: "Tecnología de fibra óptica para la máxima velocidad de conexión.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Conexión Estable",
      description: "Red confiable con 99.9% de tiempo de actividad garantizado.",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "WiFi Incluido",
      description: "Router WiFi de alta calidad incluido en todos nuestros planes.",
    },
  ]

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Internet por Fibra Óptica</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experimenta la velocidad y confiabilidad de nuestra red de fibra óptica. Planes desde 30 Mbps hasta 500 Mbps
            para satisfacer todas tus necesidades de conectividad.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">¿Por qué elegir nuestra fibra óptica?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Planes de Internet</h2>
          <p className="text-lg text-gray-600">Desde 30 Mbps hasta 500 Mbps - Elige el plan perfecto para ti</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-blue-500 border-2" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Más Popular</span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold text-blue-600">{plan.speed}</CardDescription>
                <p className="text-lg font-semibold">{plan.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" size="sm" variant={plan.popular ? "default" : "outline"}>
                  <Link href="/contacto">Contratar</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para la mejor conexión?</h2>
          <p className="text-xl mb-8">Contáctanos hoy y obtén tu instalación gratuita</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/contacto">Solicitar información</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
