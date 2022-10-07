import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Bio from "../components/bio";
import JobItem from "../components/jobItem";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jan Carus</title>
        <meta name="description" content="CV of Jan Carus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        height="100vh"
        width="100vw"
        alignItems="center"
        justifyContent="center"
        background="gray.900"
        direction="row"
      >
        <VStack spacing={8}>
          <Bio></Bio>

          <Box>
            <Heading mb="32" color="whitesmoke" size="md">
              Experience
            </Heading>
            <VStack>
              <JobItem
                employer="LEGO"
                startDate={new Date("2019-11-01")}
                endDate={new Date("2022-07-01")}
                discription="Designed and prototyped digital interaction and play for upcoming LEGO Super Mario releases."
              ></JobItem>
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </div>
  );
};

export default Home;
