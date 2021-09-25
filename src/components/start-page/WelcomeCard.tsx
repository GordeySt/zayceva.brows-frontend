import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { MAX_TABLET_WIDTH } from "../../common/constants/adaptiveConstants";
import { DesktopModeSwitch } from "../common/modeSwitchers/DesktopModeSwitch";

const useStyles = makeStyles((theme: Theme) => ({
  rootCard: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "500px",
    height: "250px",
    position: "relative",
  },
  logo: {
    position: "absolute",
    left: "15px",
    top: "15px",
    fontWeight: 600,

    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      top: "10px",
    },
  },
  switchContainer: {
    position: "absolute",
    right: "5px",
    top: "5px",
  },
  moto: {
    marginTop: "5px",
  },
  roleTip: {
    marginTop: "20px",
  },
  cardActions: {
    marginTop: "-10px",
  },
  roleButton: {
    width: "121px",
  },
}));

export const WelcomeCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.rootCard}>
      <CardContent>
        <div className={classes.logo}>zayceva.brows</div>
        <Typography className={classes.switchContainer} component="div">
          <DesktopModeSwitch />
        </Typography>
        <Typography className={classes.moto} variant="h5" component="div">
          Лиза для своих
        </Typography>
        <Typography className={classes.roleTip}>Выберите свою роль</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          className={classes.roleButton}
          variant="contained"
          color="primary"
        >
          Клиент
        </Button>
        <Button
          className={classes.roleButton}
          variant="contained"
          color="primary"
        >
          Модератор
        </Button>
      </CardActions>
    </Card>
  );
};
