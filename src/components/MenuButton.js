import { HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

const MenuButton = (props) => {
  return (
    <Button
      backgroundColor={"transparent"}
      padding={0}
      position="fixed"
      left="0"
      {...props}
    >
      <HamburgerIcon color="#00ACC1" boxSize={6} />
    </Button>
  );
};

export default MenuButton;
