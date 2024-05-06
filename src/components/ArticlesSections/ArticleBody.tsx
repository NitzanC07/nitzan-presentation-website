import { ArticlesTypes } from "@/types/articlesTypes";
import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import React from "react";
import ParagraphBox from "../LearningManagementSystem/LessonContent/ParagraphBox";
import NextLink from "next/link";
import BigButton from "../LearningManagementSystem/LessonContent/BigButton";

async function getArticleDB(articleId: string) {
  const url = `${
    process.env.NODE_ENV === "development"
      ? process.env.DEV_URL
      : process.env.NEXT_PUBLIC_VERCEL_URL
  }`;

  const res = await fetch(`${url}/api/articles-post/${articleId}`, {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  const articles = res.json();
  console.log(articles);

  return articles;
}

interface ArticleBodyProps {
  articles?: ArticlesTypes;
  articleId: string;
}

async function ArticleBody({ articleId }: ArticleBodyProps) {
  const article = await getArticleDB(articleId);
  return (
    <Flex flexDir="column" p={0} mx={"auto"} my={20} maxW={"750px"}>
      <ParagraphBox textContent={article.bodyText} />
      <BigButton text="מקור המאמר" urlLink={article.urlPost} />
    </Flex>
  );
}

export default ArticleBody;
