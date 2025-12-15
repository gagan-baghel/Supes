import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ConfiguratorPresets() {
  const presets = [
    {
      id: "track-day",
      name: "Track Day Special",
      description: "Optimized for maximum performance on the track",
      image: "https://img.etimg.com/thumb/msid-61822457,width-480,height-360,imgsize-81163,resizemode-75/2018-indian-scout-bobber.jpg",
      features: [
        "Racing Titanium Exhaust",
        "Carbon Fiber Wheels",
        "Öhlins Racing Suspension",
        "Brembo GP4-RX Calipers",
      ],
      price: "$42,999",
    },
    {
      id: "street-fighter",
      name: "Street Fighter",
      description: "Aggressive styling with premium components",
      image: "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/2023_harley_davidson_X440_25.jpg",
      features: ["Performance Exhaust", "Forged Aluminum Wheels", "Standard Suspension", "Brembo M4 Calipers"],
      price: "$36,499",
    },
    {
      id: "touring",
      name: "Grand Tourer",
      description: "Long-distance comfort with premium features",
      image: "https://assets.shortpedia.com/uploads/2020/10/13/1602581406.jpg?tr=w-364,h-273,ar-3-2,cm-pad_resize,bg-F3F3F3",
      features: ["Standard Exhaust", "Forged Aluminum Wheels", "Electronic Suspension", "Standard Brakes"],
      price: "$38,299",
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Recommended Configurations</h2>
        <p className="mt-2 text-muted-foreground">Pre-configured setups designed for different riding styles</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {presets.map((preset) => (
          <div
            key={preset.id}
            className="overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg"
          >
            <div className="aspect-[5/3] overflow-hidden">
              <Image
                src={preset.image || "/placeholder.svg"}
                alt={preset.name}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{preset.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{preset.description}</p>

              <div className="mt-4">
                <h4 className="text-sm font-medium">Key Features:</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  {preset.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-red-600"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-lg font-bold">{preset.price}</div>
                <Button size="sm">Load Configuration</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
