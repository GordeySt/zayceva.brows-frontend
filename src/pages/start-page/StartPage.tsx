import { Container } from "@material-ui/core";
import { WelcomeCard } from "../../components/start-page/WelcomeCard";

export const StartPage = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <WelcomeCard />
    </Container>
  );
};
