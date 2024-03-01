/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kyLFTIPMPxY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ChatMin() {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="The White Rabbit" src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>WR</AvatarFallback>
          </Avatar>
          <h1 className="text-lg font-semibold">Scene: The White Rabbit's Shop</h1>
        </div>
        <div className="flex items-center space-x-2">
          <GaugeIcon className="text-gray-500" />
          <UserIcon className="text-gray-500" />
          <PanelTopCloseIcon className="text-gray-500" />
        </div>
      </div>
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
          Now moving to the The White Rabbit's Shop. The White Rabbit and are in the White Rabbit's shop, where they
          sell pocket watches to visitors. The shop is lined with countless watches of all styles, sizes and colors.
        </p>
      </div>
      <div className="flex items-center p-4 border-t">
        <Input className="flex-1" placeholder="Message The White Rabbit" />
        <Button className="ml-2">Send</Button>
      </div>
    </div>
  )
}

function GaugeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function PanelTopCloseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  )
}


function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
