"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "sonner";

export function TestTaking({ testId }: { testId: string }) {
	const router = useRouter();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState<Record<string, number>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [timeLeft, setTimeLeft] = useState(0);
	const [test, setTest] = useState<any>(null);

	const question = test?.questions[currentQuestion];
	const progress = ((currentQuestion + 1) / test?.questions.length) * 100;

	const getTest = async () => {
		try {
			const response = await axios.get(`/api/tests/test?id=${testId}`);
			setTest(response.data.test);
			setTimeLeft(response.data.test.duration * 60);
		} catch (error) {
			console.error("Error fetching test:", error);
			setTest(null);
		}
	};

	useEffect(() => {
		getTest();
	}, [testId]);

	const handleAnswer = (value: string) => {
		setAnswers({
			...answers,
			[question.id]: Number.parseInt(value),
		});
	};

	const handleNext = () => {
		if (currentQuestion < test?.questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	const handlePrevious = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	const handleSubmit = async () => {
		setIsSubmitting(true);

		try {
			const response = await axios.post(`/api/tests/submit`, {
				testId,
			});
			toast.success(response.data.message);
			setTimeout(() => {
				setIsSubmitting(false);
				router.push(`/test-results/${testId}`);
			}, 1500);
		} catch (error) {
			console.error("Error submitting test:", error);
			setIsSubmitting(false);
		}
	};

	// Format time left as mm:ss
	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
			.toString()
			.padStart(2, "0")}`;
	};

	return (
		<div className='max-w-3xl mx-auto space-y-6'>
			<Card>
				<CardHeader>
					<div className='flex items-center justify-between'>
						<div>
							<CardTitle>{test?.name}</CardTitle>
							<CardDescription>
								Question {currentQuestion + 1} of{" "}
								{test?.questions.length}
							</CardDescription>
						</div>
						<div className='flex items-center gap-2 text-muted-foreground'>
							<Clock className='h-4 w-4' />
							<span>{formatTime(timeLeft)}</span>
						</div>
					</div>
					<Progress value={progress} className='h-2' />
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='text-lg font-medium'>
						{question?.question}
					</div>
					{question?.type === "multiple-choice" && (
						<RadioGroup
							value={answers[question.id]?.toString() || ""}
							onValueChange={handleAnswer}
							className='space-y-3'>
							{question?.options.map(
								(
									option: { text: string; id: string },
									index: number
								) => (
									<div
										key={index}
										className='flex items-center space-x-2 rounded-md border p-3 hover:bg-muted/50'>
										<RadioGroupItem
											value={index.toString()}
											id={`option-${index}`}
										/>
										<Label
											htmlFor={`option-${index}`}
											className='flex-1 cursor-pointer'>
											{option.text}
										</Label>
									</div>
								)
							)}
						</RadioGroup>
					)}
				</CardContent>
				<CardFooter className='flex justify-between'>
					<Button
						variant='outline'
						onClick={handlePrevious}
						disabled={currentQuestion === 0}>
						<ArrowLeft className='mr-2 h-4 w-4' />
						Previous
					</Button>
					{currentQuestion < test?.questions.length - 1 ? (
						<Button onClick={handleNext}>
							Next
							<ArrowRight className='ml-2 h-4 w-4' />
						</Button>
					) : (
						<Button
							onClick={handleSubmit}
							className='bg-teal-600 hover:bg-teal-700'
							disabled={isSubmitting}>
							{isSubmitting ? (
								<>
									<Loader2 className='mr-2 h-4 w-4 animate-spin' />
									Submitting...
								</>
							) : (
								"Submit Test"
							)}
						</Button>
					)}
				</CardFooter>
			</Card>
		</div>
	);
}
