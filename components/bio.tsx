import { Image, Heading, VStack, Box, HStack, Text } from "@chakra-ui/react";
import * as React from "react";

function Bio() {
  return (
    <div>
      <VStack>
        <Box mr={8}>
          <Image alt="Jan Carus" src="/jan.png" w="250px" borderRadius="50%" />
        </Box>
        <Box w="400px">
          <VStack alignItems="flex-start">
            <Heading color="whitesmoke" size="2xl">
              JAN CARUS
            </Heading>
            <Text color="whitesmoke" textAlign={"left"}>
              I am frontend developer with a broad experience in gamication,
              innovation and prototyping. Creating and developing new ideas is
              my specialty!
            </Text>
          </VStack>
        </Box>
      </VStack>
    </div>
  );
}

export default Bio;
