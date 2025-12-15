"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Heart, Volume2 } from "lucide-react"
import Link from "next/link"

export function BikeCatalog() {
  const [favorites, setFavorites] = useState<string[]>([])

  const bikes = [
    {
      id: "phantom-x",
      name: "Phantom X",
      description: "The ultimate track weapon with 220HP and cutting-edge aerodynamics",
      price: "$32,999",
      horsepower: 220,
      engine: "1000cc V4",
      topSpeed: "186+ mph",
      image: "https://cdni.autocarindia.com/ExtraImages/20220615064950_Norton%20V4SV%202%20Final.jpg",
      category: "sport",
    },
    {
      id: "stealth-r",
      name: "Stealth R",
      description: "Lightweight chassis with race-derived electronics package",
      price: "$28,499",
      horsepower: 205,
      engine: "999cc Inline-4",
      topSpeed: "180 mph",
      image: "https://cdn1.smartprix.com/rx-iKBWM8hwe-w1200-h1200/KBWM8hwe.webp",
      category: "sport",
    },
    {
      id: "vortex-gt",
      name: "Vortex GT",
      description: "The perfect balance of street performance and comfort",
      price: "$24,999",
      horsepower: 180,
      engine: "1103cc V4",
      topSpeed: "168 mph",
      image: "https://www.bikes4sale.in/pictures/default/ducati-superbike-848-evo-corsa-se/ducati-superbike-848-evo-corsa-se-640.jpg",
      category: "sport-touring",
    },
    {
      id: "horizon-adv",
      name: "Horizon ADV",
      description: "Conquer any terrain with confidence and comfort",
      price: "$22,499",
      horsepower: 150,
      engine: "1084cc Parallel Twin",
      topSpeed: "140 mph",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/10/460287173/OC/PI/CD/45116772/image-30-500x500.png",
      category: "adventure",
    },
    {
      id: "urban-s",
      name: "Urban S",
      description: "Dominate the city streets with agility and style",
      price: "$18,999",
      horsepower: 140,
      engine: "890cc Parallel Twin",
      topSpeed: "155 mph",
      image: "https://images.bikeexif.com/2023/11/bottpower-honda-fireblade.jpg",
      category: "naked",
    },
    {
      id: "velocity-r",
      name: "Velocity R",
      description: "Pure racing DNA for the street",
      price: "$29,999",
      horsepower: 210,
      engine: "998cc Inline-4",
      topSpeed: "186 mph",
      image: "https://electrek.co/wp-content/uploads/sites/3/2018/11/arc-vector-header.jpg?quality=82&strip=all",
      category: "sport",
    },
  ]

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const playEngineSound = (id: string) => {
    // In a real implementation, this would play the actual engine sound
    console.log(`Playing engine sound for ${id}`)
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Available Models</h2>
        <div className="flex items-center space-x-2">
          <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
            <option>Sort by Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Horsepower: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="group relative overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg"
          >
            <div className="absolute right-3 top-3 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-background/50 backdrop-blur-sm"
                onClick={() => toggleFavorite(bike.id)}
              >
                <Heart className={`h-5 w-5 ${favorites.includes(bike.id) ? "fill-red-600 text-red-600" : ""}`} />
                <span className="sr-only">Add to favorites</span>
              </Button>
            </div>

            <div className="aspect-video overflow-hidden">
              <Image
                src={bike.image || "/placeholder.svg"}
                alt={bike.name}
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold">{bike.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{bike.description}</p>

              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-md bg-muted p-2">
                  <div className="font-medium">Engine</div>
                  <div>{bike.engine}</div>
                </div>
                <div className="rounded-md bg-muted p-2">
                  <div className="font-medium">Power</div>
                  <div>{bike.horsepower} HP</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-lg font-bold">{bike.price}</div>
                <Button variant="ghost" size="sm" onClick={() => playEngineSound(bike.id)}>
                  <Volume2 className="mr-1 h-4 w-4" />
                  Hear It
                </Button>
              </div>

              <div className="mt-4 flex space-x-2">
                <Link href={`/explore/${bike.id}`} className="w-full">
                  <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">Load More Models</Button>
      </div>
    </div>
  )
}
