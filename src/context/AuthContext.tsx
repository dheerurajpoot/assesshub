"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import type { User } from "@/models/User";
import { toast } from "sonner";

interface AuthContextType {
	user: User | null;
	isLoading: boolean;
	isAuthenticated: boolean;
	isAdmin: boolean;
	login: (email: string, password: string) => Promise<void>;
	register: (name: string, email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	updateUser: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		// Check if user is already logged in
		const checkAuth = async () => {
			try {
				const response = await fetch("/api/auth/me");
				if (response.ok) {
					const data = await response.json();
					setUser(data.user);
				}
			} catch (error) {
				console.error("Authentication check failed:", error);
			} finally {
				setIsLoading(false);
			}
		};

		checkAuth();
	}, []);

	const login = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.message || "Login failed");
			}

			const data = await response.json();
			setUser(data.user);
			toast.success(data.message);
			router.push("/dashboard");
		} catch (error) {
			console.error("Login error:", error);
			toast.error("Login failed");
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	const register = async (name: string, email: string, password: string) => {
		setIsLoading(true);
		try {
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, password }),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.message || "Registration failed");
			}

			const data = await response.json();
			console.log(data);
			setUser(data.user);
			router.push("/sign-in");
			toast.success(data.message);
		} catch (error) {
			console.error("Registration error:", error);
			toast.error("Registration failed");
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	const logout = async () => {
		setIsLoading(true);
		try {
			await fetch("/api/auth/logout", {
				method: "POST",
			});
			setUser(null);
			router.push("/");
			toast.success("Logout successful");
		} catch (error) {
			console.error("Logout error:", error);
			toast.error("Logout failed");
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	const updateUser = async (userData: Partial<User>) => {
		setIsLoading(true);
		try {
			const response = await fetch("/api/auth/update", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.message || "Update failed");
			}

			const data = await response.json();
			setUser(data.user);
			toast.success("Update successful");
		} catch (error) {
			console.error("Update error:", error);
			toast.error("Update failed");
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	const isAuthenticated = !!user;
	const isAdmin = user?.role === "admin";

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				isAuthenticated,
				isAdmin,
				login,
				register,
				logout,
				updateUser,
			}}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
