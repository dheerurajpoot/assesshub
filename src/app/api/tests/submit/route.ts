import { connectDb } from "@/lib/dbconfig";
import { User } from "@/models/User";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function POST(request: Request) {
	const { testId } = await request.json();
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
		const decodedToken = jwt.verify(
			authToken!,
			process.env.TOKEN_SECRET!
		) as JwtPayload;
		const userId = decodedToken.userId;
		const user = await User.findByIdAndUpdate(
			userId,
			{ $push: { givenTests: testId } },
			{ new: true }
		);
		if (!user) {
			return NextResponse.json(
				{ message: "User not found" },
				{ status: 404 }
			);
		}
		return NextResponse.json(
			{ message: "Test Submitted Successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error submitting test:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
