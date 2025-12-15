import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">SUPERBIKES</h3>
            <p className="text-sm text-muted-foreground">
              Crafting the ultimate riding experience through precision engineering and relentless innovation.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/explore" className="text-muted-foreground hover:text-foreground">
                  Explore Bikes
                </Link>
              </li>
              <li>
                <Link href="/configurator" className="text-muted-foreground hover:text-foreground">
                  Build Your Beast
                </Link>
              </li>
              <li>
                <Link href="/test-ride" className="text-muted-foreground hover:text-foreground">
                  Book a Test Ride
                </Link>
              </li>
              <li>
                <Link href="/legacy" className="text-muted-foreground hover:text-foreground">
                  Our Legacy
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Ride Culture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/dealers" className="text-muted-foreground hover:text-foreground">
                  Find a Dealer
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-muted-foreground hover:text-foreground">
                  Warranty Information
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-muted-foreground hover:text-foreground">
                  Service & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with the latest news, events, and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="max-w-[220px]" />
              <Button className="bg-red-600 text-white hover:bg-red-700">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our{" "}
              <Link href="/privacy" className="underline underline-offset-2">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} SuperBikes Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
