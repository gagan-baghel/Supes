"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BikeSpecifications() {
  const [activeTab, setActiveTab] = useState("phantom-x")

  const bikes = {
    "phantom-x": {
      name: "Phantom X",
      engine: {
        type: "Liquid-cooled, 4-stroke, DOHC, 16-valve, V4",
        displacement: "998 cc",
        bore: "81 mm",
        stroke: "48.5 mm",
        compression: "13.6:1",
        power: "220 HP @ 13,500 rpm",
        torque: "121 Nm @ 11,000 rpm",
        fuelSystem: "Electronic fuel injection with 48mm throttle bodies",
        transmission: "6-speed with quickshifter",
        finalDrive: "Chain",
      },
      chassis: {
        frame: "Twin-spar aluminum perimeter",
        frontSuspension: "Öhlins NIX 43mm inverted fork, fully adjustable",
        rearSuspension: "Öhlins TTX36 monoshock, fully adjustable",
        frontBrake: "Dual 330mm discs with Brembo Stylema 4-piston radial calipers",
        rearBrake: "Single 220mm disc with Brembo 2-piston caliper",
        frontTire: "120/70 ZR17",
        rearTire: "200/55 ZR17",
      },
      dimensions: {
        length: "2,080 mm",
        width: "750 mm",
        height: "1,145 mm",
        seatHeight: "830 mm",
        wheelbase: "1,435 mm",
        groundClearance: "130 mm",
        fuelCapacity: "16 liters",
        weight: "186 kg (dry)",
      },
      electronics: {
        rideMode: "5 riding modes (Track, Sport, Road, Rain, Custom)",
        abs: "Cornering ABS with 3 levels",
        tractionControl: "9-level traction control with cornering function",
        wheelieControl: "5-level wheelie control",
        display: "6.5-inch TFT color display with smartphone connectivity",
        lighting: "Full LED lighting with cornering lights",
      },
    },
    "stealth-r": {
      name: "Stealth R",
      engine: {
        type: "Liquid-cooled, 4-stroke, DOHC, 16-valve, inline-4",
        displacement: "999 cc",
        bore: "76 mm",
        stroke: "55.1 mm",
        compression: "13.2:1",
        power: "205 HP @ 13,000 rpm",
        torque: "115 Nm @ 10,500 rpm",
        fuelSystem: "Electronic fuel injection with 45mm throttle bodies",
        transmission: "6-speed with quickshifter",
        finalDrive: "Chain",
      },
      chassis: {
        frame: "Aluminum twin-tube frame",
        frontSuspension: "Showa BPF 43mm inverted fork, fully adjustable",
        rearSuspension: "Showa BFRC monoshock, fully adjustable",
        frontBrake: "Dual 320mm discs with Brembo M4.32 4-piston radial calipers",
        rearBrake: "Single 220mm disc with Brembo single-piston caliper",
        frontTire: "120/70 ZR17",
        rearTire: "190/55 ZR17",
      },
      dimensions: {
        length: "2,075 mm",
        width: "740 mm",
        height: "1,140 mm",
        seatHeight: "825 mm",
        wheelbase: "1,425 mm",
        groundClearance: "135 mm",
        fuelCapacity: "17 liters",
        weight: "193 kg (dry)",
      },
      electronics: {
        rideMode: "4 riding modes (Sport, Road, Rain, Custom)",
        abs: "Cornering ABS with 2 levels",
        tractionControl: "8-level traction control with cornering function",
        wheelieControl: "3-level wheelie control",
        display: "5-inch TFT color display with smartphone connectivity",
        lighting: "Full LED lighting",
      },
    },
    "vortex-gt": {
      name: "Vortex GT",
      engine: {
        type: "Liquid-cooled, 4-stroke, DOHC, 16-valve, V4",
        displacement: "1,103 cc",
        bore: "81 mm",
        stroke: "53.5 mm",
        compression: "13.0:1",
        power: "180 HP @ 10,500 rpm",
        torque: "125 Nm @ 8,750 rpm",
        fuelSystem: "Electronic fuel injection with 48mm throttle bodies",
        transmission: "6-speed with quickshifter",
        finalDrive: "Chain",
      },
      chassis: {
        frame: "Aluminum monocoque",
        frontSuspension: "Marzocchi 43mm inverted fork, fully adjustable",
        rearSuspension: "Sachs monoshock, fully adjustable",
        frontBrake: "Dual 320mm discs with Brembo M50 4-piston radial calipers",
        rearBrake: "Single 245mm disc with Brembo 2-piston caliper",
        frontTire: "120/70 ZR17",
        rearTire: "190/55 ZR17",
      },
      dimensions: {
        length: "2,150 mm",
        width: "780 mm",
        height: "1,160 mm",
        seatHeight: "825 mm",
        wheelbase: "1,465 mm",
        groundClearance: "140 mm",
        fuelCapacity: "20 liters",
        weight: "215 kg (dry)",
      },
      electronics: {
        rideMode: "4 riding modes (Sport, Touring, Rain, Custom)",
        abs: "Cornering ABS with 3 levels",
        tractionControl: "8-level traction control with cornering function",
        wheelieControl: "3-level wheelie control",
        display: "6.5-inch TFT color display with navigation and smartphone connectivity",
        lighting: "Full LED lighting with cornering lights",
      },
    },
  }

  const selectedBike = bikes[activeTab as keyof typeof bikes]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Technical Specifications</h2>
        <p className="mt-2 text-muted-foreground">Detailed specifications of our flagship models</p>
      </div>

      <Tabs defaultValue="phantom-x" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="phantom-x">Phantom X</TabsTrigger>
          <TabsTrigger value="stealth-r">Stealth R</TabsTrigger>
          <TabsTrigger value="vortex-gt">Vortex GT</TabsTrigger>
        </TabsList>

        {Object.keys(bikes).map((bikeId) => (
          <TabsContent key={bikeId} value={bikeId}>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Engine</h3>
                  <div className="space-y-2 rounded-lg border p-4">
                    {Object.entries(selectedBike.engine).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between border-b border-border/30 pb-2 last:border-0 last:pb-0"
                      >
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold">Chassis</h3>
                  <div className="space-y-2 rounded-lg border p-4">
                    {Object.entries(selectedBike.chassis).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between border-b border-border/30 pb-2 last:border-0 last:pb-0"
                      >
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Dimensions</h3>
                  <div className="space-y-2 rounded-lg border p-4">
                    {Object.entries(selectedBike.dimensions).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between border-b border-border/30 pb-2 last:border-0 last:pb-0"
                      >
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold">Electronics</h3>
                  <div className="space-y-2 rounded-lg border p-4">
                    {Object.entries(selectedBike.electronics).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between border-b border-border/30 pb-2 last:border-0 last:pb-0"
                      >
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
