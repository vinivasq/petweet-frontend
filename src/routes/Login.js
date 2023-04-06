import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

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
    <div>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel>email:</FormLabel>
        <Input id="email" name="email" type="text" />
        <FormLabel>senha:</FormLabel>
        <Input id="password" name="password" type="password" />
        <Button type="submit">Login</Button>
      </FormControl>
    </div>
  );
}

export default Login;
