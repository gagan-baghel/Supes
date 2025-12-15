import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

export function BlogGrid() {
  const articles = [
    {
      id: "mastering-corners",
      title: "Mastering the Art of Cornering",
      excerpt: "Professional techniques to improve your cornering skills and confidence on the track.",
      author: "Alex Marquez",
      authorRole: "Pro Rider",
      date: "May 12, 2023",
      readTime: "8 min read",
      image: "https://imgk.timesnownews.com/story/1568988961-KTM_790_Duke_leaning.jpg?tr=w-1200,h-900",
      category: "Riding Tips",
    },
    {
      id: "engineering-excellence",
      title: "The Engineering Behind Our V4 Engine",
      excerpt: "A deep dive into the revolutionary technology that powers our flagship superbikes.",
      author: "Elena Chen",
      authorRole: "Chief Engineer",
      date: "April 28, 2023",
      readTime: "12 min read",
      image: "https://d1w2dr7qusa94v.cloudfront.net/styles/header_image_4096x2204_/s3/header-images/vsb_mountain.jpg?itok=_mjabaj8",
      category: "Engineering",
    },
    {
      id: "alpine-adventure",
      title: "Alpine Adventure: Conquering Europe's Most Thrilling Roads",
      excerpt: "Join our community ride through the breathtaking mountain passes of the Alps.",
      author: "Marco Rossi",
      authorRole: "Community Lead",
      date: "June 5, 2023",
      readTime: "10 min read",
      image: "https://wallpapers.com/images/hd/superbike-pictures-c5wba3jd45ebpcjf.jpg",
      category: "Community",
    },
    {
      id: "track-day-prep",
      title: "Ultimate Track Day Preparation Guide",
      excerpt: "Everything you need to know to make the most of your track day experience.",
      author: "James Wilson",
      authorRole: "Racing Coach",
      date: "May 20, 2023",
      readTime: "15 min read",
      image: "https://cdni.autocarindia.com/ExtraImages/20250515054212_Norton%20V4%20SV%20front%20three%20quarter%20static.jpg",
      category: "Track Days",
    },
    {
      id: "maintenance-tips",
      title: "Essential Maintenance Tips for High-Performance Motorcycles",
      excerpt: "Keep your superbike in peak condition with these professional maintenance tips.",
      author: "Carlos Mendez",
      authorRole: "Master Technician",
      date: "June 12, 2023",
      readTime: "9 min read",
      image: "https://unitechitsolution.in/wp-content/uploads/2025/10/Untitled-design-46.jpg",
      category: "Maintenance",
    },
    {
      id: "racing-legends",
      title: "Racing Legends: Stories from the Paddock",
      excerpt: "Behind-the-scenes tales from some of the greatest names in motorcycle racing.",
      author: "Miguel Oliveira",
      authorRole: "Racing Historian",
      date: "June 18, 2023",
      readTime: "14 min read",
      image: "https://ic4.maxabout.us/tr:w-300/autos/tw_india/2024/11/Ola_Diamondhead-20241105110502.jpg",
      category: "Racing",
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Latest Articles</h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
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
                <h3 className="mb-2 text-xl font-bold group-hover:text-red-600">{article.title}</h3>
                <p className="mb-4 text-muted-foreground">{article.excerpt}</p>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-muted"></div>
                    <div>
                      <div className="text-sm font-medium">{article.author}</div>
                      <div className="text-xs text-muted-foreground">{article.authorRole}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
