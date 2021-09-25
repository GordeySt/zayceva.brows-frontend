import { Button, Card, Grid, TextField, Typography } from "@material-ui/core";
import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles((theme: Theme) => ({
  rootCard: {
    width: "460px",
    padding: "20px",
  },
  cardTitle: {
    fontSize: "28px",
    fontWeight: 500,
    fontFamily: "Roboto",
  },
  gridItem: {
    paddingTop: "13px",
  },
  inputLabel: {
    color: alpha(theme.palette.text.primary, 0.54),
    fontSize: "16px",
    marginBottom: "8px",
  },
  submitButton: {
    padding: "8px 0 8px 0",
    fontWeight: 500,
  },
}));

export const UserLoginForm = observer(() => {
  const classes = useStyles();

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();

    console.log(e.target.email.value);
  };

  return (
    <Card className={classes.rootCard}>
      <form onSubmit={handleLoginSubmit}>
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.cardTitle}>Вход</Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography className={classes.inputLabel}>Электропочта</Typography>
            <TextField
              autoFocus
              autoComplete="email"
              name="email"
              size="small"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <Button
              className={classes.submitButton}
              disableElevation
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Войти
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
});
