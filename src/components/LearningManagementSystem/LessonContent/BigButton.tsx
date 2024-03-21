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
            bgColor={"#C5A880"}
            _hover={{bgColor: "#C5A880aa"}}
            color={"black"}
            shadow={"3px 3px 5px #888"}
          >
            {text}
          </Button>
        </Link>
      </Flex>
  )
}

export default BigButton