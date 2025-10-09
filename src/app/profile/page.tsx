import { Navigation } from "@/components/navigation"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileStats } from "@/components/profile/profile-stats"
import { ProfileSettings } from "@/components/profile/profile-settings"

export default function ProfilePage() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 md:px-6 space-y-6 pt-20 pb-24 md:pb-8">
        <ProfileHeader />
        <ProfileStats />
        <ProfileSettings />
      </div>
    </>
  )
}
