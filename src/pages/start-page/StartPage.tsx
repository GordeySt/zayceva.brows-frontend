import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { WelcomeCard } from "../../components/start-page/WelcomeCard";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
});

export const StartPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <WelcomeCard />
    </Container>
  );
};
