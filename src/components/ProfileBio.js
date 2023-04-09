import { Box, Image } from "@chakra-ui/react";
import ProfilePic from "../assets/images/doggos/userpic.png";
import "../index.css";
import React from "react";
import Text from "./Text";

const ProfileBio = () => {
  return (
    <Box className="wrapper wrapper-top" boxShadow="0px 1px 3px #00000040">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        gap="1rem"
        padding="1rem 0"
      >
        <Image
          src={ProfilePic}
          alt="foto de perfil"
          boxSize={73}
          boxShadow="0px 1px 3px #0000006b"
          borderRadius="full"
        />
        <Box width="">
          <Text as="h1" fontSize="1.375rem" fontWeight="700">
            Bill Bulldog
          </Text>
          <Text letterSpacing="-0.3px" color="#687684">
            @billthebulldog2022
          </Text>
        </Box>
      </Box>
      <Text
        width="min"
        padding="0.175rem 0.5rem"
        borderBottom="3px solid #00ACC1"
      >
        Petposts
      </Text>
    </Box>
  );
};

export default ProfileBio;
