import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { ThemeModeSwitch } from "../common/ThemeModeSwitch";

const useStyles = makeStyles(() =>
  createStyles({
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
  })
);

export const WelcomeCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.rootCard}>
      <CardContent>
        <div className={classes.logo}>zayceva.brows</div>
        <ThemeModeSwitch />
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
