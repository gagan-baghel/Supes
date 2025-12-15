import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function TestRideModels() {
  const categories = [
    { id: "sport", name: "Sport" },
    { id: "sport-touring", name: "Sport Touring" },
    { id: "adventure", name: "Adventure" },
    { id: "naked", name: "Naked" },
  ]

  const bikes = {
    sport: [
      {
        id: "phantom-x",
        name: "Phantom X",
        description: "The ultimate track weapon with 220HP and cutting-edge aerodynamics",
        image: "https://wallpaper.forfun.com/fetch/19/19cb6031aa564198f03daa5963321beb.jpeg",
      },
      {
        id: "stealth-r",
        name: "Stealth R",
        description: "Lightweight chassis with race-derived electronics package",
        image: "https://c4.wallpaperflare.com/wallpaper/565/558/457/heavy-bike-harley-davidson-harley-davidson-modified-wallpaper-preview.jpg",
      },
    ],
    "sport-touring": [
      {
        id: "vortex-gt",
        name: "Vortex GT",
        description: "The perfect balance of street performance and comfort",
        image: "https://wallpapercave.com/wp/wp4449711.jpg",
      },
    ],
    adventure: [
      {
        id: "horizon-adv",
        name: "Horizon ADV",
        description: "Conquer any terrain with confidence and comfort",
        image: "https://www.madornomad.com/wp-content/uploads/2022/04/CFMoto-450MT.png",
      },
    ],
    naked: [
      {
        id: "urban-s",
        name: "Urban S",
        description: "Dominate the city streets with agility and style",
        image: "https://womenridersnow.com/wp-content/uploads/2023/07/02-bike-side-view.jpg",
      },
    ],
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Available Test Ride Models</h2>
        <p className="mt-2 text-muted-foreground">Choose from our range of high-performance motorcycles</p>
      </div>

      <Tabs defaultValue="sport">
        <TabsList className="grid w-full grid-cols-4">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(bikes).map(([category, categoryBikes]) => (
          <TabsContent key={category} value={category}>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {categoryBikes.map((bike) => (
                <div
                  key={bike.id}
                  className="overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src={bike.image || "/placeholder.svg"}
                      alt={bike.name}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{bike.name}</h3>
                    <p className="mt-2 text-muted-foreground">{bike.description}</p>
                    <div className="mt-6 flex space-x-3">
                      <Button className="bg-red-600 text-white hover:bg-red-700">Book Test Ride</Button>
                      <Link href={`/explore/${bike.id}`}>
                        <Button variant="outline">
                          View Details
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
