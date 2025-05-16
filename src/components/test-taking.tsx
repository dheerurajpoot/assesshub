"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Clock, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Mock test data
const testData = {
  id: "1",
  name: "Frontend Developer Assessment",
  description: "Comprehensive test for frontend development skills including HTML, CSS, JavaScript, and React.",
  duration: 60,
  questions: [
    {
      id: "q1",
      question: "What does CSS stand for?",
      type: "multiple-choice",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      correctAnswer: 0,
    },
    {
      id: "q2",
      question: "Which of the following is NOT a JavaScript framework or library?",
      type: "multiple-choice",
      options: ["React", "Angular", "Vue", "Photoshop"],
      correctAnswer: 3,
    },
    {
      id: "q3",
      question: "What is the correct HTML element for the largest heading?",
      type: "multiple-choice",
      options: ["<h1>", "<heading>", "<head>", "<h6>"],
      correctAnswer: 0,
    },
    {
      id: "q4",
      question: "Which CSS property is used to change the text color of an element?",
      type: "multiple-choice",
      options: ["color", "text-color", "font-color", "text-style"],
      correctAnswer: 0,
    },
    {
      id: "q5",
      question: "In React, what is used to pass data to a component from outside?",
      type: "multiple-choice",
      options: ["props", "state", "elements", "events"],
      correctAnswer: 0,
    },
  ],
}

export function TestTaking({ testId }: { testId: string }) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [timeLeft, setTimeLeft] = useState(testData.duration * 60) // in seconds

  const question = testData.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / testData.questions.length) * 100

  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [question.id]: Number.parseInt(value),
    })
  }

  const handleNext = () => {
    if (currentQuestion < testData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      router.push(`/test-results/${testId}`)
    }, 1500)
  }

  // Format time left as mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{testData.name}</CardTitle>
              <CardDescription>
                Question {currentQuestion + 1} of {testData.questions.length}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-lg font-medium">{question.question}</div>
          {question.type === "multiple-choice" && (
            <RadioGroup
              value={answers[question.id]?.toString() || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted/50">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          {currentQuestion < testData.questions.length - 1 ? (
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Test"
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
