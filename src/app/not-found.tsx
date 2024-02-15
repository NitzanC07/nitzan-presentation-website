import {
  Box,
  Button,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} h={500}>
      <Box mt={70} textAlign={"center"}>
        <Heading style={{ fontFamily: "Varela Round" }} fontSize={60}>404</Heading>
        <Text style={{ fontFamily: "Varela Round" }} fontSize={24}>אופס, משהו קרה.</Text>
        <Text style={{ fontFamily: "Varela Round" }} fontSize={24}>העמוד שהינך מנסה להגיע אליו לא קיים.</Text>
        <Link href="/courses">
          <Button mt={5} mx={12}>Back to courses menu</Button>
        </Link>
        <Link href="/">
          <Button mt={5} mx={12}>Back to home page</Button>
        </Link>
      </Box>
    </Flex>
  );
}
