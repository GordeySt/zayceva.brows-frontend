import { createTheme, ThemeProvider } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../common/stores/Store";
import { useEffect, useState } from "react";
import React from "react";
import AppLayout from "./AppLayout";
import { UserSettings } from "../../common/types/UserSettings";
import Router from "./Router";
import { getUserSettingsFromLocalStorage } from "../../common/utils/localStorageUtils";

const App = observer(() => {
  const {
    commonStore: { setUserSettings, storeTheme, userSettings },
  } = useStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userSettings: UserSettings = getUserSettingsFromLocalStorage();

    if (userSettings) {
      setUserSettings(userSettings);
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [setUserSettings]);

  const muiTheme = createTheme(storeTheme);

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor:
            userSettings.themeType === "dark" ? "#0e0e0e" : "#f5f5f5",
        }}
      ></div>
    );
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <AppLayout>
        <Router />
      </AppLayout>
    </ThemeProvider>
  );
});

export default React.memo(App);
