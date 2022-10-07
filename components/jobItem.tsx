import * as React from "react";
import { Box, Text } from "@chakra-ui/react";

interface JobItemProps {
  employer: string;
  startDate: Date;
  endDate: Date;
  discription: string;
}

function JobItem({
  employer = "none",
  startDate = new Date(),
  endDate = new Date(),
  discription = "Job discription goes here",
}: JobItemProps) {
  return (
    <Box color="whitesmoke">
      <Box>{employer}</Box>
      <Box>{startDate.toDateString()}</Box>
      <Box>{endDate.toDateString()}</Box>
      <Box>{discription}</Box>
    </Box>
  );
}

export default JobItem;
