"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    id: 1,
    name: "Plata",
    description: "Internet por fibra óptica 30 Mbps",
    price: "$200/mes",
    features: ["30 Mbps simétrico", "Fibra óptica", "Instalación gratuita", "Soporte 24/7"],
    image: "/images/1-plata.png",
    color: "from-gray-400 to-gray-600",
  },
  {
    id: 2,
    name: "Oro",
    description: "Internet por fibra óptica 80 Mbps",
    price: "$350/mes",
    features: ["80 Mbps simétrico", "Fibra óptica premium", "Router WiFi incluido", "Soporte 24/7"],
    image: "/images/2-oro.png",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    id: 3,
    name: "Plus",
    description: "Internet por fibra óptica 250 Mbps",
    price: "$500/mes",
    features: ["250 Mbps simétrico", "Fibra óptica ultra rápida", "Router WiFi 6", "Soporte prioritario"],
    image: "/images/3-plus.png",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 4,
    name: "Diamante",
    description: "Internet por fibra óptica 500 Mbps",
    price: "$650/mes",
    features: ["500 Mbps simétrico", "Máxima velocidad", "Router WiFi 6 Pro", "Soporte VIP"],
    image: "/images/4-diamante.png",
    color: "from-purple-500 to-purple-700",
  },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % plans.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plans.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plans.length) % plans.length)
  }

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
      {plans.map((plan, index) => (
        <div
          key={plan.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="w-full h-full relative overflow-hidden rounded-lg">
            <img
              src={plan.image || "/placeholder.svg"}
              alt={`Plan ${plan.name}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="text-center text-white px-8 bg-black bg-opacity-50 rounded-lg p-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">Plan {plan.name}</h2>
                <p className="text-lg md:text-xl mb-2">{plan.description}</p>
                <p className="text-2xl md:text-3xl font-bold mb-4">{plan.price}</p>
                <div className="space-y-1 mb-6">
                  {plan.features.map((feature, idx) => (
                    <p key={idx} className="text-sm md:text-base opacity-90">
                      ✓ {feature}
                    </p>
                  ))}
                </div>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                  <a
                    href={`https://wa.me/527681003969?text=${encodeURIComponent(`Hola, me interesa información sobre el Plan ${plan.name} de ${plan.price}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Más información
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {plans.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
