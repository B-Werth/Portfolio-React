import React from "react";

import "./header.css";

import {
  Container,
  Box,
  Flex,
  HStack,
  Center,
  Heading,
} from "@chakra-ui/react";

function Header() {
  return (
    <Box>
      <Heading
        display="inline-block"
        as="h3"
        fontSize={40}
        ml="500"
        color={"white"}
      >
        Skills
      </Heading>
    </Box>
  );
}

export default Header;
