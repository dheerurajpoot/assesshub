"use client";

import type React from "react";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function SignInForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formError, setFormError] = useState<string | null>(null);

	const { login } = useAuth();
	const router = useRouter();
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!email) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			newErrors.email = "Invalid email format";
		}

		if (!password) {
			newErrors.password = "Password is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		setFormError(null);

		try {
			await login(email, password);
			router.push(callbackUrl);
		} catch (error) {
			console.error("Login error:", error);
			setFormError(
				error instanceof Error ? error.message : "Failed to sign in"
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='mx-auto max-w-md space-y-6 p-6'>
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
					Enter your credentials to access your account
				</p>
			</div>

			{formError && (
				<Alert variant='destructive'>
					<AlertDescription>{formError}</AlertDescription>
				</Alert>
			)}

			<form onSubmit={handleSubmit} className='space-y-4'>
				<div className='space-y-2'>
					<Label htmlFor='email'>Email</Label>
					<Input
						id='email'
						type='email'
						placeholder='name@example.com'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						disabled={isSubmitting}
					/>
					{errors.email && (
						<p className='text-sm text-red-500'>{errors.email}</p>
					)}
				</div>

				<div className='space-y-2'>
					<div className='flex items-center justify-between'>
						<Label htmlFor='password'>Password</Label>
						<Link
							href='/auth/forgot-password'
							className='text-sm text-teal-600 hover:underline'>
							Forgot password?
						</Link>
					</div>
					<div className='relative'>
						<Input
							id='password'
							type={showPassword ? "text" : "password"}
							placeholder='••••••••'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							disabled={isSubmitting}
						/>
						<Button
							type='button'
							variant='ghost'
							size='icon'
							className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
							onClick={() => setShowPassword(!showPassword)}
							disabled={isSubmitting}>
							{showPassword ? (
								<EyeOff className='h-4 w-4 text-muted-foreground' />
							) : (
								<Eye className='h-4 w-4 text-muted-foreground' />
							)}
							<span className='sr-only'>
								{showPassword
									? "Hide password"
									: "Show password"}
							</span>
						</Button>
					</div>
					{errors.password && (
						<p className='text-sm text-red-500'>
							{errors.password}
						</p>
					)}
				</div>

				<Button
					type='submit'
					className='w-full bg-teal-600 hover:bg-teal-700'
					disabled={isSubmitting}>
					{isSubmitting ? (
						<>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							Signing in...
						</>
					) : (
						"Sign In"
					)}
				</Button>
			</form>

			<div className='text-center text-sm'>
				Don&apos;t have an account?{" "}
				<Link
					href='/auth/sign-up'
					className='text-teal-600 hover:underline'>
					Sign up
				</Link>
			</div>
		</div>
	);
}
