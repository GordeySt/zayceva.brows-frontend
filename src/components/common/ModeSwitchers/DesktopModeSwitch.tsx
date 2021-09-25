import { IconButton } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import makeStyles from "@material-ui/styles/makeStyles";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../common/stores/Store";

const useStyles = makeStyles({
  sunIcon: {
    color: "#f0a910",
  },
});

export const DesktopModeSwitch = observer(() => {
  const classes = useStyles();
  const {
    commonStore: { userThemeSettings, handleSetIsDarkMode },
  } = useStore();

  return (
    <div>
      {userThemeSettings.isDarkMode ? (
        <IconButton onClick={handleSetIsDarkMode}>
          <Brightness3Icon />
        </IconButton>
      ) : (
        <IconButton onClick={handleSetIsDarkMode}>
          <WbSunnyIcon className={classes.sunIcon} />
        </IconButton>
      )}
    </div>
  );
});
