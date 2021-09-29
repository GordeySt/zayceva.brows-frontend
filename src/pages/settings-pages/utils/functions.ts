import {
  BACKGROUND_COLORS_DEFAULT,
  BACKGROUND_COLORS_PAPER,
  PaletteType,
  THEME_NAMES,
  THEME_PRIMARY_COLORS,
  THEME_TEXT_COLORS,
  THEME_TYPES,
} from "../../../common/constants/ThemeConstants";
import { CustomTheme } from "../../../common/types/UserSettings";

export const makeCustomThemeFromThemeType = (
  type: PaletteType
): CustomTheme => ({
  name: THEME_NAMES[type],
  type,
  palette: {
    type: THEME_TYPES[type],
    primary: THEME_PRIMARY_COLORS[type],
    background: {
      paper: BACKGROUND_COLORS_PAPER[type],
      default: BACKGROUND_COLORS_DEFAULT[type],
    },
    text: THEME_TEXT_COLORS[type],
  },
});
