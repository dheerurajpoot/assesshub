"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle, Clock, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for user tests
const userTests = [
  {
    id: "1",
    title: "JavaScript Fundamentals",
    type: "Quiz",
    status: "completed",
    score: "85%",
    dueDate: "Completed on May 10, 2023",
  },
  {
    id: "2",
    title: "React Component Architecture",
    type: "Practical",
    status: "completed",
    score: "92%",
    dueDate: "Completed on May 15, 2023",
  },
  {
    id: "3",
    title: "CSS and Responsive Design",
    type: "Quiz",
    status: "completed",
    score: "78%",
    dueDate: "Completed on May 18, 2023",
  },
  {
    id: "4",
    title: "API Integration",
    type: "Practical",
    status: "pending",
    score: "-",
    dueDate: "Due by May 25, 2023",
  },
  {
    id: "5",
    title: "State Management",
    type: "Quiz",
    status: "pending",
    score: "-",
    dueDate: "Due by May 28, 2023",
  },
]

export function UserTestsList() {
  const [tests] = useState(userTests)

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Test Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tests.map((test) => (
            <TableRow key={test.id}>
              <TableCell className="font-medium">{test.title}</TableCell>
              <TableCell>{test.type}</TableCell>
              <TableCell>
                {test.status === "completed" ? (
                  <Badge className="bg-green-500 hover:bg-green-600">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Completed
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-amber-500 text-amber-500">
                    <Clock className="mr-1 h-3 w-3" />
                    Pending
                  </Badge>
                )}
              </TableCell>
              <TableCell>{test.score}</TableCell>
              <TableCell>{test.dueDate}</TableCell>
              <TableCell className="text-right">
                {test.status === "completed" ? (
                  <Link href={`/test-results/${test.id}`}>
                    <Button variant="outline" size="sm">
                      View Results
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/take-test/${test.id}`}>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                      Take Test
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
