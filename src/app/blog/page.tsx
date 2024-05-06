import ArticleBody from "@/components/ArticlesSections/ArticleBody";
import ArticleTitle from "@/components/ArticlesSections/ArticleTitle";
import ArticlesList from "@/components/ArticlesSections/ArticlesList";
import { ArticlesTypes } from "@/types/articlesTypes";
import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { notFound } from "next/navigation";

function BlogArticlePage() {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      bgColor={"#E6E6E6"}
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
          <Text>מאמרים מקצועיים בנושא תכנות ופיתוח אתרים</Text>
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
          <Text>בחרו מאמר מרשימת המאמרים בצד שמאל, על מנת לקרוא.</Text>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default BlogArticlePage;
