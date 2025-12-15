import { HeroSection } from "@/components/hero-section"
import { BikeShowcase } from "@/components/bike-showcase"
import { ConfiguratorPreview } from "@/components/configurator-preview"
import { TestRideSection } from "@/components/test-ride-section"
import { LegacyPreview } from "@/components/legacy-preview"
import { BlogPreview } from "@/components/blog-preview"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <BikeShowcase />
      <ConfiguratorPreview />
      <TestRideSection />
      <LegacyPreview />
      <BlogPreview />
    </div>
  )
}
