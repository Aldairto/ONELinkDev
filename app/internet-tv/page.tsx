import { Check, Tv, Wifi, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function InternetTVPage() {
  const plans = [
    {
      name: "Básico",
      description: "Internet + TV",
      price: "$350/mes",
      features: [
        "Internet de alta velocidad",
        "140 canales de TV",
        "Instalación gratuita",
        "Soporte técnico 24/7",
        "Decodificador incluido",
      ],
      channels: "140",
      popular: false,
    },
    {
      name: "Platino",
      description: "Internet + TV con mayor cobertura",
      price: "$650/mes",
      features: [
        "Internet de alta velocidad",
        "140 canales de TV premium",
        "Canales HD incluidos",
        "Instalación gratuita",
        "Soporte técnico 24/7",
        "Decodificador HD",
        "Guía de programación",
      ],
      channels: "140",
      popular: true,
    },
    {
      name: "Premium",
      description: "Internet + TV paquete premium",
      price: "$500/mes",
      features: [
        "Internet ultra rápido",
        "140 canales disponibles",
        "Entretenimiento familiar",
        "Servicios de streaming",
        "Instalación y configuración gratuita",
        "Soporte técnico 24/7",
        "Múltiples decodificadores",
        "Contenido premium",
      ],
      channels: "140",
      popular: false,
    },
  ]

  const features = [
    {
      icon: <Tv className="w-8 h-8" />,
      title: "Canales HD y 4K",
      description: "Disfruta de contenido en alta definición y 4K en los mejores canales.",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Internet Incluido",
      description: "Conexión de internet de alta velocidad incluida en todos los paquetes.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Contenido Premium",
      description: "Acceso a canales premium, deportes, películas y entretenimiento.",
    },
  ]

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Internet + TV</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La combinación perfecta de internet de alta velocidad y entretenimiento televisivo. Paquetes completos para
            toda la familia.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Todo lo que necesitas en un solo paquete
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Paquetes Internet + TV</h2>
          <p className="text-lg text-gray-600">Elige el paquete que mejor se adapte a tu familia</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-blue-500 border-2" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Más Popular</span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-lg">{plan.description}</CardDescription>
                <div className="text-2xl font-bold text-blue-600">{plan.channels} canales</div>
                <p className="text-lg font-semibold">{plan.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  <Link href="/contacto">Contratar ahora</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Entretenimiento sin límites</h2>
          <p className="text-xl mb-8">Internet rápido y la mejor programación televisiva en un solo paquete</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/contacto">Ver disponibilidad</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
