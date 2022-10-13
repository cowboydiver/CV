import {
  Image,
  Heading,
  VStack,
  HStack,
  Stack,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import motion from "framer-motion";
import { ImLinkedin2, ImGithub } from "react-icons/im";
import IconOnlyButton from "./iconOnlyButton";

function Bio() {
  const otherColorFont = "JAN CARUS";
  return (
    <Stack
      w="full"
      h="full"
      p={8}
      spacing={{ base: "8px", md: "128px" }}
      justifyContent="center"
      alignItems="center"
      direction={{ base: "column", md: "row-reverse" }}
    >
      <Box>
        <Image
          alt="Jan Carus"
          src="/jan.png"
          w={{ base: "250px", md: "500px" }}
          borderRadius="50%"
        />
      </Box>
      <VStack spacing={0} alignItems="flex-start">
        <Text
          fontSize={{ base: "72px", md: "96px" }}
          color="whitesmoke"
          letterSpacing="tight"
        >
          Jan Carus
        </Text>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          color="whitesmoke"
          textAlign={{ base: "center", md: "left" }}
          letterSpacing={8}
        >
          Frontend Developer
        </Text>

        <HStack
          spacing={{ base: "64px", md: "32px" }}
          justifyContent={{ base: "center", md: "left" }}
          pt={8}
          w="full"
        >
          <IconOnlyButton
            icon={<ImLinkedin2 size="auto" />}
            link="https://www.linkedin.com/in/jdetlefsen/"
          />
          <IconOnlyButton
            icon={<ImGithub size="auto" />}
            link="https://github.com/cowboydiver"
          />
        </HStack>
      </VStack>
    </Stack>
  );
}

export default Bio;
