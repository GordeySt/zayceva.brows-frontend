import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ClassNameMap,
  Skeleton,
  Typography,
} from "@mui/material";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { authApi } from "../../common/api/authApi";
import {
  MAX_TABLET_WIDTH,
  MIN_WIDTH,
} from "../../common/constants/adaptiveConstants";
import { LOGIN_ROUTE } from "../../common/constants/routesConstants";
import { useQuery } from "../../common/utils/routeUtils";
import ConfirmFailInfo from "./ConfirmFailInfo";
import ConfirmSuccessInfo from "./ConfirmSuccessInfo";
import ConfirmVerifyingInfo from "./ConfirmVerifyingInfo";

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

enum Status {
  Verifying,
  Success,
  Failed,
}

interface IProps {
  status: Status;
  t: any;
  classes: ClassNameMap<"cardTitle" | "cardMainInfo">;
  email: string;
}

const ConfirmedEmailCardInfo = ({ status, t, classes, email }: IProps) => {
  switch (status) {
    case Status.Verifying:
      return <ConfirmVerifyingInfo />;
    case Status.Success:
      return <ConfirmSuccessInfo t={t} classes={classes} />;
    case Status.Failed:
      return <ConfirmFailInfo t={t} classes={classes} email={email} />;
  }
};

const ConfirmedEmailCard = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const token = useQuery().get("token") as string;
  const email = useQuery().get("email") as string;
  const [status, setStatus] = useState(Status.Verifying);

  useEffect(() => {
    authApi
      .confirmEmail({ token, email })
      .then(() => setStatus(Status.Success))
      .catch((error) => {
        console.log(error);
        setStatus(Status.Failed);
      });
  });

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
