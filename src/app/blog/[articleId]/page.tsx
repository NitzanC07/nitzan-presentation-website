import ArticleBody from '@/components/ArticlesSections/ArticleBody';
import ArticleTitle from '@/components/ArticlesSections/ArticleTitle'
import ArticlesList from '@/components/ArticlesSections/ArticlesList'
import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import { notFound } from 'next/navigation';
import React from 'react'

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

function BlogArticlePage({ params }: { params: { articleId: string } }) {
  return (
    <Flex
      as="main"
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Grid
        as="section"
        templateColumns={["1fr", "1fr", "1fr 2fr", "1fr 4fr"]}
        templateRows={["80px 1fr"]}
        mt="60px"
        w="100%"
        gap={0}
      >
        <GridItem
          as="nav"
          rowSpan={2}
          colSpan={1}
          bgColor={"#532E1C"}
          p={4}
          tabIndex={1}
        >
          <Heading
            as="h2"
            fontFamily="var(--font-varela_round)"
            fontSize={23}
            color="white"
            mb={5}
            tabIndex={1}
          >
            מאמרים
          </Heading>

          <ArticlesList />
        </GridItem>

        <GridItem
          as="section"
          colSpan={1}
          bgColor={"#C5A880"}
          color={"white"}
          py={3}
          px={5}
        >
          <ArticleTitle articleId={params.articleId} />
        </GridItem>

        <GridItem
          as="section"
          colSpan={1}
          bgColor={"#E6E6E6"}
          w="100%"
          minH={"700px"}
          pt={0}
          pb={16}
          px={"auto"}
          m={0}
        >
          <ArticleBody articleId={params.articleId} />
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default BlogArticlePage