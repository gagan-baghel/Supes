import Image from "next/image"
import Link from "next/link"

export function BlogAuthors() {
  const authors = [
    {
      id: "alex-marquez",
      name: "Alex Marquez",
      role: "Pro Rider",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "elena-chen",
      name: "Elena Chen",
      role: "Chief Engineer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "james-wilson",
      name: "James Wilson",
      role: "Racing Coach",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "carlos-mendez",
      name: "Carlos Mendez",
      role: "Master Technician",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="text-lg font-bold">Featured Authors</h3>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {authors.map((author) => (
          <Link
            key={author.id}
            href={`/blog/author/${author.id}`}
            className="flex flex-col items-center rounded-md p-2 text-center hover:bg-muted"
          >
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src={author.image || "/placeholder.svg"}
                alt={author.name}
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-2">
              <h4 className="font-medium">{author.name}</h4>
              <p className="text-xs text-muted-foreground">{author.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
