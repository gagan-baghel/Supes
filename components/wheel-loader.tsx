"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function WheelLoader({ loading = true }: { loading?: boolean }) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (!loading) return

    const interval = setInterval(() => {
      setRotation((prev) => (prev + 10) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [loading])

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <div className="relative h-40 w-40">
        {/* Outer tire */}
        <div className="absolute inset-0 rounded-full border-8 border-muted-foreground/30" />

        {/* Rotating wheel */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <Image
            src="https://png.pngtree.com/png-vector/20230131/ourmid/pngtree-red-wheel-vector-high-resolution-png-image_6578985.png"
            alt="Wheel loader"
            fill
            className="rounded-full object-cover mix-blend-multiply"
            priority
          />


        </div>
      </div>
    </div>
  )
}
