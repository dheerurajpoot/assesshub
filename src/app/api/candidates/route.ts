import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";
import type { Candidate } from "@/models/Candidate";

// In a real app, this would be a database
const candidates: Candidate[] = [];

// GET all candidates
export async function GET(request: NextRequest) {
	try {
		// Get auth token from cookies
		const authToken = (await cookies()).get("auth-token")?.value;

		if (!authToken) {
			return NextResponse.json(
				{ message: "Not authenticated" },
				{ status: 401 }
			);
		}

		// In a real app, you would verify the token and get the user ID
		// For this demo, we'll just return all candidates
		return NextResponse.json({ candidates }, { status: 200 });
	} catch (error) {
		console.error("Get candidates error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}

// POST a new candidate
export async function POST(request: NextRequest) {
	try {
		// Get auth token from cookies
		const authToken = (await cookies()).get("auth-token")?.value;

		if (!authToken) {
			return NextResponse.json(
				{ message: "Not authenticated" },
				{ status: 401 }
			);
		}

		const candidateData = await request.json();

		// Validate input
		if (!candidateData.name || !candidateData.email) {
			return NextResponse.json(
				{ message: "Name and email are required" },
				{ status: 400 }
			);
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(candidateData.email)) {
			return NextResponse.json(
				{ message: "Invalid email format" },
				{ status: 400 }
			);
		}

		// Check if candidate already exists
		const existingCandidate = candidates.find(
			(candidate) => candidate.email === candidateData.email
		);
		if (existingCandidate) {
			return NextResponse.json(
				{ message: "Candidate with this email already exists" },
				{ status: 409 }
			);
		}

		// Create new candidate
		const newCandidate: Candidate = {
			id: uuidv4(),
			name: candidateData.name,
			email: candidateData.email,
			phone: candidateData.phone || "",
			position: candidateData.position || "",
			status: candidateData.status || "invited",
			userId: "demo-user-id", // In a real app, this would be the authenticated user's ID
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		// Save candidate (in a real app, this would be a database operation)
		candidates.push(newCandidate);

		return NextResponse.json({ candidate: newCandidate }, { status: 201 });
	} catch (error) {
		console.error("Create candidate error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
