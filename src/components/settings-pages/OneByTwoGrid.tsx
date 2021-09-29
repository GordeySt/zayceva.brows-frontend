import { Grid, Theme, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PaletteItem from "./PaletteItem";

const useStyles = makeStyles((theme: Theme) => ({
  oneByTwoGrid: {
    display: "none",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
}));

const OneByTwoGrid = ({ component: Item = PaletteItem }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.oneByTwoGrid}>
      <Grid item xs={6}>
        <Grid container direction="column">
          <Item
            width={12}
            color={theme.palette.primary.main}
            text="main"
            height={0.5}
            withSymbol
          />
          <Grid container direction="row">
            <Item
              width={6}
              height={1}
              color={theme.palette.primary.light}
              text="light"
            />
            <Item
              width={6}
              height={1}
              color={theme.palette.primary.dark}
              text="dark"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column">
          <Item
            width={12}
            height={0.5}
            color={theme.palette.background.paper}
            text="paper"
          />
          <Grid container direction="row">
            <Item
              width={6}
              height={1}
              color={theme.palette.background.default}
              text="default"
            />
            <Item
              width={6}
              height={1}
              color={theme.palette.text.primary}
              text="text"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OneByTwoGrid;
