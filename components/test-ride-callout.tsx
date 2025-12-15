import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"
import Link from "next/link"

export function TestRideCallout() {
  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-xl bg-gradient-to-r from-red-600 to-red-800 p-8 md:p-12 text-white">
          <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Experience the Thrill Firsthand</h2>
              <p className="mt-2 md:text-lg">
                Book a test ride today and feel the raw power and precision of our superbikes. Our expert staff will
                guide you through an unforgettable riding experience.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/test-ride">
                <Button size="lg" className="bg-white text-red-600 hover:bg-white/90">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book a Test Ride
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
