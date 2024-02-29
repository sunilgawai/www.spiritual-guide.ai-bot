import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import SiteHeader from "@/components/site-header";
import { Toaster } from "@/components/ui/toaster";
import { SiteFooter } from "@/components/site-footer";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});
// Font files can be colocated inside of `pages`
const fontHeading = localFont({
	src: "../assets/fonts/CalSans-SemiBold.woff2",
	variable: "--font-heading",
});

export const metadata: Metadata = {
	title: "Spiritual Guide AI",
	description: "Developed by Sunil G. Gawai",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen flex flex-col items-center bg-background font-sans antialiased",
					fontSans.variable,
					fontHeading.variable
				)}
			>
				<SiteHeader />
				{children}
				<Toaster />
				<SiteFooter className="border-t" />
			</body>
		</html>
	);
}
