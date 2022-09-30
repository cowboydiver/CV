import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <Heading color="white">Jan Carus</Heading>
        </motion.div>
      </Flex>
    </div>
  );
};

export default Home;
