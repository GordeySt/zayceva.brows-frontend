export type CustomTheme = {
  name: string;
  type: string;
  palette: {
    type: string;
    primary: {
      main: string;
      light: string;
      dark: string;
    };
    background: {
      paper: string;
      default: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  };
};

export type UserSettings = {
  themeType: string;
};
