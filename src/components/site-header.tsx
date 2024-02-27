import { mainConfig } from "@/config/main";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { buttonVariants } from "./ui/button";

const SiteHeader = () => {
	return (
		<header className="container border-b z-40 fixed top-0 bg-transparent">
			<div className="flex h-20 items-center justify-between py-6">
				<MainNav items={mainConfig.mainNav} />
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
			</div>
		</header>
	);
};

export default SiteHeader;
