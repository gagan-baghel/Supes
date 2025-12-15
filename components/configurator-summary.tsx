import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Download, Share2 } from "lucide-react"

export function ConfiguratorSummary() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Your Custom Phantom X</h2>
        <p className="mt-2 text-muted-foreground">Review your configuration and see the detailed specifications</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="rounded-lg border bg-card overflow-hidden">
          <Image
            src="https://cdna.artstation.com/p/assets/images/images/066/769/762/large/shubham-kumar-gray.jpg?1693743120"
            alt="Your Custom Phantom X"
            width={800}
            height={600}
            className="w-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-bold">Configuration Summary</h3>

            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Base Model</span>
                <span>Phantom X</span>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <span>Inferno Red</span>
                  </div>
                  <span>Included</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Standard Exhaust</span>
                  <span>Included</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Standard Wheels</span>
                  <span>Included</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Standard Suspension</span>
                  <span>Included</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Standard Brakes</span>
                  <span>Included</span>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total Price</span>
                <span>$32,999</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <Button className="w-full bg-red-600 text-white hover:bg-red-700">Request a Quote</Button>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download Specification
            </Button>
            <Button variant="outline" className="w-full">
              <Share2 className="mr-2 h-4 w-4" />
              Share Configuration
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
