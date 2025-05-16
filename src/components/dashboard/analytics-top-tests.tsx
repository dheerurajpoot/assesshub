import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const topTests = [
  {
    id: "1",
    name: "Frontend Developer Assessment",
    type: "Technical",
    completionRate: 95,
    passRate: 82,
    avgScore: 78,
  },
  {
    id: "2",
    name: "Product Manager Interview",
    type: "Behavioral",
    completionRate: 92,
    passRate: 88,
    avgScore: 85,
  },
  {
    id: "3",
    name: "UX Designer Skills Test",
    type: "Domain",
    completionRate: 90,
    passRate: 75,
    avgScore: 72,
  },
  {
    id: "4",
    name: "Data Analyst Technical Quiz",
    type: "Technical",
    completionRate: 88,
    passRate: 70,
    avgScore: 68,
  },
  {
    id: "5",
    name: "Marketing Specialist Assessment",
    type: "Domain",
    completionRate: 85,
    passRate: 80,
    avgScore: 76,
  },
]

export function AnalyticsTopTests() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Test Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Completion Rate</TableHead>
          <TableHead>Pass Rate</TableHead>
          <TableHead>Avg. Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topTests.map((test) => (
          <TableRow key={test.id}>
            <TableCell className="font-medium">{test.name}</TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className="bg-teal-50 text-teal-700 hover:bg-teal-100 hover:text-teal-800 dark:bg-teal-950/20 dark:text-teal-400 dark:hover:bg-teal-950/30"
              >
                {test.type}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={test.completionRate} className="h-2 w-20" />
                <span>{test.completionRate}%</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={test.passRate} className="h-2 w-20" />
                <span>{test.passRate}%</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={test.avgScore} className="h-2 w-20" />
                <span>{test.avgScore}%</span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
