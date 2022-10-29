import {
  Button,
  CardActions,
  CardContent,
  ClassNameMap,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { LOGIN_ROUTE } from "../../common/constants/routesConstants";

interface IProps {
  t: any;
  classes: ClassNameMap<"cardTitle" | "cardMainInfo">;
}

const ConfirmSuccessInfo = ({ t, classes }: IProps) => {
  const history = useHistory();

  return (
    <>
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
          {t`pages.confirmedEmailPage.cardInfoSuccess`}
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
    </>
  );
};

export default ConfirmSuccessInfo;
