import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"

export function ConfiguratorAccessories() {
  const accessories = {
    performance: [
      {
        id: "ecu-flash",
        name: "Performance ECU Flash",
        description: "Optimized engine mapping for maximum performance",
        price: "$699",
        image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: "quick-shifter",
        name: "Quick Shifter Pro",
        description: "Seamless up and down shifting without clutch",
        price: "$899",
        image: "https://images.unsplash.com/photo-1624870420774-8b3b08b7db0f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFjaW5nJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        id: "air-filter",
        name: "High-Flow Air Filter",
        description: "Increased airflow for better performance",
        price: "$249",
        image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/109337/ducati-left-side-view1.jpeg?isig=0",
      },
    ],
    protection: [
      {
        id: "frame-sliders",
        name: "Carbon Frame Sliders",
        description: "Protect your bike in case of a fall",
        price: "$249",
        image: "https://imageio.forbes.com/specials-images/imageserve/61c49ff83ba5a94d87dd232b/Electric-Ducati-V21L-prototype-racing-motorcycle-/0x0.jpg?format=jpg&width=480",
      },
      {
        id: "tank-pad",
        name: "Tank Protection Pad",
        description: "Carbon fiber tank pad with logo",
        price: "$129",
        image: "https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2021/11/23/r85jubedkpfa47qrqkut/anfal-adkhar-indian-national-motorcycle-championship",
      },
      {
        id: "radiator-guard",
        name: "Radiator Protection Guard",
        description: "Aluminum radiator guard with mesh",
        price: "$189",
        image: "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/00100_Photoshooting_2025_WorldSBK_Gerloff_001.jpg",
      },
    ],
    style: [
      {
        id: "tail-tidy",
        name: "Tail Tidy Kit",
        description: "Clean up the rear end of your bike",
        price: "$249",
        image: "https://www.cyclenews.com/wp-content/uploads/2018/12/the-top-10-street-bikes-we-cant-wait-to-ride-in-2019-aprilia-rsv4-1100.jpg",
      },
      {
        id: "led-indicators",
        name: "LED Turn Indicators",
        description: "Sleek LED indicators with sequential function",
        price: "$199",
        image: "https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/KTM%20RC390%20Racebike%201.jpg",
      },
      {
        id: "carbon-mirrors",
        name: "Carbon Fiber Mirrors",
        description: "Lightweight carbon fiber mirrors",
        price: "$349",
        image: "https://kennispark.nl/wp-content/uploads/sites/14/2021/05/Electric_superbike_reveal_kennispark-2000x1333.jpg",
      },
    ],
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Recommended Accessories</h2>
        <p className="mt-2 text-muted-foreground">Enhance your ride with these premium accessories</p>
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
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-lg font-bold">{item.price}</div>
                      <Button size="sm">
                        <Plus className="mr-1 h-4 w-4" />
                        Add
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
