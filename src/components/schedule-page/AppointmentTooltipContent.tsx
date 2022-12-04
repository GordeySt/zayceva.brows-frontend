import React from "react";
import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LoadingButton } from "@mui/lab";
import { useStore } from "../../common/stores/Store";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles(() => ({
  gridItem: {
    margin: "10px 0 0 15px",
  },
}));

const AppointmentTooltipContent = observer(
  ({ children, appointmentData, ...restProps }: any) => {
    const classes = useStyles();
    const {
      appointmentsStore: { bookAppointment, loadingBookAppointment },
    } = useStore();

    const onBookBtnClick = (id: string) => {
      bookAppointment(id);
    };

    return (
      <AppointmentTooltip.Content
        {...restProps}
        appointmentData={appointmentData}
      >
        <Grid container>
          <Grid item className={classes.gridItem}>
            <LoadingButton
              onClick={() => onBookBtnClick(appointmentData.id)}
              loading={loadingBookAppointment}
              variant="contained"
            >
              Записаться
            </LoadingButton>
          </Grid>
        </Grid>
      </AppointmentTooltip.Content>
    );
  }
);

export default AppointmentTooltipContent;
