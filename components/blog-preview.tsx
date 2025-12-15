import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    id: "mastering-corners",
    title: "Mastering the Art of Cornering",
    excerpt: "Professional techniques to improve your cornering skills and confidence on the track.",
    author: "Alex Marquez",
    authorRole: "Pro Rider",
    date: "May 12, 2023",
    image: "https://w0.peakpx.com/wallpaper/22/214/HD-wallpaper-group-of-people-riding-sports-motorcycles.jpg",
    category: "Riding Tips",
  },
  {
    id: "engineering-excellence",
    title: "The Engineering Behind Our V4 Engine",
    excerpt: "A deep dive into the revolutionary technology that powers our flagship superbikes.",
    author: "Elena Chen",
    authorRole: "Chief Engineer",
    date: "April 28, 2023",
    image: "https://w0.peakpx.com/wallpaper/119/860/HD-wallpaper-2013-bmw-m6-us-version-engine-car.jpg",
    category: "Engineering",
  },
  {
    id: "alpine-adventure",
    title: "Alpine Adventure: Conquering Europe's Most Thrilling Roads",
    excerpt: "Join our community ride through the breathtaking mountain passes of the Alps.",
    author: "Marco Rossi",
    authorRole: "Community Lead",
    date: "June 5, 2023",
    image: "https://img.freepik.com/free-photo/moto-freestyle_654080-1893.jpg?semt=ais_hybrid&w=740&q=80",
    category: "Community",
  },
]

export function BlogPreview() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ride Culture</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Stories, tips, and insights from the world of superbikes and the passionate community behind them.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`} className="group">
              <div className="overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium">
                    {article.category}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
                  <p className="mb-4 text-muted-foreground">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-muted"></div>
                      <div>
                        <div className="text-sm font-medium">{article.author}</div>
                        <div className="text-xs text-muted-foreground">{article.authorRole}</div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">{article.date}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg">
              View All Articles
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
