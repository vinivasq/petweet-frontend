import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";

const Button = (props) => {
  const { variant, ...rest } = props;

  return (
    <ChakraButton
      type="submit"
      fontFamily="Open Sans"
      fontSize="0.875rem"
      fontWeight="600"
      color={variant === "outline" ? "#00acc1" : "white"}
      backgroundColor={variant === "outline" ? "transparent" : "#00acc1"}
      boxShadow="2px 4px 4px rgba(0, 0, 0, 0.09)"
      border={variant === "outline" ? "1px solid #00acc1" : "none"}
      _hover={{
        backgroundColor: variant === "outline" ? "#00acc110" : "#00acc1ba",
      }}
      {...rest}
    />
  );
};

export default Button;
