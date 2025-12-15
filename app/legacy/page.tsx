import { LegacyHero } from "@/components/legacy-hero"
import { LegacyTimeline } from "@/components/legacy-timeline"
import { LegacyFounders } from "@/components/legacy-founders"
import { LegacyInnovations } from "@/components/legacy-innovations"
import { LegacyRacing } from "@/components/legacy-racing"
import { LegacyGallery } from "@/components/legacy-gallery"
import { LegacyAwards } from "@/components/legacy-awards"
import { LegacyTestimonials } from "@/components/legacy-testimonials"
import { LegacyPartners } from "@/components/legacy-partners"

export default function LegacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LegacyHero />

      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <LegacyTimeline />
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <LegacyFounders />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <LegacyInnovations />
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <LegacyRacing />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <LegacyGallery />
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <LegacyAwards />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <LegacyTestimonials />
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <LegacyPartners />
          </div>
        </section>
      </main>
    </div>
  )
}
