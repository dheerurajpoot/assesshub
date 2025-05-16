export type QuestionType = "multiple-choice" | "true-false" | "short-answer"

export interface Option {
  id: string
  text: string
}

export interface Question {
  id: string
  type: QuestionType
  question: string
  options?: Option[]
  correctAnswer?: number | string
}

export interface Test {
  id: string
  name: string
  description?: string
  type: "assessment" | "quiz" | "exam" | "interview"
  questions: Question[]
  duration: number // in minutes
  passingScore: number // percentage
  isActive: boolean
  userId: string // creator
  createdAt: Date
  updatedAt: Date
}
