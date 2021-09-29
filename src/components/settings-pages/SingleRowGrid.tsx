import { Grid, useTheme, Theme } from "@mui/material";
import { PaletteItem } from "./PaletteItem";
import { makeStyles } from "@mui/styles";
import { MAX_TABLET_WIDTH } from "../../common/constants/adaptiveConstants";

const useStyles = makeStyles((theme: Theme) => ({
  singleRowGrid: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  leftItem: {
    [theme.breakpoints.up(MAX_TABLET_WIDTH)]: {
      borderBottomLeftRadius: 8,
    },
  },
  rightItem: {
    [theme.breakpoints.up(MAX_TABLET_WIDTH)]: {
      borderBottomRightRadius: 8,
    },
  },
}));

export const SingleRowGrid = ({ component: Item = PaletteItem }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      container
      direction="row"
      className={classes.singleRowGrid}
    >
      <Item
        width={2}
        height={1}
        color={theme.palette.primary.light}
        text="light"
        className={classes.leftItem}
      />
      <Item
        width={2}
        height={1}
        color={theme.palette.primary.main}
        text="main"
        withSymbol
      />
      <Item
        width={2}
        height={1}
        color={theme.palette.primary.dark}
        text="dark"
      />
      <Item
        width={2}
        height={1}
        color={theme.palette.background.default}
        text="default"
      />
      <Item
        width={2}
        height={1}
        color={theme.palette.background.paper}
        text="paper"
      />
      <Item
        width={2}
        height={1}
        color={theme.palette.text.primary}
        text="text"
        className={classes.rightItem}
      />
    </Grid>
  );
};
