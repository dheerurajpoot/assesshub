export type CandidateStatus = "invited" | "in_progress" | "completed"

export interface Candidate {
  id: string
  name: string
  email: string
  phone?: string
  position?: string
  status: CandidateStatus
  score?: number
  userId: string // recruiter who added the candidate
  createdAt: Date
  updatedAt: Date
}
