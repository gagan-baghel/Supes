import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function FeaturedBike() {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto">
          <Image
            src="https://cdni.autocarindia.com/ExtraImages/20220615064950_Norton%20V4SV%202%20Final.jpg"
            alt="Phantom X - Featured Superbike"
            fill
            className="object-cover"
          />
          <div className="absolute left-4 top-4 rounded-full bg-red-600 px-4 py-1 text-sm font-bold text-white">
            NEW
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 md:p-10">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-red-600/10 px-3 py-1 text-sm text-red-600">Featured Model</div>
            <h2 className="text-3xl font-bold md:text-4xl">Phantom X</h2>
            <p className="text-lg text-muted-foreground">
              The ultimate track weapon with 220HP and cutting-edge aerodynamics. Designed for riders who demand the
              absolute best in performance and technology.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-600">220</div>
                <div className="text-sm text-muted-foreground">Horsepower</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">186+</div>
                <div className="text-sm text-muted-foreground">Top Speed (mph)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">186</div>
                <div className="text-sm text-muted-foreground">Weight (kg)</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
              <Link href="/explore/phantom-x">
                <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                  Explore Phantom X
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/configurator?model=phantom-x">
                <Button variant="outline" className="w-full">
                  Configure Yours
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
