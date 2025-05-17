"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	BarChart3,
	FileText,
	LayoutDashboard,
	LogOut,
	Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";

export function DashboardSidebar() {
	const pathname = usePathname();
	const { isAdmin, logout } = useAuth();

	const handleLogout = async () => {
		await logout();
	};

	return (
		<Sidebar variant='sidebar' collapsible='icon'>
			<SidebarHeader className='mt-2 flex h-14 items-center border-b px-4'>
				{/* <Link href='/dashboard' className='flex items-center gap-2'>
					<span className='h-6 w-6 rounded-full bg-teal-600'></span>
					<span className='font-bold'>AssessHub</span>
				</Link> */}
			</SidebarHeader>
			<SidebarContent className='p-4'>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							isActive={pathname === "/dashboard"}
							tooltip='Dashboard'>
							<Link href='/dashboard'>
								<LayoutDashboard className='h-4 w-4' />
								<span>Dashboard</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							isActive={
								pathname === "/dashboard/tests" ||
								pathname.startsWith("/dashboard/tests/")
							}
							tooltip='Tests'>
							<Link href='/dashboard/tests'>
								<FileText className='h-4 w-4' />
								<span>Tests</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>

					{isAdmin && (
						<>
							<SidebarMenuItem>
								<SidebarMenuButton
									asChild
									isActive={
										pathname === "/dashboard/candidates"
									}
									tooltip='Candidates'>
									<Link href='/dashboard/candidates'>
										<Users className='h-4 w-4' />
										<span>Candidates</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</>
					)}
				</SidebarMenu>
			</SidebarContent>
			<SidebarFooter className='border-t p-4'>
				<Button
					variant='ghost'
					className='w-full justify-start'
					onClick={handleLogout}>
					<LogOut className='mr-2 h-4 w-4' />
					<span>Log out</span>
				</Button>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
