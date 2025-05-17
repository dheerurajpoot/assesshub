"use client";
import Link from "next/link";
import { CheckCircle, Clock, FileText } from "lucide-react";

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
import { UserTestsList } from "@/components/dashboard/user-tests-list";
import { SidebarTrigger } from "../ui/sidebar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export function UserDashboard() {
	const [tests, setTests] = useState<any[]>([]);

	const getTests = async () => {
		try {
			const response = await axios.get("/api/tests");
			setTests(response.data.tests);
		} catch (error) {
			console.error("Error fetching tests:", error);
			setTests([]);
		}
	};

	useEffect(() => {
		getTests();
	}, []);
	return (
		<div className='space-y-6'>
			<div>
				<SidebarTrigger className='hidden md:flex' />

				<h1 className='text-3xl font-bold tracking-tight'>
					My Dashboard
				</h1>
				<p className='text-muted-foreground'>
					Welcome back! Here's an overview of your assessments.
				</p>
			</div>

			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Pending Tests
						</CardTitle>
						<Clock className='h-4 w-4 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>3</div>
						<p className='text-xs text-muted-foreground'>
							Tests waiting to be completed
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Completed Tests
						</CardTitle>
						<CheckCircle className='h-4 w-4 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>7</div>
						<p className='text-xs text-muted-foreground'>
							Tests you've already completed
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Average Score
						</CardTitle>
						<FileText className='h-4 w-4 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>78%</div>
						<p className='text-xs text-muted-foreground'>
							Your average score across all tests
						</p>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Current Progress</CardTitle>
					<CardDescription>
						Your progress on the current assessment program
					</CardDescription>
				</CardHeader>
				<CardContent className='space-y-8'>
					<div className='space-y-2'>
						<div className='flex items-center justify-between'>
							<div className='text-sm font-medium'>
								Frontend Development Assessment
							</div>
							<div className='text-sm text-muted-foreground'>
								7/10 completed
							</div>
						</div>
						<Progress value={70} className='h-2 w-full' />
					</div>

					<div className='space-y-2'>
						<div className='flex items-center justify-between'>
							<div className='text-sm font-medium'>
								Backend Development Assessment
							</div>
							<div className='text-sm text-muted-foreground'>
								3/8 completed
							</div>
						</div>
						<Progress value={37.5} className='h-2 w-full' />
					</div>

					<div className='space-y-2'>
						<div className='flex items-center justify-between'>
							<div className='text-sm font-medium'>
								DevOps Assessment
							</div>
							<div className='text-sm text-muted-foreground'>
								0/5 completed
							</div>
						</div>
						<Progress value={0} className='h-2 w-full' />
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>My Tests</CardTitle>
					<CardDescription>
						All your assigned assessment tests
					</CardDescription>
				</CardHeader>
				<CardContent>
					<UserTestsList tests={tests} />
				</CardContent>
				<CardFooter>
					<Link href='/dashboard/my-tests'>
						<Button variant='outline' className='w-full'>
							View All My Tests
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
