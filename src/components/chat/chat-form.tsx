import {
	CameraIcon,
	PhoneIcon,
	MicIcon,
	FileIcon,
	MoreHorizontalIcon,
	SendIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ChatForm() {
	return (
		<div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow flex items-center">
			<Input
				className="flex-1 border-none focus:ring-0"
				placeholder="Message The White Rabbit"
				type="text"
			/>
			<CameraIcon className="mx-2 text-gray-500" />
			<PhoneIcon className="mx-2 text-gray-500" />
			<MicIcon className="mx-2 text-gray-500" />
			<FileIcon className="mx-2 text-gray-500" />
			<MoreHorizontalIcon className="mx-2 text-gray-500" />
			<Button className="bg-gray-200 text-gray-700 hover:bg-gray-300 ml-2">
				{/* <SendIcon className="text-gray-700" /> */}
				send
			</Button>
		</div>
	);
}
