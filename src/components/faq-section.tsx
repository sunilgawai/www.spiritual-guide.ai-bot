import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
	return (
		<section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center">FAQs</h2>
				<p className="mt-2 text-center text-medium text-gray-600">
					Find answers to common questions about the teachings of Lord Rama and
					our website.
				</p>
				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>What is Lord Rama's teaching?</AccordionTrigger>
						<AccordionContent>
							Lord Rama's teachings encompass principles of righteousness,
							courage, and compassion, guiding individuals on the path to moral
							and spiritual development.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>What is Lord Rama's teaching?</AccordionTrigger>
						<AccordionContent>
							Lord Rama's teachings encompass principles of righteousness,
							courage, and compassion, guiding individuals on the path to moral
							and spiritual development.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>What is Lord Rama's teaching?</AccordionTrigger>
						<AccordionContent>
							Lord Rama's teachings encompass principles of righteousness,
							courage, and compassion, guiding individuals on the path to moral
							and spiritual development.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	);
};

export default FaqSection;
