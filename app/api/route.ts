import { createUser } from "@/lib/actions/user.actions";
import { NextResponse } from "next/server"

export async function GET() {
    const user = {
        clerkId: Math.random().toString(36).substring(7),
        email: Math.random().toString(36).substring(7) + "@12345.com",
        username: Math.random().toString(36).substring(7),
        firstName: "first_name",
        lastName: "last_name",
        photo: "image_url",
      };
  
      const newUser = await createUser(user);
  
   return NextResponse.json(user)
}