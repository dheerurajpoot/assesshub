import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import type { Candidate } from "@/models/Candidate"

// In a real app, this would be a database
// For demo purposes, we're using the same candidates array from the candidates route
// In a real implementation, you would import from a database module
const candidates: Candidate[] = []

// GET a specific candidate
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get auth token from cookies
    const authToken = cookies().get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const candidateId = params.id

    // Find candidate
    const candidate = candidates.find((candidate) => candidate.id === candidateId)

    if (!candidate) {
      return NextResponse.json({ message: "Candidate not found" }, { status: 404 })
    }

    return NextResponse.json({ candidate }, { status: 200 })
  } catch (error) {
    console.error("Get candidate error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

// PUT (update) a specific candidate
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get auth token from cookies
    const authToken = cookies().get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const candidateId = params.id
    const candidateData = await request.json()

    // Find candidate index
    const candidateIndex = candidates.findIndex((candidate) => candidate.id === candidateId)

    if (candidateIndex === -1) {
      return NextResponse.json({ message: "Candidate not found" }, { status: 404 })
    }

    // Update candidate
    const updatedCandidate = {
      ...candidates[candidateIndex],
      ...candidateData,
      updatedAt: new Date(),
    }

    // Save updated candidate (in a real app, this would be a database operation)
    candidates[candidateIndex] = updatedCandidate

    return NextResponse.json({ candidate: updatedCandidate }, { status: 200 })
  } catch (error) {
    console.error("Update candidate error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

// DELETE a specific candidate
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get auth token from cookies
    const authToken = cookies().get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const candidateId = params.id

    // Find candidate index
    const candidateIndex = candidates.findIndex((candidate) => candidate.id === candidateId)

    if (candidateIndex === -1) {
      return NextResponse.json({ message: "Candidate not found" }, { status: 404 })
    }

    // Remove candidate (in a real app, this would be a database operation)
    candidates.splice(candidateIndex, 1)

    return NextResponse.json({ message: "Candidate deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Delete candidate error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
