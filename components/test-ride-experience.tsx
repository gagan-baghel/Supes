import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function TestRideExperience() {
  const experiences = [
    {
      id: "street",
      title: "Street Experience",
      description: "Feel the power and agility of our bikes in an urban environment",
      image: "https://wallpapercave.com/wp/wp4449711.jpg",
      features: [
        "30-minute guided ride through urban streets",
        "Experience real-world handling and performance",
        "Test acceleration, braking, and maneuverability",
      ],
    },
    {
      id: "mountain",
      title: "Mountain Road Experience",
      description: "Tackle twisty mountain roads and experience the precision handling",
      image: "https://peakvisor.com/photo/SD/Mountains-by-Motorcycle-2024-Royal-Enfield-Himalayan.jpg",
      features: [
        "45-minute guided ride on scenic mountain roads",
        "Experience cornering and handling on varied terrain",
        "Test suspension and chassis performance",
      ],
    },
    {
      id: "track",
      title: "Track Day Experience",
      description: "Push the limits in a controlled track environment with professional guidance",
      image: "https://cdni.autocarindia.com/ExtraImages/20170906101809_DSC_5473.jpg",
      features: [
        "Full track day with multiple sessions",
        "Professional instruction and feedback",
        "Experience the full performance potential",
        "Video analysis of your riding technique",
      ],
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Choose Your Experience</h2>
        <p className="mt-2 text-muted-foreground">Select the perfect environment to test our superbikes</p>
      </div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`overflow-hidden rounded-lg border bg-card ${index % 2 === 0 ? "" : "md:flex-row-reverse"} md:flex`}
          >
            <div className="md:w-1/2">
              <div className="aspect-[3/2] h-full">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="p-6 md:w-1/2 md:p-8">
              <h3 className="text-2xl font-bold">{experience.title}</h3>
              <p className="mt-2 text-muted-foreground">{experience.description}</p>

              <div className="mt-4">
                <h4 className="font-medium">What's included:</h4>
                <ul className="mt-2 space-y-1">
                  {experience.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="mt-6 bg-red-600 text-white hover:bg-red-700">
                Select Experience
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
