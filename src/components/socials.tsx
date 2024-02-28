import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const Socials = () => {
	return (
		<nav className="flex gap-4 items-center">
			<Link
				href="/login"
				className={cn(
					buttonVariants({ variant: "default", size: "sm" }),
					"px-4"
				)}
			>
				Sign In
			</Link>
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
