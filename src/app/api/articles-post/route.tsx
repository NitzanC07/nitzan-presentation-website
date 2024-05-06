import { NextResponse } from "next/server";
import connect from "@/lib/db";
import ArticleSchema from "../../../../models/ArticleSchema";

export const GET = async () => {
  try {
    await connect();
    
      const articles = await ArticleSchema.find();
    
    return new NextResponse(JSON.stringify(articles), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching course data. " + error, {
      status: 500,
    });
  }
};