"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RotateCw, Volume2 } from "lucide-react"
import { WheelLoader } from "@/components/wheel-loader"

export function BikeConfigurator() {
  const [loading, setLoading] = useState(true)
  const [angle, setAngle] = useState(0)
  const [color, setColor] = useState("red")
  const [exhaust, setExhaust] = useState("standard")
  const [wheelType, setWheelType] = useState("standard")

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // This would be replaced with actual 3D model or 360° view in a real implementation
  const getImageForAngle = () => {
    return `https://3drt.com/store/images/detailed/2/bikes-pack-3d-honda-cbr-harley-davidson-24.jpg?t=1431440640`
  }

  const rotateLeft = () => {
    setAngle((prev) => (prev - 45) % 360)
  }

  const rotateRight = () => {
    setAngle((prev) => (prev + 45) % 360)
  }

  const playEngineSound = () => {
    // In a real implementation, this would play the actual engine sound
    console.log(`Playing ${exhaust} exhaust sound`)
  }

  return (
    <div className="relative h-full w-full bg-gradient-to-b from-background to-muted/30 p-4">
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <WheelLoader loading={loading} />
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center">
          <div className="relative aspect-square w-full max-w-3xl">
            <Image
              src={getImageForAngle() || "/placeholder.svg"}
              alt="Configurable Superbike"
              fill
              className="object-contain"
              style={{ transform: `rotate(${angle}deg)` }}
            />
            <div
              className={`absolute inset-0 bg-${color}-500/20 mix-blend-overlay transition-colors duration-300`}
            ></div>

            {/* 360° rotation controls */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={rotateLeft}
                className="rounded-full bg-background/50 backdrop-blur-sm"
              >
                <RotateCw className="h-5 w-5 -scale-x-100" />
                <span className="sr-only">Rotate Left</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={rotateRight}
                className="rounded-full bg-background/50 backdrop-blur-sm"
              >
                <RotateCw className="h-5 w-5" />
                <span className="sr-only">Rotate Right</span>
              </Button>
            </div>

            {/* Engine sound button */}
            <div className="absolute bottom-4 right-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full bg-background/50 backdrop-blur-sm"
                onClick={playEngineSound}
              >
                <Volume2 className="mr-2 h-4 w-4" />
                Hear Engine
              </Button>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-muted-foreground">Drag to rotate or use the controls below</div>
        </div>
      )}
    </div>
  )
}
