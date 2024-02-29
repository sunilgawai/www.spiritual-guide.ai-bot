import openGraphImage from "@/assets/opengraph-image.jpg";
// import { CheckIcon, LocateIcon, MailboxIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckIcon, LocateIcon, MailboxIcon, PhoneIcon } from "lucide-react";
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
			<section id="pricing" className="bg-gray-50 py-12 sm:py-16 lg:py-24">
				<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl font-bold text-center">Pricing Options</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Choose the plan that suits your needs
					</p>
					<div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
						<Card className="w-full">
							<CardHeader>
								<CardTitle>Basic Plan</CardTitle>
								<CardDescription>
									Perfect for individuals just starting out
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex justify-between">
									<span className="text-4xl font-bold">$19/mo</span>
									<span className="text-sm font-medium">Standard</span>
								</div>
								<ul className="mt-6 space-y-4">
									<li className="flex items-center space-x-2">
										<CheckIcon className="text-green-500" />
										<span className="text-sm">Personalized guidance</span>
									</li>
									<li className="flex items-center space-x-2">
										<CheckIcon className="text-green-500" />
										<span className="text-sm">Daily spiritual insights</span>
									</li>
									<li className="flex items-center space-x-2">
										<CheckIcon className="text-green-500" />
										<span className="text-sm">Access to all lessons</span>
									</li>
								</ul>
							</CardContent>
							<CardFooter className="flex justify-center">
								<Button variant="default">Choose Plan</Button>
							</CardFooter>
						</Card>
						<Card className="w-full">
							<CardHeader>
								<CardTitle>Business Plan</CardTitle>
								<CardDescription>For teams and organizations</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex justify-between">
									<span className="text-4xl font-bold">$29/mo</span>
									<span className="text-sm font-medium">Standard</span>
								</div>
								<ul className="mt-6 space-y-4">
									<li className="flex items-center space-x-2">
										<CheckIcon className="text-green-500" />
										<span className="text-sm">All Basic Plan features</span>
									</li>
									<li className="flex items-center space-x-2">
										<CheckIcon className="text-green-500" />
										<span className="text-sm">Team collaboration tools</span>
									</li>
									<li className="flex items-center space-x-2">
										<CheckIcon className="text-green-500" />
										<span className="text-sm">Priority support</span>
									</li>
								</ul>
							</CardContent>
							<CardFooter className="flex justify-center">
								<Button variant="default">Choose Plan</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</section>
			<section id="faq" className="bg-gray-50 py-12 sm:py-16 lg:py-24">
				<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-center">FAQs</h2>
					<p className="mt-2 text-center text-medium text-gray-600">
						Find answers to common questions about the teachings of Lord Rama
						and our website.
					</p>
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger>What is Lord Rama's teaching?</AccordionTrigger>
							<AccordionContent>
								Lord Rama's teachings encompass principles of righteousness,
								courage, and compassion, guiding individuals on the path to
								moral and spiritual development.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>What is Lord Rama's teaching?</AccordionTrigger>
							<AccordionContent>
								Lord Rama's teachings encompass principles of righteousness,
								courage, and compassion, guiding individuals on the path to
								moral and spiritual development.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>What is Lord Rama's teaching?</AccordionTrigger>
							<AccordionContent>
								Lord Rama's teachings encompass principles of righteousness,
								courage, and compassion, guiding individuals on the path to
								moral and spiritual development.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</section>
			<section id="contact" className="bg-gray-50 py-12 sm:py-16 lg:py-24">
				<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl font-bold text-center">
						Get Daily Spiritual Affirmations
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Sign up to receive daily affirmations, thoughtfully chosen to uplift
						your spirit.
					</p>
					<div className="mt-8 flex justify-center">
						<Button variant="default">Sign Up</Button>
					</div>
					<p className="mt-4 text-center text-xs text-gray-500">
						By signing up, you agree to receive spiritual affirmations and
						updates.
					</p>
				</div>
			</section>
			<section className="py-12 sm:py-16 lg:py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2">
							<h2 className="text-2xl font-bold">Get in Touch</h2>
							<p className="mt-4 text-base text-gray-600">
								Have questions or need assistance? Contact us today.
							</p>
							<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
								<div>
									<MailboxIcon className="text-gray-900" />
									<a className="block mt-2 text-sm text-gray-700" href="#">
										info@example.com
									</a>
								</div>
								<div>
									<PhoneIcon className="text-gray-900" />
									<a className="block mt-2 text-sm text-gray-700" href="#">
										+1 234 567 8900
									</a>
								</div>
								<div>
									<LocateIcon className="text-gray-900" />
									<address className="mt-2 not-italic text-sm text-gray-700">
										1234 Rama St, Suite 1000
										<br />
										San Francisco, CA 94103
									</address>
								</div>
							</div>
						</div>
						<div>
							<img
								alt="Contact"
								className="h-48 w-full object-cover rounded-md"
								height="200"
								src="/placeholder.svg"
								style={{
									aspectRatio: "300/200",
									objectFit: "cover",
								}}
								width="300"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
