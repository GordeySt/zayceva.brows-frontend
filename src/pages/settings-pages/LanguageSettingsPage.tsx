import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { MAX_TABLET_WIDTH } from "../../common/constants/adaptiveConstants";
import LanguageSettingsCard from "../../components/settings-pages/language-setting-page/LanguageSettingsCard";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "85%",
    margin: "0 auto",

    [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
      width: "100%",
    },
  }
}));

const LanguageSettingsPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LanguageSettingsCard />
    </div>
  );
};

export default LanguageSettingsPage;
