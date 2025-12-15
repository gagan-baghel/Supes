import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ChevronLeft } from "lucide-react"

export function ConfiguratorHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tighter">SUPERBIKES</span>
          </Link>
          <div className="hidden md:block">
            <Link href="/explore" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Explore
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
            <MainNav />
          </div>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
