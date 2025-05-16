import { Calendar, Clock, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const upcomingAssessments = [
  {
    id: "1",
    name: "Frontend Developer Assessment",
    date: "May 20, 2025",
    time: "10:00 AM",
    candidates: 12,
    status: "scheduled",
  },
  {
    id: "2",
    name: "Product Manager Interview",
    date: "May 21, 2025",
    time: "2:00 PM",
    candidates: 5,
    status: "scheduled",
  },
  {
    id: "3",
    name: "UX Designer Skills Test",
    date: "May 22, 2025",
    time: "11:00 AM",
    candidates: 8,
    status: "pending",
  },
  {
    id: "4",
    name: "Data Analyst Technical Quiz",
    date: "May 23, 2025",
    time: "3:30 PM",
    candidates: 15,
    status: "scheduled",
  },
]

export function UpcomingAssessments() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Assessment</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Candidates</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {upcomingAssessments.map((assessment) => (
          <TableRow key={assessment.id}>
            <TableCell className="font-medium">{assessment.name}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                {assessment.date}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                {assessment.time}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                {assessment.candidates}
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={assessment.status === "scheduled" ? "default" : "outline"}
                className={
                  assessment.status === "scheduled" ? "bg-teal-500 hover:bg-teal-600" : "text-muted-foreground"
                }
              >
                {assessment.status === "scheduled" ? "Scheduled" : "Pending"}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
