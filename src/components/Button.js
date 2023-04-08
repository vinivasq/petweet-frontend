import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

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
      border={variant === "outline" ? "1px solid #00acc1" : "none"}
      {...rest}
    />
  );
};

export default Button;
