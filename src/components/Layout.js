import { Outlet } from "react-router-dom";
import AuthStatus from "./AuthStatus";
import { Box } from "@chakra-ui/react";

function Layout() {
  return (
    <Box padding="3.75rem 1rem 0 1rem">
      <AuthStatus />

      <Outlet />
    </Box>
  );
}

export default Layout;
