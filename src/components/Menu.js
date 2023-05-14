import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Icon,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { SignOut } from "@phosphor-icons/react";
import React from "react";
import { useAuth } from "../context/auth-context";
import Text from "./Text";
import Button from "./Button";
import MenuLink from "./MenuLink";
import ProfilePic from "../assets/images/doggos/userpic.png";

const SignOutLogo = () => {
  return <SignOut size={18} color="#00ACC1" />;
};

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useAuth();

  return (
    <Box
      display="flex"
      position="fixed"
      left="0"
      flexDirection="column"
      alignItems="center"
      width="70%"
      height="100vh"
      backgroundColor="white"
    >
      <Image
        src={ProfilePic}
        margin="2.5rem"
        boxShadow="0px 1px 3px #0000006b"
        borderRadius="full"
      />
      <nav style={{ width: "100%" }}>
        <Box
          margin={0}
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="2.5rem"
        >
          <Stack textAlign="center" width="100%">
            <MenuLink to="/home">
              <Text>Home</Text>
            </MenuLink>
            <MenuLink to={`/profile?${auth.user.username}`}>
              <Text>Meu Perfil</Text>
            </MenuLink>
          </Stack>
          <MenuLink
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="0.5rem"
            onClick={onOpen}
          >
            <Icon as={SignOutLogo} />
            <Text>Sair</Text>
          </MenuLink>
        </Box>
      </nav>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay />
        <AlertDialogContent
          padding="1rem"
          display="flex"
          flexDirection="column"
          gap="1rem"
          maxWidth="95%"
        >
          <AlertDialogHeader padding={0}>
            <Text as="h2" fontWeight="600" fontSize="1.5rem">
              Sair desta conta?
            </Text>
          </AlertDialogHeader>
          <AlertDialogBody padding={0}>
            <Text>Deseja realmente sair desta conta?</Text>
          </AlertDialogBody>
          <AlertDialogFooter
            padding={0}
            marginTop="1rem"
            display="flex"
            justifyContent="space-between"
            gap=".75rem"
          >
            <Button
              borderRadius="0.625rem"
              variant="outline"
              width="50%"
              onClick={() => {
                auth.signout();
              }}
            >
              Sair
            </Button>
            <Button borderRadius="0.625rem" onClick={onClose} width="50%">
              Cancelar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

export default Menu;
