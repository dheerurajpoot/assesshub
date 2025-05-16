import type { Metadata } from "next"
import { Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnalyticsOverview } from "@/components/dashboard/analytics-overview"
import { AnalyticsPerformance } from "@/components/dashboard/analytics-performance"
import { AnalyticsCompletion } from "@/components/dashboard/analytics-completion"
import { AnalyticsTopTests } from "@/components/dashboard/analytics-top-tests"

export const metadata: Metadata = {
  title: "Analytics | AssessHub",
  description: "View detailed analytics and insights about your assessments",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">View detailed insights about your assessments and candidates</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <AnalyticsOverview />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Assessment Performance</CardTitle>
            <CardDescription>Average scores by assessment type</CardDescription>
          </CardHeader>
          <CardContent>
            <AnalyticsPerformance />
          </CardContent>
        </Card>
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Completion Rates</CardTitle>
            <CardDescription>Assessment completion rates over time</CardDescription>
          </CardHeader>
          <CardContent>
            <AnalyticsCompletion />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Tests</CardTitle>
          <CardDescription>Tests with the highest completion and pass rates</CardDescription>
        </CardHeader>
        <CardContent>
          <AnalyticsTopTests />
        </CardContent>
      </Card>
    </div>
  )
}
