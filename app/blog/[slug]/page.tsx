import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ChevronLeft, Share2, Bookmark, ThumbsUp } from "lucide-react"
import { BlogRelated } from "@/components/blog-related"
import { BlogComments } from "@/components/blog-comments"
import { BlogAuthorCard } from "@/components/blog-author-card"
import { BlogNewsletter } from "@/components/blog-newsletter"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real implementation, this would fetch the blog post data based on the slug
  const post = {
    title: "Mastering the Art of Cornering",
    excerpt: "Professional techniques to improve your cornering skills and confidence on the track.",
    content: `
      <p>Cornering is where the true art of motorcycle riding comes to life. It's a complex dance of physics, technique, and feel that separates good riders from great ones. In this comprehensive guide, we'll explore the techniques that professional riders use to master corners of all types.</p>
      
      <h2>The Fundamentals of Cornering</h2>
      
      <p>Before diving into advanced techniques, it's essential to understand the basic principles that govern motorcycle cornering:</p>
      
      <ul>
        <li><strong>Countersteering:</strong> The initial input to initiate a turn</li>
        <li><strong>Body position:</strong> How you position your weight affects the bike's behavior</li>
        <li><strong>Line selection:</strong> The path you choose through a corner</li>
        <li><strong>Throttle control:</strong> Managing power delivery throughout the turn</li>
        <li><strong>Braking technique:</strong> When and how to slow down before and during a corner</li>
      </ul>
      
      <p>Each of these elements must work in harmony to achieve the perfect corner. Let's break them down one by one.</p>
      
      <h2>Countersteering: The Science of Turning</h2>
      
      <p>Many riders don't fully understand countersteering, yet it's the fundamental technique that initiates every turn on a motorcycle. To turn right, you momentarily push forward on the right handlebar (steering left). This counterintuitive action causes the bike to lean to the right, which is what actually makes the motorcycle turn right.</p>
      
      <p>The physics behind this are fascinating: pushing forward on the right handlebar causes the front wheel to momentarily steer left, which moves the contact patch of the tire to the left of the bike's center of gravity. This creates a rightward lean, and the motorcycle follows the lean.</p>
      
      <h2>Body Position: The Art of Weight Distribution</h2>
      
      <p>Your body position dramatically affects how your motorcycle handles in corners. On the track, you'll see riders hanging off the inside of the bike, with their inside knee out and their upper body low. This technique shifts the combined center of gravity of the rider and motorcycle, allowing the bike to take a tighter line or remain more upright for the same line.</p>
      
      <p>For street riding, a more moderate approach is appropriate. Moving your weight slightly to the inside of the turn while keeping your outside arm relaxed will improve your cornering without sacrificing stability or safety.</p>
    `,
    author: {
      name: "Alex Marquez",
      role: "Pro Rider",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Former Grand Prix motorcycle racer with over 15 years of professional racing experience. Now dedicated to helping riders improve their skills and confidence on the track.",
    },
    date: "May 12, 2023",
    readTime: "8 min read",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Aleix_Espargar%C3%B3_leads_the_pack_2021_Sachsenring.jpg",
    category: "Riding Tips",
    tags: ["Cornering", "Track Skills", "Riding Techniques", "Performance"],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <article>
          {/* Hero Section */}
          <div className="relative">
            <div className="absolute inset-0 z-0">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
            </div>

            <div className="container relative z-10 py-16 md:py-24">
              <div className="mx-auto max-w-3xl">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Back to Blog
                </Link>

                <div className="mt-6">
                  <div className="inline-block rounded-lg bg-red-600/10 px-3 py-1 text-sm text-red-600">
                    {post.category}
                  </div>
                  <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{post.title}</h1>
                  <p className="mt-4 text-xl text-muted-foreground">{post.excerpt}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={post.author.image || "/placeholder.svg"}
                          alt={post.author.name}
                          width={100}
                          height={100}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{post.author.name}</div>
                        <div className="text-sm text-muted-foreground">{post.author.role}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="container py-12">
            <div className="mx-auto max-w-3xl">
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-b py-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="rounded-full bg-muted px-3 py-1 text-sm hover:bg-muted/80"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Share2 className="mr-1 h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="mr-1 h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-1 h-4 w-4" />
                    Like
                  </Button>
                </div>
              </div>

              <div className="mt-12">
                <BlogAuthorCard author={post.author} />
              </div>
            </div>
          </div>
        </article>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <BlogRelated />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <BlogComments />
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-md">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
                <p className="mt-2 text-muted-foreground">
                  Get the latest articles, tips, and insights delivered to your inbox.
                </p>
              </div>
              <div className="mt-6">
                <BlogNewsletter />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
