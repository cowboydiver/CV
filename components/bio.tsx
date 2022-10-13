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
import { motion } from "framer-motion";
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
      <motion.div initial={{ x: "calc(100vw + 500px)" }} animate={{ x: 0 }}>
        <Image
          alt="Jan Carus"
          src="/jan.png"
          w={{ base: "250px", md: "500px" }}
          borderRadius="50%"
        />
      </motion.div>
      <VStack spacing={0} alignItems={{ base: "center", md: "flex-start" }}>
        <Text
          fontSize={{ base: "48px", md: "89px" }}
          color="whitesmoke"
          letterSpacing="tight"
        >
          JAN CARUS
        </Text>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          color="whitesmoke"
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
            icon={<ImLinkedin2 size="100%" />}
            link="https://www.linkedin.com/in/jdetlefsen/"
          />
          <IconOnlyButton
            icon={<ImGithub size="100%" />}
            link="https://github.com/cowboydiver"
          />
        </HStack>
      </VStack>
    </Stack>
  );
}

export default Bio;
