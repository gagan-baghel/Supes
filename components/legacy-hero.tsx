import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function LegacyHero() {
  return (
    <div className="relative min-h-[80vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i0.wp.com/futurride.com/wp-content/uploads/2023/02/The-Verge-team-at-CES-2023.-jpg.webp?resize=1280%2C640&ssl=1"
          alt="Superbikes Legacy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      <div className="container relative z-10 flex min-h-[80vh] flex-col items-center justify-center text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Our <span className="text-red-600">Legacy</span> of Excellence
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
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
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#timeline">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
