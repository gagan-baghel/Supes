import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function BikeComparison() {
  const comparisonBikes = [
    {
      id: "phantom-x",
      name: "Phantom X",
      image: "https://cdni.autocarindia.com/ExtraImages/20220615064950_Norton%20V4SV%202%20Final.jpg",
      price: "$32,999",
      engine: "1000cc V4",
      power: "220 HP",
      torque: "121 Nm",
      weight: "186 kg",
      seatHeight: "830 mm",
      fuelCapacity: "16 L",
    },
    {
      id: "stealth-r",
      name: "Stealth R",
      image: "https://autonexa.com/storage/uploads/2021/11/20201120031956_2020-Ducati-Panigale-V4-SP-rear_1637218101.jpg",
      price: "$28,499",
      engine: "999cc Inline-4",
      power: "205 HP",
      torque: "115 Nm",
      weight: "193 kg",
      seatHeight: "825 mm",
      fuelCapacity: "17 L",
    },
    {
      id: "velocity-r",
      name: "Velocity R",
      image: "https://etimg.etb2bimg.com/photo/85296016.cms",
      price: "$29,999",
      engine: "998cc Inline-4",
      power: "210 HP",
      torque: "118 Nm",
      weight: "189 kg",
      seatHeight: "835 mm",
      fuelCapacity: "16.5 L",
    },
  ]

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Compare Models</h2>
        <p className="mt-2 text-muted-foreground">See how our flagship models stack up against each other</p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Model</TableHead>
              {comparisonBikes.map((bike) => (
                <TableHead key={bike.id} className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 h-24 w-32 overflow-hidden rounded-md">
                      <Image
                        src={bike.image || "/placeholder.svg"}
                        alt={bike.name}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="font-bold">{bike.name}</span>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Price</TableCell>
              {comparisonBikes.map((bike) => (
                <TableCell key={bike.id} className="text-center">
                  {bike.price}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Engine</TableCell>
              {comparisonBikes.map((bike) => (
                <TableCell key={bike.id} className="text-center">
                  {bike.engine}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Power</TableCell>
              {comparisonBikes.map((bike) => (
                <TableCell key={bike.id} className="text-center">
                  {bike.power}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Torque</TableCell>
              {comparisonBikes.map((bike) => (
                <TableCell key={bike.id} className="text-center">
                  {bike.torque}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Weight</TableCell>
              {comparisonBikes.map((bike) => (
                <TableCell key={bike.id} className="text-center">
                  {bike.weight}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Seat Height</TableCell>
              {comparisonBikes.map((bike) => (
                <TableCell key={bike.id} className="text-center">
                  {bike.seatHeight}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Fuel Capacity</TableCell>
              {comparisonBikes.map((bike) => (
                <TableCell key={bike.id} className="text-center">
                  {bike.fuelCapacity}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              {comparisonBikes.map((bike) => (
                <TableCell key={bike.id} className="text-center">
                  <Link href={`/explore/${bike.id}`}>
                    <Button size="sm" className="bg-red-600 text-white hover:bg-red-700">
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 text-center">
        <Link href="/compare">
          <Button variant="outline">
            Advanced Comparison Tool
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
