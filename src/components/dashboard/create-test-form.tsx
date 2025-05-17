"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription } from "@/components/ui/alert";
import type { Question } from "@/models/Test";
import axios from "axios";

export function CreateTestForm() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [testData, setTestData] = useState({
		name: "",
		type: "assessment",
		description: "",
		duration: "60",
		passingScore: "70",
		isActive: false,
	});
	const [questions, setQuestions] = useState<Question[]>([
		{
			id: "1",
			type: "multiple-choice",
			question: "",
			options: [
				{ id: "1", text: "" },
				{ id: "2", text: "" },
				{ id: "3", text: "" },
				{ id: "4", text: "" },
			],
			correctAnswer: 0,
		},
	]);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleTestDataChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setTestData((prev) => ({ ...prev, [name]: value }));

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name];
				return newErrors;
			});
		}
	};

	const handleSelectChange = (name: string, value: string) => {
		setTestData((prev) => ({ ...prev, [name]: value }));

		// Clear error when user selects an option
		if (errors[name]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name];
				return newErrors;
			});
		}
	};

	const handleSwitchChange = (checked: boolean) => {
		setTestData((prev) => ({ ...prev, isActive: checked }));
	};

	const addQuestion = () => {
		setQuestions([
			...questions,
			{
				id: `${Date.now()}`,
				type: "multiple-choice",
				question: "",
				options: [
					{ id: "1", text: "" },
					{ id: "2", text: "" },
					{ id: "3", text: "" },
					{ id: "4", text: "" },
				],
				correctAnswer: 0,
			},
		]);
	};

	const removeQuestion = (index: number) => {
		if (questions.length > 1) {
			setQuestions(questions.filter((_, i) => i !== index));
		}
	};

	const updateQuestion = (index: number, field: string, value: any) => {
		const updatedQuestions = [...questions];
		updatedQuestions[index] = {
			...updatedQuestions[index],
			[field]: value,
		};
		setQuestions(updatedQuestions);

		// Clear error when user updates a question
		const errorKey = `question_${index}`;
		if (errors[errorKey]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[errorKey];
				return newErrors;
			});
		}
	};

	const updateOption = (
		questionIndex: number,
		optionIndex: number,
		value: string
	) => {
		const updatedQuestions = [...questions];
		if (!updatedQuestions[questionIndex].options) {
			updatedQuestions[questionIndex].options = [];
		}

		updatedQuestions[questionIndex].options![optionIndex] = {
			id: (optionIndex + 1).toString(),
			text: value,
		};

		setQuestions(updatedQuestions);

		// Clear error when user updates an option
		const errorKey = `question_${questionIndex}_option_${optionIndex}`;
		if (errors[errorKey]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[errorKey];
				return newErrors;
			});
		}
	};

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		// Validate test data
		if (!testData.name.trim()) {
			newErrors.name = "Test name is required";
		}

		if (!testData.type) {
			newErrors.type = "Test type is required";
		}

		if (
			!testData.duration ||
			isNaN(Number(testData.duration)) ||
			Number(testData.duration) <= 0
		) {
			newErrors.duration = "Duration must be a positive number";
		}

		if (
			!testData.passingScore ||
			isNaN(Number(testData.passingScore)) ||
			Number(testData.passingScore) < 0 ||
			Number(testData.passingScore) > 100
		) {
			newErrors.passingScore = "Passing score must be between 0 and 100";
		}

		// Validate questions
		questions.forEach((question, index) => {
			if (!question.question.trim()) {
				newErrors[`question_${index}`] = "Question text is required";
			}

			if (question.type === "multiple-choice" && question.options) {
				question.options.forEach((option, optionIndex) => {
					if (!option.text.trim()) {
						newErrors[`question_${index}_option_${optionIndex}`] =
							"Option text is required";
					}
				});
			}
		});

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);

		if (!validateForm()) {
			return;
		}

		setIsLoading(true);

		try {
			// Prepare data for API
			const testPayload = {
				name: testData.name,
				description: testData.description,
				type: testData.type,
				questions: questions,
				duration: Number(testData.duration),
				passingScore: Number(testData.passingScore),
				isActive: testData.isActive,
			};

			// Send to API
			const response = await axios.post("/api/tests", testPayload);

			if (response.status !== 201) {
				throw new Error("Failed to create test");
			}
			console.log("Test created successfully:", response);
			// Navigate to tests page on success
			router.push("/dashboard/tests");
		} catch (error) {
			console.error("Create test error:", error);
			setError(
				error instanceof Error
					? error.message
					: "Failed to create test. Please try again."
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='space-y-6'>
				{error && (
					<Alert variant='destructive'>
						<AlertDescription>{error}</AlertDescription>
					</Alert>
				)}

				<Card>
					<CardHeader>
						<CardTitle>Test Information</CardTitle>
						<CardDescription>
							Provide basic information about your test
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-4'>
						<div className='grid gap-4 sm:grid-cols-2'>
							<div className='space-y-2'>
								<Label htmlFor='test-name'>
									Test Name{" "}
									<span className='text-red-500'>*</span>
								</Label>
								<Input
									id='test-name'
									name='name'
									value={testData.name}
									onChange={handleTestDataChange}
									placeholder='e.g., Frontend Developer Assessment'
									className={
										errors.name ? "border-red-500" : ""
									}
								/>
								{errors.name && (
									<p className='text-sm text-red-500'>
										{errors.name}
									</p>
								)}
							</div>
							<div className='space-y-2'>
								<Label htmlFor='test-type'>
									Test Type{" "}
									<span className='text-red-500'>*</span>
								</Label>
								<Select
									value={testData.type}
									onValueChange={(value) =>
										handleSelectChange("type", value)
									}>
									<SelectTrigger
										id='test-type'
										className={
											errors.type ? "border-red-500" : ""
										}>
										<SelectValue placeholder='Select test type' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='assessment'>
											Assessment
										</SelectItem>
										<SelectItem value='quiz'>
											Quiz
										</SelectItem>
										<SelectItem value='exam'>
											Exam
										</SelectItem>
										<SelectItem value='interview'>
											Interview
										</SelectItem>
									</SelectContent>
								</Select>
								{errors.type && (
									<p className='text-sm text-red-500'>
										{errors.type}
									</p>
								)}
							</div>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='test-description'>
								Description
							</Label>
							<Textarea
								id='test-description'
								name='description'
								value={testData.description}
								onChange={handleTestDataChange}
								placeholder='Describe the purpose and content of this test'
								rows={3}
							/>
						</div>
						<div className='grid gap-4 sm:grid-cols-2'>
							<div className='space-y-2'>
								<Label htmlFor='test-duration'>
									Duration (minutes){" "}
									<span className='text-red-500'>*</span>
								</Label>
								<Input
									id='test-duration'
									name='duration'
									type='number'
									min='1'
									value={testData.duration}
									onChange={handleTestDataChange}
									className={
										errors.duration ? "border-red-500" : ""
									}
								/>
								{errors.duration && (
									<p className='text-sm text-red-500'>
										{errors.duration}
									</p>
								)}
							</div>
							<div className='space-y-2'>
								<Label htmlFor='passing-score'>
									Passing Score (%){" "}
									<span className='text-red-500'>*</span>
								</Label>
								<Input
									id='passing-score'
									name='passingScore'
									type='number'
									min='1'
									max='100'
									value={testData.passingScore}
									onChange={handleTestDataChange}
									className={
										errors.passingScore
											? "border-red-500"
											: ""
									}
								/>
								{errors.passingScore && (
									<p className='text-sm text-red-500'>
										{errors.passingScore}
									</p>
								)}
							</div>
						</div>
						<div className='flex items-center space-x-2'>
							<Switch
								id='test-active'
								checked={testData.isActive}
								onCheckedChange={handleSwitchChange}
							/>
							<Label htmlFor='test-active'>
								Make test active immediately
							</Label>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Questions</CardTitle>
						<CardDescription>
							Add questions to your test
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-6'>
						{questions.map((question, index) => (
							<div
								key={question.id}
								className='space-y-4 rounded-lg border p-4'>
								<div className='flex items-center justify-between'>
									<h3 className='text-lg font-medium'>
										Question {index + 1}
									</h3>
									<Button
										type='button'
										variant='ghost'
										size='icon'
										onClick={() => removeQuestion(index)}
										disabled={questions.length === 1}>
										<Trash2 className='h-4 w-4' />
										<span className='sr-only'>
											Remove question
										</span>
									</Button>
								</div>
								<div className='space-y-2'>
									<Label htmlFor={`question-${index}`}>
										Question{" "}
										<span className='text-red-500'>*</span>
									</Label>
									<Textarea
										id={`question-${index}`}
										placeholder='Enter your question'
										value={question.question}
										onChange={(e) =>
											updateQuestion(
												index,
												"question",
												e.target.value
											)
										}
										className={
											errors[`question_${index}`]
												? "border-red-500"
												: ""
										}
									/>
									{errors[`question_${index}`] && (
										<p className='text-sm text-red-500'>
											{errors[`question_${index}`]}
										</p>
									)}
								</div>
								<div className='space-y-2'>
									<Label htmlFor={`question-type-${index}`}>
										Question Type
									</Label>
									<Select
										value={question.type}
										onValueChange={(value) =>
											updateQuestion(index, "type", value)
										}>
										<SelectTrigger
											id={`question-type-${index}`}>
											<SelectValue placeholder='Select question type' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='multiple-choice'>
												Multiple Choice
											</SelectItem>
											<SelectItem value='true-false'>
												True/False
											</SelectItem>
											<SelectItem value='short-answer'>
												Short Answer
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								{question.type === "multiple-choice" &&
									question.options && (
										<div className='space-y-2'>
											<Label>Options</Label>
											<div className='space-y-2'>
												{question.options.map(
													(option, optionIndex) => (
														<div
															key={option.id}
															className='flex items-center gap-2'>
															<Input
																placeholder={`Option ${
																	optionIndex +
																	1
																}`}
																value={
																	option.text
																}
																onChange={(e) =>
																	updateOption(
																		index,
																		optionIndex,
																		e.target
																			.value
																	)
																}
																className={
																	errors[
																		`question_${index}_option_${optionIndex}`
																	]
																		? "border-red-500"
																		: ""
																}
															/>
															<Select
																value={
																	question.correctAnswer ===
																	optionIndex
																		? "true"
																		: "false"
																}
																onValueChange={(
																	value
																) =>
																	updateQuestion(
																		index,
																		"correctAnswer",
																		value ===
																			"true"
																			? optionIndex
																			: question.correctAnswer
																	)
																}>
																<SelectTrigger className='w-[100px]'>
																	<SelectValue placeholder='Correct?' />
																</SelectTrigger>
																<SelectContent>
																	<SelectItem value='true'>
																		Correct
																	</SelectItem>
																	<SelectItem value='false'>
																		Incorrect
																	</SelectItem>
																</SelectContent>
															</Select>
														</div>
													)
												)}
											</div>
										</div>
									)}
								{question.type === "true-false" && (
									<div className='space-y-2'>
										<Label>Correct Answer</Label>
										<Select
											value={
												question.correctAnswer === 0
													? "true"
													: "false"
											}
											onValueChange={(value) =>
												updateQuestion(
													index,
													"correctAnswer",
													value === "true" ? 0 : 1
												)
											}>
											<SelectTrigger>
												<SelectValue placeholder='Select correct answer' />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='true'>
													True
												</SelectItem>
												<SelectItem value='false'>
													False
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								)}
							</div>
						))}
						<Button
							type='button'
							variant='outline'
							className='w-full'
							onClick={addQuestion}>
							<Plus className='mr-2 h-4 w-4' />
							Add Question
						</Button>
					</CardContent>
					<CardFooter className='flex justify-between'>
						<Button
							variant='outline'
							type='button'
							onClick={() => router.back()}>
							Cancel
						</Button>
						<Button
							type='submit'
							className='bg-teal-600 hover:bg-teal-700'
							disabled={isLoading}>
							{isLoading ? (
								<>
									<Loader2 className='mr-2 h-4 w-4 animate-spin' />
									Creating...
								</>
							) : (
								"Create Test"
							)}
						</Button>
					</CardFooter>
				</Card>
			</div>
		</form>
	);
}
