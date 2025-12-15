"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LegacyInnovations() {
  const innovations = [
    {
      id: "v4-engine",
      name: "V4 Engine Technology",
      description:
        "Our patented V4 engine design delivers unparalleled power and torque while maintaining perfect balance and character.",
      year: 2001,
      image: "https://cloudfront-us-east-1.images.arcpublishing.com/octane/N2SQZGXB7G46OGWDUXMTJAR2JE.jpg",
      features: [
        "Counter-rotating crankshaft reduces gyroscopic effect",
        "Twin-pulse firing order for optimal traction",
        "Variable valve timing for broad power delivery",
        "Titanium connecting rods for reduced weight",
      ],
      impact:
        "The V4 engine revolutionized our lineup, becoming the cornerstone of our performance advantage in both racing and production models.",
    },
    {
      id: "carbon-chassis",
      name: "Carbon Fiber Monocoque",
      description:
        "The industry's first production carbon fiber monocoque chassis, offering the perfect balance of rigidity, feedback, and lightweight performance.",
      year: 2015,
      image: "https://hlhrapid.com/wp-content/uploads/2022/07/CarbonFiberComposites_6.jpg",
      features: [
        "30% lighter than traditional aluminum frames",
        "Engineered flex zones for optimal feedback",
        "Integrated airbox for improved efficiency",
        "Modular design for ease of maintenance",
      ],
      impact:
        "The carbon chassis technology transformed handling capabilities, allowing riders to extract maximum performance with confidence.",
    },
    {
      id: "electronics",
      name: "Integrated Electronics Package",
      description:
        "Our comprehensive electronics suite uses advanced algorithms and sensors to enhance performance and safety.",
      year: 2012,
      image: "https://data.athena.eu/imgmenuitem/982_en.jpg",
      features: [
        "6-axis IMU for precise intervention",
        "Cornering ABS with multiple modes",
        "Wheelie control with learning algorithm",
        "Adaptive traction control system",
      ],
      impact:
        "The electronics package democratized performance, allowing riders of all skill levels to safely explore the capabilities of our machines.",
    },
    {
      id: "aerodynamics",
      name: "Active Aerodynamics",
      description:
        "Revolutionary active aerodynamic system that automatically adjusts to provide optimal downforce or reduced drag based on riding conditions.",
      year: 2019,
      image: "https://www.cycleworld.com/resizer/we6sASZ4hGqUfSUrHusZAD3S3gs=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/S3CYER4U3JDZ3A2S7VDLXVLQGA.jpg",
      features: [
        "Speed-sensitive wing elements",
        "Automatic adjustment based on lean angle",
        "Reduced drag on straights, increased downforce in corners",
        "Integrated cooling system for improved thermal efficiency",
      ],
      impact:
        "Active aerodynamics provided unprecedented stability at high speeds while maintaining the agility expected from our motorcycles.",
    },
  ]

  const [activeTab, setActiveTab] = useState(innovations[0].id)
  const currentInnovation = innovations.find((i) => i.id === activeTab)

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Groundbreaking Innovations</h2>
        <p className="mt-2 text-muted-foreground">Technological advancements that have defined our legacy</p>
      </div>

      <Tabs defaultValue={innovations[0].id} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          {innovations.map((innovation) => (
            <TabsTrigger key={innovation.id} value={innovation.id}>
              {innovation.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={currentInnovation?.id || ""} className="mt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border">
              <Image
                src={currentInnovation?.image || "/placeholder.svg"}
                alt={currentInnovation?.name || "Innovation"}
                width={800}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-red-600/10 px-3 py-1 text-sm text-red-600">
                Introduced in {currentInnovation?.year}
              </div>
              <h3 className="text-2xl font-bold">{currentInnovation?.name}</h3>
              <p className="text-muted-foreground">{currentInnovation?.description}</p>

              <div className="mt-4">
                <h4 className="font-medium">Key Features:</h4>
                <ul className="mt-2 space-y-1">
                  {currentInnovation?.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-lg bg-muted p-4">
                <h4 className="font-medium">Impact:</h4>
                <p className="mt-1 text-muted-foreground">{currentInnovation?.impact}</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
