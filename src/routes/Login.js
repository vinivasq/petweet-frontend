import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { FormControl, Input, Box, Stack } from "@chakra-ui/react";
import "../index.css";
import Text from "../components/Text";
import Label from "../components/Label";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const from = location.state?.from?.pathname || "/home";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
  }

  return (
    <>
      <Header />
      <main>
        <Box
          className="wrapper"
          display="flex"
          flexDirection="column"
          gap="2rem"
          paddingTop="2rem"
          paddingBottom="2rem"
        >
          <Text as="h2" fontWeight="600" fontSize="1.5rem">
            Login
          </Text>
          <FormControl
            as="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap="2rem"
          >
            <Stack>
              <Label>E-mail</Label>
              <Input id="email" name="email" type="text" placeholder="E-mail" />
            </Stack>
            <PasswordInput />
            <Button>Entrar</Button>
          </FormControl>
          <Text lineHeight="1.5rem">
            Ainda não possui uma conta? <br />
            <NavLink
              to="/signup"
              style={{ textDecoration: "underline", color: "#00ACC1" }}
            >
              Cadastrar-se
            </NavLink>
          </Text>
        </Box>
      </main>
      <Footer />
    </>
  );
}

export default Login;
