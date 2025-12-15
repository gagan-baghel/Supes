import Image from "next/image"
import Link from "next/link"

export function BlogRelated() {
  const relatedArticles = [
    {
      id: "track-day-prep",
      title: "Ultimate Track Day Preparation Guide",
      excerpt: "Everything you need to know to make the most of your track day experience.",
      image: "https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_157/c_auto,w_1200,h_600/f_auto,q_auto/redbullcom/2024/1/9/ydzduhibzeybeipymmrm/toprak-razgatlioglu-superbike",
      category: "Track Days",
    },
    {
      id: "racing-lines",
      title: "Mastering Racing Lines: A Pro's Perspective",
      excerpt: "Learn how to choose the perfect line through any corner for maximum speed and control.",
      image: "https://www.cyclenews.com/wp-content/uploads/2019/06/2019-spain-world-superbike-results-world-superbike-race-two.jpg",
      category: "Riding Tips",
    },
    {
      id: "braking-techniques",
      title: "Advanced Braking Techniques for Superbikes",
      excerpt: "Improve your braking skills to shave seconds off your lap times and ride safer on the street.",
      image: "https://www.cycleworld.com/resizer/N2E8GuKGEwNYqmx3hjVqu4mmMkk=/1200x900/cloudfront-us-east-1.images.arcpublishing.com/octane/3ECNUD2AY7WZKIPGUVI5CYBRCQ.jpg",
      category: "Riding Tips",
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Related Articles</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {relatedArticles.map((article) => (
          <Link key={article.id} href={`/blog/${article.id}`} className="group">
            <div className="overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[5/3] overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium">
                  {article.category}
                </div>
                <h3 className="text-lg font-bold group-hover:text-red-600">{article.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{article.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
