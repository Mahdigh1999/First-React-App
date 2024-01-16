import { Theme } from "../../App";
import { useContext } from "react";
import "../../styles/loginForm.css";
import Register from "./Register";
function RegisterPage() {
  const { isDark } = useContext(Theme);
  return (
    <div
      className={
        isDark
          ? "flex  justify-center h-[100vh] " + "loginFormBgDark"
          : "flex  justify-center h-[100vh] " + "loginFormBgLight"
      }
    >
      <Register />
    </div>
  );
}

export default RegisterPage;
