import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart } from "lucide-react"

export function BikeAccessories() {
  const accessories = {
    performance: [
      {
        id: "exhaust-system",
        name: "Racing Exhaust System",
        description: "Full titanium exhaust system with carbon fiber end cap",
        price: "$2,499",
        image: "https://cdn11.bigcommerce.com/s-kzkjoi5srf/images/stencil/1280x1280/products/15461/3634/Graves-R1-Superbike-Exhaust-4__42377.1585672002.jpg?c=2",
      },
      {
        id: "ecu-flash",
        name: "Performance ECU Flash",
        description: "Optimized engine mapping for maximum performance",
        price: "$699",
        image: "https://cdn-fastly.motorcycle.com/media/2023/03/20/11125519/ecu-flash-tuning-what-is-it.jpg?size=720x845&nocrop=1",
      },
      {
        id: "quick-shifter",
        name: "Quick Shifter Pro",
        description: "Seamless up and down shifting without clutch",
        price: "$899",
        image: "https://bikerrated.com/wp-content/uploads/2020/04/motorcycle-quickshifter-guide.jpg",
      },
    ],
    protection: [
      {
        id: "frame-sliders",
        name: "Carbon Frame Sliders",
        description: "Protect your bike in case of a fall",
        price: "$249",
        image: "https://superbikestore.in/cdn/shop/products/9389N_2.jpg?v=1559129669",
      },
      {
        id: "tank-pad",
        name: "Tank Protection Pad",
        description: "Carbon fiber tank pad with logo",
        price: "$129",
        image: "https://5.imimg.com/data5/ECOM/Default/2024/6/429298089/JY/WI/BZ/7356118/whatsappimage2024-05-22at17-26-20.jpg",
      },
      {
        id: "radiator-guard",
        name: "Radiator Protection Guard",
        description: "Aluminum radiator guard with mesh",
        price: "$189",
        image: "https://cdn.shopify.com/s/files/1/1502/8810/articles/Evotech-2020-KTM-1290-Superduke-R-Radiator-Guard-L1000817.jpg?v=1601981273",
      },
    ],
    style: [
      {
        id: "carbon-fairings",
        name: "Carbon Fiber Fairings",
        description: "Full set of carbon fiber fairings",
        price: "$3,499",
        image: "https://dmeracing.com/wp-content/uploads/DFX-SUZ-Gen1.jpg",
      },
      {
        id: "led-indicators",
        name: "LED Turn Indicators",
        description: "Sleek LED indicators with sequential function",
        price: "$199",
        image: "https://www.jiomart.com/images/product/original/rvucgmauic/oberois-traders-amber-3-led-turn-signal-indicator-light-lamp-for-all-ktm-indicator-light-license-plate-light-tail-light-motorbike-led-for-ktm-12-v-12-w-universal-for-bike-pack-of-4-parts-product-images-orvucgmauic-p602033635-2-202305311910.jpg?im=Resize=(420,420)",
      },
      {
        id: "tail-tidy",
        name: "Tail Tidy Kit",
        description: "Clean up the rear end of your bike",
        price: "$249",
        image: "https://m.media-amazon.com/images/I/61KSA7uZUGS._AC_UF1000,1000_QL80_.jpg",
      },
    ],
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Accessories & Upgrades</h2>
        <p className="mt-2 text-muted-foreground">Customize your ride with our premium accessories</p>
      </div>

      <Tabs defaultValue="performance">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="protection">Protection</TabsTrigger>
          <TabsTrigger value="style">Style</TabsTrigger>
        </TabsList>

        {Object.entries(accessories).map(([category, items]) => (
          <TabsContent key={category} value={category}>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-lg font-bold">{item.price}</div>
                      <Button size="sm">
                        <ShoppingCart className="mr-1 h-4 w-4" />
                        Add to Cart
                      </Button>
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
