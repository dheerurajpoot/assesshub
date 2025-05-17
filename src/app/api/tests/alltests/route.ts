import { connectDb } from "@/lib/dbconfig";
import { Test } from "@/models/Test";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		await connectDb();
		const tests = await Test.find();
		return NextResponse.json({ tests }, { status: 200 });
	} catch (error) {
		console.error("Get tests error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}