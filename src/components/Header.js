import { Box } from "@chakra-ui/react";
import { ReactComponent as LogoSymbol } from "../assets/images/symbol.svg";
import banner from "../assets/images/banner.png";
import React from "react";
import Text from "./Text";

const Header = () => {
  return (
    <header style={{ marginBottom: "12.625rem" }}>
      <Box
        display="flex"
        position="absolute"
        top="0"
        right="0"
        left="0"
        flexDirection="column"
        gap="2.438rem"
        height="16.375rem"
        width="100%"
        padding="1.625rem"
        justifyContent="flex-end"
        backgroundImage={`url(${banner})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <LogoSymbol />
        <Text
          as="h1"
          color="white"
          fontWeight="700"
          fontSize="2.25rem"
          lineHeight="3.0643rem"
        >
          Comece agora. <br /> Conecte-se já.
        </Text>
      </Box>
    </header>
  );
};

export default Header;
