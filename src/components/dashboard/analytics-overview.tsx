import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function AnalyticsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Assessments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">248</div>
          <div className="flex items-center text-xs text-muted-foreground">
            <span className="text-teal-500 dark:text-teal-400">↑ 12%</span>
            <span className="ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">87%</div>
            <div className="text-xs text-muted-foreground">216/248 assessments</div>
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
            <div className="text-xs text-muted-foreground">
              <span className="text-teal-500 dark:text-teal-400">↑ 4%</span>
              <span className="ml-1">from last month</span>
            </div>
          </div>
          <Progress value={72} className="h-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">68%</div>
            <div className="text-xs text-muted-foreground">147/216 passed</div>
          </div>
          <Progress value={68} className="h-2" />
        </CardContent>
      </Card>
    </div>
  )
}
