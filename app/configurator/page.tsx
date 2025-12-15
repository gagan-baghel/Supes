import { BikeConfigurator } from "@/components/bike-configurator"
import { ConfiguratorSidebar } from "@/components/configurator-sidebar"
import { ConfiguratorControls } from "@/components/configurator-controls"
import { ConfiguratorHeader } from "@/components/configurator-header"
import { ConfiguratorSummary } from "@/components/configurator-summary"
import { ConfiguratorActions } from "@/components/configurator-actions"
import { ConfiguratorPresets } from "@/components/configurator-presets"
import { ConfiguratorAccessories } from "@/components/configurator-accessories"

export default function ConfiguratorPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px]">
          <div className="relative min-h-[calc(100vh-4rem)]">
            <BikeConfigurator />
            <ConfiguratorControls />
          </div>

          <div className="border-l">
            <ConfiguratorSidebar />
          </div>
        </div>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <ConfiguratorSummary />
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <ConfiguratorPresets />
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container">
            <ConfiguratorAccessories />
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <ConfiguratorActions />
          </div>
        </section>
      </main>
    </div>
  )
}
