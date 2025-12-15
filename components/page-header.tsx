import Image from "next/image"

interface PageHeaderProps {
  title: string
  description?: string
  image?: string
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative">
      {image && (
        <>
          <div className="absolute inset-0 z-0">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          </div>
        </>
      )}

      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
          {description && <p className="mt-4 text-lg text-muted-foreground md:text-xl">{description}</p>}
        </div>
      </div>
    </div>
  )
}
