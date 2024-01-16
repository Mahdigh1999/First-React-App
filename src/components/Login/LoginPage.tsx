import { Theme } from "../../App";
import { useContext } from "react";
import LoginForm from "./LoginForm";
import "../../styles/loginForm.css";
function LoginPage() {
  const { isDark } = useContext(Theme);
  return (
    <div
      className={
        isDark
          ? "flex  justify-center h-[100vh] " + "loginFormBgDark"
          : "flex  justify-center h-[100vh] " + "loginFormBgLight"
      }
    >
      <LoginForm />
    </div>
  );
}

export default LoginPage;
