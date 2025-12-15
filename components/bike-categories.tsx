import Image from "next/image"
import Link from "next/link"

export function BikeCategories() {
  const categories = [
    {
      id: "sport",
      name: "Sport",
      description: "Pure racing DNA for the street",
      image: "https://i.pinimg.com/originals/c4/ff/19/c4ff193b4dbb799a1949b63ae41c7251.jpg",
      count: 4,
    },
    {
      id: "sport-touring",
      name: "Sport Touring",
      description: "Long-distance comfort with performance",
      image: "https://cdn.bikedekho.com/processedimages/kawasaki/kawasaki-ninja-zx-10r/source/kawasaki-ninja-zx-10r68e8e427b3819.jpg?tr=w-360",
      count: 3,
    },
    {
      id: "adventure",
      name: "Adventure",
      description: "Go anywhere, do anything",
      image: "https://images.timesdrive.in/thumb/msid-151707302,thumbsize-1936737,width-1280,height-720,resizemode-75/151707302.jpg",
      count: 2,
    },
    {
      id: "naked",
      name: "Naked",
      description: "Raw power and agility",
      image: "https://w0.peakpx.com/wallpaper/583/540/HD-wallpaper-suzuki-gsx-r-1000-k9-superbikes-garage-sportsbikes-black-motorcycle-suzuki.jpg",
      count: 2,
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Explore by Category</h2>
          <p className="mt-2 text-muted-foreground">Find the perfect bike for your riding style</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/explore?category=${category.id}`}
              className="group overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-sm text-white/80">{category.description}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{category.count} models</span>
                  <span className="text-sm font-medium text-red-600 group-hover:underline">View All</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
