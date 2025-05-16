import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Terms of Service | AssessHub",
	description: "AssessHub's terms of service and legal agreements",
};

export default function TermsPage() {
	return (
		<div className='flex min-h-screen flex-col'>
			<main className='flex-1'>
				<div className='container mx-auto max-w-4xl px-4 py-12 md:py-16 lg:py-24'>
					<div className='space-y-8'>
						<div>
							<h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
								Terms of Service
							</h1>
							<p className='mt-4 text-gray-500 dark:text-gray-400'>
								Last updated: May 16, 2025
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								1. Introduction
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								Welcome to AssessHub. These Terms of Service
								("Terms") govern your access to and use of the
								AssessHub platform, including any websites,
								mobile applications, and services offered by
								AssessHub ("Services").
							</p>
							<p className='text-gray-600 dark:text-gray-300'>
								By accessing or using our Services, you agree to
								be bound by these Terms. If you do not agree to
								these Terms, you may not access or use the
								Services.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								2. Account Registration
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								To use certain features of the Services, you may
								be required to register for an account. You
								agree to provide accurate, current, and complete
								information during the registration process and
								to update such information to keep it accurate,
								current, and complete.
							</p>
							<p className='text-gray-600 dark:text-gray-300'>
								You are responsible for safeguarding your
								account credentials and for all activities that
								occur under your account. You agree to notify us
								immediately of any unauthorized use of your
								account.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								3. Use of Services
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								You may use our Services only in compliance with
								these Terms and all applicable laws and
								regulations. You may not:
							</p>
							<ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2'>
								<li>
									Use the Services in any way that violates
									any applicable law or regulation.
								</li>
								<li>
									Use the Services to transmit any material
									that is defamatory, offensive, or otherwise
									objectionable.
								</li>
								<li>
									Attempt to gain unauthorized access to any
									portion of the Services or any other systems
									or networks connected to the Services.
								</li>
								<li>
									Use the Services to collect or harvest any
									personally identifiable information,
									including account names.
								</li>
								<li>
									Use the Services for any commercial purpose
									not expressly permitted by AssessHub.
								</li>
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								4. Content and Intellectual Property
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								Our Services allow you to create, upload, store,
								and share content, including assessment tests,
								questions, and other materials ("Content"). You
								retain all rights to your Content, but you grant
								AssessHub a worldwide, non-exclusive,
								royalty-free license to use, reproduce, modify,
								adapt, publish, translate, and distribute your
								Content in connection with providing the
								Services.
							</p>
							<p className='text-gray-600 dark:text-gray-300'>
								You represent and warrant that you own or have
								the necessary rights to your Content and that
								your Content does not violate the rights of any
								third party, including intellectual property
								rights and privacy rights.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>5. Privacy</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								Our{" "}
								<Link
									href='/privacy'
									className='text-teal-600 hover:underline'>
									Privacy Policy
								</Link>{" "}
								describes how we handle the information you
								provide to us when you use our Services. By
								using our Services, you agree to our collection,
								use, and sharing of information as described in
								our Privacy Policy.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								6. Termination
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								We may terminate or suspend your access to the
								Services immediately, without prior notice or
								liability, for any reason, including if you
								breach these Terms. Upon termination, your right
								to use the Services will immediately cease.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								7. Disclaimer of Warranties
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								THE SERVICES ARE PROVIDED "AS IS" AND "AS
								AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
								EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
								LIMITED TO, IMPLIED WARRANTIES OF
								MERCHANTABILITY, FITNESS FOR A PARTICULAR
								PURPOSE, AND NON-INFRINGEMENT.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								8. Limitation of Liability
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								IN NO EVENT SHALL ASSESSHUB BE LIABLE FOR ANY
								INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
								PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS,
								DATA, OR BUSINESS OPPORTUNITIES, WHETHER BASED
								ON CONTRACT, TORT, STRICT LIABILITY, OR ANY
								OTHER LEGAL THEORY.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								9. Changes to Terms
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								We may modify these Terms at any time. If we
								make changes, we will provide notice of such
								changes, such as by sending an email
								notification, providing notice through the
								Services, or updating the "Last Updated" date at
								the beginning of these Terms. Your continued use
								of the Services following the notification of
								changes will constitute your acceptance of such
								changes.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								10. Contact Information
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								If you have any questions about these Terms,
								please contact us at{" "}
								<a
									href='mailto:legal@assesshub.com'
									className='text-teal-600 hover:underline'>
									legal@assesshub.com
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
