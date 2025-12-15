import Image from "next/image"

export function TestRideGallery() {
  const images = [
    {
      src: "https://www.eazi-grip.com/wp-content/uploads/test-ride.jpg",
      alt: "Rider testing a superbike on mountain roads",
    },
    {
      src: "https://staryamaha.com.au/wp-content/uploads/2021/12/2022_YZF-R7_DPBMC_AUS_ACT_031-scaled-e1645413965201.jpg",
      alt: "Group of test riders at a dealership",
    },
    {
      src: "https://www.datocms-assets.com/119921/1714528734-test-riding-tips-with-honda-1.jpg?auto=format&w=740",
      alt: "Track day test ride experience",
    },
    {
      src: "https://www.evoindia.com/h-upload/uid/dtgrINWmDM46TsEFojk5EnW9oaUnJhqQ.jpg",
      alt: "Rider getting instructions before a test ride",
    },
    {
      src: "https://www.globalsuzuki.com/suzuki_family/motorcycle/img/202111-1/img04.jpg",
      alt: "Superbike lineup ready for test rides",
    },
    {
      src: "https://img.autocarindia.com/Reviews/20160527041102_5.jpg?w=700&c=0",
      alt: "Rider enjoying a test ride on coastal roads",
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Test Ride Gallery</h2>
        <p className="mt-2 text-muted-foreground">See what our test ride experiences look like</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
