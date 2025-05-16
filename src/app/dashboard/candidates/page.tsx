import type { Metadata } from "next"
import Link from "next/link"
import { Plus, Search, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CandidatesList } from "@/components/dashboard/candidates-list"
import { CandidatesStats } from "@/components/dashboard/candidates-stats"

export const metadata: Metadata = {
  title: "Candidates | AssessHub",
  description: "Manage your candidates and view their assessment results",
}

export default function CandidatesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Candidates</h1>
          <p className="text-muted-foreground">Manage your candidates and view their assessment results</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/candidates/invite">
            <Button variant="outline">
              <UserPlus className="mr-2 h-4 w-4" />
              Invite Candidates
            </Button>
          </Link>
          <Link href="/dashboard/candidates/add">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Candidate
            </Button>
          </Link>
        </div>
      </div>

      <CandidatesStats />

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search candidates..." className="w-full pl-8" />
        </div>
      </div>

      <CandidatesList />
    </div>
  )
}
