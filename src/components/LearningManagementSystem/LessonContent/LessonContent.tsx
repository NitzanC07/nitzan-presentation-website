import { Box, Code, Heading, Stack, Text } from "@chakra-ui/react";

function LessonContent() {
  return (
    <Box>
      <Heading
        as="h2"
        style={{ fontFamily: "Varela Round, sans-serif" }}
        fontSize={23}
      >
        שיעור
      </Heading>
      <Text style={{ fontFamily: "Varela Round, sans-serif" }} fontSize={20}>
        תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן
        תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן תוכן
        <Stack dir="ltr" direction={"column"}>
          <Code variant="solid" colorScheme={"blackAlpha"}>
            {`<html>`}
            <br />
            <Text color={"yellow.300"} bgColor={"yellow.600"}>
              {`____<head>`}
              <br />
              {`________<meta />`}
              <br />
              {`________<title>Document</title>`}
              <br />
              {`________<style />`}
              <br />
              {`____</head>`}
            </Text>
            <br />
            {`____<body>`}
            <br />
            <br />
            {`____</body>`}
            <br />
            {`</html>`}
          </Code>
        </Stack>
      </Text>
    </Box>
  );
}

export default LessonContent;
