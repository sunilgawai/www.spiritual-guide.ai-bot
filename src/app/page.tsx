import openGraphImage from "@/assets/opengraph-image.jpg";
// import { CheckIcon, LocateIcon, MailboxIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="py-12 sm:py-16 lg:py-24">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-none">
						<div className="lg:col-span-2">
							<h1 className="text-6xl font-bold">
								Discover Personalized Spiritual Guidance with Lord Rama
							</h1>
							<p className="mt-4 text-lg font-medium text-gray-600">
								Experience the transformative power of Lord Rama's teachings
								through our platform with daily spiritual insights, personalized
								meditations, and interactive lessons.
							</p>
							<Button className="mt-6" variant="default">
								Start Chatting
							</Button>
						</div>
						<div className="lg:col-span-2">
							<Image
								alt="Spiritual guidance"
								className="w-full h-full object-cover rounded-sm"
								// height="200"
								src={openGraphImage}
								style={{
									aspectRatio: "300/200",
									objectFit: "cover",
								}}
								// width="300"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
