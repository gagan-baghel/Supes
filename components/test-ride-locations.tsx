"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from "lucide-react"

export function TestRideLocations() {
  const [searchQuery, setSearchQuery] = useState("")

  const locations = [
    {
      id: "nyc",
      name: "New York City Dealership",
      address: "123 Broadway, New York, NY 10001",
      phone: "(212) 555-1234",
      image: "https://d1o0i0v5q5lp8h.cloudfront.net/helmet/live/assets/dealer_locations/dealer_image/dealer/dealer_Evansville%20Superbike%2021742583474-12689581742583474-1268958.jpg",
      distance: "0.8 miles",
    },
    {
      id: "la",
      name: "Los Angeles Experience Center",
      address: "456 Sunset Blvd, Los Angeles, CA 90028",
      phone: "(323) 555-6789",
      image: "https://www.bikesrepublic.com/wp-content/uploads/2019/09/Wah-Superbikes-Kawasaki-Ninja-Shop-12.jpg",
      distance: "2.3 miles",
    },
    {
      id: "miami",
      name: "Miami Flagship Store",
      address: "789 Ocean Drive, Miami, FL 33139",
      phone: "(305) 555-9876",
      image: "https://mcn-images.bauersecure.com/wp-images/192772/1440x960/superbike-factory-bristol-01.jpg?mode=max&quality=90&scale=down",
      distance: "3.5 miles",
    },
    {
      id: "chicago",
      name: "Chicago Superbike Center",
      address: "321 Michigan Ave, Chicago, IL 60601",
      phone: "(312) 555-4321",
      image: "https://s3-media0.fl.yelpcdn.com/bphoto/icxBgyMLnezwOX5JLeVmBg/l.jpg",
      distance: "4.1 miles",
    },
  ]

  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Find a Test Ride Location</h2>
        <p className="mt-2 text-muted-foreground">Discover our dealerships and experience centers near you</p>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by city, state, or zip code"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredLocations.map((location) => (
          <div
            key={location.id}
            className="overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <Image
                src={location.image || "/placeholder.svg"}
                alt={location.name}
                width={300}
                height={200}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{location.name}</h3>
              <div className="mt-2 flex items-start space-x-2">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm">{location.address}</p>
                  <p className="text-sm text-muted-foreground">{location.distance} away</p>
                </div>
              </div>
              <p className="mt-2 text-sm">{location.phone}</p>
              <Button className="mt-4 w-full">Select Location</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline">View All Locations</Button>
      </div>
    </div>
  )
}
