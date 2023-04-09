import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Box } from "@chakra-ui/react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box
        display="flex"
        position="fixed"
        left="0"
        right="0"
        top="0"
        alignItems="center"
        justifyContent="center"
        padding="1rem"
        boxShadow="0px 1px 3px #00000030"
      >
        <MenuButton onClick={handleMenu} />
        <Logo style={{ height: "1.75rem" }} />
      </Box>
      {isOpen && (
        <Box
          position="fixed"
          display="flex"
          top="0"
          bottom="0"
          width="100vw"
          backgroundColor="#00000075"
        >
          <Menu />
          <Box
            position="fixed"
            right="0"
            width="30%"
            height="100vh"
            onClick={handleMenu}
          ></Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
