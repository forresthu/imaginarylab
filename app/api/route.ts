import { createUser } from "@/lib/actions/user.actions";
import { NextResponse } from "next/server"

export async function GET() {
    const user = {
        clerkId: "1234",
        email: "test@12345.com",
        username: "test12345",
        firstName: "first_name",
        lastName: "last_name",
        photo: "image_url",
      };
  
      const newUser = await createUser(user);
  
   return NextResponse.json(user)
}