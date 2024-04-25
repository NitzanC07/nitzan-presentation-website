import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import UserSchema from "../../../../models/UserSchema";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await connect();
    const userData = await req.json();
    console.log("POST api route", userData);

    const newUser = new UserSchema(userData);
    await newUser.save();
    
    return new Response(JSON.stringify(userData), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({error: "Faild to create a new user"}), {
      headers: {"Content-Type": "application/json"},
      status: 500
    }
  );
  }
};
