import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Box } from "@chakra-ui/react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <header style={{ display: "float" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="1rem"
          boxShadow="0px 1px 4px #00000057"
        >
          <MenuButton onClick={handleMenu} />
          <Logo style={{ height: "1.75rem" }} />
        </Box>
      </header>
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
          <Box width="30%" height="100vh" onClick={handleMenu}></Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
