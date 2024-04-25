import { NextResponse } from "next/server";
import connect from "@/lib/db";
import CourseSchema from "../../../../models/CourseSchema";

export const GET = async () => {
  try {
    await connect();
    const courses = await CourseSchema.find();
    return new NextResponse(JSON.stringify(courses), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching course data. " + error, {
      status: 500,
    });
  }
};

