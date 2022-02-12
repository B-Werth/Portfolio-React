import React from "react";

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Center,
  Text,
  HStack,
} from "@chakra-ui/react";

const navbar = () => {
  return (
    <div>
      <Box
        w="100%"
        h={"5%"}
        p={4}
        color="white"
        position="fixed"
        zIndex={5}
        css={{ backdropFilter: "blur(10px)" }}
        bg={"#040c1840"}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          <Center>
            <Flex align="center" mr={5}>
              <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                B-Werth
              </Heading>
            </Flex>
            <HStack spacing="100px">
              <Text>Projekte</Text>
              <Text>Posts</Text>
              <Text>Github</Text>
              <Text>jo</Text>
            </HStack>
          </Center>
        </Container>
      </Box>
    </div>
  );
};

export default navbar;
