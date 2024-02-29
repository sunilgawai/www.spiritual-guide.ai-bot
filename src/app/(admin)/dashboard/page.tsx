import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { DashboardShell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/dashboard-header";

export const metadata = {
	title: "Dashboard",
};

export default async function DashboardPage() {
	return (
		<DashboardShell>
			<DashboardHeader heading="Posts" text="Create and manage posts.">
				<Button>Create</Button>
			</DashboardHeader>
			<div>
				<EmptyPlaceholder>
					<EmptyPlaceholder.Icon name="post" />
					<EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
					<EmptyPlaceholder.Description>
						You don&apos;t have any posts yet. Start creating content.
					</EmptyPlaceholder.Description>
					<Button>Create</Button>
				</EmptyPlaceholder>
			</div>
		</DashboardShell>
	);
}
