import { DashboardHeader } from "@/components/dashboard/header"
import { StatsCards } from "@/components/dashboard/stats-card"
import { SavingsChart } from "@/components/dashboard/savings-chart"
import { ActiveGoals } from "@/components/dashboard/active-goals"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { Navigation } from "@/components/navigation"

export default function DashboardPage() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 md:px-6 space-y-6 pt-20 pb-24 md:pb-8">
        <DashboardHeader />
        <StatsCards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* /SavingsChart */}
             <ActiveGoals />
          </div> 
          <div>
            <QuickActions />
          </div>
        </div>
       
      </div>
    </>
  )
}
