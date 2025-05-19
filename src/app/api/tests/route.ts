import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { connectDb } from "@/lib/dbconfig";
import { Test } from "@/models/Test";
import mongoose from "mongoose";

// GET user tests
export async function GET() {
	try {
		// Get auth token from cookies
		const authToken = (await cookies()).get("auth-token")?.value;
		await connectDb();

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
		const tests = await Test.find({ userId });

		return NextResponse.json({ tests }, { status: 200 });
	} catch (error) {
		console.error("Get tests error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}

// POST a new test
export async function POST(request: NextRequest) {
	try {
		await connectDb();
		// Get auth token from cookies
		const authToken = (await cookies()).get("auth-token")?.value;
		interface CustomJwtPayload extends JwtPayload {
			userId: string;
		}

		const decodedToken = jwt.verify(
			authToken!,
			process.env.TOKEN_SECRET!
		) as CustomJwtPayload;

		if (!authToken) {
			return NextResponse.json(
				{ message: "Not authenticated" },
				{ status: 401 }
			);
		}

		const testData = await request.json();

		// Validate input
		if (
			!testData.name ||
			!testData.type ||
			!testData.questions ||
			!testData.duration
		) {
			return NextResponse.json(
				{ message: "Missing required fields" },
				{ status: 400 }
			);
		}

		// Create new test
		const newTest: Test = {
			_id: new mongoose.Types.ObjectId().toString(),
			name: testData.name,
			description: testData.description || "",
			type: testData.type,
			questions: testData.questions,
			duration: testData.duration,
			passingScore: testData.passingScore || 70,
			isActive: testData.isActive || false,
			userId: decodedToken.userId,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		const test = await Test.create(newTest);

		return NextResponse.json({ test }, { status: 201 });
	} catch (error) {
		console.error("Create test error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
