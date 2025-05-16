import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export const metadata: Metadata = {
  title: "Test Results | AssessHub",
  description: "View your test results",
}

export default function TestResultsPage({ params }: { params: { id: string } }) {
  // Mock results data
  const results = {
    testName: "Frontend Developer Assessment",
    score: 80,
    passingScore: 70,
    totalQuestions: 5,
    correctAnswers: 4,
    timeSpent: "45:22",
  }

  const isPassed = results.score >= results.passingScore

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20">
              <CheckCircle className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            </div>
            <CardTitle className="text-2xl">Test Completed</CardTitle>
            <CardDescription>You have completed the {results.testName}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold">{results.score}%</div>
              <p className="text-sm text-muted-foreground">
                {isPassed ? "Passed" : "Failed"} (Passing score: {results.passingScore}%)
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Score</span>
                <span className="font-medium">{results.score}%</span>
              </div>
              <Progress value={results.score} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-lg border p-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Questions</p>
                <p className="font-medium">{results.totalQuestions}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Correct Answers</p>
                <p className="font-medium">{results.correctAnswers}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Time Spent</p>
                <p className="font-medium">{results.timeSpent}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Result</p>
                <p
                  className={`font-medium ${isPassed ? "text-teal-600 dark:text-teal-400" : "text-red-600 dark:text-red-400"}`}
                >
                  {isPassed ? "Passed" : "Failed"}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Link href="/">
              <Button variant="outline">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-teal-600 hover:bg-teal-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
