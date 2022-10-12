import { Box, Heading, VStack } from "@chakra-ui/react";
import * as React from "react";
import JobItem from "./jobItem";

function ExperienceSection() {
  return (
    <Box>
      <Heading mb="8" color="whitesmoke" size="2xl">
        Experience
      </Heading>
      <VStack>
        <JobItem
          employer="LEGO"
          position="Interactive Play Designer"
          startDate={new Date("2019-11-01")}
          endDate={new Date("2022-07-01")}
          discription="Designed and prototyped digital interaction and play for upcoming LEGO Super Mario releases."
        ></JobItem>
        <JobItem
          employer="Bestseller"
          position="3D Specialist"
          startDate={new Date("2019-03-01")}
          endDate={new Date("2020-06-01")}
          discription="I worked in a team that paved the way forward in terms of implementing 3D design strategies across BESTSELLERs brands. I took part in developing and executing the digital strategy and roadmap in collaboration with IT, brands and users."
        ></JobItem>
        <JobItem
          employer="Kanda"
          position="Unity Developer"
          startDate={new Date("2018-05-01")}
          endDate={new Date("2019-02-01")}
          discription="Designed and prototyped digital interaction and play for upcoming LEGO Super Mario releases."
        ></JobItem>
        <JobItem
          employer="Selfemployed/contracts"
          position="Freelance Unity Developer"
          startDate={new Date("2014-08-01")}
          endDate={new Date("2018-05-01")}
          discription="As a freelance consultant I have worked on design and development of games, virtual reality applications and other similar projects. I have mostly had longer contracts working on specific projects, usualy from start to finish."
        ></JobItem>
      </VStack>
    </Box>
  );
}

export default ExperienceSection;
