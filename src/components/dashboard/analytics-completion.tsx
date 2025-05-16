"use client"

import { useTheme } from "next-themes"
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    rate: 65,
  },
  {
    name: "Feb",
    rate: 72,
  },
  {
    name: "Mar",
    rate: 78,
  },
  {
    name: "Apr",
    rate: 81,
  },
  {
    name: "May",
    rate: 87,
  },
]

export function AnalyticsCompletion() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
        <Line
          type="monotone"
          dataKey="rate"
          name="Completion Rate (%)"
          stroke="#14b8a6"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
