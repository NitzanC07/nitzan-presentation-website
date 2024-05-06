import { ArticlesTypes } from "@/types/articlesTypes";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { notFound } from "next/navigation";

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

interface ArticleTitleProps {
  articles?: ArticlesTypes;
  articleId: string;
}

async function ArticleTitle({articleId}: ArticleTitleProps) {
  const article = await getArticleDB(articleId); 

  return (
    <Flex flexDir="column" p={0}>
      <Heading
        as="h2"
        fontFamily="var(--font-varela_round)"
        fontSize={26}
        tabIndex={1}
      >
        {article ? `${article.title}` : "מאמרים מקצועיים על תכנות ופיתוח אתרים"}
      </Heading>
      <Text as="p" fontSize={14} tabIndex={1}>
        {article ? `תאריך: ${article.time} | כתב: ${article.writer}` : "בחר מאמר לקריאה..."}
      </Text>
    </Flex>
  );
}

export default ArticleTitle;
