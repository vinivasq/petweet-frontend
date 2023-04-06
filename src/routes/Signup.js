import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import Text from "../components/Text";
import Button from "../components/Button";
import { Box, FormControl, Input, Stack } from "@chakra-ui/react";
import Label from "../components/Label";
import PasswordInput from "../components/PasswordInput";
import { useAuth } from "../context/auth-context";

const Signup = () => {
  const { signup, signin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    await signup({ name, email, username, password });
    await signin({ email, password });

    navigate("/home");
  };

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
