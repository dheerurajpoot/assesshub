import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import type { Assessment } from "@/models/Assessment"

// In a real app, this would be a database
// For demo purposes, we're using the same assessments array from the assessments route
// In a real implementation, you would import from a database module
const assessments: Assessment[] = []

// GET a specific assessment
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get auth token from cookies
    const authToken = cookies().get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const assessmentId = params.id

    // Find assessment
    const assessment = assessments.find((assessment) => assessment.id === assessmentId)

    if (!assessment) {
      return NextResponse.json({ message: "Assessment not found" }, { status: 404 })
    }

    return NextResponse.json({ assessment }, { status: 200 })
  } catch (error) {
    console.error("Get assessment error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

// PUT (update) a specific assessment
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get auth token from cookies
    const authToken = cookies().get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const assessmentId = params.id
    const assessmentData = await request.json()

    // Find assessment index
    const assessmentIndex = assessments.findIndex((assessment) => assessment.id === assessmentId)

    if (assessmentIndex === -1) {
      return NextResponse.json({ message: "Assessment not found" }, { status: 404 })
    }

    // Update assessment
    const updatedAssessment = {
      ...assessments[assessmentIndex],
      ...assessmentData,
      updatedAt: new Date(),
    }

    // Save updated assessment (in a real app, this would be a database operation)
    assessments[assessmentIndex] = updatedAssessment

    return NextResponse.json({ assessment: updatedAssessment }, { status: 200 })
  } catch (error) {
    console.error("Update assessment error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
