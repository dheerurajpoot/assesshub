import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { User } from "@/models/User";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
	userId: string;
}

export async function PUT(request: NextRequest) {
	try {
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
		console.log(decodedToken);
		const user = await User.findOne({ _id: decodedToken.userId });

		if (!user) {
			return NextResponse.json(
				{ message: "Not authenticated" },
				{ status: 401 }
			);
		}

		const userData = await request.json();

		// Validate input
		const allowedFields = ["name", "email", "role"];
		const invalidFields = Object.keys(userData).filter(
			(field) => !allowedFields.includes(field)
		);

		if (invalidFields.length > 0) {
			return NextResponse.json(
				{ message: `Invalid fields: ${invalidFields.join(", ")}` },
				{ status: 400 }
			);
		}

		// Update user
		user.name = userData.name || user.name;
		user.email = userData.email || user.email;
		user.role = userData.role || user.role;

		await user.save();

		// Create a safe user object (without password)
		const safeUser = {
			id: user.id,
			name: user.name,
			email: user.email,
			role: user.role,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		};

		return NextResponse.json({ user: safeUser }, { status: 200 });
	} catch (error) {
		console.error("Update error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
