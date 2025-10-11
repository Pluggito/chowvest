import { Card } from "@/components/ui/card"
import { Eye, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WalletBalance() {
  return (
    <Card className="p-6 bg-gradient-to-br from-primary to-secondary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
              <Wallet className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium opacity-90">Available Balance</span>
          </div>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
            <Eye className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-2">
          <p className="text-5xl font-bold">₦45,200</p>
          <p className="text-sm opacity-80">+₦5,200 this month</p>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/20 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs opacity-70 mb-1">Total Deposits</p>
            <p className="text-xl font-semibold">₦180,450</p>
          </div>
          <div>
            <p className="text-xs opacity-70 mb-1">Total Withdrawals</p>
            <p className="text-xl font-semibold">₦135,250</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
