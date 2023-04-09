import { Outlet } from "react-router-dom";
import AuthStatus from "./AuthStatus";

function Layout() {
  return (
    <div>
      <AuthStatus />

      <Outlet />
    </div>
  );
}

export default Layout;
