import { Container, Grid } from "@mui/material";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  MAX_TABLET_WIDTH,
  MIN_WIDTH,
} from "../../common/constants/adaptiveConstants";
import TipsCard from "../../components/tips-page/TipsCard";
import { tips } from "./tips";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginBottom: theme.spacing(10),
  },
  rootCard: {
    padding: "20px",
    borderRadius: "10px",
    minHeight: "200px",
    overflow: "hidden",

    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      width: "100%",
    },
    [theme.breakpoints.down(MIN_WIDTH)]: {
      marginTop: "10px",
    },
  },
  circle: {
    display: "inline-block",
    marginRight: "10px",
    height: "10px",
    width: "10px",
    borderRadius: "30px",
  },
  text: {
    marginTop: "10px",
  },
}));

const TipsPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        {tips.map((tip, idx) => (
          <TipsCard
            key={idx}
            circleColor={tip.circleColor}
            hashtag={tip.hashtag}
            text={tip.text}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default TipsPage;
