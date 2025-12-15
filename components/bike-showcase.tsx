"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Filter, Volume2 } from "lucide-react"
import Link from "next/link"

const bikes = [
  {
    id: "phantom-x",
    name: "Phantom X",
    description: "The ultimate track weapon with 220HP and cutting-edge aerodynamics",
    price: "$32,999",
    horsepower: 220,
    engine: "1000cc V4",
    topSpeed: "186+ mph",
    image: "https://wallpaper.forfun.com/fetch/19/19cb6031aa564198f03daa5963321beb.jpeg",
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
    image: "https://c4.wallpaperflare.com/wallpaper/565/558/457/heavy-bike-harley-davidson-harley-davidson-modified-wallpaper-preview.jpg",
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
    image: "https://wallpapercave.com/wp/wp4449711.jpg",
    category: "sport-touring",
  },
]

export function BikeShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [expandedBike, setExpandedBike] = useState<string | null>(null)

  const filteredBikes = activeCategory === "all" ? bikes : bikes.filter((bike) => bike.category === activeCategory)

  const playEngineSound = (id: string) => {
    // In a real implementation, this would play the actual engine sound
    console.log(`Playing engine sound for ${id}`)
  }

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat opacity-5"></div>
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Explore Bikes</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Discover our collection of precision-engineered machines designed to deliver the ultimate riding experience.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8 flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveCategory("all")}>
                All
              </TabsTrigger>
              <TabsTrigger value="sport" onClick={() => setActiveCategory("sport")}>
                Sport
              </TabsTrigger>
              <TabsTrigger value="sport-touring" onClick={() => setActiveCategory("sport-touring")}>
                Sport Touring
              </TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBikes.map((bike) => (
                <div
                  key={bike.id}
                  className={`group relative overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg ${
                    expandedBike === bike.id ? "col-span-full sm:col-span-2 lg:col-span-3" : ""
                  }`}
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={bike.image || "/placeholder.svg"}
                      alt={bike.name}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{bike.name}</h3>
                    <p className="mt-2 text-muted-foreground">{bike.description}</p>

                    {expandedBike === bike.id && (
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2 rounded-lg bg-muted p-3">
                          <div className="text-sm font-medium">Engine</div>
                          <div className="text-lg">{bike.engine}</div>
                        </div>
                        <div className="space-y-2 rounded-lg bg-muted p-3">
                          <div className="text-sm font-medium">Horsepower</div>
                          <div className="text-lg">{bike.horsepower} HP</div>
                        </div>
                        <div className="space-y-2 rounded-lg bg-muted p-3">
                          <div className="text-sm font-medium">Top Speed</div>
                          <div className="text-lg">{bike.topSpeed}</div>
                        </div>
                        <div className="space-y-2 rounded-lg bg-muted p-3">
                          <div className="text-sm font-medium">Starting at</div>
                          <div className="text-lg">{bike.price}</div>
                        </div>
                        <Button variant="outline" className="sm:col-span-2" onClick={() => playEngineSound(bike.id)}>
                          <Volume2 className="mr-2 h-4 w-4" />
                          Feel the Engine
                        </Button>
                      </div>
                    )}

                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-xl font-bold">{bike.price}</div>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedBike(expandedBike === bike.id ? null : bike.id)}
                        >
                          {expandedBike === bike.id ? "Less Details" : "More Details"}
                        </Button>
                        <Link href={`/explore/${bike.id}`}>
                          <Button size="sm">
                            View Bike
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sport" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBikes.map((bike) => (
                // Same card structure as above
                <div
                  key={bike.id}
                  className="group relative overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={bike.image || "/placeholder.svg"}
                      alt={bike.name}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{bike.name}</h3>
                    <p className="mt-2 text-muted-foreground">{bike.description}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-xl font-bold">{bike.price}</div>
                      <Link href={`/explore/${bike.id}`}>
                        <Button size="sm">
                          View Bike
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sport-touring" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBikes.map((bike) => (
                // Same card structure as above
                <div
                  key={bike.id}
                  className="group relative overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={bike.image || "/placeholder.svg"}
                      alt={bike.name}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{bike.name}</h3>
                    <p className="mt-2 text-muted-foreground">{bike.description}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-xl font-bold">{bike.price}</div>
                      <Link href={`/explore/${bike.id}`}>
                        <Button size="sm">
                          View Bike
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Link href="/explore">
            <Button variant="outline" size="lg">
              View All Bikes
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
