import {
  Box,
  Button,
  Flex,
  Heading,
  VStack,
  StackDivider,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Bio from "../components/bio";
import JobItem from "../components/jobItem";

const Home: NextPage = () => {
  return (
    <Container maxW="conntainer.xl" p={0}>
      <Head>
        <title>Jan Carus</title>
        <meta name="description" content="CV of Jan Carus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex height="100vh" width="100vw" py={20} background="blackAlpha.900">
        <Bio></Bio>
      </Flex>
    </Container>
  );
};

export default Home;
