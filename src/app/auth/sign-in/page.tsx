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
					<div className='bg-white dark:bg-gray-950 px-6 py-8 shadow sm:rounded-lg sm:px-12'>
						<SignInForm />
					</div>
				</div>
			</div>
		</div>
	);
}
