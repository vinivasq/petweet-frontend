import { Box, Image, Textarea } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../context/auth-context";
import { createPost } from "../services/post";
import Text from "../components/Text";
import Button from "../components/Button";
import ProfilePic from "../assets/images/doggos/userpic.png";
import { usePost } from "../context/post-context";

const CreatePost = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { getFirstPosts } = usePost();
  const [count, setCount] = useState(0);
  const from = location.state?.from;
  let content = document.getElementById("content")?.value;

  const handlePetweet = async (data) => {
    try {
      await createPost(data);
      content = "";
      getFirstPosts();
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        boxShadow="0px 1px 3px #00000020"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="1rem"
      >
        <Text
          fontWeight="300"
          fontSize="0.75rem"
          color="#424242"
          onClick={() => {
            navigate(from, { replace: true });
          }}
        >
          Cancelar
        </Text>
        <Box display="flex" alignItems="center" gap="0.875rem">
          <Text color="#828282" fontSize="0.875rem">
            {count}/140
          </Text>
          <Button
            borderRadius="0.625rem"
            onClick={() => {
              handlePetweet({ userId: Number(user.id), content });
            }}
          >
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
          id="content"
          autoFocus={true}
          border="none"
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
