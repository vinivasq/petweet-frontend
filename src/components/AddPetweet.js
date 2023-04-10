import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { ReactComponent as Plus } from "../assets/images/+.svg";

const AddPetweet = (props) => {
  return (
    <Link
      as={RouterLink}
      backgroundColor="#00ACC1"
      bottom="1.5rem"
      borderRadius="full"
      boxShadow="0px 1px 3px #0000006b"
      padding="0.75rem"
      position="fixed"
      right="1rem"
      transition="all 300ms"
      zIndex="1"
      _hover={{
        opacity: ".8",
      }}
      {...props}
    >
      <Plus />
    </Link>
  );
};

export default AddPetweet;
