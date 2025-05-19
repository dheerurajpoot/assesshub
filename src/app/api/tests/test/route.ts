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
