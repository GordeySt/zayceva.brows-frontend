import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MIN_WIDTH } from "../../../common/constants/AdaptiveConstants";

const useStyles = makeStyles((theme: Theme) => ({
  infoSection: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1.5),
    width: "25%",
    height: "25%",
    padding: "0 10px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 8,
    [theme.breakpoints.down(MIN_WIDTH)]: {
      borderRadius: 0,
      display: "none",
    },
  },
  sectionHeader: {
    fontSize: 13,
    color: theme.palette.text.secondary,
    textTransform: "uppercase",
    fontWeight: 500,
    lineHeight: "normal",
    fontFamily: "Google Sans",
    paddingBottom: 0,
    padding: theme.spacing(0, 1.8),
  },
  infoText: {
    padding: theme.spacing(1.8, 2),
    color: theme.palette.text.primary,
  },
}));

export const InfoBox = () => {
  const classes = useStyles();
  return (
    <div className={classes.infoSection}>
      <Typography
        style={{ paddingTop: "10px" }}
        className={classes.sectionHeader}
      >
        Информация
      </Typography>
      <Typography
        className={classes.infoText}
        color="textSecondary"
        variant="body2"
      >
        Здесь находятся те пользователи, которые по той или иной причине
        нарушили правила сообщества. Доступ к приложению для их аккаунтов будет
        заблокирован.
      </Typography>
    </div>
  );
};
