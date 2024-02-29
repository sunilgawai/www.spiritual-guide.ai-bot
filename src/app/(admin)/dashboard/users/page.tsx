"use client";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/shell";
import { UsersColumns } from "@/components/tables/users-column";
import { Button } from "@/components/ui/button";
import UsersTable from "@/components/tables/users-table";

const users: {
	id: number;
	name: string;
	username: string;
	image: string;
	emailVerified: boolean;
}[] = [
	{
		id: 1,
		name: "John Cena",
		username: "johncena",
		image: "🍕",
		emailVerified: true,
	},
	{
		id: 2,
		name: "The Rock",
		username: "therock",
		image: "🍷",
		emailVerified: true,
	},
	{
		id: 3,
		name: "Roman Reign",
		username: "romanreign",
		image: "🍟",
		emailVerified: true,
	},
	{
		id: 4,
		name: "Dean Ambrios",
		username: "deanambrios",
		image: "🦞",
		emailVerified: false,
	},
];

const UsersPage = () => {
	return (
		<DashboardShell>
			<DashboardHeader
				heading="Your Registered Users"
				text="You can view and manage users through the table."
			>
				<Button>Create User</Button>
			</DashboardHeader>

			{users.length ? (
				<UsersTable columns={UsersColumns} data={users} />
			) : (
				<EmptyPlaceholder>
					<EmptyPlaceholder.Icon name="post" />
					<EmptyPlaceholder.Title>No Category created</EmptyPlaceholder.Title>
					<EmptyPlaceholder.Description>
						You don&apos;t have any category yet. Start creating content.
					</EmptyPlaceholder.Description>
					<Button variant="outline">Create User</Button>
				</EmptyPlaceholder>
			)}
		</DashboardShell>
	);
};

export default UsersPage;
