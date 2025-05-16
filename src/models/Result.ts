export interface Answer {
  questionId: string
  answer: string | number
  isCorrect?: boolean
}

export interface Result {
  id: string
  assessmentId: string
  answers: Answer[]
  score: number
  timeTaken: number // in seconds
  createdAt: Date
}
