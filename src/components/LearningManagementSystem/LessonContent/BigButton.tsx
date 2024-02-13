import { Button, Flex, Link } from "@chakra-ui/react"
import { url } from "inspector";

interface BigButtonProps {
    urlLink: string;
    text: string;
}

function BigButton({urlLink, text}: BigButtonProps) {
  return (
    <Flex w={'100%'} justifyContent={'center'}>
        <Link
          href={urlLink}
          target="_blank"
          mb={5}
        >
          <Button
            style={{ fontFamily: "Varela Round, sans-serif" }}
            colorScheme="yellow"
          >
            {text}
          </Button>
        </Link>
      </Flex>
  )
}

export default BigButton