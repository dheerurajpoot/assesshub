"use client";

import Link from "next/link";
import { Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TestsList } from "@/components/dashboard/tests-list";
import { UserTestsList } from "@/components/dashboard/user-tests-list";
import axios from "axios";
import { Test } from "@/models/Test";
import { useAuth } from "@/context/AuthContext";

export default function TestsPage() {
	const { isAdmin } = useAuth();
	const [tests, setTests] = useState<Test[]>([]);

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
			<div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
				<div>
					<h1 className='text-3xl font-bold tracking-tight'>Tests</h1>
					<p className='text-muted-foreground'>
						{isAdmin
							? "Manage your assessment tests and quizzes"
							: "View and take your assigned assessment tests"}
					</p>
				</div>
				{isAdmin && (
					<Link href='/dashboard/tests/create'>
						<Button className='bg-teal-600 hover:bg-teal-700'>
							<Plus className='mr-2 h-4 w-4' />
							Create Test
						</Button>
					</Link>
				)}
			</div>

			<div className='flex items-center gap-2'>
				<div className='relative flex-1'>
					<Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
					<Input
						type='search'
						placeholder='Search tests...'
						className='w-full pl-8'
					/>
				</div>
			</div>

			{isAdmin ? (
				<TestsList tests={tests} />
			) : (
				<UserTestsList tests={tests} />
			)}
		</div>
	);
}
