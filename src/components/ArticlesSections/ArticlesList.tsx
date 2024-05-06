import NextLink from "next/link";
import {
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { ArticlesTypes } from "@/types/articlesTypes";
import { notFound } from "next/navigation";

async function getArticlesDB() {
  // * Function that read the data of the selected course as SSG method.
  // * Get the data from the database of MongoDB => NitzanCourses => courses.courses
  const url = `${process.env.NODE_ENV === "development" ?  process.env.DEV_URL : process.env.NEXT_PUBLIC_VERCEL_URL}`
    
  const res = await fetch(`${url}/api/articles-post`, {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  const articles = res.json();
  console.log(articles);

  return articles;
}

async function ArticlesList() {
  const articles: ArticlesTypes[] = await getArticlesDB(); 

  const months = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ];

  return (
    <List>
      {articles.map((article: any) => (
        <ListItem
          key={article.title}
          tabIndex={-1}
          mb={2}
          p={2}
          borderWidth={0}
          borderRadius={4}
          bgColor={"rgba(255, 255, 255, 0.1)"}
          _hover={{ bgColor: "rgba(255, 255, 255, 0.3)" }}
        >
          <Link
            as={NextLink}
            href={`/blog/${article._id}`}
            color="white"
            display={"block"}
            tabIndex={1}
          >
            <b>{article.title}</b>
          </Link>
          <Text color={"white"} textAlign={"left"} fontSize={13}>
            {`${months[Number(article.time.split("/")[1]) - 1]} ${article.time.split("/")[2]}`}
          </Text>
        </ListItem>
      ))}
    </List>
  );
}

export default ArticlesList;
