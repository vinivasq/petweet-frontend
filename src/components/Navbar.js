import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Box, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <header style={{ display: "float" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="1rem"
        boxShadow="0px 1px 4px #00000057"
      >
        <Button
          backgroundColor={"transparent"}
          padding={0}
          position="fixed"
          left="0"
        >
          <HamburgerIcon color="#00ACC1" boxSize={6} />
        </Button>
        <Logo style={{ height: "1.75rem" }} />
      </Box>
    </header>
  );
};

export default Navbar;
