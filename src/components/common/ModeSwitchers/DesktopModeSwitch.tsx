import { createStyles, IconButton, makeStyles } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { observer } from "mobx-react-lite";
import { MAX_TABLET_WIDTH } from "../../../common/constants/adaptiveConstants";
import { useStore } from "../../../common/stores/Store";

const useStyles = makeStyles((theme) =>
  createStyles({
    switchContainer: {
      [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
        display: "none",
      },
    },
    sunIcon: {
      color: "#f0a910",
    },
  })
);

export const DesktopModeSwitch = observer(() => {
  const classes = useStyles();
  const {
    commonStore: { userThemeSettings, handleSetIsDarkMode },
  } = useStore();

  return (
    <div className={classes.switchContainer}>
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
