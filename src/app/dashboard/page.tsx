import { UserDashboard } from "@/components/dashboard/user-dashboard"
import { AdminDashboard } from "@/components/dashboard/admin-dashboard"
import { cookies } from "next/headers"

export default function DashboardPage() {
  // In a real app, you would get this from the session or JWT
  // For this example, we'll use a cookie
  const cookieStore = cookies()
  const userRole = cookieStore.get("user-role")?.value || "user"
  const isAdmin = userRole === "admin"

  return isAdmin ? <AdminDashboard /> : <UserDashboard />
}
