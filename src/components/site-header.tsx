import { mainConfig } from "@/config/main";
import { MainNav } from "./main-nav";
import Socials from "./socials";

const SiteHeader = () => {
	return (
		<header className="backdrop-blur-sm bg-white/30 container border-b z-40 fixed top-0">
			<div className="flex h-20 items-center justify-between py-6">
				<MainNav items={mainConfig.mainNav} />
				<Socials />
			</div>
		</header>
	);
};

export default SiteHeader;
