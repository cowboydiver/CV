import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Flex, Heading } from "@chakra-ui/react";

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
      >
        <Heading color="white">Jan Carus</Heading>
      </Flex>
    </div>
  );
};

export default Home;
