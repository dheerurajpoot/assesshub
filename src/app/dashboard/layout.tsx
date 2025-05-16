import type React from "react"
import type { Metadata } from "next"

import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { SidebarProvider } from "@/components/ui/sidebar"

export const metadata: Metadata = {
  title: "Dashboard | AssessHub",
  description: "Manage your assessments and view analytics",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SidebarProvider>
        <div className="flex flex-1">
          <DashboardSidebar />
          <div className="flex flex-1 flex-col">
            <DashboardHeader />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}
