import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { connectDb } from "@/lib/dbconfig";
import { User } from "@/models/User";

// GET all candidates
export async function GET(request: NextRequest) {
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

		const users = await User.find();
		return NextResponse.json({ users }, { status: 200 });
	} catch (error) {
		console.error("Get candidates error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
