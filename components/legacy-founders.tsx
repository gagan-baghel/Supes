import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function LegacyFounders() {
  const founders = [
    {
      name: "Roberto Moretti",
      role: "Founder & Chief Engineer",
      image: "https://dot.la/media-library/super73-co-founder-and-ceo-legrand-crewse.jpg?id=30416795&width=2000&height=1500&quality=50&coordinates=127%2C0%2C111%2C0",
      bio: "A former Grand Prix motorcycle racer with a degree in mechanical engineering, Roberto founded the company with a vision to create motorcycles that combine racing performance with everyday usability.",
      quote:
        "We don't just build motorcycles; we craft experiences that connect riders to the road in the most visceral way possible.",
    },
    {
      name: "Elena Chen",
      role: "Co-Founder & Technical Director",
      image: "https://ultimatemotorcycling.com/wp-content/uploads/2019/11/Jason-Chinnock-Interview-Ducati-North-America-motorcycles-featured.jpg",
      bio: "With a background in aerodynamics and materials science, Elena pioneered many of our revolutionary design elements and manufacturing processes that set our bikes apart.",
      quote: "Innovation isn't just about new technology; it's about finding elegant solutions to complex problems.",
    },
    {
      name: "Marco Rossi",
      role: "Co-Founder & Racing Director",
      image: "https://www.roadracingworld.com/wp-content/uploads/rrw/49da8eb2-6a5c-4a71-bffd-8c3cad4063a6.jpg",
      bio: "A legendary racer with multiple world championships to his name, Marco brought racing DNA into the company's bloodstream and established our racing division.",
      quote: "What we learn on Sunday, we apply on Monday. Racing isn't just marketing—it's our R&D laboratory.",
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">The Visionaries</h2>
        <p className="mt-2 text-muted-foreground">Meet the founders who turned a dream into reality</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {founders.map((founder) => (
          <Card key={founder.name} className="overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <Image
                src={founder.image || "/placeholder.svg"}
                alt={founder.name}
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">{founder.name}</h3>
              <p className="text-sm text-red-600">{founder.role}</p>
              <p className="mt-4 text-sm text-muted-foreground">{founder.bio}</p>
              <blockquote className="mt-4 border-l-2 border-red-600 pl-4 italic">"{founder.quote}"</blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
