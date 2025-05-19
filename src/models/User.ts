import mongoose from "mongoose";

export interface User {
	id: string;
	name: string;
	email: string;
	role: "admin" | "user";
	givenTests: string[];
	phone: string;
	createdAt: Date;
	updatedAt: Date;
}

const userModel = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		phone: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		isBlocked: {
			type: Boolean,
			default: false,
		},
		role: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
		},
		givenTests: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Test",
			},
		],
		forgotPasswordToken: String,
		forgotPasswordTokenExpiry: Date,
		verifyToken: String,
		verifyTokenExpiry: Date,
	},
	{ timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userModel);
