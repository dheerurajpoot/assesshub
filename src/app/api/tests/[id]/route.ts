import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import type { Test } from "@/models/Test"

// In a real app, this would be a database
// For demo purposes, we're using the same tests array from the tests route
// In a real implementation, you would import from a database module
const tests: Test[] = []

// GET a specific test
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get auth token from cookies
    const authToken = cookies().get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const testId = params.id

    // Find test
    const test = tests.find((test) => test.id === testId)

    if (!test) {
      return NextResponse.json({ message: "Test not found" }, { status: 404 })
    }

    return NextResponse.json({ test }, { status: 200 })
  } catch (error) {
    console.error("Get test error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

// PUT (update) a specific test
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get auth token from cookies
    const authToken = cookies().get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const testId = params.id
    const testData = await request.json()

    // Find test index
    const testIndex = tests.findIndex((test) => test.id === testId)

    if (testIndex === -1) {
      return NextResponse.json({ message: "Test not found" }, { status: 404 })
    }

    // Update test
    const updatedTest = {
      ...tests[testIndex],
      ...testData,
      updatedAt: new Date(),
    }

    // Save updated test (in a real app, this would be a database operation)
    tests[testIndex] = updatedTest

    return NextResponse.json({ test: updatedTest }, { status: 200 })
  } catch (error) {
    console.error("Update test error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

// DELETE a specific test
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get auth token from cookies
    const authToken = cookies().get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const testId = params.id

    // Find test index
    const testIndex = tests.findIndex((test) => test.id === testId)

    if (testIndex === -1) {
      return NextResponse.json({ message: "Test not found" }, { status: 404 })
    }

    // Remove test (in a real app, this would be a database operation)
    tests.splice(testIndex, 1)

    return NextResponse.json({ message: "Test deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Delete test error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
