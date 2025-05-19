import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { PricingToggle } from "@/components/pricing-toggle";

export const metadata: Metadata = {
	title: "Pricing | AssessHub",
	description: "Flexible pricing plans for teams of all sizes",
};

export default function PricingPage() {
	return (
		<div className='flex min-h-screen flex-col'>
			<main className='flex-1'>
				{/* Hero Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-gray-900'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									Simple, Transparent Pricing
								</h1>
								<p className='max-w-[800px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Choose the plan that&apos;s right for your
									team. All plans include a 14-day free trial.
								</p>
							</div>
							<PricingToggle />
						</div>
					</div>
				</section>

				{/* Pricing Plans */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
							{/* Starter Plan */}
							<div className='flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md'>
								<div className='space-y-2'>
									<h3 className='text-2xl font-bold'>
										Starter
									</h3>
									<p className='text-gray-500 dark:text-gray-400'>
										Perfect for small teams and startups
									</p>
								</div>
								<div className='mt-4 flex items-baseline'>
									<span className='text-4xl font-bold'>
										$49
									</span>
									<span className='ml-1 text-gray-500 dark:text-gray-400'>
										/month
									</span>
								</div>
								<p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
									Billed annually ($59 monthly)
								</p>
								<ul className='mt-6 space-y-3'>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Up to 5 team members</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>10 assessments per month</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Basic question types</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Standard reports</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Email support</span>
									</li>
								</ul>
								<div className='mt-6'>
									<Link href='/auth/sign-up?plan=starter'>
										<Button className='w-full bg-teal-600 hover:bg-teal-700'>
											Get Started
											<ArrowRight className='ml-2 h-4 w-4' />
										</Button>
									</Link>
								</div>
							</div>

							{/* Professional Plan */}
							<div className='relative flex flex-col rounded-lg border border-teal-200 bg-background p-6 shadow-md transition-all hover:shadow-lg dark:border-teal-800'>
								<div className='absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-3 py-1 text-xs font-medium text-white'>
									Most Popular
								</div>
								<div className='space-y-2'>
									<h3 className='text-2xl font-bold'>
										Professional
									</h3>
									<p className='text-gray-500 dark:text-gray-400'>
										Ideal for growing businesses
									</p>
								</div>
								<div className='mt-4 flex items-baseline'>
									<span className='text-4xl font-bold'>
										$99
									</span>
									<span className='ml-1 text-gray-500 dark:text-gray-400'>
										/month
									</span>
								</div>
								<p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
									Billed annually ($119 monthly)
								</p>
								<ul className='mt-6 space-y-3'>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Up to 20 team members</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>50 assessments per month</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Advanced question types</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Custom branding</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Advanced analytics</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Priority email support</span>
									</li>
								</ul>
								<div className='mt-6'>
									<Link href='/auth/sign-up?plan=professional'>
										<Button className='w-full bg-teal-600 hover:bg-teal-700'>
											Get Started
											<ArrowRight className='ml-2 h-4 w-4' />
										</Button>
									</Link>
								</div>
							</div>

							{/* Enterprise Plan */}
							<div className='flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md'>
								<div className='space-y-2'>
									<h3 className='text-2xl font-bold'>
										Enterprise
									</h3>
									<p className='text-gray-500 dark:text-gray-400'>
										For large organizations with custom
										needs
									</p>
								</div>
								<div className='mt-4 flex items-baseline'>
									<span className='text-4xl font-bold'>
										Custom
									</span>
								</div>
								<p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
									Contact us for custom pricing
								</p>
								<ul className='mt-6 space-y-3'>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Unlimited team members</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Unlimited assessments</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Custom question types</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Advanced security features</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Custom integrations</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>Dedicated account manager</span>
									</li>
									<li className='flex items-start gap-2'>
										<Check className='h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0' />
										<span>24/7 phone & email support</span>
									</li>
								</ul>
								<div className='mt-6'>
									<Link href='/contact?subject=enterprise'>
										<Button
											className='w-full'
											variant='outline'>
											Contact Sales
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Feature Comparison */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-gray-900'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Compare Plans
								</h2>
								<p className='max-w-[800px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									See which plan is right for your
									organization
								</p>
							</div>
						</div>
						<div className='mt-12 overflow-x-auto'>
							<table className='w-full border-collapse text-left'>
								<thead>
									<tr className='border-b'>
										<th className='py-4 pr-4 text-left font-medium'>
											Features
										</th>
										<th className='px-4 py-4 text-center font-medium'>
											Starter
										</th>
										<th className='px-4 py-4 text-center font-medium'>
											Professional
										</th>
										<th className='pl-4 py-4 text-center font-medium'>
											Enterprise
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className='border-b'>
										<td className='py-4 pr-4 font-medium'>
											Team members
										</td>
										<td className='px-4 py-4 text-center'>
											Up to 5
										</td>
										<td className='px-4 py-4 text-center'>
											Up to 20
										</td>
										<td className='pl-4 py-4 text-center'>
											Unlimited
										</td>
									</tr>
									<tr className='border-b'>
										<td className='py-4 pr-4 font-medium'>
											Assessments per month
										</td>
										<td className='px-4 py-4 text-center'>
											10
										</td>
										<td className='px-4 py-4 text-center'>
											50
										</td>
										<td className='pl-4 py-4 text-center'>
											Unlimited
										</td>
									</tr>
									<tr className='border-b'>
										<td className='py-4 pr-4 font-medium'>
											Question types
										</td>
										<td className='px-4 py-4 text-center'>
											Basic
										</td>
										<td className='px-4 py-4 text-center'>
											Advanced
										</td>
										<td className='pl-4 py-4 text-center'>
											Custom
										</td>
									</tr>
									<tr className='border-b'>
										<td className='py-4 pr-4 font-medium'>
											Branding
										</td>
										<td className='px-4 py-4 text-center'>
											Basic
										</td>
										<td className='px-4 py-4 text-center'>
											Custom
										</td>
										<td className='pl-4 py-4 text-center'>
											White label
										</td>
									</tr>
									<tr className='border-b'>
										<td className='py-4 pr-4 font-medium'>
											Analytics
										</td>
										<td className='px-4 py-4 text-center'>
											Standard
										</td>
										<td className='px-4 py-4 text-center'>
											Advanced
										</td>
										<td className='pl-4 py-4 text-center'>
											Custom
										</td>
									</tr>
									<tr className='border-b'>
										<td className='py-4 pr-4 font-medium'>
											Integrations
										</td>
										<td className='px-4 py-4 text-center'>
											Limited
										</td>
										<td className='px-4 py-4 text-center'>
											Standard
										</td>
										<td className='pl-4 py-4 text-center'>
											Custom
										</td>
									</tr>
									<tr className='border-b'>
										<td className='py-4 pr-4 font-medium'>
											Support
										</td>
										<td className='px-4 py-4 text-center'>
											Email
										</td>
										<td className='px-4 py-4 text-center'>
											Priority email
										</td>
										<td className='pl-4 py-4 text-center'>
											24/7 phone & email
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Frequently Asked Questions
								</h2>
								<p className='max-w-[800px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Find answers to common questions about our
									pricing and plans
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2'>
							<div className='space-y-2'>
								<h3 className='text-xl font-bold'>
									Can I change plans later?
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									Yes, you can upgrade or downgrade your plan
									at any time. Changes take effect at the
									start of your next billing cycle.
								</p>
							</div>
							<div className='space-y-2'>
								<h3 className='text-xl font-bold'>
									Is there a free trial?
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									Yes, all plans include a 14-day free trial
									with full access to all features. No credit
									card required to start.
								</p>
							</div>
							<div className='space-y-2'>
								<h3 className='text-xl font-bold'>
									What payment methods do you accept?
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									We accept all major credit cards, including
									Visa, Mastercard, and American Express.
									Enterprise customers can also pay by
									invoice.
								</p>
							</div>
							<div className='space-y-2'>
								<h3 className='text-xl font-bold'>
									Can I cancel anytime?
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									Yes, you can cancel your subscription at any
									time. You'll continue to have access until
									the end of your current billing period.
								</p>
							</div>
							<div className='space-y-2'>
								<h3 className='text-xl font-bold'>
									Do you offer discounts for nonprofits or
									educational institutions?
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									Yes, we offer special pricing for
									nonprofits, educational institutions, and
									startups. Contact our sales team for
									details.
								</p>
							</div>
							<div className='space-y-2'>
								<h3 className='text-xl font-bold'>
									What happens if I exceed my plan limits?
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									We&apos;ll notify you when you&apos;re
									preaching your limits. You can upgrade your
									plan or pay for additional usage at
									pro-rated prices.
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
									Ready to get started?
								</h2>
								<p className='max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Start your 14-day free trial today. No
									credit card required.
								</p>
							</div>
							<div className='flex flex-col gap-2 min-[400px]:flex-row'>
								<Link href='/auth/sign-up'>
									<Button
										size='lg'
										className='bg-teal-600 hover:bg-teal-700'>
										Start Free Trial
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
