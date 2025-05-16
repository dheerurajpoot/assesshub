import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function CandidatesStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Candidates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">145</div>
          <p className="text-xs text-muted-foreground">+12 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Assessment Completion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">87%</div>
            <div className="text-xs text-muted-foreground">126/145 candidates</div>
          </div>
          <Progress value={87} className="h-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Average Score</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">72%</div>
            <div className="text-xs text-muted-foreground">+4% from last month</div>
          </div>
          <Progress value={72} className="h-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Pending Invitations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">19</div>
          <p className="text-xs text-muted-foreground">Sent in the last 7 days</p>
        </CardContent>
      </Card>
    </div>
  )
}
