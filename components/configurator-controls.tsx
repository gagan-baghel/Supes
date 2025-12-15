"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Paintbrush, Wrench, Gauge, Camera } from "lucide-react"

export function ConfiguratorControls() {
  const [viewMode, setViewMode] = useState("3d")

  const colors = [
    { id: "red", name: "Inferno Red", color: "bg-red-600" },
    { id: "black", name: "Stealth Black", color: "bg-black" },
    { id: "silver", name: "Titanium Silver", color: "bg-gray-400" },
    { id: "blue", name: "Racing Blue", color: "bg-blue-600" },
    { id: "white", name: "Pearl White", color: "bg-white border border-gray-200" },
  ]

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border/40 p-4">
      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="colors">
            <Paintbrush className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Colors</span>
          </TabsTrigger>
          <TabsTrigger value="parts">
            <Wrench className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Parts</span>
          </TabsTrigger>
          <TabsTrigger value="performance">
            <Gauge className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Performance</span>
          </TabsTrigger>
          <TabsTrigger value="view">
            <Camera className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">View</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="mt-4">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {colors.map((color) => (
              <button key={color.id} className="flex flex-col items-center space-y-2" title={color.name}>
                <div className={`h-12 w-12 rounded-full ${color.color}`}></div>
                <span className="text-xs">{color.name}</span>
              </button>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="parts" className="mt-4">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            <Button variant="outline" size="sm">
              Exhaust
            </Button>
            <Button variant="outline" size="sm">
              Wheels
            </Button>
            <Button variant="outline" size="sm">
              Windscreen
            </Button>
            <Button variant="outline" size="sm">
              Seat
            </Button>
            <Button variant="outline" size="sm">
              Handlebars
            </Button>
            <Button variant="outline" size="sm">
              Mirrors
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="mt-4">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            <Button variant="outline" size="sm">
              Engine
            </Button>
            <Button variant="outline" size="sm">
              Suspension
            </Button>
            <Button variant="outline" size="sm">
              Brakes
            </Button>
            <Button variant="outline" size="sm">
              Electronics
            </Button>
            <Button variant="outline" size="sm">
              Tires
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="view" className="mt-4">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            <Button variant={viewMode === "3d" ? "default" : "outline"} size="sm" onClick={() => setViewMode("3d")}>
              3D View
            </Button>
            <Button variant={viewMode === "side" ? "default" : "outline"} size="sm" onClick={() => setViewMode("side")}>
              Side View
            </Button>
            <Button variant={viewMode === "top" ? "default" : "outline"} size="sm" onClick={() => setViewMode("top")}>
              Top View
            </Button>
            <Button
              variant={viewMode === "front" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("front")}
            >
              Front View
            </Button>
            <Button variant={viewMode === "rear" ? "default" : "outline"} size="sm" onClick={() => setViewMode("rear")}>
              Rear View
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
