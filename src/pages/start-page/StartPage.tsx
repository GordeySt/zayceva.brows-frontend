import { Container, createStyles, makeStyles } from "@material-ui/core";
import { WelcomeCard } from "../../components/start-page/WelcomeCard";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    },
  })
);

export const StartPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <WelcomeCard />
    </Container>
  );
};
