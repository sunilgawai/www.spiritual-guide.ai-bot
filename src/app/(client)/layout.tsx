import DashboardNav from "@/components/dashboard-nav";
import { dashboardConfig } from "@/config/dashboard";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const ClientLayout = async ({ children }: DashboardLayoutProps) => {
  // const session = await useServerSession();

  // if (!session?.user) {
  // 	return notFound();
  // }

  return (
    <div className="flex min-h-screen w-full flex-col space-y-6 p-24">
      <div className="container grid flex-1 gap-12">
        {/* <aside className="hidden w-[200px] flex-col md:flex">
					<DashboardNav items={dashboardConfig.sidebarNav} />
				</aside> */}
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ClientLayout;
