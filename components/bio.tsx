import {
  Image,
  Heading,
  VStack,
  HStack,
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
    <Box>
      <HStack spacing={32}>
        <Box>
          <VStack alignItems="flex-start">
            <Box>
              <Text
                fontFamily="'Nunito', sans-serif"
                fontSize="96px"
                color="whitesmoke"
                letterSpacing={4}
              >
                Jan Carus
              </Text>
            </Box>
            <Box pb={8}>
              <Text
                fontSize="2xl"
                color="whitesmoke"
                textAlign="left"
                letterSpacing={8}
              >
                {"/*Frontend Developer*/"}
              </Text>
            </Box>

            <HStack spacing={8}>
              <IconOnlyButton icon={<ImLinkedin2 />} />
              <IconOnlyButton icon={<ImGithub />} />
            </HStack>
          </VStack>
        </Box>

        <Box>
          <Image alt="Jan Carus" src="/jan.png" w="500px" borderRadius="50%" />
        </Box>
      </HStack>
    </Box>
  );
}

export default Bio;
