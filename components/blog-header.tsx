import Image from "next/image"

export function BlogHeader() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.roadracingworld.com/wp-content/uploads/2025/11/image-31_1762702390-e1762702424929.png"
          alt="Ride Culture Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Ride Culture</h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Stories, tips, and insights from the world of superbikes and the passionate community behind them.
          </p>
        </div>
      </div>
    </div>
  )
}
