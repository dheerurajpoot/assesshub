import type { Metadata } from "next"

import { CreateTestForm } from "@/components/dashboard/create-test-form"

export const metadata: Metadata = {
  title: "Create Test | AssessHub",
  description: "Create a new assessment test or quiz",
}

export default function CreateTestPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Test</h1>
        <p className="text-muted-foreground">Create a new assessment test or quiz for your candidates</p>
      </div>

      <CreateTestForm />
    </div>
  )
}
