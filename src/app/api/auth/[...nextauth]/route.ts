import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// const prisma = new PrismaClient();

// export const authOptions = {
// 	adapter: PrismaAdapter(prisma),
// 	// Configure one or more authentication providers
// 	providers: [
// 		GoogleProvider({
// 			clientId: process.env.GOOGLE_CLIENT_ID as string,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
// 		}),
// 	],

// 	//   callbacks: {
// 	//     // @ts-ignore
// 	//     async signIn({ account, profile }) {
// 	//       if (account.provider === "google") {
// 	//         //Check emails exists
// 	//         const existingUser = await prisma.user.findUnique({
// 	//           where: { email: profile.email },
// 	//         });
// 	//         if (existingUser) {
// 	//           //User already exists, do nothing or update some fields
// 	//           console.log("User already exists:", existingUser);
// 	//         } else {
// 	//           //User does not exist, create a new user with the profile data
// 	//           const newUser = await prisma.user.create({
// 	//             data: {
// 	//               name: profile.name,
// 	//               email: profile.email,
// 	//               image: profile.image,
// 	//               },
// 	//             },
// 	//           });
// 	//           console.log("User created:", newUser);
// 	//         }
// 	//       }
// 	//       return profile;
// 	//     },

// 	// async session({ session, token}) {
// 	//     if(token){
// 	//                 session.user.id=token.id
// 	//                 session.user.name=token.name
// 	//                 session.user.email=token.email
// 	//                 session.user.image=token.picture
// 	//             }
// 	//     return session
// 	//   },

// 	// async jwt({ token, user}) {
// 	//    const existingUser = await prisma.user.findUnique({
// 	//           where: { email: profile.email },
// 	//         });
// 	//         if (existingUser) {
// 	//           return{
// 	//                             name: existingUser.name,
// 	//               email: existingUser.email,
// 	//               image: existingUser.image,
// 	//                         }
// 	//         } else {
// 	//           //User does not exist, create a new user with the profile data
// 	//           const newUser = await prisma.user.create({
// 	//             data: {
// 	//               name: token.name,
// 	//               email: token.email,
// 	//               image: token.image,
// 	//               },
// 	//             },
// 	//           });
// 	//           console.log("User created:", newUser);
// 	//         }
// 	//     return token
// 	//   }
// 	//   },
// 	// pages: {
// 	//     signIn: '/auth/signin',
// 	//     signOut: '/auth/signout',
// 	//     error: '/auth/error',
// 	//   },
// };
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
