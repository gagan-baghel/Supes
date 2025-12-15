import { BikeFilters } from "@/components/bike-filters"
import { BikeCatalog } from "@/components/bike-catalog"
import { BikeComparison } from "@/components/bike-comparison"
import { BikeSpecifications } from "@/components/bike-specifications"
import { PageHeader } from "@/components/page-header"
import { BikeCategories } from "@/components/bike-categories"
import { FeaturedBike } from "@/components/featured-bike"
import { TestRideCallout } from "@/components/test-ride-callout"
import { BikeAccessories } from "@/components/bike-accessories"

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Explore Our Bikes"
        description="Discover our collection of precision-engineered machines designed to deliver the ultimate riding experience."
        image="https://s1.cdn.autoevolution.com/images/news/gallery/checkout-this-50-strong-superbike-collection-also-features-championship-winning-bikes_5.jpg"
      />

      <main className="flex-1">
        <BikeCategories />

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <FeaturedBike />
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
              <BikeFilters />
              <BikeCatalog />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <BikeComparison />
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <BikeSpecifications />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <BikeAccessories />
          </div>
        </section>

        <TestRideCallout />
      </main>
    </div>
  )
}
