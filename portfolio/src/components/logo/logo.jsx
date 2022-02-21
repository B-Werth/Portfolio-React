import React from "react";

import logoImage from "../../assets/logo.jpg";

import { Text, useColorModeValue, Image } from "@chakra-ui/react";

import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(360deg);
  }
`;

const Logo = () => {
  return (
    <LogoBox>
      <Image src={logoImage} width={40} height={40}></Image>
      <Text
        color={useColorModeValue("gray.800", "whiteAlpha.900")}
        fontWeight="bold"
        fontSize={20}
        ml={5}
      >
        Bastian Werth
      </Text>
    </LogoBox>
  );
};

export default Logo;
