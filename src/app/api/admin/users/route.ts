import { db } from "@/lib/db";

export async function GET() {
  const registeredUsers = await db.user.findMany({
    where: {
      role: "customer",
    },
  });
  return Response.json({
    result: registeredUsers,
    message: `${registeredUsers.length} users found`,
    status: 200,
  });
}

export async function POST() {
  const registeredUsers = await db.user.findMany({
    where: {
      role: "customer",
    },
  });
  return Response.json({
    result: registeredUsers,
    message: `${registeredUsers.length} users found`,
    status: 200,
  });
}
