import { Box } from "@chakra-ui/react";
import React from "react";
import Text from "../components/Text";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const CreatePost = () => {
  return (
    <>
      <Box
        boxShadow="0px 1px 3px #00000030"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="1rem"
      >
        <Link to="/home">
          <Text fontWeight="300" fontSize="0.75rem" color="#424242">
            Cancelar
          </Text>
        </Link>
        <Box display="flex" alignItems="center" gap="0.875rem">
          <Text color="#828282" fontSize="0.875rem">
            0/140
          </Text>
          <Button borderRadius="0.625rem">Petwittar</Button>
        </Box>
      </Box>
    </>
  );
};

export default CreatePost;
