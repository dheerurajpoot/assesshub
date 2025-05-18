"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CandidatesList } from "@/components/dashboard/candidates-list";
import { CandidatesStats } from "@/components/dashboard/candidates-stats";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CandidatesPage() {
	const [candidates, setCandidates] = useState<any>([]);
	const getCandidates = async () => {
		try {
			const response = await axios.get("/api/candidates");
			setCandidates(response.data.users);
		} catch (error) {
			console.error("Error fetching candidates:", error);
			return [];
		}
	};

	useEffect(() => {
		getCandidates();
	}, []);

	return (
		<div className='space-y-6'>
			<div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
				<div>
					<h1 className='text-3xl font-bold tracking-tight'>
						Candidates
					</h1>
					<p className='text-muted-foreground'>
						Manage your candidates and view their assessment results
					</p>
				</div>
			</div>

			<CandidatesStats />

			<div className='flex items-center gap-2'>
				<div className='relative flex-1'>
					<Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
					<Input
						type='search'
						placeholder='Search candidates...'
						className='w-full pl-8'
					/>
				</div>
			</div>

			<CandidatesList candidates={candidates} />
		</div>
	);
}
