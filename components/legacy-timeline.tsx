"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function LegacyTimeline() {
  const [activeDecade, setActiveDecade] = useState("1990s")

  const decades = [
    { id: "1990s", label: "1990s" },
    { id: "2000s", label: "2000s" },
    { id: "2010s", label: "2010s" },
    { id: "2020s", label: "2020s" },
  ]

  const timelineEvents = {
    "1990s": [
      {
        year: 1990,
        title: "The Beginning",
        description: "Founded by motorcycle enthusiasts with a vision to create the ultimate riding experience.",
        image: "https://www.classicmechanics.com/wp-content/uploads/sites/16/2023/03/import-from-BTP-9.jpg",
      },
      {
        year: 1993,
        title: "First Production Model",
        description: "Released our first production superbike, the Velocity 750, setting new standards in performance.",
        image: "https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2024/03/image.jpg",
      },
      {
        year: 1997,
        title: "Racing Debut",
        description:
          "Entered professional racing, securing our first podium finish in the World Superbike Championship.",
        image: "https://bikemeet.net/wp-content/uploads/2024/01/Norton-F1-1990-300x209.jpg",
      },
    ],
    "2000s": [
      {
        year: 2001,
        title: "Revolutionary V4 Engine",
        description: "Introduced our patented V4 engine design, delivering unprecedented power-to-weight ratio.",
        image: "https://www.motorcycledaily.com/wp-content/uploads/2000/02/corser.jpg",
      },
      {
        year: 2005,
        title: "First World Championship",
        description: "Claimed our first World Superbike Championship title with rider Marco Rossi.",
        image: "https://iconicmotorbikeauctions.com/wp-content/uploads/2022/08/Suzuki-TL1000R-Front-Right-Featured.jpg",
      },
      {
        year: 2008,
        title: "Global Expansion",
        description: "Expanded operations to Asia and South America, establishing a truly global presence.",
        image: "https://iconicmotorbikeauctions.com/wp-content/uploads/2023/10/Honda-RC51-Front-Right-Featured.jpeg",
      },
    ],
    "2010s": [
      {
        year: 2012,
        title: "Electronic Revolution",
        description: "Pioneered advanced rider aids with our integrated electronics package.",
        image: "https://photos.worldsbk.com/2013/12/13/062_p05_sykes_action-1000_full.jpg",
      },
      {
        year: 2015,
        title: "Carbon Fiber Chassis",
        description: "Introduced the industry's first production carbon fiber monocoque chassis.",
        image: "https://photos.worldsbk.com/2013/12/13/213_p01_toseland_action_full.jpg",
      },
      {
        year: 2019,
        title: "Triple Crown",
        description:
          "Achieved the Triple Crown by winning Manufacturer, Team, and Rider championships in a single season.",
        image: "https://i0.wp.com/infomoto.com.au/wp-content/uploads/2020/07/Suzuki_GSXR_1000_2010_2.jpg?fit=1001%2C565&ssl=1",
      },
    ],
    "2020s": [
      {
        year: 2021,
        title: "Electric Prototype",
        description: "Unveiled our first electric superbike prototype, combining sustainability with performance.",
        image: "https://www.webbikeworld.com/wp-content/uploads/2023/04/Redding_2020_World_GP_Panigale_V4R_03-12216-scaled-1.jpg",
      },
      {
        year: 2023,
        title: "Phantom X Launch",
        description: "Launched the revolutionary Phantom X, our most advanced production superbike to date.",
        image: "https://i0.wp.com/www.asphaltandrubber.com/wp-content/uploads/2019/11/2020-KTM-1290-Super-Duke-R-01.jpg?ssl=1",
      },
      {
        year: 2025,
        title: "Future Vision",
        description: "Continuing to push the boundaries of motorcycle engineering and performance.",
        image: "https://wide.piaggiogroup.com/articles/racing/aprilia-rsv4-si-conferma-regina-delle-superbike/foto3.jpg",
      },
    ],
  }

  const currentEvents = timelineEvents[activeDecade as keyof typeof timelineEvents]

  const nextDecade = () => {
    const currentIndex = decades.findIndex((d) => d.id === activeDecade)
    if (currentIndex < decades.length - 1) {
      setActiveDecade(decades[currentIndex + 1].id)
    }
  }

  const prevDecade = () => {
    const currentIndex = decades.findIndex((d) => d.id === activeDecade)
    if (currentIndex > 0) {
      setActiveDecade(decades[currentIndex - 1].id)
    }
  }

  return (
    <div id="timeline">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Our Journey Through Time</h2>
        <p className="mt-2 text-muted-foreground">Explore the key milestones that have shaped our legacy</p>
      </div>

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="outline" size="icon" onClick={prevDecade} disabled={activeDecade === decades[0].id}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous decade</span>
          </Button>

          <Tabs value={activeDecade} onValueChange={setActiveDecade} className="w-full max-w-md mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              {decades.map((decade) => (
                <TabsTrigger key={decade.id} value={decade.id}>
                  {decade.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Button
            variant="outline"
            size="icon"
            onClick={nextDecade}
            disabled={activeDecade === decades[decades.length - 1].id}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next decade</span>
          </Button>
        </div>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-6 h-0.5 w-full bg-border"></div>

          <div className="grid gap-16 md:grid-cols-3">
            {currentEvents.map((event, index) => (
              <div key={index} className="relative pt-10">
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[3px]">
                  <div className="h-6 w-6 rounded-full border-4 border-background bg-red-600"></div>
                </div>

                {/* Year label */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-full">
                  <div className="rounded-full bg-red-600 px-4 py-1 text-sm font-bold text-white">{event.year}</div>
                </div>

                <div className="overflow-hidden rounded-lg border bg-card">
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
