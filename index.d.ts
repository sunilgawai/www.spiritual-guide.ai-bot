import { User } from "@prisma/client";
import { MongoClient } from "mongodb";

declare global {
    let _mongoClientPromise: Promise<MongoClient>
}


declare module "next-auth" {
  interface Session {
    user: User;
  }
}


declare module "next-auth/jwt" {
  interface JWT {
    user: User;
    role: string
  }
}