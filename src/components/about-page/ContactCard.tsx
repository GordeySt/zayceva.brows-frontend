import { Grid, Paper, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useCardStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 8,
    padding: theme.spacing(1.5, 2),
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 12%), 0px 2px 2px 0px rgb(0 0 0 / 7%), 0px 1px 5px 0px rgb(0 0 0 / 4%)",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    marginLeft: theme.spacing(2),
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: 16,
    marginTop: theme.spacing(1),
  },
}));

const ContactCard: React.FC<{
  to: string;
  title: string;
  iconSrc: string;
  subtitle?: string;
  medium?: boolean;
  small?: boolean;
}> = ({ to, title, iconSrc, subtitle, medium, small }) => {
  const classes = useCardStyles();
  const xs = medium ? 8 : small ? 4 : 12;
  const md = medium ? 4 : small ? 2 : 6;

  return (
    <Grid item xs={xs} md={md}>
      <a className={classes.link} href={to} target="_blank" rel="noreferrer">
        <Paper className={classes.root} elevation={2}>
          <div className={classes.row}>
            <img className={classes.icon} src={iconSrc} alt={title} />
            <Typography className={classes.title}>{title}</Typography>
          </div>
          {subtitle && (
            <Typography className={classes.subtitle}>{subtitle}</Typography>
          )}
        </Paper>
      </a>
    </Grid>
  );
};

export default ContactCard;