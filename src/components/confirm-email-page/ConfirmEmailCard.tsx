import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import {
  MAX_TABLET_WIDTH,
  MIN_WIDTH,
} from "../../common/constants/AdaptiveConstants";

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
    marginBottom: "2.3rem",
    textAlign: "center",
  },
  cardAdditionalInfo: {
    width: "90%",
    margin: "0 auto",
    textAlign: "center",
    marginTop: "0.2rem",
  },
}));

const ConfirmEmailCard = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Card className={classes.rootCard}>
      <CardMedia component="img" image="images/email.jpg" alt="confirm email" />
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
          {t`pages.confirmEmailPage.cardMainInfo`}
        </Typography>
        <Typography
          component="div"
          variant="body2"
          color="text.secondary"
          className={classes.cardAdditionalInfo}
        >
          {t`pages.confirmEmailPage.cardAdditionalInfo1`}
        </Typography>
        <Typography
          component="div"
          variant="body2"
          color="text.secondary"
          className={classes.cardAdditionalInfo}
        >
          {t`pages.confirmEmailPage.cardAdditionalInfo2`}{" "}
          <Link underline="none" href="hello@x.com">
            hello@x.com
          </Link>
        </Typography>
        <Typography
          component="div"
          variant="body2"
          color="text.secondary"
          className={classes.cardAdditionalInfo}
        >
          {t`pages.confirmEmailPage.cardAdditionalInfo3`}{" "}
          <Link underline="none" href="hello@x.com">
            {t`pages.confirmEmailPage.cardAdditionalInfo4`}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ConfirmEmailCard;
