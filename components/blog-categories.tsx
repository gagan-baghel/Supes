import Link from "next/link"

export function BlogCategories() {
  const categories = [
    { name: "Riding Tips", count: 12 },
    { name: "Engineering", count: 8 },
    { name: "Community", count: 15 },
    { name: "Track Days", count: 9 },
    { name: "Maintenance", count: 11 },
    { name: "Racing", count: 14 },
    { name: "Travel", count: 7 },
    { name: "Reviews", count: 10 },
  ]

  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="text-lg font-bold">Categories</h3>

      <div className="mt-4 space-y-2">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center justify-between rounded-md p-2 hover:bg-muted"
          >
            <span>{category.name}</span>
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{category.count}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
