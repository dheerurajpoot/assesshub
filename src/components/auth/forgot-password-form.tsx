"use client";

import type React from "react";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ApiResponse {
	message: string;
	success: boolean;
}

export function ForgotPasswordForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [email, setEmail] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await fetch("/api/auth/forgot-password", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data: ApiResponse = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Something went wrong");
			}

			setIsSubmitted(true);
			setEmail("");
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(error.message);
			} else {
				console.error("An unexpected error occurred");
			}
		} finally {
			setIsLoading(false);
		}
	};

	if (isSubmitted) {
		return (
			<Alert className='bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-900'>
				<AlertTitle className='text-teal-800 dark:text-teal-300'>
					Check your email
				</AlertTitle>
				<AlertDescription className='text-teal-700 dark:text-teal-400'>
					We&apos;ve sent a password reset link to your email. Please
					check your email and follow the instructions to reset your
					password.
				</AlertDescription>
			</Alert>
		);
	}

	return (
		<form className='space-y-6' onSubmit={handleSubmit}>
			<div>
				<Label htmlFor='email'>Email address</Label>
				<div className='mt-2'>
					<Input
						id='email'
						name='email'
						type='email'
						autoComplete='email'
						required
						placeholder='name@example.com'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
			</div>

			<div>
				<Button
					type='submit'
					className='w-full bg-teal-600 hover:bg-teal-700'
					disabled={isLoading}>
					{isLoading ? (
						<>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							Sending reset link...
						</>
					) : (
						"Send reset link"
					)}
				</Button>
			</div>
		</form>
	);
}
