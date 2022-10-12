import * as React from "react";
import { Box, HStack, Text, Flex, VStack } from "@chakra-ui/react";

interface JobItemProps {
  employer: string;
  position: string;
  startDate: Date;
  endDate: Date;
  discription: string;
}

function JobItem({
  employer = "none",
  position = "none",
  startDate = new Date(),
  endDate = new Date(),
  discription = "Job discription goes here",
}: JobItemProps) {
  const dateOptions = { month: "short", year: "numeric" } as const;

  return (
    <Box
      color="whitesmoke"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      shadow="md"
      borderRadius="md"
    >
      <Flex justifyContent="space-between" alignItems="baseline">
        <VStack alignItems="flex-start">
          <Box fontSize="2xl">{employer}</Box>
          <Box fontSize="xl">{position}</Box>
        </VStack>
        <Box color="whiteAlpha.700">
          {`${new Intl.DateTimeFormat("en-US", dateOptions).format(
            startDate
          )} - ${new Intl.DateTimeFormat("en-US", dateOptions).format(
            endDate
          )}`}
        </Box>
      </Flex>

      <Box>{discription}</Box>
    </Box>
  );
}

export default JobItem;
