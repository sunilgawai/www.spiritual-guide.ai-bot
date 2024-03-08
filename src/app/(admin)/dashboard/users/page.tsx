import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/shell";
import { UsersColumns } from "@/components/tables/users-column";
import { Button } from "@/components/ui/button";
import UsersTable from "@/components/tables/users-table";
import AdminService from "@/services/admin-service";

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

const UsersPage = async () => {
    const response = await AdminService.getRegisteredUsers();
    console.log(response);
    
	return (
		<DashboardShell>
			<DashboardHeader
				heading="Your Registered Users"
				text="You can view and manage users through the table."
			>
				<Button>Create User</Button>
			</DashboardHeader>

			{response.result.length ? (
				<UsersTable columns={UsersColumns} data={response.result} />
			) : (
				<EmptyPlaceholder>
					<EmptyPlaceholder.Icon name="post" />
					<EmptyPlaceholder.Title>No Users available</EmptyPlaceholder.Title>
					<EmptyPlaceholder.Description>
						You don&apos;t have any users yet.
					</EmptyPlaceholder.Description>
					<Button variant="outline">Create User</Button>
				</EmptyPlaceholder>
			)}
		</DashboardShell>
	);
};

export default UsersPage;
