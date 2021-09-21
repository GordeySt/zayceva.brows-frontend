import { IconButton, Typography } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { observer } from "mobx-react-lite";
import { useStore } from "../../common/stores/Store";

export const ThemeModeSwitch = observer(() => {
  const {
    commonStore: { userThemeSettings, handleSetIsDarkMode },
  } = useStore();

  return (
    <Typography
      style={{ position: "absolute", right: "5px", top: "5px" }}
      component="div"
    >
      {userThemeSettings.isDarkMode ? (
        <IconButton onClick={handleSetIsDarkMode}>
          <Brightness3Icon />
        </IconButton>
      ) : (
        <IconButton onClick={handleSetIsDarkMode}>
          <WbSunnyIcon style={{ color: "#f0a910" }} />
        </IconButton>
      )}
    </Typography>
  );
});
