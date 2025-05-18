import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Test } from "@/models/Test";
import { connectDb } from "@/lib/dbconfig";

// GET a specific test
export async function GET(request: NextRequest) {
	try {
		await connectDb();
		// Get auth token from cookies
		const url = request.nextUrl;
		const authToken = (await cookies()).get("auth-token")?.value;

		if (!authToken) {
			return NextResponse.json(
				{ message: "Not authenticated" },
				{ status: 401 }
			);
		}

		const testId = url.searchParams.get("id");

		// Find test
		const test = await Test.findById(testId);

		if (!test) {
			return NextResponse.json(
				{ message: "Test not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json({ test }, { status: 200 });
	} catch (error) {
		console.error("Get test error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}

// PUT (update) a specific test
export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		await connectDb();
		// Get auth token from cookies
		const authToken = (await cookies()).get("auth-token")?.value;

		if (!authToken) {
			return NextResponse.json(
				{ message: "Not authenticated" },
				{ status: 401 }
			);
		}

		const testId = params.id;
		const testData = await request.json();

		// Find test index
		const testIndex = await Test.findById(testId);

		if (!testIndex) {
			return NextResponse.json(
				{ message: "Test not found" },
				{ status: 404 }
			);
		}

		// Update test
		const updatedTest = {
			...testIndex,
			...testData,
			updatedAt: new Date(),
		};

		// Save updated test (in a real app, this would be a database operation)
		await Test.findByIdAndUpdate(testId, updatedTest);

		return NextResponse.json({ test: updatedTest }, { status: 200 });
	} catch (error) {
		console.error("Update test error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}

// DELETE a specific test
export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		await connectDb();
		// Get auth token from cookies
		const authToken = (await cookies()).get("auth-token")?.value;

		if (!authToken) {
			return NextResponse.json(
				{ message: "Not authenticated" },
				{ status: 401 }
			);
		}

		const testId = params.id;

		// Find test index
		const testIndex = await Test.findById(testId);

		if (!testIndex) {
			return NextResponse.json(
				{ message: "Test not found" },
				{ status: 404 }
			);
		}

		// Remove test (in a real app, this would be a database operation)
		await Test.findByIdAndDelete(testId);

		return NextResponse.json(
			{ message: "Test deleted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Delete test error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
