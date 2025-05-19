"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { UserTestsList } from "@/components/dashboard/user-tests-list";
import { SidebarTrigger } from "../ui/sidebar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export function UserDashboard() {
	const [tests, setTests] = useState<any[]>([]);

	const getTests = async () => {
		try {
			const response = await axios.get("/api/tests/alltests");
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
					<Link href='/dashboard/tests'>
						<Button variant='outline' className='w-full'>
							View All My Tests
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
