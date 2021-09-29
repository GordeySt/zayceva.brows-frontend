import { Container } from "@mui/material";
import UserLoginForm from "../../components/login-page/UserLoginForm";

const LoginPage = () => {
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

export default LoginPage;
