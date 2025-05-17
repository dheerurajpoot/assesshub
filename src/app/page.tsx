import Link from "next/link";
import {
	ArrowRight,
	CheckCircle,
	FileCheck,
	Users,
	BarChart3,
	Shield,
	Star,
	Zap,
	Award,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
	return (
		<div className='flex min-h-screen flex-col'>
			<main className='flex-1'>
				{/* Hero Section */}
				<section className='w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-gray-900'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<div className='inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-700 dark:border-teal-800 dark:bg-teal-950/30 dark:text-teal-400'>
										<span className='font-medium'>
											New Feature
										</span>
										<span className='ml-1'>
											AI-Powered Assessments
										</span>
									</div>
									<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
										Professional Assessment Platform for
										Modern Hiring
									</h1>
									<p className='max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl'>
										Create custom assessments, quizzes, and
										exam tests to evaluate candidates
										effectively and make data-driven hiring
										decisions.
									</p>
								</div>
								<div className='flex flex-col gap-2 min-[400px]:flex-row'>
									<Link href='/auth/sign-up'>
										<Button
											size='lg'
											className='bg-teal-600 hover:bg-teal-700'>
											Get Started
											<ArrowRight className='ml-2 h-4 w-4' />
										</Button>
									</Link>
									<Link href='/auth/sign-in'>
										<Button size='lg' variant='outline'>
											Sign In
										</Button>
									</Link>
								</div>
								<div className='flex items-center space-x-4 text-sm'>
									<div className='flex items-center'>
										<CheckCircle className='mr-1 h-4 w-4 text-teal-600 dark:text-teal-400' />
										<span>Free 14-day trial</span>
									</div>
									<div className='flex items-center'>
										<CheckCircle className='mr-1 h-4 w-4 text-teal-600 dark:text-teal-400' />
										<span>No credit card required</span>
									</div>
								</div>
							</div>
							<div className='relative hidden lg:block'>
								<Image
									src='https://cdn.pixabay.com/photo/2017/09/25/11/54/to-read-the-book-2784895_1280.jpg'
									width={550}
									height={550}
									alt='Assessment Platform'
									className='z-10 mx-auto overflow-hidden rounded-xl object-cover sm:w-full'
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Trusted By Section */}
				<section className='w-full py-12 md:py-16 lg:py-20 border-y bg-muted/40'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-xl font-medium tracking-tight text-muted-foreground'>
									Trusted by innovative companies worldwide
								</h2>
							</div>
							<div className='flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16'>
								{[
									"Acme Inc",
									"Globex",
									"Stark Industries",
									"Wayne Enterprises",
									"Umbrella Corp",
								].map((company) => (
									<div
										key={company}
										className='flex items-center justify-center'>
										<span className='text-xl font-bold text-muted-foreground/70'>
											{company}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm text-teal-700 dark:text-teal-300'>
									Features
								</div>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Everything you need for professional
									assessments
								</h2>
								<p className='max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Our platform provides all the tools you need
									to create, manage, and analyze assessments
									for job candidates and employees.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3'>
							<div className='flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20'>
									<FileCheck className='h-6 w-6 text-teal-600 dark:text-teal-400' />
								</div>
								<div className='space-y-2'>
									<h3 className='text-xl font-bold'>
										Custom Assessments
									</h3>
									<p className='text-gray-500 dark:text-gray-400'>
										Create tailored assessments with
										multiple question types to evaluate
										specific skills and knowledge.
									</p>
								</div>
							</div>
							<div className='flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20'>
									<Users className='h-6 w-6 text-teal-600 dark:text-teal-400' />
								</div>
								<div className='space-y-2'>
									<h3 className='text-xl font-bold'>
										Candidate Management
									</h3>
									<p className='text-gray-500 dark:text-gray-400'>
										Organize candidates, track their
										progress, and manage assessment
										invitations all in one place.
									</p>
								</div>
							</div>
							<div className='flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20'>
									<CheckCircle className='h-6 w-6 text-teal-600 dark:text-teal-400' />
								</div>
								<div className='space-y-2'>
									<h3 className='text-xl font-bold'>
										Detailed Analytics
									</h3>
									<p className='text-gray-500 dark:text-gray-400'>
										Get comprehensive insights and analytics
										to make data-driven hiring decisions.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* How It Works Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-gray-900'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm text-teal-700 dark:text-teal-300'>
									How It Works
								</div>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Simple process, powerful results
								</h2>
								<p className='max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Our platform streamlines the assessment
									process from creation to evaluation
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3'>
							<div className='flex flex-col items-center space-y-4 text-center'>
								<div className='flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20'>
									<span className='text-xl font-bold text-teal-600 dark:text-teal-400'>
										1
									</span>
								</div>
								<div className='space-y-2'>
									<h3 className='text-xl font-bold'>
										Create Assessment
									</h3>
									<p className='text-gray-500 dark:text-gray-400'>
										Design custom assessments with various
										question types, time limits, and scoring
										criteria.
									</p>
								</div>
							</div>
							<div className='flex flex-col items-center space-y-4 text-center'>
								<div className='flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20'>
									<span className='text-xl font-bold text-teal-600 dark:text-teal-400'>
										2
									</span>
								</div>
								<div className='space-y-2'>
									<h3 className='text-xl font-bold'>
										Invite Candidates
									</h3>
									<p className='text-gray-500 dark:text-gray-400'>
										Send automated invitations to candidates
										with secure access links to take the
										assessment.
									</p>
								</div>
							</div>
							<div className='flex flex-col items-center space-y-4 text-center'>
								<div className='flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20'>
									<span className='text-xl font-bold text-teal-600 dark:text-teal-400'>
										3
									</span>
								</div>
								<div className='space-y-2'>
									<h3 className='text-xl font-bold'>
										Analyze Results
									</h3>
									<p className='text-gray-500 dark:text-gray-400'>
										Review detailed performance analytics
										and make data-driven hiring decisions.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Use Cases Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm text-teal-700 dark:text-teal-300'>
									Use Cases
								</div>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Tailored for every assessment need
								</h2>
								<p className='max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Our platform adapts to various assessment
									scenarios across different industries
								</p>
							</div>
						</div>
						<div className='mx-auto mt-8'>
							<Tabs defaultValue='technical' className='w-full'>
								<TabsList className='grid w-full grid-cols-3 mb-8'>
									<TabsTrigger value='technical'>
										Technical Assessments
									</TabsTrigger>
									<TabsTrigger value='behavioral'>
										Behavioral Interviews
									</TabsTrigger>
									<TabsTrigger value='skills'>
										Skills Evaluation
									</TabsTrigger>
								</TabsList>
								<TabsContent
									value='technical'
									className='space-y-4'>
									<div className='grid gap-6 md:grid-cols-2 lg:gap-12'>
										<div className='space-y-4'>
											<h3 className='text-2xl font-bold'>
												Technical Assessments
											</h3>
											<p className='text-gray-500 dark:text-gray-400'>
												Evaluate candidates' technical
												skills with coding challenges,
												multiple-choice questions, and
												problem-solving exercises.
												Perfect for software
												development, engineering, and IT
												roles.
											</p>
											<ul className='space-y-2'>
												<li className='flex items-start gap-2'>
													<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5' />
													<span>
														Coding challenges with
														real-time evaluation
													</span>
												</li>
												<li className='flex items-start gap-2'>
													<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5' />
													<span>
														Technical knowledge
														assessments
													</span>
												</li>
												<li className='flex items-start gap-2'>
													<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5' />
													<span>
														Problem-solving
														scenarios
													</span>
												</li>
											</ul>
										</div>
										<div className='relative rounded-xl overflow-hidden border'>
											<img
												src='/placeholder.svg?height=400&width=600&text=Technical+Assessment'
												alt='Technical Assessment'
												className='w-full h-full object-cover'
											/>
										</div>
									</div>
								</TabsContent>
								<TabsContent
									value='behavioral'
									className='space-y-4'>
									<div className='grid gap-6 md:grid-cols-2 lg:gap-12'>
										<div className='space-y-4'>
											<h3 className='text-2xl font-bold'>
												Behavioral Interviews
											</h3>
											<p className='text-gray-500 dark:text-gray-400'>
												Assess candidates' soft skills,
												communication abilities, and
												cultural fit with structured
												behavioral interview questions.
												Ideal for management, customer
												service, and team-oriented
												roles.
											</p>
											<ul className='space-y-2'>
												<li className='flex items-start gap-2'>
													<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5' />
													<span>
														Structured interview
														templates
													</span>
												</li>
												<li className='flex items-start gap-2'>
													<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5' />
													<span>
														Personality and cultural
														fit assessments
													</span>
												</li>
												<li className='flex items-start gap-2'>
													<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5' />
													<span>
														Situational judgment
														scenarios
													</span>
												</li>
											</ul>
										</div>
										<div className='relative rounded-xl overflow-hidden border'>
											<img
												src='/placeholder.svg?height=400&width=600&text=Behavioral+Interview'
												alt='Behavioral Interview'
												className='w-full h-full object-cover'
											/>
										</div>
									</div>
								</TabsContent>
								<TabsContent
									value='skills'
									className='space-y-4'>
									<div className='grid gap-6 md:grid-cols-2 lg:gap-12'>
										<div className='space-y-4'>
											<h3 className='text-2xl font-bold'>
												Skills Evaluation
											</h3>
											<p className='text-gray-500 dark:text-gray-400'>
												Measure domain-specific skills
												and knowledge with customizable
												assessments. Perfect for roles
												in marketing, design, finance,
												healthcare, and more.
											</p>
											<ul className='space-y-2'>
												<li className='flex items-start gap-2'>
													<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5' />
													<span>
														Industry-specific
														knowledge tests
													</span>
												</li>
												<li className='flex items-start gap-2'>
													<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5' />
													<span>
														Practical skills
														demonstrations
													</span>
												</li>
												<li className='flex items-start gap-2'>
													<CheckCircle className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5' />
													<span>
														Role-specific scenario
														simulations
													</span>
												</li>
											</ul>
										</div>
										<div className='relative rounded-xl overflow-hidden border'>
											<img
												src='/placeholder.svg?height=400&width=600&text=Skills+Evaluation'
												alt='Skills Evaluation'
												className='w-full h-full object-cover'
											/>
										</div>
									</div>
								</TabsContent>
							</Tabs>
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-gray-900'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm text-teal-700 dark:text-teal-300'>
									Testimonials
								</div>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									What our customers say
								</h2>
								<p className='max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Hear from the companies that have
									transformed their hiring process with
									AssessHub
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
							{[
								{
									quote: "AssessHub has completely transformed our technical hiring process. We've reduced time-to-hire by 40% while improving the quality of our engineering team.",
									author: "Sarah Johnson",
									title: "CTO, TechNova",
									rating: 5,
								},
								{
									quote: "The analytics provided by AssessHub give us incredible insights into candidate skills and potential. It's like having an AI hiring assistant.",
									author: "Michael Chen",
									title: "Head of Talent, Quantum Solutions",
									rating: 5,
								},
								{
									quote: "We've been able to standardize our assessment process across all departments, ensuring fair and consistent evaluation of every candidate.",
									author: "Elena Rodriguez",
									title: "HR Director, Global Innovations",
									rating: 4,
								},
							].map((testimonial, index) => (
								<Card key={index} className='overflow-hidden'>
									<CardContent className='p-6'>
										<div className='flex flex-col space-y-4'>
											<div className='flex'>
												{Array(testimonial.rating)
													.fill(null)
													.map((_, i) => (
														<Star
															key={i}
															className='h-5 w-5 fill-current text-yellow-500'
														/>
													))}
											</div>
											<p className='text-gray-600 dark:text-gray-300'>
												"{testimonial.quote}"
											</p>
											<div className='flex items-center space-x-4'>
												<div className='h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800'>
													<div className='flex h-full w-full items-center justify-center font-medium'>
														{testimonial.author.charAt(
															0
														)}
													</div>
												</div>
												<div>
													<p className='font-medium'>
														{testimonial.author}
													</p>
													<p className='text-sm text-gray-500 dark:text-gray-400'>
														{testimonial.title}
													</p>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Benefits Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='grid gap-10 lg:grid-cols-2 lg:gap-16'>
							<div className='space-y-4'>
								<div className='inline-block rounded-lg bg-teal-100 dark:bg-teal-900/20 px-3 py-1 text-sm text-teal-700 dark:text-teal-300'>
									Benefits
								</div>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Why choose AssessHub?
								</h2>
								<p className='text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Our platform offers unique advantages that
									set us apart from traditional assessment
									methods
								</p>
								<div className='space-y-4 pt-4'>
									<div className='flex items-start gap-4'>
										<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20'>
											<Zap className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										</div>
										<div className='space-y-1'>
											<h3 className='text-xl font-bold'>
												Efficiency
											</h3>
											<p className='text-gray-500 dark:text-gray-400'>
												Reduce time-to-hire by up to 50%
												with streamlined assessment
												workflows and automated scoring.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-4'>
										<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20'>
											<BarChart3 className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										</div>
										<div className='space-y-1'>
											<h3 className='text-xl font-bold'>
												Data-Driven Decisions
											</h3>
											<p className='text-gray-500 dark:text-gray-400'>
												Make objective hiring decisions
												based on comprehensive
												performance analytics and
												insights.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-4'>
										<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20'>
											<Shield className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										</div>
										<div className='space-y-1'>
											<h3 className='text-xl font-bold'>
												Fairness & Consistency
											</h3>
											<p className='text-gray-500 dark:text-gray-400'>
												Ensure all candidates are
												evaluated using the same
												criteria, reducing bias in the
												hiring process.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-4'>
										<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20'>
											<Award className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										</div>
										<div className='space-y-1'>
											<h3 className='text-xl font-bold'>
												Quality of Hire
											</h3>
											<p className='text-gray-500 dark:text-gray-400'>
												Improve retention and
												performance by selecting
												candidates with the right skills
												and cultural fit.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='relative flex items-center justify-center'>
								<div className='absolute -inset-4 rounded-xl bg-gradient-to-br from-teal-50 via-white to-teal-50 opacity-50 blur-xl dark:from-teal-950/30 dark:via-transparent dark:to-teal-950/30'></div>
								<img
									src='/placeholder.svg?height=500&width=500&text=Benefits'
									alt='Benefits of AssessHub'
									className='relative z-10 mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full'
								/>
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
									</Button>
								</Link>
								<Link href='/contact'>
									<Button size='lg' variant='outline'>
										Contact Sales
									</Button>
								</Link>
							</div>
							<p className='text-sm text-muted-foreground'>
								No credit card required. 14-day free trial.
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
