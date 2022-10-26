import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Slide,
  Snackbar,
  Typography,
} from "@mui/material";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import {
  MAX_TABLET_WIDTH,
  MIN_WIDTH,
} from "../../common/constants/adaptiveConstants";
import { authApi } from "../../common/api/authApi";
import { useQuery } from "../../common/utils/routeUtils";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import AlertNotification from "../common/AlertNotification";

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
  sendAgainBtn: {
    margin: "0 auto",
    display: "flex",
    marginTop: "5px",
  },
}));

const ConfirmEmailCard = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const email = useQuery().get("email") as string;
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleConfirmEmailResend = async () => {
    try {
      setLoading(true);
      await authApi.resendEmailConfirmation(email);
      setShowNotification(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <>
      <Card className={classes.rootCard}>
        <CardMedia
          component="img"
          image="images/email.jpg"
          alt="confirm email"
        />
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            className={classes.cardTitle}
          >
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
            <Link underline="none">zayceva.brows@gmail.com</Link>
          </Typography>
          <Typography
            component="div"
            variant="body2"
            color="text.secondary"
            className={classes.cardAdditionalInfo}
          >
            {t`pages.confirmEmailPage.cardAdditionalInfo3`}{" "}
          </Typography>
          <LoadingButton
            className={classes.sendAgainBtn}
            variant="contained"
            onClick={handleConfirmEmailResend}
            loading={loading}
          >
            {t`pages.confirmEmailPage.cardAdditionalInfo4`}
          </LoadingButton>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={showNotification}
        TransitionComponent={Slide}
        onClose={handleNotificationClose}
        key={"bottom" + "right"}
        autoHideDuration={4000}
      >
        <AlertNotification
          onClose={handleNotificationClose}
          severity="info"
          sx={{ width: "100%" }}
        >
          Email has been sent again
        </AlertNotification>
      </Snackbar>
    </>
  );
};

export default ConfirmEmailCard;
