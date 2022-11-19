import { createTheme, ThemeProvider } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../common/stores/Store";
import { useEffect, useLayoutEffect, useState } from "react";
import React from "react";
import AppLayout from "./AppLayout";
import { UserSettings } from "../../common/types/UserSettings";
import Router from "./Router";
import { getUserSettingsFromLocalStorage } from "../../common/utils/localStorageUtils";
import { useTranslation } from "react-i18next";
import BouncingDotsLoader from "./BouncingDotsLoader";

const App = observer(() => {
  const {
    userSettingsStore: { setUserSettings, storeTheme, userSettings },
    authStore: { getCurrentUser, loadingUser },
    commonStore: { token },
  } = useStore();
  const { i18n } = useTranslation();
  const [_, setLoading] = useState(false);

  useLayoutEffect(() => {
    const userSettingsFromStorage: UserSettings =
      getUserSettingsFromLocalStorage();

    if (userSettingsFromStorage) {
      setUserSettings(userSettingsFromStorage);
      i18n
        .changeLanguage(userSettingsFromStorage.language)
        .then((t) => t("key"));
    } else {
      i18n.changeLanguage(userSettings.language).then((t) => t("key"));
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [setUserSettings, i18n, userSettings.language]);

  useEffect(() => {
    if (token) {
      getCurrentUser();
    }
  }, [getCurrentUser, token]);

  const muiTheme = createTheme(storeTheme);

  if (loadingUser) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <BouncingDotsLoader />
      </div>
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
