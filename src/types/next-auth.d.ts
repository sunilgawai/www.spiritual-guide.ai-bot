import { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
type Userid = string;

declare module "next-auth/jwt" {
	interface JWT {
		id: Userid;
		username: string | null;
	}
}

declare module "next-auth" {
	interface Session {
		id: Userid;
		username: string | null;
	}
}
