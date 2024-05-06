import { NextResponse, NextRequest } from "next/server";
import connect from "@/lib/db";
import ArticleSchema from "../../../../../models/ArticleSchema";

export const GET = async (req: NextRequest) => {
 try {
    await connect();
    
    // Check if the request URL includes an article ID
    const articleId = req.nextUrl.pathname.split("/").pop();
    console.log(articleId);
    
    
    let articles;
    if (articleId) {
      // Fetch a specific article by ID
      articles = await ArticleSchema.findById(articleId);
    } else {
      // Fetch all articles
      articles = await ArticleSchema.find();
    }
    
    return new NextResponse(JSON.stringify(articles), { status: 200 });
 } catch (error) {
    return new NextResponse("Error in fetching course data. " + error, {
      status: 500,
    });
 }
};