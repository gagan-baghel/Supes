import type React from "react"
import Link from "next/link"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>SuperBikes - Premium Motorcycle Experience</title>
        <meta name="description" content="Experience the ultimate superbike collection - where speed meets soul." />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem themes={["light", "dark", "track"]}>
          <div className="flex min-h-screen flex-col bg-background">
            <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border/40">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-bold text-xl tracking-tighter">SUPERBIKES</span>
                </Link>
                <div className="hidden md:flex">
                  <MainNav />
                </div>
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <MobileNav />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
