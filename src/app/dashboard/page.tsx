"use client";
import { UserDashboard } from "@/components/dashboard/user-dashboard";
import { AdminDashboard } from "@/components/dashboard/admin-dashboard";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
	const { isAdmin } = useAuth();

	return isAdmin ? <AdminDashboard /> : <UserDashboard />;
}
