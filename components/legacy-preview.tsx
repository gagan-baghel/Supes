import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function LegacyPreview() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat opacity-5"></div>

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-red-600/10 px-3 py-1 text-sm text-red-600">Our Heritage</div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">The Legacy</h2>
            <p className="text-lg text-muted-foreground">
              For over three decades, we've been pushing the boundaries of what's possible on two wheels. From humble
              beginnings to dominating world championships, our journey is fueled by passion and innovation.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-red-600">42</div>
                <div className="text-sm text-muted-foreground">World Championships</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-red-600">312</div>
                <div className="text-sm text-muted-foreground">Race Victories</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-red-600">35</div>
                <div className="text-sm text-muted-foreground">Years of Innovation</div>
              </div>
            </div>
            <Link href="/legacy">
              <Button variant="outline" className="group">
                Explore Our History
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://meghalayamonitor.com/wp-content/uploads/2022/11/nov-20-biker1.jpeg"
                    alt="Racing heritage"
                    width={300}
                    height={400}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image

                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2P9r3OkR29PoQVPNDqKl6LcW0aReyzWEG8g&s"
                    alt="Engineering excellence"
                    width={300}
                    height={300}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/9007081/pexels-photo-9007081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Championship victory"
                    width={300}
                    height={300}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://img.freepik.com/free-photo/close-up-motorcycle-helmet_23-2151574340.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Prototype development"
                    width={300}
                    height={400}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
