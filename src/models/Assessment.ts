export type AssessmentStatus = "pending" | "in_progress" | "completed"

export interface Assessment {
  id: string
  testId: string
  candidateId: string
  status: AssessmentStatus
  startTime?: Date
  endTime?: Date
  score?: number
  passed?: boolean
  createdAt: Date
  updatedAt: Date
}
