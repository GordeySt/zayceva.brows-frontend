import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import {
  MAX_TABLET_WIDTH,
  MIN_WIDTH,
} from "../../common/constants/adaptiveConstants";
import { LOGIN_ROUTE } from "../../common/constants/routesConstants";

const useStyles = makeStyles((theme: Theme) => ({
  rootCard: {
    maxWidth: 600,

    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      width: "100%",
      borderRadius: 0,
    },
    [theme.breakpoints.down(MIN_WIDTH)]: {
      marginTop: "10px",
    },
  },
  cardTitle: {
    textAlign: "center",
    margin: "20px 0",
  },
  cardMainInfo: {
    width: "90%",
    margin: "0 auto",
    textAlign: "center",
  },
}));

const ConfirmedEmailCard = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <Card className={classes.rootCard}>
      <CardMedia
        component="img"
        image="images/confirmed.png"
        alt="confirm email"
      />
      <CardContent>
        <Typography variant="h5" component="div" className={classes.cardTitle}>
          {t`pages.confirmEmailPage.cardTitle`}
        </Typography>
        <Typography
          component="div"
          variant="body2"
          color="text.secondary"
          className={classes.cardMainInfo}
        >
          {t`pages.confirmedEmailPage.cardInfo`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => history.push(LOGIN_ROUTE)}
          sx={{ margin: "0 auto", width: "50%", marginBottom: "10px" }}
          size="small"
          color="primary"
          variant="contained"
        >
          {t`pages.signInPage.sectionTitle`}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ConfirmedEmailCard;
