"use client"

import { useTheme } from "next-themes"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    tests: 12,
    completions: 10,
    avgScore: 68,
  },
  {
    name: "Feb",
    tests: 18,
    completions: 15,
    avgScore: 72,
  },
  {
    name: "Mar",
    tests: 15,
    completions: 13,
    avgScore: 75,
  },
  {
    name: "Apr",
    tests: 22,
    completions: 19,
    avgScore: 70,
  },
  {
    name: "May",
    tests: 28,
    completions: 24,
    avgScore: 73,
  },
  {
    name: "Jun",
    tests: 24,
    completions: 21,
    avgScore: 78,
  },
]

export function DashboardStats() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
        <XAxis dataKey="name" stroke={isDark ? "#888" : "#666"} />
        <YAxis stroke={isDark ? "#888" : "#666"} />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? "#1f2937" : "#fff",
            border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
            borderRadius: "6px",
            color: isDark ? "#e5e7eb" : "#374151",
          }}
        />
        <Bar dataKey="tests" name="Tests Created" fill="#14b8a6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="completions" name="Completions" fill="#0d9488" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
