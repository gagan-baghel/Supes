"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronUp, Info } from "lucide-react"

export function ConfiguratorSidebar() {
  const [totalPrice, setTotalPrice] = useState(32999)
  const [expanded, setExpanded] = useState({
    colors: true,
    exhaust: true,
    wheels: true,
    suspension: false,
    brakes: false,
  })

  const toggleSection = (section: string) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }))
  }

  const colors = [
    { id: "red", name: "Inferno Red", price: 0 },
    { id: "black", name: "Stealth Black", price: 500 },
    { id: "silver", name: "Titanium Silver", price: 800 },
    { id: "blue", name: "Racing Blue", price: 800 },
    { id: "white", name: "Pearl White", price: 500 },
  ]

  const exhausts = [
    { id: "standard", name: "Standard", price: 0 },
    { id: "performance", name: "Performance", price: 1200 },
    { id: "racing", name: "Racing Titanium", price: 2500 },
    { id: "akrapovic", name: "Akrapovič Full System", price: 3800 },
  ]

  const wheels = [
    { id: "standard", name: "Standard Cast Aluminum", price: 0 },
    { id: "forged", name: "Forged Aluminum", price: 1800 },
    { id: "carbon", name: "Carbon Fiber", price: 3500 },
  ]

  const suspension = [
    { id: "standard", name: "Standard Suspension", price: 0 },
    { id: "ohlins", name: "Öhlins Racing Suspension", price: 3200 },
    { id: "electronic", name: "Electronic Suspension", price: 4500 },
  ]

  const brakes = [
    { id: "standard", name: "Standard Brakes", price: 0 },
    { id: "brembo-m4", name: "Brembo M4 Calipers", price: 1200 },
    { id: "brembo-gp4", name: "Brembo GP4-RX Calipers", price: 2800 },
  ]

  return (
    <div className="h-full overflow-auto">
      <Tabs defaultValue="customize">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="customize">Customize</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
        </TabsList>

        <TabsContent value="customize" className="p-4 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Phantom X</h2>
              <div className="text-xl font-bold">${totalPrice.toLocaleString()}</div>
            </div>
            <p className="text-sm text-muted-foreground">Configure your dream superbike</p>
          </div>

          <Separator />

          {/* Colors Section */}
          <div>
            <button className="mb-2 flex w-full items-center justify-between" onClick={() => toggleSection("colors")}>
              <h3 className="text-lg font-medium">Colors</h3>
              {expanded.colors ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {expanded.colors && (
              <RadioGroup defaultValue="red" className="mt-3">
                {colors.map((color) => (
                  <div key={color.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={color.id} id={`color-${color.id}`} />
                    <Label htmlFor={`color-${color.id}`} className="flex flex-1 items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`h-5 w-5 rounded-full bg-${color.id}-500 border border-border`}></div>
                        <span>{color.name}</span>
                      </div>
                      <span>{color.price > 0 ? `+$${color.price}` : "Included"}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>

          <Separator />

          {/* Exhaust Section */}
          <div>
            <button className="mb-2 flex w-full items-center justify-between" onClick={() => toggleSection("exhaust")}>
              <h3 className="text-lg font-medium">Exhaust System</h3>
              {expanded.exhaust ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {expanded.exhaust && (
              <RadioGroup defaultValue="standard" className="mt-3 space-y-3">
                {exhausts.map((exhaust) => (
                  <div key={exhaust.id} className="rounded-lg border p-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={exhaust.id} id={`exhaust-${exhaust.id}`} />
                      <Label htmlFor={`exhaust-${exhaust.id}`} className="flex flex-1 cursor-pointer">
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{exhaust.name}</span>
                            <span>{exhaust.price > 0 ? `+$${exhaust.price}` : "Included"}</span>
                          </div>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {exhaust.id === "standard" && "Factory-fitted exhaust system with catalytic converter"}
                            {exhaust.id === "performance" && "Enhanced flow with deeper sound and removable baffle"}
                            {exhaust.id === "racing" && "Full titanium race system with carbon fiber end cap"}
                            {exhaust.id === "akrapovic" && "Premium Akrapovič full system with titanium headers"}
                          </p>
                        </div>
                      </Label>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>

          <Separator />

          {/* Wheels Section */}
          <div>
            <button className="mb-2 flex w-full items-center justify-between" onClick={() => toggleSection("wheels")}>
              <h3 className="text-lg font-medium">Wheels</h3>
              {expanded.wheels ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {expanded.wheels && (
              <RadioGroup defaultValue="standard" className="mt-3 space-y-3">
                {wheels.map((wheel) => (
                  <div key={wheel.id} className="rounded-lg border p-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={wheel.id} id={`wheel-${wheel.id}`} />
                      <Label htmlFor={`wheel-${wheel.id}`} className="flex flex-1 cursor-pointer">
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{wheel.name}</span>
                            <span>{wheel.price > 0 ? `+$${wheel.price}` : "Included"}</span>
                          </div>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {wheel.id === "standard" && "Standard lightweight cast aluminum wheels"}
                            {wheel.id === "forged" && "Forged aluminum wheels, 25% lighter than standard"}
                            {wheel.id === "carbon" && "Carbon fiber wheels, 40% lighter for ultimate performance"}
                          </p>
                        </div>
                      </Label>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>

          <Separator />

          {/* Suspension Section */}
          <div>
            <button
              className="mb-2 flex w-full items-center justify-between"
              onClick={() => toggleSection("suspension")}
            >
              <h3 className="text-lg font-medium">Suspension</h3>
              {expanded.suspension ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {expanded.suspension && (
              <RadioGroup defaultValue="standard" className="mt-3 space-y-3">
                {suspension.map((item) => (
                  <div key={item.id} className="rounded-lg border p-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={item.id} id={`suspension-${item.id}`} />
                      <Label htmlFor={`suspension-${item.id}`} className="flex flex-1 cursor-pointer">
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{item.name}</span>
                            <span>{item.price > 0 ? `+$${item.price}` : "Included"}</span>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>

          <Separator />

          {/* Brakes Section */}
          <div>
            <button className="mb-2 flex w-full items-center justify-between" onClick={() => toggleSection("brakes")}>
              <h3 className="text-lg font-medium">Brakes</h3>
              {expanded.brakes ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {expanded.brakes && (
              <RadioGroup defaultValue="standard" className="mt-3 space-y-3">
                {brakes.map((item) => (
                  <div key={item.id} className="rounded-lg border p-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={item.id} id={`brakes-${item.id}`} />
                      <Label htmlFor={`brakes-${item.id}`} className="flex flex-1 cursor-pointer">
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{item.name}</span>
                            <span>{item.price > 0 ? `+$${item.price}` : "Included"}</span>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>

          <div className="sticky bottom-0 bg-background pt-4">
            <Button className="w-full bg-red-600 text-white hover:bg-red-700">Save Configuration</Button>
          </div>
        </TabsContent>

        <TabsContent value="summary" className="p-4">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold">Configuration Summary</h2>
              <p className="text-sm text-muted-foreground">Your custom Phantom X</p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Base Price</span>
                  <span>$32,999</span>
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
                </div>

                <Separator />

                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total Price</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 rounded-lg bg-muted p-4 text-sm">
              <Info className="h-4 w-4 text-muted-foreground" />
              <p>Prices are subject to change and exclude taxes, shipping, and dealer fees.</p>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-red-600 text-white hover:bg-red-700">Request a Quote</Button>
              <Button variant="outline" className="w-full">
                Download Specification
              </Button>
              <Button variant="ghost" className="w-full">
                Share Configuration
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
