import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogAuthorCardProps {
  author: {
    name: string
    role: string
    image: string
    bio: string
  }
}

export function BlogAuthorCard({ author }: BlogAuthorCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
        <div className="h-24 w-24 overflow-hidden rounded-full">
          <Image
            src={author.image || "/placeholder.svg"}
            alt={author.name}
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold">{author.name}</h3>
          <p className="text-sm text-red-600">{author.role}</p>
          <p className="mt-2 text-muted-foreground">{author.bio}</p>
          <div className="mt-4">
            <Link href={`/blog/author/${author.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <Button variant="outline">View All Articles</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
