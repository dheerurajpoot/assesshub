import Link from "next/link";
import { BarChart3, FileText, Plus, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { DashboardStats } from "@/components/dashboard/stats";
import { RecentTests } from "@/components/dashboard/recent-tests";
import { UpcomingAssessments } from "@/components/dashboard/upcoming-assessments";
import { SidebarTrigger } from "../ui/sidebar";

export function AdminDashboard() {
	return (
		<div className='space-y-6'>
			<div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
				<div>
					<SidebarTrigger className='hidden md:flex' />

					<h1 className='text-3xl font-bold tracking-tight'>
						Admin Dashboard
					</h1>
					<p className='text-muted-foreground'>
						Welcome back! Here&apos;s an overview of your assessment
						platform.
					</p>
				</div>
				<Link href='/dashboard/tests/create'>
					<Button className='bg-teal-600 hover:bg-teal-700'>
						<Plus className='mr-2 h-4 w-4' />
						Create Test
					</Button>
				</Link>
			</div>

			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Total Tests
						</CardTitle>
						<FileText className='h-4 w-4 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>24</div>
						<p className='text-xs text-muted-foreground'>
							+2 from last month
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Candidates
						</CardTitle>
						<Users className='h-4 w-4 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>145</div>
						<p className='text-xs text-muted-foreground'>
							+12 from last month
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Completion Rate
						</CardTitle>
						<BarChart3 className='h-4 w-4 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>87%</div>
						<p className='text-xs text-muted-foreground'>
							+2% from last month
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Average Score
						</CardTitle>
						<BarChart3 className='h-4 w-4 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>72%</div>
						<p className='text-xs text-muted-foreground'>
							+4% from last month
						</p>
					</CardContent>
				</Card>
			</div>

			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
				<Card className='md:col-span-2 lg:col-span-4'>
					<CardHeader>
						<CardTitle>Assessment Statistics</CardTitle>
						<CardDescription>
							Test completion and performance metrics over time
						</CardDescription>
					</CardHeader>
					<CardContent className='pl-2'>
						<DashboardStats />
					</CardContent>
				</Card>
				<Card className='md:col-span-2 lg:col-span-3'>
					<CardHeader>
						<CardTitle>Recent Tests</CardTitle>
						<CardDescription>
							Your recently created assessment tests
						</CardDescription>
					</CardHeader>
					<CardContent>
						<RecentTests />
					</CardContent>
					<CardFooter>
						<Link href='/dashboard/tests'>
							<Button variant='outline' className='w-full'>
								View All Tests
							</Button>
						</Link>
					</CardFooter>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Upcoming Assessments</CardTitle>
					<CardDescription>
						Scheduled assessments for the next 7 days
					</CardDescription>
				</CardHeader>
				<CardContent>
					<UpcomingAssessments />
				</CardContent>
			</Card>
		</div>
	);
}
