import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	CameraIcon,
	FileIcon,
	GaugeIcon,
	MicIcon,
	MoreHorizontalIcon,
	PanelTopCloseIcon,
	PhoneIcon,
	SendIcon,
	UserIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";

const ChatWindow = () => {
	return (
		<Card className="max-w-lg mx-auto">
			<CardHeader className="flex flex-row items-center justify-between p-4 border-b">
				<div className="flex items-center space-x-2">
					<Avatar>
						<AvatarImage
							alt="The White Rabbit"
							src="/placeholder.svg?height=32&width=32"
						/>
						<AvatarFallback>WR</AvatarFallback>
					</Avatar>
					<CardDescription className="font-semibold text-base leading-4">
						Scene: The White Rabbit's Shop
					</CardDescription>
				</div>
				<div className="flex items-center space-x-2">
					<GaugeIcon className="text-gray-500" />
					<UserIcon className="text-gray-500" />
					<PanelTopCloseIcon className="text-gray-500" />
				</div>
			</CardHeader>
			<CardContent>
				<div className="p-4">
					<Select>
						<SelectTrigger id="scene">
							<SelectValue>The White Rabbit's Shop</SelectValue>
						</SelectTrigger>
						<SelectContent position="popper">
							<SelectItem value="shop">The White Rabbit's Shop</SelectItem>
							<SelectItem value="other">Other Scenes</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="p-4 space-y-4">
					<p>
						Now moving to the The White Rabbit's Shop. The White Rabbit and are
						in the White Rabbit's shop, where they sell pocket watches to
						visitors. The shop is lined with countless watches of all styles,
						sizes and colors.
					</p>
				</div>
			</CardContent>
			<CardFooter className="flex flex-col items-center justify-between p-4 border-t">
				<Textarea />
				<Separator />
				<div className="flex items-center justify-start gap-4 flex-row">
					<CameraIcon className="mx-2 text-gray-500" />
					<PhoneIcon className="mx-2 text-gray-500" />
					<MicIcon className="mx-2 text-gray-500" />
					<FileIcon className="mx-2 text-gray-500" />
					<MoreHorizontalIcon className="mx-2 text-gray-500" />
					<Button variant="ghost">
						<SendIcon />
					</Button>
				</div>
				{/* <div className="w-full">
					<Input className="flex-1" placeholder="Message The White Rabbit" />
					<Button className="ml-2">Send</Button>
				</div>
				<ChatForm /> */}
			</CardFooter>
		</Card>
	);
};

export default ChatWindow;
