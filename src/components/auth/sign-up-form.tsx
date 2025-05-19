"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/context/AuthContext";

export function SignUpForm() {
	const { register } = useAuth();
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		phone: "",
		terms: false,
	});
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name];
				return newErrors;
			});
		}
	};

	const handleCheckboxChange = (checked: boolean) => {
		setFormData((prev) => ({ ...prev, terms: checked }));

		// Clear error when user checks the box
		if (errors.terms) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors.terms;
				return newErrors;
			});
		}
	};

	const validateForm = () => {
		const newErrors: Record<string, string> = {};

		if (!formData.firstName.trim()) {
			newErrors.firstName = "First name is required";
		}

		if (!formData.lastName.trim()) {
			newErrors.lastName = "Last name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!formData.phone.trim()) {
			newErrors.phone = "Phone number is required";
		}

		if (!formData.password) {
			newErrors.password = "Password is required";
		} else if (formData.password.length < 8) {
			newErrors.password = "Password must be at least 8 characters";
		} else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
			newErrors.password =
				"Password must include uppercase, lowercase, and numbers";
		}

		if (!formData.terms) {
			newErrors.terms =
				"You must agree to the Terms of Service and Privacy Policy";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);

		if (!validateForm()) {
			return;
		}

		setIsLoading(true);

		try {
			const fullName = `${formData.firstName} ${formData.lastName}`;
			await register(
				fullName,
				formData.email,
				formData.phone,
				formData.password
			);
		} catch (error) {
			console.error("Registration error:", error);
			setError(
				error instanceof Error
					? error.message
					: "Failed to create account. Please try again."
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form className='space-y-6' onSubmit={handleSubmit}>
			{error && (
				<Alert variant='destructive'>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}

			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				<div>
					<Label htmlFor='first-name'>
						First name <span className='text-red-500'>*</span>
					</Label>
					<div className='mt-2'>
						<Input
							id='first-name'
							name='firstName'
							type='text'
							placeholder='First name'
							autoComplete='given-name'
							value={formData.firstName}
							onChange={handleChange}
							className={errors.firstName ? "border-red-500" : ""}
						/>
						{errors.firstName && (
							<p className='mt-1 text-sm text-red-500'>
								{errors.firstName}
							</p>
						)}
					</div>
				</div>
				<div>
					<Label htmlFor='last-name'>
						Last name <span className='text-red-500'>*</span>
					</Label>
					<div className='mt-2'>
						<Input
							id='last-name'
							name='lastName'
							type='text'
							placeholder='Last name'
							autoComplete='family-name'
							value={formData.lastName}
							onChange={handleChange}
							className={errors.lastName ? "border-red-500" : ""}
						/>
						{errors.lastName && (
							<p className='mt-1 text-sm text-red-500'>
								{errors.lastName}
							</p>
						)}
					</div>
				</div>
			</div>

			<div>
				<Label htmlFor='email'>
					Email address <span className='text-red-500'>*</span>
				</Label>
				<div className='mt-2'>
					<Input
						id='email'
						name='email'
						type='email'
						autoComplete='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='name@example.com'
						className={errors.email ? "border-red-500" : ""}
					/>
					{errors.email && (
						<p className='mt-1 text-sm text-red-500'>
							{errors.email}
						</p>
					)}
				</div>
			</div>
			<div>
				<Label htmlFor='phone'>
					Phone number <span className='text-red-500'>*</span>
				</Label>
				<div className='mt-2'>
					<Input
						id='phone'
						name='phone'
						type='phone'
						autoComplete='phone'
						value={formData.phone}
						onChange={handleChange}
						placeholder='Phone number'
						className={errors.phone ? "border-red-500" : ""}
					/>
					{errors.phone && (
						<p className='mt-1 text-sm text-red-500'>
							{errors.phone}
						</p>
					)}
				</div>
			</div>

			<div>
				<Label htmlFor='password'>
					Password <span className='text-red-500'>*</span>
				</Label>
				<div className='mt-2 relative'>
					<Input
						id='password'
						name='password'
						type={showPassword ? "text" : "password"}
						autoComplete='new-password'
						value={formData.password}
						onChange={handleChange}
						placeholder='••••••••'
						className={errors.password ? "border-red-500" : ""}
					/>
					<Button
						type='button'
						variant='ghost'
						size='icon'
						className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
						onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? (
							<EyeOff className='h-4 w-4 text-muted-foreground' />
						) : (
							<Eye className='h-4 w-4 text-muted-foreground' />
						)}
						<span className='sr-only'>
							{showPassword ? "Hide password" : "Show password"}
						</span>
					</Button>
					{errors.password && (
						<p className='mt-1 text-sm text-red-500'>
							{errors.password}
						</p>
					)}
				</div>
				<p className='mt-1 text-xs text-muted-foreground'>
					Must be at least 8 characters and include uppercase,
					lowercase, and numbers
				</p>
			</div>

			<div className='flex items-start'>
				<Checkbox
					id='terms'
					checked={formData.terms}
					onCheckedChange={handleCheckboxChange}
					className={errors.terms ? "border-red-500" : ""}
				/>
				<Label
					htmlFor='terms'
					className='ml-2 block text-sm text-muted-foreground'>
					I agree to the{" "}
					<Link
						href='/terms'
						className='font-medium text-teal-600 hover:text-teal-500'>
						Terms of Service
					</Link>{" "}
					and{" "}
					<Link
						href='/privacy'
						className='font-medium text-teal-600 hover:text-teal-500'>
						Privacy Policy
					</Link>
				</Label>
			</div>
			{errors.terms && (
				<p className='text-sm text-red-500'>{errors.terms}</p>
			)}

			<div>
				<Button
					type='submit'
					className='w-full bg-teal-600 hover:bg-teal-700'
					disabled={isLoading}>
					{isLoading ? (
						<>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							Creating account...
						</>
					) : (
						"Create account"
					)}
				</Button>
			</div>
		</form>
	);
}
