import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

const Button = (props) => {
  return (
    <ChakraButton
      type="submit"
      backgroundColor="#00ACC1"
      color="white"
      fontFamily="Open Sans"
      fontSize="0.875rem"
      fontWeight="600"
      {...props}
    />
  );
};

export default Button;
