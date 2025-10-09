import { Card } from "@/components/ui/card"
import { Wallet, TrendingUp, Target } from "lucide-react"

const stats = [
  {
    label: "Total Savings",
    value: "₦125,450",
    change: "+12.5%",
    icon: Wallet,
    trend: "up",
  },
  {
    label: "Wallet Balance",
    value: "₦45,200",
    change: "Available",
    icon: TrendingUp,
    trend: "neutral",
  },
  {
    label: "Active Goals",
    value: "4",
    change: "2 near completion",
    icon: Target,
    trend: "up",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="p-6 bg-gradient-to-br from-card to-accent/20 border-border/50">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className={`text-sm ${stat.trend === "up" ? "text-primary" : "text-muted-foreground"}`}>
                  {stat.change}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
