import Link from "next/link";
import type { Metadata } from "next";

import { SignInForm } from "@/components/auth/sign-in-form";

export const metadata: Metadata = {
	title: "Sign In | AssessHub",
	description: "Sign in to your AssessHub account",
};

export default function SignInPage() {
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
						Sign in to your account
					</h2>
					<p className='mt-2 text-center text-sm text-muted-foreground'>
						Don't have an account?{" "}
						<Link
							href='/auth/sign-up'
							className='font-medium text-teal-600 hover:text-teal-500'>
							Sign up
						</Link>
					</p>
				</div>

				<div className='sm:mx-auto sm:w-full sm:max-w-md'>
					<div className='bg-white dark:bg-gray-950 px-6 py-8 shadow sm:rounded-lg sm:px-12'>
						<SignInForm />
					</div>
				</div>
			</div>
		</div>
	);
}
