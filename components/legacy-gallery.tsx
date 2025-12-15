"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function LegacyGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "https://cdn.britannica.com/98/126498-050-8FB119B2/motorcycle-1900.jpg",
      alt: "First prototype motorcycle from 1990",
      year: 1990,
      caption: "The first prototype that started it all",
    },
    {
      src: "https://lirp.cdn-website.com/072a18a0/dms3rep/multi/opt/triumph-model-h-1916-640w.jpg",
      alt: "Original factory in Milan",
      year: 1992,
      caption: "Our original factory in Milan, Italy",
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2023/3/296512301/KC/YS/RW/187114653/yamaha-fz-x-ride-free-bike-500x500.jpg",
      alt: "First racing victory celebration",
      year: 1997,
      caption: "Celebrating our first racing victory",
    },
    {
      src: "https://imgd.aeplcdn.com/1280x720/n/7tdkbhb_1865194.jpg",
      alt: "Revolutionary V4 engine",
      year: 2001,
      caption: "The revolutionary V4 engine being assembled",
    },
    {
      src: "https://media1.thrillophilia.com/filestore/bhvou6x4btoy5nno3u2srvh76sb5_WhatsApp-Image-2019-12-13-at-10.27.09-PM.jpeg?w=576&h=650",
      alt: "First world championship",
      year: 2005,
      caption: "Marco Rossi winning our first world championship",
    },
    {
      src: "https://cdn.bikedekho.com/processedimages/kawasaki/kawasaki-ninja-zx-10r/source/kawasaki-ninja-zx-10r68e8e427b3819.jpg?tr=w-360",
      alt: "Modern production line",
      year: 2015,
      caption: "Our state-of-the-art production facility today",
    },
    {
      src: "https://cdn.bikedekho.com/processedimages/ultraviolette/f77/source/f7768a816a13cca5.jpg",
      alt: "Carbon fiber chassis development",
      year: 2015,
      caption: "Development of our carbon fiber monocoque chassis",
    },
    {
      src: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/battery-operated-motorcycle-cwevopy-250.jpg",
      alt: "Triple Crown celebration",
      year: 2019,
      caption: "Celebrating our historic Triple Crown achievement",
    },
  ]

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Historical Gallery</h2>
        <p className="mt-2 text-muted-foreground">A visual journey through our company's history</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-lg border"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <div className="text-xs font-medium text-white">{image.year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <Button variant="ghost" size="icon" className="absolute right-4 top-4 text-white" onClick={closeLightbox}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous image</span>
          </Button>

          <div className="max-h-[80vh] max-w-[90vw]">
            <div className="relative">
              <Image
                src={images[currentImage].src || "/placeholder.svg"}
                alt={images[currentImage].alt}
                width={800}
                height={600}
                className="max-h-[70vh] rounded-lg object-contain"
              />
              <div className="mt-4 text-center text-white">
                <div className="text-sm font-medium">{images[currentImage].year}</div>
                <div className="text-lg">{images[currentImage].caption}</div>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
      )}
    </div>
  )
}
