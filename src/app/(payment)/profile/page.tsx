/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EIe6ZkiaueD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="w-full shadow-none mt-24 ">
      <Card className="w-full max-w-3xl">
        <CardHeader className="space-y-1.5">
          <div className="flex items-center space-x-4">
            <div className="h-14 w-14 rounded-lg overflow-hidden">
              {session?.user.image && (
                <img
                  className="border aspect-square object-cover"
                  height="56"
                  alt={session.user.name || ''}
                  src={session.user.image}
                  width="56"
                />
              )}
            </div>
            <div className="space-y-1">
              {session?.user && (
                <h1 className="text-2xl font-bold">{session.user.email}</h1>
              )}
              {session?.user?.email && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {session?.user?.email}
                </p>
              )}
            </div>
          </div>
          <div className="grid space-y-4">
            <Button size="sm" variant="outline">
              Upload new avatar
            </Button>
            <Button size="sm" variant="outline" disabled>
              2,345 / 10,000 requests
            </Button>
            <div className="grid gap-1">
              <h3 className="text-sm font-semibold">Plan</h3>
              <p className="text-sm">Free</p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-sm font-semibold">API Usage</h3>
              <p className="text-sm">2,345 / 10,000 requests used</p>
            </div>
            <Button size="sm">Upgrade Plan</Button>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">
              Bio
            </h3>
            <p className="text-sm">
              Mathematician and writer. I was the first to recognize that the
              machine had applications beyond pure calculation, and I published
              the first algorithm intended to be carried out by such a machine.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
