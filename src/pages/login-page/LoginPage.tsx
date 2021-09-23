import { Container } from "@material-ui/core";
import { AdminLoginForm } from "../../components/login-page/AdminLoginForm";
import { UserLoginForm } from "../../components/login-page/UserLoginForm";

export const LoginPage = () => {
  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserLoginForm />
    </Container>
  );
};
