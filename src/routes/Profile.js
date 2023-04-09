import React from "react";
import Navbar from "../components/Navbar";
import Text from "../components/Text";
import ProfilePic from "../assets/images/doggos/userpic.png";
import { Box, Image } from "@chakra-ui/react";

const Profile = () => {
  return (
    <>
      <Navbar />
      <header>
        <Box>
          <Image src={ProfilePic} alt="foto de perfil" boxSize={73} />
          <Box>
            <Text as="h1">Bill Bulldog</Text>
            <Text>@billthebulldog2022</Text>
          </Box>
        </Box>
      </header>
    </>
  );
};

export default Profile;
