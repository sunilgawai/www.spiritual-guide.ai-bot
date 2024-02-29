import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const useServerSession = async () => {
	return await getServerSession(authOptions);
};
