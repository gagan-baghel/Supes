import Image from "next/image"
import Link from "next/link"

export function BlogPopular() {
  const popularArticles = [
    {
      id: "track-day-essentials",
      title: "10 Track Day Essentials Every Rider Needs",
      date: "May 5, 2023",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "winter-storage",
      title: "Preparing Your Superbike for Winter Storage",
      date: "April 18, 2023",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "tire-guide",
      title: "The Ultimate Superbike Tire Guide",
      date: "June 2, 2023",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "racing-lines",
      title: "Mastering Racing Lines: A Pro's Perspective",
      date: "May 22, 2023",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="text-lg font-bold">Popular Articles</h3>

      <div className="mt-4 space-y-4">
        {popularArticles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.id}`}
            className="flex items-center space-x-3 rounded-md p-2 hover:bg-muted"
          >
            <div className="h-12 w-12 overflow-hidden rounded-md">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium line-clamp-2">{article.title}</h4>
              <p className="text-xs text-muted-foreground">{article.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
