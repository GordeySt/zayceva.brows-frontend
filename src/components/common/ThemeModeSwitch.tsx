import {
  createStyles,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { observer } from "mobx-react-lite";
import { useStore } from "../../common/stores/Store";

const useStyles = makeStyles(() =>
  createStyles({
    switchContainer: {
      position: "absolute",
      right: "5px",
      top: "5px",
    },
    sunIcon: {
      color: "#f0a910",
    },
  })
);

export const ThemeModeSwitch = observer(() => {
  const classes = useStyles();
  const {
    commonStore: { userThemeSettings, handleSetIsDarkMode },
  } = useStore();

  return (
    <Typography className={classes.switchContainer} component="div">
      {userThemeSettings.isDarkMode ? (
        <IconButton onClick={handleSetIsDarkMode}>
          <Brightness3Icon />
        </IconButton>
      ) : (
        <IconButton onClick={handleSetIsDarkMode}>
          <WbSunnyIcon className={classes.sunIcon} />
        </IconButton>
      )}
    </Typography>
  );
});
