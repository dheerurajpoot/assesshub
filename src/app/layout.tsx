import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/AuthContext";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AssessHub | Professional Assessment Platform",
	description:
		"Create and take professional assessments, quizzes, and exam tests for job purposes and more.",
	keywords:
		"job assessment, online quiz, exam platform, professional testing, skill assessment",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://assesshub.vercel.app",
		title: "AssessHub | Professional Assessment Platform",
		description:
			"Create and take professional assessments, quizzes, and exam tests for job purposes and more.",
		siteName: "AssessHub",
	},
	twitter: {
		card: "summary_large_image",
		title: "AssessHub | Professional Assessment Platform",
		description:
			"Create and take professional assessments, quizzes, and exam tests for job purposes and more.",
	},
	generator: "v0.dev",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className} suppressHydrationWarning>
				<AuthProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange>
						<LandingNavbar />
						{children}
						<LandingFooter />
						<Toaster />
					</ThemeProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
