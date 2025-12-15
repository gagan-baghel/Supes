import Image from "next/image"

export function LegacyPartners() {
  const partners = [
    {
      name: "Öhlins",
      logo: "https://m.media-amazon.com/images/I/61GhoVAVh-L.jpg",
      description: "Premium suspension systems",
    },
    {
      name: "Brembo",
      logo: "https://m.media-amazon.com/images/I/71ZTK4SAzxL.jpg",
      description: "High-performance braking systems",
    },
    {
      name: "Pirelli",
      logo: "https://www.maxxis.com/uk/wp-content/uploads/sites/4/2023/07/MaxxVenture-MA-ADV-pair.jpg",
      description: "Performance motorcycle tires",
    },
    {
      name: "Akrapovič",
      logo: "https://superbikestore.in/cdn/shop/products/Completo_BMW_S1000RR_my2020_SC1R-250mm_3-4Posteriore.jpg?v=1594213880",
      description: "Exhaust system technology",
    },
    {
      name: "Bosch",
      logo: "https://www.bosch-mobility.com/media/global/solutions/two-wheeler-and-powersports/rider-assistance-systems/advanced-rider-assistance-systems/2023-10-214_glasmotorrad-aras_stage_mobile.jpg",
      description: "Advanced electronics systems",
    },
    {
      name: "Shell",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zWcZMR4xfOAnIWoqm6x_ZSs6m8KHwOjWQw&s",
      description: "Performance lubricants",
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Our Technology Partners</h2>
        <p className="mt-2 text-muted-foreground">Collaborating with the best to deliver excellence</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {partners.map((partner) => (
          <div key={partner.name} className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
            <div className="h-16 w-40">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={200}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold">{partner.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
