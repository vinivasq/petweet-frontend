import { Box, Image, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import Text from "../components/Text";
import ProfilePic from "../assets/images/doggos/userpic.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../context/auth-context";

const CreatePost = () => {
  const { user } = useAuth();
  const [count, setCount] = useState(0);

  return (
    <>
      <Box
        boxShadow="0px 1px 3px #00000020"
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
            {count}/140
          </Text>
          <Button borderRadius="0.625rem" onClick={() => console.log(user.id)}>
            Petwittar
          </Button>
        </Box>
      </Box>
      <Box padding="0.375rem 1rem" display="flex">
        <Image
          src={ProfilePic}
          alt="Foto de perfil"
          boxSize={37}
          borderRadius="full"
        />
        <Textarea
          border="none"
          outline="none"
          resize="none"
          focusBorderColor="transparent"
          placeholder="O que está acontecendo?"
          maxLength="140"
          height="8rem"
          _placeholder={{ color: "#687684" }}
          fontFamily="Open Sans"
          onChange={(e) => {
            setCount(e.target.value.length);
          }}
        />
      </Box>
    </>
  );
};

export default CreatePost;
