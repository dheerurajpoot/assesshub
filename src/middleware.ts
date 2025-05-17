import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Paths that don't require authentication
const publicPaths = [
	"/",
	"/about",
	"/contact",
	"/terms",
	"/privacy",
	"/pricing",
	"/auth/sign-in",
	"/auth/sign-up",
	"/verifyemail",
	"/auth/reset-password",
	"/auth/forgot-password",
];

// API routes that don't require authentication
const publicApiRoutes = [
	"/api/auth/login",
	"/api/auth/register",
	"/api/auth/verify-email",
	"/api/auth/reset-password",
	"/api/auth/forgot-password",
];

// Admin-only paths
const adminOnlyPaths = ["/dashboard/tests/create", "/dashboard/candidates"];

// Admin-only API routes
const adminOnlyApiRoutes = ["/api/tests/create", "/api/candidates"];

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Check if the path is an API route
	if (pathname.startsWith("/api/")) {
		// Allow public API routes
		if (publicApiRoutes.some((route) => pathname.startsWith(route))) {
			return NextResponse.next();
		}

		// Check for auth token in API requests
		const authToken = request.cookies.get("auth-token")?.value;

		if (!authToken && !pathname.startsWith("/api/auth/me")) {
			return NextResponse.json(
				{ message: "Authentication required" },
				{ status: 401 }
			);
		}

		// Check admin permissions for admin-only API routes
		if (adminOnlyApiRoutes.some((route) => pathname.startsWith(route))) {
			try {
				// In a real app, you would decode the JWT to get the user role
				// For this example, we'll use a simple cookie approach
				const userRole = request.cookies.get("user-role")?.value;

				if (userRole !== "admin") {
					return NextResponse.json(
						{ message: "Admin access required" },
						{ status: 403 }
					);
				}
			} catch (error) {
				return NextResponse.json(
					{ message: "Invalid authentication" },
					{ status: 401 }
				);
			}
		}

		return NextResponse.next();
	}

	// Check if the path is public
	const isPublicPath = publicPaths.some(
		(path) => pathname === path || pathname.startsWith(`${path}/`)
	);

	// Check for auth token in cookies
	const authToken = request.cookies.get("auth-token")?.value;

	// Redirect unauthenticated users to login
	if (!isPublicPath && !authToken) {
		const url = new URL("/auth/sign-in", request.url);
		url.searchParams.set("callbackUrl", encodeURI(pathname));
		return NextResponse.redirect(url);
	}

	// Check admin permissions for admin-only paths
	if (adminOnlyPaths.some((path) => pathname.startsWith(path))) {
		try {
			// In a real app, you would decode the JWT to get the user role
			// For this example, we'll use a simple cookie approach
			const userRole = request.cookies.get("user-role")?.value;

			if (userRole !== "admin") {
				return NextResponse.redirect(
					new URL("/dashboard", request.url)
				);
			}
		} catch (error) {
			return NextResponse.redirect(new URL("/auth/sign-in", request.url));
		}
	}

	// Redirect authenticated users away from auth pages
	if (pathname.startsWith("/auth/") && authToken) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - public folder
		 */
		"/((?!_next/static|_next/image|favicon.ico|public/).*)",
	],
};
