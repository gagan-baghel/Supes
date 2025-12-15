import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestRideTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      location: "New York, NY",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The test ride experience was incredible. The staff was knowledgeable and the Phantom X exceeded all my expectations. I placed an order the same day!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Williams",
      location: "Los Angeles, CA",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "As a newer rider, I was nervous about testing such a powerful bike, but the team made me feel comfortable and gave me great guidance. Amazing experience!",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Chen",
      location: "Chicago, IL",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The mountain road test ride was perfect for experiencing the handling capabilities. The Stealth R's cornering ability is mind-blowing.",
      rating: 4,
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">What Riders Are Saying</h2>
        <p className="mt-2 text-muted-foreground">Hear from riders who have experienced our test rides</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="mt-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
              </div>

              <blockquote className="mt-4 text-sm">"{testimonial.quote}"</blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
