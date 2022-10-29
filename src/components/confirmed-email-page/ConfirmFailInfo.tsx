import { LoadingButton } from "@mui/lab";
import {
  CardActions,
  CardContent,
  ClassNameMap,
  Slide,
  Snackbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { authApi } from "../../common/api/authApi";
import AlertNotification from "../common/AlertNotification";

interface IProps {
  t: any;
  classes: ClassNameMap<"cardTitle" | "cardMainInfo">;
  email: string;
}

const ConfirmFailInfo = ({ t, classes, email }: IProps) => {
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
      <CardContent>
        <Typography variant="h5" component="div" className={classes.cardTitle}>
          Oops!
        </Typography>
        <Typography
          component="div"
          variant="body2"
          color="text.secondary"
          className={classes.cardMainInfo}
        >
          {t`pages.confirmedEmailPage.cardInfoFail`}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton
          sx={{ display: "flex", margin: "0 auto" }}
          variant="contained"
          onClick={handleConfirmEmailResend}
          loading={loading}
        >
          {t`pages.confirmEmailPage.cardAdditionalInfo4`}
        </LoadingButton>
      </CardActions>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={showNotification}
        TransitionComponent={Slide}
        onClose={handleNotificationClose}
        key="bottom right"
        autoHideDuration={4000}
      >
        <AlertNotification
          onClose={handleNotificationClose}
          severity="info"
          sx={{ width: "100%" }}
        >
          {t`pages.confirmEmailPage.emailSentAgainNotification`}
        </AlertNotification>
      </Snackbar>
    </>
  );
};

export default ConfirmFailInfo;
