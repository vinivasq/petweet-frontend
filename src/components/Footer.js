import { Box } from "@chakra-ui/react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Box display="flex" justifyContent="center" width="100%" padding="2rem">
        <Logo />
      </Box>
    </footer>
  );
};

export default Footer;
