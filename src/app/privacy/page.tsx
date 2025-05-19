import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy | AssessHub",
	description: "AssessHub's privacy policy and data protection practices",
};

export default function PrivacyPage() {
	return (
		<div className='flex min-h-screen flex-col'>
			<main className='flex-1'>
				<div className='container mx-auto max-w-4xl px-4 py-12 md:py-16 lg:py-24'>
					<div className='space-y-8'>
						<div>
							<h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
								Privacy Policy
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
								At AssessHub, we take your privacy seriously.
								This Privacy Policy explains how we collect,
								use, disclose, and safeguard your information
								when you use our platform, website, and services
								(collectively, the &quot;Services&quot;).
							</p>
							<p className='text-gray-600 dark:text-gray-300'>
								Please read this Privacy Policy carefully. By
								accessing or using our Services, you acknowledge
								that you have read, understood, and agree to be
								bound by this Privacy Policy.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								2. Information We Collect
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								We collect several types of information,
								including:
							</p>
							<h3 className='text-xl font-semibold'>
								2.1 Personal Information
							</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								When you register for an account, we collect
								information such as your name, email address,
								company name, job title, and contact
								information.
							</p>
							<h3 className='text-xl font-semibold'>
								2.2 Assessment Data
							</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								When you create or take assessments, we collect
								information such as test content, responses,
								scores, and completion times.
							</p>
							<h3 className='text-xl font-semibold'>
								2.3 Usage Information
							</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								We collect information about how you interact
								with our Services, including log data, device
								information, IP addresses, browser type, pages
								viewed, and time spent on pages.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								3. How We Use Your Information
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								We use the information we collect to:
							</p>
							<ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2'>
								<li>
									Provide, maintain, and improve our Services
								</li>
								<li>Process and complete transactions</li>
								<li>
									Send administrative information, such as
									updates, security alerts, and support
									messages
								</li>
								<li>
									Respond to your comments, questions, and
									requests
								</li>
								<li>
									Analyze usage patterns and trends to enhance
									user experience
								</li>
								<li>
									Protect against, identify, and prevent fraud
									and other illegal activity
								</li>
								<li>Comply with our legal obligations</li>
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								4. How We Share Your Information
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								We may share your information in the following
								circumstances:
							</p>
							<h3 className='text-xl font-semibold'>
								4.1 With Your Consent
							</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								We may share your information when you direct us
								to do so.
							</p>
							<h3 className='text-xl font-semibold'>
								4.2 With Service Providers
							</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								We may share your information with third-party
								vendors, consultants, and other service
								providers who need access to such information to
								carry out work on our behalf.
							</p>
							<h3 className='text-xl font-semibold'>
								4.3 For Legal Reasons
							</h3>
							<p className='text-gray-600 dark:text-gray-300'>
								We may share your information if we believe it
								is necessary to comply with a legal obligation,
								protect our rights and property, or protect the
								safety of our users or others.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								5. Data Security
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								We implement appropriate technical and
								organizational measures to protect the security
								of your personal information. However, please be
								aware that no method of transmission over the
								Internet or electronic storage is 100% secure,
								and we cannot guarantee absolute security.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								6. Your Rights and Choices
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								Depending on your location, you may have certain
								rights regarding your personal information,
								including:
							</p>
							<ul className='list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2'>
								<li>
									The right to access and receive a copy of
									your personal information
								</li>
								<li>
									The right to rectify or update your personal
									information
								</li>
								<li>
									The right to delete your personal
									information
								</li>
								<li>
									The right to restrict or object to our
									processing of your personal information
								</li>
								<li>The right to data portability</li>
							</ul>
							<p className='text-gray-600 dark:text-gray-300'>
								To exercise these rights, please contact us at{" "}
								<a
									href='mailto:privacy@assesshub.com'
									className='text-teal-600 hover:underline'>
									privacy@assesshub.com
								</a>
								.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								7. Cookies and Tracking Technologies
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								We use cookies and similar tracking technologies
								to track activity on our Services and hold
								certain information. You can instruct your
								browser to refuse all cookies or to indicate
								when a cookie is being sent. However, if you do
								not accept cookies, you may not be able to use
								some portions of our Services.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								8. Children&apos;s Privacy
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								Our Services are not intended for individuals
								under the age of 16. We do not knowingly collect
								personal information from children under 16. If
								we learn we have collected personal information
								from a child under 16, we will delete that
								information as quickly as possible.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								9. Changes to This Privacy Policy
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								We may update our Privacy Policy from time to
								time. We will notify you of any changes by
								posting the new Privacy Policy on this page and
								updating the &quot;Last Updated&quot; date. You
								are advised to review this Privacy Policy
								periodically for any changes.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								10. Contact Us
							</h2>
							<p className='text-gray-600 dark:text-gray-300'>
								If you have any questions about this Privacy
								Policy, please contact us at{" "}
								<a
									href='mailto:privacy@assesshub.com'
									className='text-teal-600 hover:underline'>
									privacy@assesshub.com
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
