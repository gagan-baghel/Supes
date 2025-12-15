import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, HelpCircle, AlertCircle } from "lucide-react"

export function TestRideRequirements() {
  const requirements = [
    {
      title: "Valid Motorcycle License",
      description: "You must have a valid motorcycle license or endorsement appropriate for the bike you wish to test.",
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Protective Gear",
      description: "Full-face helmet, motorcycle jacket, gloves, long pants, and over-the-ankle footwear are required.",
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Age Requirement",
      description: "You must be at least 21 years of age to test ride our high-performance motorcycles.",
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Riding Experience",
      description: "Minimum 2 years of riding experience is recommended for our high-performance models.",
      icon: <HelpCircle className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Insurance Waiver",
      description: "You'll need to sign a liability waiver before your test ride.",
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
    },
    {
      title: "Weather Conditions",
      description: "Test rides may be canceled due to inclement weather for safety reasons.",
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Test Ride Requirements</h2>
        <p className="mt-2 text-muted-foreground">What you need to know before booking your test ride</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {requirements.map((requirement, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{requirement.icon}</div>
                <h3 className="text-lg font-bold">{requirement.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{requirement.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
