import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
	title: "Contact Us | AssessHub",
	description:
		"Get in touch with our team for any questions, support, or sales inquiries",
};

export default function ContactPage() {
	return (
		<div className='flex min-h-screen flex-col'>
			<main className='flex-1'>
				{/* Hero Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-gray-900'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									Contact Us
								</h1>
								<p className='max-w-[800px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Have questions or need assistance? Our team
									is here to help.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Contact Form Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='grid gap-10 lg:grid-cols-2 lg:gap-16'>
							<div className='space-y-6'>
								<div className='space-y-2'>
									<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
										Get in Touch
									</h2>
									<p className='text-gray-500 dark:text-gray-400'>
										Fill out the form and our team will get
										back to you within 24 hours.
									</p>
								</div>
								<ContactForm />
							</div>
							<div className='space-y-6'>
								<div className='space-y-2'>
									<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
										Contact Information
									</h2>
									<p className='text-gray-500 dark:text-gray-400'>
										You can also reach us through the
										following channels.
									</p>
								</div>
								<div className='space-y-4'>
									<div className='flex items-start space-x-4'>
										<div className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20'>
											<Mail className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										</div>
										<div className='space-y-1'>
											<h3 className='font-medium'>
												Email
											</h3>
											<p className='text-gray-500 dark:text-gray-400'>
												support@assesshub.com
											</p>
											<p className='text-gray-500 dark:text-gray-400'>
												sales@assesshub.com
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-4'>
										<div className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20'>
											<Phone className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										</div>
										<div className='space-y-1'>
											<h3 className='font-medium'>
												Phone
											</h3>
											<p className='text-gray-500 dark:text-gray-400'>
												+1 (555) 123-4567
											</p>
											<p className='text-gray-500 dark:text-gray-400'>
												Monday - Friday, 9am - 5pm EST
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-4'>
										<div className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20'>
											<MapPin className='h-5 w-5 text-teal-600 dark:text-teal-400' />
										</div>
										<div className='space-y-1'>
											<h3 className='font-medium'>
												Office
											</h3>
											<p className='text-gray-500 dark:text-gray-400'>
												123 Innovation Drive
											</p>
											<p className='text-gray-500 dark:text-gray-400'>
												San Francisco, CA 94103
											</p>
										</div>
									</div>
								</div>
								<div className='rounded-lg border overflow-hidden'>
									<iframe
										title='Office Location'
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.95397618613!2d-122.43913217768052!3d37.77117787979306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652892234400!5m2!1sen!2sus'
										width='100%'
										height='300'
										style={{ border: 0 }}
										allowFullScreen
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'></iframe>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className='w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-gray-900'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Frequently Asked Questions
								</h2>
								<p className='max-w-[800px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Find quick answers to common questions about
									our platform.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2'>
							<div className='space-y-2'>
								<h3 className='text-xl font-bold'>
									How quickly can I get started?
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									You can sign up and create your first
									assessment in minutes. Our platform is
									designed for ease of use with intuitive
									interfaces and pre-built templates.
								</p>
							</div>
							<div className='space-y-2'>
								<h3 className='text-xl font-bold'>
									Do you offer custom assessments?
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									Yes, our Enterprise plan includes custom
									assessment development tailored to your
									specific industry and role requirements.
								</p>
							</div>
							<div className='space-y-2'>
								<h3 className='text-xl font-bold'>
									Is there a limit to the number of
									candidates?
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									Our pricing plans are based on the number of
									assessments and candidates. Contact our
									sales team for high-volume needs.
								</p>
							</div>
							<div className='space-y-2'>
								<h3 className='text-xl font-bold'>
									How secure is candidate data?
								</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									We take data security seriously. Our
									platform is SOC 2 compliant and we use
									encryption for all data in transit and at
									rest.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
