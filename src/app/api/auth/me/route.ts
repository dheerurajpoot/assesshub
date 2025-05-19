import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { User } from "@/models/User";
import { connectDb } from "@/lib/dbconfig";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
	userId: string;
}

export async function GET() {
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
			authToken,
			process.env.TOKEN_SECRET!
		) as CustomJwtPayload;
		const user = await User.findOne({ _id: decodedToken.userId });

		if (!user) {
			return NextResponse.json(
				{ message: "Not authenticated" },
				{ status: 401 }
			);
		}

		// Create a safe user object (without password)
		const safeUser = {
			id: user.id,
			name: user.name,
			givenTests: user.givenTests,
			email: user.email,
			role: user.role,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		};

		return NextResponse.json({ user: safeUser }, { status: 200 });
	} catch (error) {
		console.error("Auth check error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
