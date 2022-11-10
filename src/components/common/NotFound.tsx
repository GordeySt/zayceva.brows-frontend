import { Typography, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { DEFAULT_ROUTE } from "../../common/constants/routesConstants";
import NotFoundSVG from "./svg/NotFound";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 600,
    width: "100%",
    flexDirection: "column",
  },
  title: {
    fontFamily: "Google Sans",
    fontWeight: 800,
    fontSize: 28,
  },
  text: {
    fontFamily: "Google Sans",
    fontSize: 16,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      textDecoration: "underline",
      color: theme.palette.primary.light,
    },
  },
  svg: {
    marginTop: theme.spacing(4),
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& svg": { maxWidth: 256, width: "100%", height: "100%" },
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>four-o-four</Typography>
      <Typography className={classes.text}>Page not found.</Typography>
      <Typography className={classes.text}>
        Maybe we should go{" "}
        <Link to={DEFAULT_ROUTE} className={classes.link}>
          home
        </Link>
        ?
      </Typography>
      <NotFoundSVG className={classes.svg} />
    </div>
  );
};

export default NotFound;
