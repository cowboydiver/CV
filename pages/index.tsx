import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX - 75,
        y: e.clientY - 25,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Jan Carus</title>
        <meta name="description" content="CV of Jan Carus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: mousePosition.x, y: mousePosition.y }}
      >
        <Button position="fixed">Hire me, please!</Button>
      </motion.div>
      <Flex
        height="100vh"
        width="100vw"
        alignItems="center"
        justifyContent="center"
        background="gray.900"
        direction="column"
      >
        <VStack spacing={8}>
          <Box>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Heading color="white">Hello, there! I am Jan Carus</Heading>
            </motion.div>
          </Box>
          <Box bg="teal.400"></Box>
        </VStack>
      </Flex>
    </div>
  );
};

export default Home;
