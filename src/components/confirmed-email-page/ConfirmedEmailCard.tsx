import { Card, CardMedia, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { MAX_TABLET_WIDTH, MIN_WIDTH, } from "../../common/constants/adaptiveConstants";
import ConfirmedEmailCardInfo from "./ConfirmedEmailCardInfo";
import { ConfirmationStatus } from "../../pages/confirmed-email-page/utils/confirmationStatus";

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

interface IProps {
  status: ConfirmationStatus;
  email: string;
}

const ConfirmedEmailCard = ({ status, email }: IProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Card className={classes.rootCard}>
      <CardMedia
        component="img"
        image="images/confirmed.png"
        alt="confirm email"
      />
      <ConfirmedEmailCardInfo
        status={status}
        t={t}
        classes={classes}
        email={email}
      />
    </Card>
  );
};

export default ConfirmedEmailCard;
