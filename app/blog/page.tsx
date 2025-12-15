import { BlogHeader } from "@/components/blog-header"
import { BlogGrid } from "@/components/blog-grid"
import { BlogCategories } from "@/components/blog-categories"
import { BlogFeatured } from "@/components/blog-featured"
import { BlogNewsletter } from "@/components/blog-newsletter"
import { BlogPopular } from "@/components/blog-popular"
import { BlogAuthors } from "@/components/blog-authors"
import { BlogSearch } from "@/components/blog-search"
import { BlogPagination } from "@/components/blog-pagination"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <BlogHeader />

      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <BlogFeatured />
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
              <div>
                <BlogSearch />
                <div className="mt-8">
                  <BlogGrid />
                </div>
                <div className="mt-8">
                  <BlogPagination />
                </div>
              </div>

              <div className="space-y-8">
                <BlogCategories />
                <BlogPopular />
                <BlogAuthors />
                <BlogNewsletter />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
