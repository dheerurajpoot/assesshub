export interface Candidate {
	_id: string;
	name: string;
	email: string;
	phone: string;
	position: string;
	status: 'invited' | 'in_progress' | 'completed';
	score: number;
	createdAt: string;
}

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
