import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/shell"
import { Button } from "@/components/ui/button"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <Button>Create</Button>
      </DashboardHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        {/* <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton /> */}
      </div>
    </DashboardShell>
  )
}
