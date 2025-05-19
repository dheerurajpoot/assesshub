import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	CheckCircle,
	Users,
	Award,
	BarChart3,
	Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "About Us | AssessHub",
	description:
		"Learn about AssessHub's mission, vision, and the team behind the platform",
};

export default function AboutPage() {
	return (
		<div className='flex min-h-screen flex-col'>
			<main className='flex-1'>
				{/* Hero Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-gray-900'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									About AssessHub
								</h1>
								<p className='max-w-[800px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									We&apos;re on a mission to transform how
									organizations evaluate talent and make
									hiring decisions.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Mission & Vision */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='grid gap-10 lg:grid-cols-2 lg:gap-16'>
							<div className='space-y-4'>
								<div className='inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm text-teal-700 dark:text-teal-300'>
									Our Mission
								</div>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Empowering organizations to make data-driven
									hiring decisions
								</h2>
								<p className='text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									At AssessHub, we believe that the right
									talent is the foundation of every successful
									organization. Our mission is to provide a
									comprehensive assessment platform that helps
									companies identify, evaluate, and select the
									best candidates based on objective data
									rather than subjective impressions.
								</p>
								<div className='space-y-2'>
									<div className='flex items-center gap-2'>
										<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										<span>
											Eliminate bias in the hiring process
										</span>
									</div>
									<div className='flex items-center gap-2'>
										<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										<span>
											Standardize evaluation criteria
										</span>
									</div>
									<div className='flex items-center gap-2'>
										<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										<span>
											Reduce time-to-hire with efficient
											assessments
										</span>
									</div>
								</div>
							</div>
							<div className='space-y-4'>
								<div className='inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm text-teal-700 dark:text-teal-300'>
									Our Vision
								</div>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Transforming talent acquisition through
									technology
								</h2>
								<p className='text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									We envision a future where every
									organization, regardless of size or
									industry, has access to sophisticated
									assessment tools that were once available
									only to large enterprises. By democratizing
									these technologies, we aim to create a more
									meritocratic hiring landscape where talent
									and skills are the primary determinants of
									career opportunities.
								</p>
								<div className='space-y-2'>
									<div className='flex items-center gap-2'>
										<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										<span>
											Create equal opportunities for all
											candidates
										</span>
									</div>
									<div className='flex items-center gap-2'>
										<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										<span>
											Build diverse and inclusive
											workplaces
										</span>
									</div>
									<div className='flex items-center gap-2'>
										<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										<span>
											Improve employee retention through
											better matches
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Team Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-gray-900'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm text-teal-700 dark:text-teal-300'>
									Our Team
								</div>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Meet the people behind AssessHub
								</h2>
								<p className='max-w-[800px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Our diverse team brings together expertise
									in HR technology, psychometrics, data
									science, and software development.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3'>
							{[
								{
									name: "Sarah Johnson",
									role: "CEO & Co-Founder",
									bio: "Former HR Tech executive with 15+ years of experience in talent acquisition.",
								},
								{
									name: "Michael Chen",
									role: "CTO & Co-Founder",
									bio: "AI and machine learning expert with a background in predictive analytics.",
								},
								{
									name: "Priya Patel",
									role: "Head of Product",
									bio: "Product leader focused on creating intuitive and powerful assessment tools.",
								},
								{
									name: "James Wilson",
									role: "Head of Customer Success",
									bio: "Dedicated to ensuring clients get maximum value from our platform.",
								},
								{
									name: "Elena Rodriguez",
									role: "Lead UX Designer",
									bio: "Creating beautiful and accessible experiences for all users.",
								},
								{
									name: "David Kim",
									role: "Head of Data Science",
									bio: "Developing algorithms that power our assessment analytics.",
								},
							].map((member, index) => (
								<div
									key={index}
									className='flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 dark:bg-gray-950 shadow-sm transition-all hover:shadow-md'>
									<div className='h-24 w-24 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800'>
										<Image
											src={`/placeholder.svg?height=96&width=96&text=${member.name.charAt(
												0
											)}`}
											alt={member.name}
											width={96}
											height={96}
											className='h-full w-full object-cover'
										/>
									</div>
									<div className='space-y-2 text-center'>
										<h3 className='text-xl font-bold'>
											{member.name}
										</h3>
										<p className='text-sm font-medium text-teal-600 dark:text-teal-400'>
											{member.role}
										</p>
										<p className='text-sm text-gray-500 dark:text-gray-400'>
											{member.bio}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Values Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm text-teal-700 dark:text-teal-300'>
									Our Values
								</div>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									What drives us every day
								</h2>
								<p className='max-w-[800px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Our core values shape how we build our
									products and serve our customers.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2'>
							<div className='flex flex-col space-y-4 rounded-lg border p-6 shadow-sm'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20'>
									<Users className='h-6 w-6 text-teal-600 dark:text-teal-400' />
								</div>
								<h3 className='text-xl font-bold'>
									Fairness & Inclusion
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									We design our platform to minimize bias and
									create equal opportunities for all
									candidates, regardless of background.
								</p>
							</div>
							<div className='flex flex-col space-y-4 rounded-lg border p-6 shadow-sm'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20'>
									<Award className='h-6 w-6 text-teal-600 dark:text-teal-400' />
								</div>
								<h3 className='text-xl font-bold'>
									Excellence
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									We&apos;re committed to building the highest
									quality assessment tools backed by rigorous
									research and continuous improvement.
								</p>
							</div>
							<div className='flex flex-col space-y-4 rounded-lg border p-6 shadow-sm'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20'>
									<BarChart3 className='h-6 w-6 text-teal-600 dark:text-teal-400' />
								</div>
								<h3 className='text-xl font-bold'>
									Data-Driven
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									We believe in the power of objective data to
									inform better decisions, both in our product
									development and in our customers' hiring
									processes.
								</p>
							</div>
							<div className='flex flex-col space-y-4 rounded-lg border p-6 shadow-sm'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20'>
									<Shield className='h-6 w-6 text-teal-600 dark:text-teal-400' />
								</div>
								<h3 className='text-xl font-bold'>
									Privacy & Security
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									We maintain the highest standards of data
									protection and security to safeguard
									candidate and organizational information.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-teal-50 dark:bg-teal-950/10'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Ready to transform your hiring process?
								</h2>
								<p className='max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Join thousands of companies using our
									platform to find the best talent.
								</p>
							</div>
							<div className='flex flex-col gap-2 min-[400px]:flex-row'>
								<Link href='/auth/sign-up'>
									<Button
										size='lg'
										className='bg-teal-600 hover:bg-teal-700'>
										Get Started for Free
										<ArrowRight className='ml-2 h-4 w-4' />
									</Button>
								</Link>
								<Link href='/contact'>
									<Button size='lg' variant='outline'>
										Contact Sales
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
