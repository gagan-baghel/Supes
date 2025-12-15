import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function LegacyTestimonials() {
  const testimonials = [
    {
      quote:
        "These motorcycles aren't just machines; they're works of art that deliver an unparalleled riding experience. Nothing else comes close.",
      author: "Michael Knight",
      role: "5-time World Champion",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "After 20 years of testing motorcycles professionally, I can confidently say these are the most responsive and thrilling bikes I've ever ridden.",
      author: "Sarah Johnson",
      role: "Motorcycle Journalist",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The engineering precision and attention to detail is evident in every aspect of these machines. They've redefined what's possible on two wheels.",
      author: "Dr. James Chen",
      role: "Engineering Professor",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">What Experts Say</h2>
        <p className="mt-2 text-muted-foreground">Testimonials from industry professionals and champions</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-red-600/30" />

              <blockquote className="mt-4 text-lg">"{testimonial.quote}"</blockquote>

              <div className="mt-6 flex items-center space-x-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
