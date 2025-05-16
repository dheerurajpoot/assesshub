import Link from "next/link";

export function LandingFooter() {
	return (
		<footer className='w-full border-t bg-background py-6'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
					<div className='space-y-4'>
						<Link href='/' className='flex items-center space-x-2'>
							<span className='inline-block h-6 w-6 rounded-full bg-teal-600'></span>
							<span className='text-xl font-bold'>AssessHub</span>
						</Link>
						<p className='text-sm text-muted-foreground'>
							Professional assessment platform for modern hiring.
						</p>
					</div>
					<div className='space-y-4'>
						<h4 className='text-sm font-medium'>Product</h4>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-foreground'>
									Features
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-foreground'>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-foreground'>
									Testimonials
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-foreground'>
									FAQ
								</Link>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h4 className='text-sm font-medium'>Company</h4>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-foreground'>
									About
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-foreground'>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-foreground'>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-foreground'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className='space-y-4'>
						<h4 className='text-sm font-medium'>Legal</h4>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-foreground'>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-foreground'>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-foreground'>
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='mt-8 border-t pt-6'>
					<p className='text-center text-sm text-muted-foreground'>
						© {new Date().getFullYear()} AssessHub. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
