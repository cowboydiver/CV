import {
  Box,
  Button,
  Flex,
  Heading,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Bio from "../components/bio";
import JobItem from "../components/jobItem";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Jan Carus</title>
        <meta name="description" content="CV of Jan Carus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
        background="blackAlpha.900"
      >
        <Bio></Bio>
      </Flex>
    </Box>
  );
};

export default Home;
