import { Trophy } from "lucide-react"

export function LegacyAwards() {
  const awards = [
    {
      year: 2023,
      title: "Motorcycle of the Year",
      organization: "Motorcycle News",
      model: "Phantom X",
      description: "Recognized for revolutionary design and unmatched performance.",
    },
    {
      year: 2022,
      title: "Best Superbike",
      organization: "Global Motorcycle Awards",
      model: "Stealth R",
      description: "Praised for its perfect balance of power and handling.",
    },
    {
      year: 2021,
      title: "Innovation Award",
      organization: "International Design Excellence Awards",
      model: "Electric Prototype",
      description: "Honored for groundbreaking electric motorcycle technology.",
    },
    {
      year: 2020,
      title: "Best Engine",
      organization: "Engine Technology International",
      model: "V4 Evolution",
      description: "Recognized for efficiency, power delivery, and reliability.",
    },
    {
      year: 2019,
      title: "Manufacturer of the Year",
      organization: "World Motorcycle Championship",
      model: "Racing Division",
      description: "Awarded for dominating performance across multiple racing categories.",
    },
    {
      year: 2018,
      title: "Design Excellence",
      organization: "Industrial Design Society",
      model: "Vortex GT",
      description: "Celebrated for its perfect fusion of form and function.",
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Awards & Recognition</h2>
        <p className="mt-2 text-muted-foreground">Celebrating our achievements and industry recognition</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((award, index) => (
          <div key={index} className="rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="rounded-full bg-red-600/10 px-3 py-1 text-sm font-medium text-red-600">{award.year}</div>
              <Trophy className="h-6 w-6 text-yellow-500" />
            </div>

            <h3 className="mt-4 text-xl font-bold">{award.title}</h3>
            <p className="text-sm text-muted-foreground">{award.organization}</p>

            <div className="mt-4 flex items-center justify-between">
              <div className="font-medium">{award.model}</div>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
