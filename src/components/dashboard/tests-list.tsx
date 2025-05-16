import { FileText, MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const tests = [
  {
    id: "1",
    name: "Frontend Developer Assessment",
    description: "Comprehensive test for frontend development skills including HTML, CSS, JavaScript, and React.",
    questions: 25,
    duration: 60,
    created: "May 10, 2025",
    status: "active",
  },
  {
    id: "2",
    name: "Product Manager Interview",
    description:
      "Assessment for product management skills, including product strategy, roadmapping, and prioritization.",
    questions: 20,
    duration: 45,
    created: "May 5, 2025",
    status: "active",
  },
  {
    id: "3",
    name: "UX Designer Skills Test",
    description: "Test for UX design skills including wireframing, prototyping, and user research.",
    questions: 15,
    duration: 30,
    created: "April 28, 2025",
    status: "draft",
  },
  {
    id: "4",
    name: "Data Analyst Technical Quiz",
    description: "Technical assessment for data analysis skills including SQL, Excel, and data visualization.",
    questions: 30,
    duration: 90,
    created: "April 20, 2025",
    status: "active",
  },
  {
    id: "5",
    name: "Marketing Specialist Assessment",
    description: "Evaluation of marketing skills including digital marketing, content creation, and analytics.",
    questions: 22,
    duration: 50,
    created: "April 15, 2025",
    status: "active",
  },
  {
    id: "6",
    name: "DevOps Engineer Technical Test",
    description: "Technical assessment for DevOps skills including CI/CD, containerization, and cloud infrastructure.",
    questions: 28,
    duration: 75,
    created: "April 10, 2025",
    status: "draft",
  },
]

export function TestsList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tests.map((test) => (
        <Card key={test.id} className="overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="line-clamp-1">{test.name}</CardTitle>
                <CardDescription className="line-clamp-2">{test.description}</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuItem>Preview</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <FileText className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>{test.questions} questions</span>
              </div>
              <div>{test.duration} min</div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t bg-muted/50 px-6 py-3">
            <div className="flex items-center text-xs text-muted-foreground">Created {test.created}</div>
            <Badge
              variant={test.status === "active" ? "default" : "outline"}
              className={test.status === "active" ? "bg-teal-500 hover:bg-teal-600" : "text-muted-foreground"}
            >
              {test.status === "active" ? "Active" : "Draft"}
            </Badge>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
