import { Button } from "@/components/ui/button"
import { CalendarDays, Download, Share2, ShoppingCart } from "lucide-react"
import Link from "next/link"

export function ConfiguratorActions() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Ready to Make It Yours?</h2>
        <p className="mt-2 text-muted-foreground">Take the next step with your custom Phantom X</p>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-6 text-center">
            <ShoppingCart className="mx-auto h-10 w-10 text-red-600" />
            <h3 className="mt-4 text-xl font-bold">Request a Quote</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get a personalized quote for your custom configuration from your nearest dealer.
            </p>
            <Button className="mt-4 w-full bg-red-600 text-white hover:bg-red-700">Request Quote</Button>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center">
            <CalendarDays className="mx-auto h-10 w-10 text-red-600" />
            <h3 className="mt-4 text-xl font-bold">Book a Test Ride</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Experience the thrill of the Phantom X with a test ride at your local dealership.
            </p>
            <Link href="/test-ride">
              <Button className="mt-4 w-full">Book Test Ride</Button>
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <Button variant="outline" className="flex-1">
            <Download className="mr-2 h-4 w-4" />
            Save Configuration
          </Button>
          <Button variant="outline" className="flex-1">
            <Share2 className="mr-2 h-4 w-4" />
            Share Configuration
          </Button>
        </div>
      </div>
    </div>
  )
}
