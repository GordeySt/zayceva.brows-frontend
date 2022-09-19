import { Card, Grid } from "@mui/material";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  MAX_TABLET_WIDTH,
  MIN_WIDTH,
} from "../../common/constants/adaptiveConstants";

const useStyles = makeStyles((theme: Theme) => ({
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
    backgroundColor: (props: IMUIStyleProps) => props.circleColor,
  },
  text: {
    marginTop: "10px",
  },
}));

interface IProps {
  circleColor: string;
  hashtag: string;
  text: string;
}

interface IMUIStyleProps {
  circleColor: string;
}

const TipsCard = ({ circleColor, hashtag, text }: IProps) => {
  const classes = useStyles({ circleColor });

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.rootCard}>
        <div>
          <i className={classes.circle}></i>
          {hashtag}
        </div>
        <div className={classes.text}>{text}</div>
      </Card>
    </Grid>
  );
};

export default TipsCard;
