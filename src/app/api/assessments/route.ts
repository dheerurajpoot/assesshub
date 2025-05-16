import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"
import type { Assessment } from "@/models/Assessment"

// In a real app, this would be a database
const assessments: Assessment[] = []

// GET all assessments
export async function GET(request: NextRequest) {
  try {
    // Get auth token from cookies
    const authToken = cookies().get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    // In a real app, you would verify the token and get the user ID
    // For this demo, we'll just return all assessments
    return NextResponse.json({ assessments }, { status: 200 })
  } catch (error) {
    console.error("Get assessments error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

// POST a new assessment
export async function POST(request: NextRequest) {
  try {
    // Get auth token from cookies
    const authToken = cookies().get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const assessmentData = await request.json()

    // Validate input
    if (!assessmentData.testId || !assessmentData.candidateId) {
      return NextResponse.json({ message: "Test ID and candidate ID are required" }, { status: 400 })
    }

    // Create new assessment
    const newAssessment: Assessment = {
      id: uuidv4(),
      testId: assessmentData.testId,
      candidateId: assessmentData.candidateId,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    // Save assessment (in a real app, this would be a database operation)
    assessments.push(newAssessment)

    return NextResponse.json({ assessment: newAssessment }, { status: 201 })
  } catch (error) {
    console.error("Create assessment error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
