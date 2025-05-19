"use client";
import { FileText, MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Test } from "@/models/Test";

export function TestsList({ tests }: { tests: Test[] }) {
	return (
		<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
			{tests.length === 0 ? (
				<p className='text-center py-4'>No tests found</p>
			) : (
				<>
					{tests.map((test, index) => (
						<Card key={index} className='overflow-hidden'>
							<CardHeader className='pb-3'>
								<div className='flex items-start justify-between'>
									<div className='space-y-1'>
										<CardTitle className='line-clamp-1'>
											{test.name}
										</CardTitle>
										<CardDescription className='line-clamp-2'>
											{test.description}
										</CardDescription>
									</div>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button
												variant='ghost'
												size='icon'
												className='h-8 w-8'>
												<MoreHorizontal className='h-4 w-4' />
												<span className='sr-only'>
													Menu
												</span>
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align='end'>
											<DropdownMenuLabel>
												Actions
											</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem>
												Edit
											</DropdownMenuItem>
											<DropdownMenuItem>
												Duplicate
											</DropdownMenuItem>
											<DropdownMenuItem>
												Preview
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem className='text-red-600'>
												Delete
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</CardHeader>
							<CardContent className='pb-3'>
								<div className='flex items-center justify-between text-sm'>
									<div className='flex items-center'>
										<FileText className='mr-1 h-4 w-4 text-muted-foreground' />
										<span>
											{test.questions.length} questions
										</span>
									</div>
									<div>{test.duration} min</div>
								</div>
							</CardContent>
							<CardFooter className='flex items-center justify-between border-t bg-muted/50 px-6 py-3'>
								<div className='flex items-center text-xs text-muted-foreground'>
									Created{" "}
									{new Date(test.createdAt).toDateString()}
								</div>
								<Badge
									variant={
										test.isActive ? "default" : "outline"
									}
									className={
										test.isActive
											? "bg-teal-500 hover:bg-teal-600"
											: "text-muted-foreground"
									}>
									{test.isActive ? "Active" : "Draft"}
								</Badge>
							</CardFooter>
						</Card>
					))}
				</>
			)}
		</div>
	);
}
