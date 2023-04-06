import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import Text from "../components/Text";
import Button from "../components/Button";
import { Box, FormControl, Input, Stack } from "@chakra-ui/react";
import Label from "../components/Label";
import PasswordInput from "../components/PasswordInput";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submit");
};

const Signup = () => {
  return (
    <>
      <Header />
      <main>
        <Box padding="2rem" display="flex" flexDirection="column" gap="2rem">
          <Text as="h2" fontWeight="600" fontSize="1.5rem">
            Cadastro
          </Text>
          <FormControl
            as="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap="2rem"
          >
            <Stack>
              <Label>Nome</Label>
              <Input id="name" name="name" type="text" placeholder="Nome" />
            </Stack>
            <Stack>
              <Label>E-mail</Label>
              <Input id="email" name="email" type="text" placeholder="E-mail" />
            </Stack>
            <Stack>
              <Label>Nome de usuário</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Ex.: @billbulldog"
              />
            </Stack>
            <PasswordInput helper="Deve conter no mínimo uma letra maiúscula e um número." />
            <Button>Entrar</Button>
          </FormControl>
          <Text lineHeight="1.5rem">
            Já possui cadastro? <br />
            <NavLink
              to="/login"
              style={{ textDecoration: "underline", color: "#00ACC1" }}
            >
              Faça login
            </NavLink>
          </Text>
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
