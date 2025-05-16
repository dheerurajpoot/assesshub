"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function PricingToggle() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <div className="flex items-center space-x-2 mt-6">
      <Label htmlFor="billing-toggle" className={isAnnual ? "text-muted-foreground" : "font-medium"}>
        Monthly
      </Label>
      <Switch
        id="billing-toggle"
        checked={isAnnual}
        onCheckedChange={setIsAnnual}
        className="data-[state=checked]:bg-teal-600"
      />
      <div className="flex items-center gap-1.5">
        <Label htmlFor="billing-toggle" className={isAnnual ? "font-medium" : "text-muted-foreground"}>
          Annual
        </Label>
        <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-400">
          Save 20%
        </span>
      </div>
    </div>
  )
}
