import React from "react";

import "./header.css";

import {
  Textarea,
  Container,
  Box,
  Flex,
  HStack,
  Center,
  Badge,
  Heading,
} from "@chakra-ui/react";

function Header() {
  return (
    <Box>
      <Container centerContent>
        <Box padding="4" overflow="hidden" ml={100}>
          <Badge textColor={"white"} fontSize={50} variant="outline">
            Skills:
          </Badge>
          <Heading textColor={"white"} mt={20}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Heading>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
