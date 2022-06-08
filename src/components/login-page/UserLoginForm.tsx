import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

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

const UserLoginForm = observer(() => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();

    console.log(e.target.email.value);
  };

  return (
    <Card className={classes.rootCard}>
      <form onSubmit={handleLoginSubmit}>
        <Grid container direction="column">
          <Grid item>
            <Typography
              className={classes.cardTitle}
            >{t`pages.signInPage.signInSectionTitle`}</Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography
              className={classes.inputLabel}
            >{t`pages.signInPage.signInSectionMailLabel`}</Typography>
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
              {t`pages.signInPage.signInSectionTitle`}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
});

export default UserLoginForm;
