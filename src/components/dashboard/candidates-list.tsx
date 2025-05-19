import { MoreHorizontal, Mail, Phone, Calendar } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Progress } from "@/components/ui/progress";
import { Candidate } from "@/types";

export function CandidatesList({ candidates }: { candidates: Candidate[] }) {
	return (
		<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
			{candidates?.map((candidate) => (
				<Card key={candidate._id} className='overflow-hidden'>
					<CardHeader className='pb-3'>
						<div className='flex items-start justify-between'>
							<div className='flex items-center space-x-4'>
								<Avatar>
									<AvatarImage
										src={candidate?.name?.charAt(0) || "U"}
									/>
									<AvatarFallback>
										{candidate.name?.charAt(0) || "U"}
									</AvatarFallback>
								</Avatar>
								<div>
									<CardTitle className='text-base'>
										{candidate.name}
									</CardTitle>
									<CardDescription className='text-sm'>
										{candidate.position}
									</CardDescription>
								</div>
							</div>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant='ghost'
										size='icon'
										className='h-8 w-8'>
										<MoreHorizontal className='h-4 w-4' />
										<span className='sr-only'>Menu</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align='end'>
									<DropdownMenuLabel>
										Actions
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem>
										View Profile
									</DropdownMenuItem>
									<DropdownMenuItem>
										Send Assessment
									</DropdownMenuItem>
									<DropdownMenuItem>
										Edit Details
									</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem className='text-red-600'>
										Remove
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</CardHeader>
					<CardContent className='pb-3'>
						<div className='space-y-2 text-sm'>
							<div className='flex items-center'>
								<Mail className='mr-2 h-4 w-4 text-muted-foreground' />
								<span className='text-muted-foreground'>
									{candidate.email}
								</span>
							</div>
							<div className='flex items-center'>
								<Phone className='mr-2 h-4 w-4 text-muted-foreground' />
								<span className='text-muted-foreground'>
									{candidate.phone}
								</span>
							</div>
							<div className='flex items-center'>
								<Calendar className='mr-2 h-4 w-4 text-muted-foreground' />
								<span className='text-muted-foreground'>
									Added on{" "}
									{new Date(
										candidate.createdAt
									).toLocaleDateString()}
								</span>
							</div>
						</div>
						{candidate.status === "completed" && (
							<div className='mt-4 space-y-2'>
								<div className='flex items-center justify-between text-sm'>
									<span>Assessment Score</span>
									<span className='font-medium'>
										{candidate.score}%
									</span>
								</div>
								<Progress
									value={candidate.score}
									className='h-2'
								/>
							</div>
						)}
					</CardContent>
					<CardFooter className='flex items-center justify-between border-t bg-muted/50 px-6 py-3'>
						<div className='text-xs text-muted-foreground'>
							ID: {candidate._id}
						</div>
						<Badge
							variant={
								candidate.status === "completed"
									? "default"
									: candidate.status === "in_progress"
									? "secondary"
									: "outline"
							}
							className={
								candidate.status === "completed"
									? "bg-teal-500 hover:bg-teal-600"
									: candidate.status === "in_progress"
									? "bg-amber-500 hover:bg-amber-600"
									: "text-muted-foreground"
							}>
							{candidate.status === "completed"
								? "Completed"
								: candidate.status === "in_progress"
								? "In Progress"
								: "Invited"}
						</Badge>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
