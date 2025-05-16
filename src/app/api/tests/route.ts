import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"
import type { Test } from "@/models/Test"

// In a real app, this would be a database
const tests: Test[] = []

// GET all tests
export async function GET(request: NextRequest) {
  try {
    // Get auth token from cookies
    const authToken = cookies().get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    // In a real app, you would verify the token and get the user ID
    // For this demo, we'll just return all tests
    return NextResponse.json({ tests }, { status: 200 })
  } catch (error) {
    console.error("Get tests error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

// POST a new test
export async function POST(request: NextRequest) {
  try {
    // Get auth token from cookies
    const authToken = cookies().get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const testData = await request.json()

    // Validate input
    if (!testData.name || !testData.type || !testData.questions || !testData.duration) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Create new test
    const newTest: Test = {
      id: uuidv4(),
      name: testData.name,
      description: testData.description || "",
      type: testData.type,
      questions: testData.questions,
      duration: testData.duration,
      passingScore: testData.passingScore || 70,
      isActive: testData.isActive || false,
      userId: "demo-user-id", // In a real app, this would be the authenticated user's ID
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    // Save test (in a real app, this would be a database operation)
    tests.push(newTest)

    return NextResponse.json({ test: newTest }, { status: 201 })
  } catch (error) {
    console.error("Create test error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
