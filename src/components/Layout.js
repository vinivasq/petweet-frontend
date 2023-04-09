import { Outlet } from "react-router-dom";
import AuthStatus from "./AuthStatus";

function Layout() {
  return (
    <>
      <AuthStatus />

      <Outlet />
    </>
  );
}

export default Layout;
