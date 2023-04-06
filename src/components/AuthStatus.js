import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    console.log("Não logado");
    return null;
  }

  return (
    <p>
      Bem vindo(a) {auth.user?.name}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sair
      </button>
    </p>
  );
}

export default AuthStatus;
