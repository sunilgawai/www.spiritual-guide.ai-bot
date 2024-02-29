"use client";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
// import CategoryForm from "@/components/forms/category-form";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/shell";
import { CategoriesColumns } from "@/components/tables/categories-column";
import CategoriesTable from "@/components/tables/categories-table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const categories: {
	id: number;
	name: string;
	image: string;
	status: boolean;
}[] = [
	{
		id: 1,
		name: "Pizzas",
		image: "🍕",
		status: true,
	},
	{
		id: 2,
		name: "Drinks",
		image: "🍷",
		status: true,
	},
	{
		id: 3,
		name: "Snacks",
		image: "🍟",
		status: true,
	},
	{
		id: 4,
		name: "Sea Food",
		image: "🦞",
		status: false,
	},
];

const UsersPage = () => {
	const [form_mode, setFormMode] = useState<"create" | "update">("create");
	const [form_visible, setFormVisible] = useState<boolean>(false);
	const router = useRouter();

	return (
		<DashboardShell>
			<DashboardHeader
				heading="Categories"
				text="You can create and manage categories directly through the table."
			>
				{!form_visible ? (
					<Button onClick={() => setFormVisible(!form_visible)}>
						Create Category
					</Button>
				) : (
					<Button onClick={() => setFormVisible(!form_visible)}>
						Cancel Operation
					</Button>
				)}
			</DashboardHeader>

			{/* {form_visible && <CategoryForm form_mode={form_mode} />} */}

			{categories.length ? (
				<CategoriesTable columns={CategoriesColumns} data={categories} />
			) : (
				<EmptyPlaceholder>
					<EmptyPlaceholder.Icon name="post" />
					<EmptyPlaceholder.Title>No Category created</EmptyPlaceholder.Title>
					<EmptyPlaceholder.Description>
						You don&apos;t have any category yet. Start creating content.
					</EmptyPlaceholder.Description>
					<Button onClick={() => router.push("/create")} variant="outline">
						Create Category
					</Button>
				</EmptyPlaceholder>
			)}
		</DashboardShell>
	);
};

export default UsersPage;
