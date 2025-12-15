import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"

export function BlogFeatured() {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto">
          <Image src="https://www.wheelsguru.com/wp-content/uploads/2024/02/KTM-30-YEARS-OF-DUKE-1200x800-3-1024x683.webp" alt="Featured Article" fill className="object-cover" />
        </div>

        <div className="flex flex-col justify-center p-6 md:p-10">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-red-600/10 px-3 py-1 text-sm text-red-600">Featured Article</div>
            <h2 className="text-3xl font-bold md:text-4xl">The Evolution of Superbike Technology</h2>
            <p className="text-lg text-muted-foreground">
              From analog simplicity to digital mastery: How technology has transformed the riding experience over the
              last three decades.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div>
                  <div className="font-medium">Dr. James Chen</div>
                  <div className="text-sm text-muted-foreground">Engineering Director</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  June 15, 2023
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  18 min read
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/blog/evolution-of-superbike-technology">
                <Button className="group bg-red-600 text-white hover:bg-red-700">
                  Read Article
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
