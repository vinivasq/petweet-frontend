import React from "react";
import Text from "./Text";
import ProfilePic from "../assets/images/doggos/userpic.png";
import {
  Box,
  Image,
  ListIcon,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import { SignOut } from "@phosphor-icons/react";

const SignOutLogo = () => {
  return <SignOut size={18} color="#00ACC1" />;
};

const Menu = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="70%"
      height="100vh"
      zIndex="2"
      backgroundColor="white"
    >
      <Image src={ProfilePic} padding="2.5rem" />
      <UnorderedList
        margin={0}
        width="100%"
        listStyleType="none"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="2.5rem"
      >
        <Stack textAlign="center" width="100%">
          <ListItem>
            <Text>Home</Text>
          </ListItem>
          <ListItem>
            <Text>Meu Perfil</Text>
          </ListItem>
        </Stack>
        <ListItem display="flex" alignItems="center" gap="0.5rem">
          <ListIcon as={SignOutLogo} />
          <Text>Sair</Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Menu;
