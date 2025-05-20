import Link from "next/link";
import type { Metadata } from "next";
import ResetPasswordForm from "./ResetPasswordForm";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Reset Password | AssessHub",
	description: "Reset your AssessHub account password",
};

export default function ResetPasswordPage() {
	return (
		<div className='flex min-h-screen flex-col'>
			<div className='flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-md'>
					<Link
						href='/'
						className='flex justify-center items-center space-x-2'>
						<span className='inline-block h-8 w-8 rounded-full bg-teal-600'></span>
						<span className='text-2xl font-bold'>AssessHub</span>
					</Link>
					<h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight'>
						Reset your password
					</h2>
					<p className='mt-2 text-center text-sm text-muted-foreground'>
						Enter your email address and we&apos;ll send you a link
						to reset your password.
					</p>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-md'>
					<div className='bg-white dark:bg-gray-950 px-6 py-8 shadow sm:rounded-lg sm:px-12'>
						<Suspense fallback={<div>Loading...</div>}>
							<ResetPasswordForm />
						</Suspense>
						<div className='mt-6'>
							<div className='relative'>
								<div className='absolute inset-0 flex items-center'>
									<div className='w-full border-t border-gray-200 dark:border-gray-800' />
								</div>
								<div className='relative flex justify-center text-sm font-medium leading-6'>
									<span className='bg-white dark:bg-gray-950 px-6 text-muted-foreground'>
										Or
									</span>
								</div>
							</div>

							<div className='mt-6 text-center'>
								<Link
									href='/auth/sign-in'
									className='font-medium text-teal-600 hover:text-teal-500'>
									Back to sign in
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
