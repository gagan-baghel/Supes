import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trophy, ChevronRight } from "lucide-react"

export function LegacyRacing() {
  const championships = [
    { year: 2005, category: "World Superbike", rider: "Marco Rossi" },
    { year: 2008, category: "World Superbike", rider: "Alex Johnson" },
    { year: 2010, category: "World Superbike", rider: "Marco Rossi" },
    { year: 2012, category: "MotoGP", rider: "Carlos Mendez" },
    { year: 2015, category: "World Superbike", rider: "James Wilson" },
    { year: 2017, category: "MotoGP", rider: "Carlos Mendez" },
    { year: 2019, category: "World Superbike", rider: "Takashi Yamamoto" },
    { year: 2021, category: "MotoGP", rider: "Miguel Oliveira" },
    { year: 2023, category: "World Superbike", rider: "James Wilson" },
  ]

  const racingMilestones = [
    {
      title: "First Podium",
      year: 1997,
      description:
        "Our first podium finish at the World Superbike Championship marked our arrival on the global racing scene.",
      image: "https://mediapool.bmwgroup.com/cache/P9/201906/P90354380/P90354380-sepang-mal-malaysia-superbike-championship-16th-june-2019-bmw-hkm-times-bike-racing-team-rider-m-far-600px.jpg",
    },
    {
      title: "Triple Crown",
      year: 2019,
      description:
        "Achieved the prestigious Triple Crown by winning Manufacturer, Team, and Rider championships in a single season.",
      image: "https://i.pinimg.com/236x/7d/d6/81/7dd68191bf99b92deaa2a9be0fe91268.jpg",
    },
    {
      title: "Isle of Man TT",
      year: 2016,
      description:
        "Set a new lap record at the legendary Isle of Man TT, cementing our reputation for building the fastest superbikes.",
      image: "https://dims.apnews.com/dims4/default/b630e6a/2147483647/strip/true/crop/3840x2560+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F66%2F5b%2F2d041add30638ff089d9de85a5bc%2F0a57145fe48f45fb8a9e082f99375820",
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Racing Heritage</h2>
        <p className="mt-2 text-muted-foreground">Our commitment to motorsport excellence and championship victories</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center">
            <Trophy className="mr-2 h-6 w-6 text-red-600" />
            <h3 className="text-2xl font-bold">World Championships</h3>
          </div>

          <div className="rounded-lg border">
            <div className="grid grid-cols-3 border-b bg-muted p-3 font-medium">
              <div>Year</div>
              <div>Category</div>
              <div>Rider</div>
            </div>

            <div className="divide-y">
              {championships.map((championship, index) => (
                <div key={index} className="grid grid-cols-3 p-3">
                  <div>{championship.year}</div>
                  <div>{championship.category}</div>
                  <div>{championship.rider}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Button variant="outline" className="w-full">
              View Full Racing History
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold">Racing Milestones</h3>
          </div>

          <div className="space-y-6">
            {racingMilestones.map((milestone, index) => (
              <div key={index} className="overflow-hidden rounded-lg border bg-card">
                <div className="grid md:grid-cols-[150px_1fr]">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={milestone.image || "/placeholder.svg"}
                      alt={milestone.title}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="inline-block rounded-full bg-red-600 px-2 py-0.5 text-xs font-medium text-white">
                      {milestone.year}
                    </div>
                    <h4 className="mt-2 text-lg font-bold">{milestone.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{milestone.description}</p>
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
