import React from "react";
import Text from "./Text";
import ProfilePic from "../assets/images/doggos/userpic.png";
import {
  Box,
  Image,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { SignOut } from "@phosphor-icons/react";
import Button from "./Button";

const SignOutLogo = () => {
  return <SignOut size={18} color="#00ACC1" />;
};

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <ListItem
          display="flex"
          alignItems="center"
          gap="0.5rem"
          onClick={onOpen}
        >
          <ListIcon as={SignOutLogo} />
          <Text>Sair</Text>
        </ListItem>
      </UnorderedList>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          padding="1rem"
          display="flex"
          flexDirection="column"
          gap="1rem"
          maxWidth="95%"
        >
          <ModalHeader padding={0}>
            <Text as="h2" fontWeight="600" fontSize="1.5rem">
              Sair desta conta?
            </Text>
          </ModalHeader>
          <ModalBody padding={0}>
            <Text>Deseja realmente sair desta conta?</Text>
          </ModalBody>
          <ModalFooter
            padding={0}
            marginTop="1rem"
            display="flex"
            justifyContent="space-between"
            gap=".75rem"
          >
            <Button borderRadius="0.625rem" width="9.125rem" variant="outline">
              Sair
            </Button>
            <Button onClick={onClose} borderRadius="0.625rem" width="9.125rem">
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Menu;
