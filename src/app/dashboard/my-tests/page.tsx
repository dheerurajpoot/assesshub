"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { UserTestsList } from "@/components/dashboard/user-tests-list";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function MyTestsPage() {
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
				<h1 className='text-3xl font-bold tracking-tight'>My Tests</h1>
				<p className='text-muted-foreground'>
					View and take your assigned assessment tests
				</p>
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

			<UserTestsList tests={tests} />
		</div>
	);
}
