import Link from "next/link"
import { FileText } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const recentTests = [
  {
    id: "1",
    name: "Frontend Developer Assessment",
    date: "2 days ago",
    status: "active",
  },
  {
    id: "2",
    name: "Product Manager Interview",
    date: "1 week ago",
    status: "active",
  },
  {
    id: "3",
    name: "UX Designer Skills Test",
    date: "2 weeks ago",
    status: "draft",
  },
  {
    id: "4",
    name: "Data Analyst Technical Quiz",
    date: "3 weeks ago",
    status: "active",
  },
]

export function RecentTests() {
  return (
    <div className="space-y-4">
      {recentTests.map((test) => (
        <Link
          key={test.id}
          href={`/dashboard/tests/${test.id}`}
          className="flex items-center gap-4 rounded-lg border p-3 transition-colors hover:bg-muted/50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20">
            <FileText className="h-5 w-5 text-teal-600 dark:text-teal-400" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">{test.name}</p>
              <Badge
                variant={test.status === "active" ? "default" : "outline"}
                className={test.status === "active" ? "bg-teal-500 hover:bg-teal-600" : "text-muted-foreground"}
              >
                {test.status === "active" ? "Active" : "Draft"}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">Created {test.date}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
