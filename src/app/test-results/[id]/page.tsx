"use client";

import { CheckCircle } from "lucide-react";
import { use } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Test } from "@/models/Test";

export default function TestResultsPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const resolvedParams = use(params);
	const [test, setTest] = useState<Test | null>(null);

	const getTest = async () => {
		try {
			const response = await axios.get(
				`/api/tests/test?id=${resolvedParams.id}`
			);
			console.log(response.data.test);
			setTest(response.data.test);
		} catch (error) {
			console.error("Error fetching test:", error);
			setTest(null);
		}
	};

	useEffect(() => {
		getTest();
	}, [resolvedParams.id]);

	return (
		<div className='container mx-auto py-12 h-screen'>
			<div className='max-w-3xl mx-auto space-y-6'>
				<Card>
					<CardHeader className='text-center'>
						<div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20'>
							<CheckCircle className='h-8 w-8 text-teal-600 dark:text-teal-400' />
						</div>
						<CardTitle className='text-2xl'>
							Test Completed
						</CardTitle>
						<CardDescription>
							You have completed the {test?.name} test.
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-6'>
						<div className='text-center'>
							<p className='text-sm text-muted-foreground'>
								We will connect with you via email with your
								results soon. Thank you for taking the test!
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
