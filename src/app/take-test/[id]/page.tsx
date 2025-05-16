import type { Metadata } from "next"

import { TestTaking } from "@/components/test-taking"

export const metadata: Metadata = {
  title: "Take Test | AssessHub",
  description: "Take an assessment test",
}

export default function TakeTestPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-8">
      <TestTaking testId={params.id} />
    </div>
  )
}
