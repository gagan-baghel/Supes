"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore Bikes" },
  { href: "/configurator", label: "Build Your Beast" },
  { href: "/test-ride", label: "Test Ride" },
  { href: "/legacy", label: "The Legacy" },
  { href: "/blog", label: "Ride Culture" },
]

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col bg-background/95 backdrop-blur-lg">
        <div className="mt-12 flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-lg font-medium transition-colors hover:text-foreground/80",
                pathname === item.href ? "text-foreground" : "text-foreground/60",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-6">
            <Button className="w-full bg-red-600 text-white hover:bg-red-700" asChild>
              <Link href="/test-ride" onClick={() => setOpen(false)}>
                Book a Test Ride
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
