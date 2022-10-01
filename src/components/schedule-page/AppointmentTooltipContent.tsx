import React from 'react';
import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    gridItem: {
        margin: "10px 0 0 15px"
    }
}));

const AppointmentTooltipContent = ({ children, appointmentData, ...restProps }: any) => {
    const classes = useStyles();

    return (
        <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
            <Grid container>
                <Grid item className={classes.gridItem}>
                    <Button variant="contained">Записаться</Button>
                </Grid>
            </Grid>
        </AppointmentTooltip.Content>
    )
};

export default AppointmentTooltipContent;