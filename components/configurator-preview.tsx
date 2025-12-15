"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Volume2 } from "lucide-react"
import Link from "next/link"

export function ConfiguratorPreview() {
  const [selectedColor, setSelectedColor] = useState("red")
  const [selectedExhaust, setSelectedExhaust] = useState("standard")
  const [totalPrice, setTotalPrice] = useState(32999)

  const colors = [
    { id: "red", name: "Inferno Red", price: 0 },
    { id: "black", name: "Stealth Black", price: 500 },
    { id: "silver", name: "Titanium Silver", price: 800 },
  ]

  const exhausts = [
    { id: "standard", name: "Standard", price: 0 },
    { id: "performance", name: "Performance", price: 1200 },
    { id: "racing", name: "Racing", price: 2500 },
  ]

  const handleColorChange = (colorId: string) => {
    const color = colors.find((c) => c.id === colorId)
    if (color) {
      // Reset price to base, then add new color price and current exhaust price
      const exhaust = exhausts.find((e) => e.id === selectedExhaust)
      const basePrice = 32999
      setTotalPrice(basePrice + color.price + (exhaust?.price || 0))
      setSelectedColor(colorId)
    }
  }

  const handleExhaustChange = (exhaustId: string) => {
    const exhaust = exhausts.find((e) => e.id === exhaustId)
    if (exhaust) {
      // Reset price to base, then add current color price and new exhaust price
      const color = colors.find((c) => c.id === selectedColor)
      const basePrice = 32999
      setTotalPrice(basePrice + (color?.price || 0) + exhaust.price)
      setSelectedExhaust(exhaustId)
    }
  }

  const playExhaustSound = () => {
    // In a real implementation, this would play the actual exhaust sound
    console.log(`Playing ${selectedExhaust} exhaust sound`)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Build Your Beast</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Customize every aspect of your superbike to create a machine that's uniquely yours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border bg-card">
            <div className="aspect-square relative">
              <Image
                src={`https://i.pinimg.com/736x/e8/64/fb/e864fb06cf99aac963298e4b858eb654.jpg`}
                alt="Configurable Superbike"
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-${selectedColor}-500/20 mix-blend-overlay transition-colors duration-300`}
              ></div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-background/20 backdrop-blur-lg"
                onClick={playExhaustSound}
              >
                <Volume2 className="mr-2 h-4 w-4" />
                Hear Exhaust
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Phantom X</h3>
              <p className="text-muted-foreground">
                The ultimate track weapon with 220HP and cutting-edge aerodynamics
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-medium">Color</h4>
                <div className="flex space-x-3">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => handleColorChange(color.id)}
                      className={`group relative h-12 w-12 rounded-full border-2 transition-all ${
                        selectedColor === color.id
                          ? "border-primary ring-2 ring-primary/50"
                          : "border-muted-foreground/20"
                      }`}
                    >
                      <span className={`absolute inset-1 rounded-full bg-${color.id}-500`}></span>
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs opacity-0 transition-opacity group-hover:opacity-100">
                        {color.name}
                        {color.price > 0 && ` (+$${color.price})`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Exhaust System</h4>
                <div className="flex flex-col space-y-2">
                  {exhausts.map((exhaust) => (
                    <button
                      key={exhaust.id}
                      onClick={() => handleExhaustChange(exhaust.id)}
                      className={`flex items-center justify-between rounded-md border p-3 text-left transition-all ${
                        selectedExhaust === exhaust.id ? "border-primary bg-primary/5" : "border-border"
                      }`}
                    >
                      <div>
                        <div className="font-medium">{exhaust.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {exhaust.id === "standard" && "Factory-fitted exhaust system"}
                          {exhaust.id === "performance" && "Enhanced flow with deeper sound"}
                          {exhaust.id === "racing" && "Full titanium race system"}
                        </div>
                      </div>
                      <div className="text-sm font-medium">{exhaust.price > 0 ? `+$${exhaust.price}` : "Included"}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Total Price</div>
                  <div className="text-2xl font-bold">${totalPrice.toLocaleString()}</div>
                </div>
              </div>

              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <Link href="/configurator" className="w-full">
                  <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                    Full Configurator
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Save Configuration
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
