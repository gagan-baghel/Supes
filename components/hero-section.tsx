"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import { useMobile } from "@/hooks/use-mobile"

export function HeroSection() {
  const [muted, setMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    // Simulate loading delay for the preload animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-[90vh] md:h-[100vh] w-full overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="mb-4 h-16 w-16 animate-pulse rounded-full bg-red-600"></div>
            <p className="text-xl font-bold text-white">Revving Up...</p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background to-transparent"></div>
      <video
        autoPlay
        loop
        muted={muted}
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/placeholder.svg?height=1080&width=1920"
      >
        <source src="/videos/heroStart.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute bottom-0 right-0 z-20 p-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/20 backdrop-blur-lg"
          onClick={() => setMuted(!muted)}
        >
          {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>
      </div>
      <div className="container relative z-20 flex h-full flex-col items-start justify-center">
        <div className="max-w-2xl space-y-4">
          <h1 className="animate-fade-in text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Where Speed Meets <span className="text-red-600">Soul</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Experience the perfect fusion of engineering excellence and raw emotion.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href="/explore">
              <Button className="w-full bg-red-600 text-white hover:bg-red-700 sm:w-auto">Explore Bikes</Button>
            </Link>
            <Link href="/test-ride">
              <Button variant="outline" className="w-full backdrop-blur-lg sm:w-auto">
                Book a Test Ride
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-foreground/20">
          <div className="h-2 w-2 translate-x-[7px] translate-y-[6px] rounded-full bg-foreground/60"></div>
        </div>
      </div>
    </section>
  )
}
