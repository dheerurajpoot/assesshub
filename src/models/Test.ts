import mongoose from "mongoose";

export type QuestionType = "multiple-choice" | "true-false" | "short-answer";

export interface Option {
	id: string;
	text: string;
}

export interface Question {
	id: string;
	type: QuestionType;
	question: string;
	options?: Option[];
	correctAnswer?: number;
}

export interface Test {
	_id: string;
	name: string;
	description?: string;
	type: "assessment" | "quiz" | "exam" | "interview";
	questions: Question[];
	duration: number; // in minutes
	passingScore: number; // percentage
	isActive: boolean;
	userId: string;
	createdAt: Date;
	updatedAt: Date;
}

const OptionSchema = new mongoose.Schema<Option>({
	id: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
});

const QuestionSchema = new mongoose.Schema<Question>({
	id: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		enum: ["multiple-choice", "true-false", "short-answer"],
		default: "multiple-choice",
	},
	question: {
		type: String,
		required: true,
	},
	options: {
		type: [OptionSchema],
		default: [],
	},
	correctAnswer: {
		type: Number,
		default: 0,
	},
});

const TestSchema = new mongoose.Schema<Test>({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		default: "",
	},
	type: {
		type: String,
		enum: ["assessment", "quiz", "exam", "interview"],
		default: "assessment",
	},
	questions: {
		type: [QuestionSchema],
		default: [],
	},
	duration: {
		type: Number,
		default: 60,
	},
	passingScore: {
		type: Number,
		default: 70,
	},
	isActive: {
		type: Boolean,
		default: false,
	},
	userId: {
		type: String,
		ref: "User",
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

export const Test = mongoose.models.Test || mongoose.model("Test", TestSchema);
