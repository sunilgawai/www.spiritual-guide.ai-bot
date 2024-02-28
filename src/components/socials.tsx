import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { UserAccountNav } from "./user-account-nav";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Socials = async () => {
	const session = await getServerSession(authOptions);
	return (
		<nav className="flex gap-4 items-center">
			{session?.user ? (
				<UserAccountNav user={session.user} />
			) : (
				<Link href="/signin" className={buttonVariants()}>
					Sign In
				</Link>
			)}
			{/* <Link
				href="/signin"
				className={cn(
					buttonVariants({ variant: "default", size: "sm" }),
					"px-4"
				)}
			>
				Sign In
			</Link> */}
			{/* <Link
						href="/register"
						className={cn(
							buttonVariants({ variant: "default", size: "sm" }),
							"px-4"
						)}
					>
						Register
					</Link> */}
		</nav>
	);
};

export default Socials;
