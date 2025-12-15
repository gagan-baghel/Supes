import { TestRideForm } from "@/components/test-ride-form"
import { TestRideLocations } from "@/components/test-ride-locations"
import { TestRideModels } from "@/components/test-ride-models"
import { TestRideExperience } from "@/components/test-ride-experience"
import { TestRideTestimonials } from "@/components/test-ride-testimonials"
import { TestRideFAQ } from "@/components/test-ride-faq"
import { PageHeader } from "@/components/page-header"
import { TestRideGallery } from "@/components/test-ride-gallery"
import { TestRideRequirements } from "@/components/test-ride-requirements"

export default function TestRidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        title="Book a Test Ride"
        description="Experience the thrill of our superbikes firsthand. Book a test ride at your nearest location."
        image="https://marvel-b1-cdn.bc0a.com/f00000000269959/s18390.pcdn.co/wp-content/uploads/2024/11/harley-davidson-motogp-test-ride.jpg"
      />

      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <TestRideForm />
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <TestRideLocations />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <TestRideModels />
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <TestRideExperience />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <TestRideGallery />
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <TestRideTestimonials />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <TestRideRequirements />
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <TestRideFAQ />
          </div>
        </section>
      </main>
    </div>
  )
}
