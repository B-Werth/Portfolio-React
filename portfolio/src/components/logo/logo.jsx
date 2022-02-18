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
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <LogoBox>
      <Image src={logoImage} width={30} height={30}></Image>
      <Text
        color={useColorModeValue("gray.800", "whiteAlpha.900")}
        fontFamily
        fontWeight="bold"
        ml={5}
      >
        B-Werth
      </Text>
    </LogoBox>
  );
};

export default Logo;
