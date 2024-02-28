import { mainConfig } from "@/config/main";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { buttonVariants } from "./ui/button";
import Socials from "./socials";

const SiteHeader = () => {
	return (
		<header className="container border-b z-40 fixed top-0 bg-transparent">
			<div className="flex h-20 items-center justify-between py-6">
				<MainNav items={mainConfig.mainNav} />
				<Socials />
			</div>
		</header>
	);
};

export default SiteHeader;
