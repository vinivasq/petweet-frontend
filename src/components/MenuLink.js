import { Link } from "@chakra-ui/layout";
import React from "react";

const MenuLink = (props) => {
  return (
    <Link
      padding="0.25rem"
      borderLeft="4px solid transparent"
      borderRadius="2px"
      transition="all 300ms"
      width="100%"
      _hover={{
        borderColor: "#00ACC1",
        backgroundColor: "#00acc133",
        color: "#00ACC1",
        fontWeight: "600",
      }}
      {...props}
    />
  );
};

export default MenuLink;
