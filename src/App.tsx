import { Box } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { observer } from "mobx-react-lite";
import { useStore } from "./common/stores/Store";
import { StartPage } from "./pages/start-page/StartPage";
import { useEffect } from "react";
import { IUserThemeSettings } from "./common/stores/CommonStore";
import { USER_THEME_SETTINGS } from "./common/constants/localStorageConstants";

const App = observer(() => {
  const {
    commonStore: { userThemeSettings, setUserThemeSettings },
  } = useStore();

  const muiTheme = createTheme({
    palette: {
      type: userThemeSettings.isDarkMode ? "dark" : "light",
      primary: {
        main: userThemeSettings.isDarkMode ? blue["A100"] : blue["A400"],
      },
    },
  });

  useEffect(() => {
    const userThemeSettings: IUserThemeSettings = JSON.parse(
      localStorage.getItem(USER_THEME_SETTINGS)!
    );

    if (userThemeSettings) {
      setUserThemeSettings(userThemeSettings);
    }
  }, [setUserThemeSettings]);

  return (
    <ThemeProvider theme={muiTheme}>
      <Box
        style={{
          backgroundColor: userThemeSettings.isDarkMode ? "#0e0e0e" : "#f5f5f5",
        }}
      >
        <StartPage />
      </Box>
    </ThemeProvider>
  );
});

export default App;
