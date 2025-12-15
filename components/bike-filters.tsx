"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronUp, Filter, RotateCcw } from "lucide-react"

export function BikeFilters() {
  const [expanded, setExpanded] = useState({
    category: true,
    engine: true,
    price: true,
    features: false,
  })

  const [priceRange, setPriceRange] = useState([15000, 40000])
  const [engineRange, setEngineRange] = useState([600, 1200])

  const toggleSection = (section: string) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }))
  }

  const resetFilters = () => {
    setPriceRange([15000, 40000])
    setEngineRange([600, 1200])
  }

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center text-lg font-medium">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </h3>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          <RotateCcw className="mr-2 h-3 w-3" />
          Reset
        </Button>
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <div className="border-b pb-4">
          <button className="mb-2 flex w-full items-center justify-between" onClick={() => toggleSection("category")}>
            <h4 className="font-medium">Category</h4>
            {expanded.category ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {expanded.category && (
            <div className="mt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="sport" />
                <Label htmlFor="sport">Sport</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="sport-touring" />
                <Label htmlFor="sport-touring">Sport Touring</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="adventure" />
                <Label htmlFor="adventure">Adventure</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="naked" />
                <Label htmlFor="naked">Naked</Label>
              </div>
            </div>
          )}
        </div>

        {/* Engine Size Filter */}
        <div className="border-b pb-4">
          <button className="mb-2 flex w-full items-center justify-between" onClick={() => toggleSection("engine")}>
            <h4 className="font-medium">Engine Size</h4>
            {expanded.engine ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {expanded.engine && (
            <div className="mt-4 px-2">
              <Slider defaultValue={engineRange} min={300} max={1500} step={50} onValueChange={setEngineRange} />
              <div className="mt-2 flex items-center justify-between text-sm">
                <span>{engineRange[0]}cc</span>
                <span>{engineRange[1]}cc</span>
              </div>
            </div>
          )}
        </div>

        {/* Price Range Filter */}
        <div className="border-b pb-4">
          <button className="mb-2 flex w-full items-center justify-between" onClick={() => toggleSection("price")}>
            <h4 className="font-medium">Price Range</h4>
            {expanded.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {expanded.price && (
            <div className="mt-4 px-2">
              <Slider defaultValue={priceRange} min={10000} max={50000} step={1000} onValueChange={setPriceRange} />
              <div className="mt-2 flex items-center justify-between text-sm">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          )}
        </div>

        {/* Features Filter */}
        <div>
          <button className="mb-2 flex w-full items-center justify-between" onClick={() => toggleSection("features")}>
            <h4 className="font-medium">Features</h4>
            {expanded.features ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {expanded.features && (
            <div className="mt-2 space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="abs" />
                <Label htmlFor="abs">ABS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="traction-control" />
                <Label htmlFor="traction-control">Traction Control</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="quickshifter" />
                <Label htmlFor="quickshifter">Quickshifter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="cruise-control" />
                <Label htmlFor="cruise-control">Cruise Control</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="led-lights" />
                <Label htmlFor="led-lights">LED Lighting</Label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <Button className="w-full bg-red-600 text-white hover:bg-red-700">Apply Filters</Button>
      </div>
    </div>
  )
}
