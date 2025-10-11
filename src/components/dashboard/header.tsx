import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Welcome back, Alaye</h1>
        <p className="text-muted-foreground mt-1">Turn your savings into guaranteed food on your table, every season.</p>
      </div>
      <Button variant="outline" size="icon" className="rounded-full bg-transparent">
        <Bell className="w-5 h-5" />
      </Button>
    </div>
  )
}
