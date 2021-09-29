import {
  ButtonBase,
  Grid,
  GridSize,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  gridItem: {
    position: "relative",
    alignItems: "baseline",
    justifyContent: "start",
    width: "100%",
    "&::before": {
      content: '""',
      paddingBottom: (p: number) => p * 100 + "%",
    },
  },
  floatText: {
    position: "absolute",
    marginTop: 4,
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 700,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    maxWidth: "calc(100% - " + theme.spacing(2) + ")",
  },
  floatSubtext: {
    position: "absolute",
    paddingRight: "15px",
    marginTop: 22,
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 500,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    opacity: 0.8,
    maxWidth: "100%",
  },
  paletteSymbolContainer: {
    height: 30,
    left: "50%",
    position: "absolute",
    top: "50%",
    width: 30,
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: 700,
    background: theme.palette.getContrastText(theme.palette.primary.main),
    color: theme.palette.primary.main,
    borderRadius: "50%",
  },
}));

export const PaletteItem = ({
  width,
  color,
  text,
  withSymbol,
  height = 1,
  className = "",
}: {
  width: number;
  color: string;
  text: string;
  withSymbol?: boolean;
  height?: number;
  className?: string;
}) => {
  const theme = useTheme();
  const classes = useStyles(height);

  return (
    <Grid
      item
      component={ButtonBase}
      xs={width as boolean | GridSize}
      className={classes.gridItem + " " + className}
      style={{
        background: color,
        color: theme.palette.getContrastText(color),
      }}
    >
      <Typography className={classes.floatText}>{text}</Typography>
      <Typography className={classes.floatSubtext}>{color}</Typography>
      {withSymbol && <span className={classes.paletteSymbolContainer}>P</span>}
    </Grid>
  );
};
