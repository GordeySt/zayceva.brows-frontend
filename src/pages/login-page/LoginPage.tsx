import { Container } from "@material-ui/core";
import { UserLoginForm } from "../../components/login-page/UserLoginForm";

export const LoginPage = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserLoginForm />
    </Container>
  );
};
