"use client";

import Link from "next/link";
import { CheckCircle, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export function UserTestsList({ tests }: { tests: any[] }) {
	return (
		<div className='rounded-md border'>
			{tests.length === 0 ? (
				<p className='text-center py-4'>No tests found</p>
			) : (
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Test Name</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Score</TableHead>
							<TableHead>Due Date</TableHead>
							<TableHead className='text-right'>Action</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{tests.map((test, index) => (
							<TableRow key={index}>
								<TableCell className='font-medium'>
									{test.name}
								</TableCell>
								<TableCell>{test.type}</TableCell>
								<TableCell>
									{test.isActive ? (
										<Badge className='bg-green-500 hover:bg-green-600'>
											<CheckCircle className='mr-1 h-3 w-3' />
											Completed
										</Badge>
									) : (
										<Badge
											variant='outline'
											className='border-amber-500 text-amber-500'>
											<Clock className='mr-1 h-3 w-3' />
											Pending
										</Badge>
									)}
								</TableCell>
								<TableCell>{test.passingScore}</TableCell>
								<TableCell>
									{new Date(test.createdAt).toDateString()}
								</TableCell>
								<TableCell className='text-right'>
									{test.isActive ? (
										<Link
											href={`/test-results/${test._id}`}>
											<Button variant='outline' size='sm'>
												View Results
											</Button>
										</Link>
									) : (
										<Link href={`/take-test/${test._id}`}>
											<Button
												size='sm'
												className='bg-teal-600 hover:bg-teal-700'>
												Take Test
												<ExternalLink className='ml-1 h-3 w-3' />
											</Button>
										</Link>
									)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</div>
	);
}
