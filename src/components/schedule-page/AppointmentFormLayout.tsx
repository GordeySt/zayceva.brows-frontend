import React from 'react';
import { Theme } from "@mui/material";
import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    layout: {
        backgroundColor: theme.palette.background.paper,
        width: '100%'
    }
}));

const AppointmentFormLayout = ({ ...restProps }: any) => {
    const classes = useStyles();

    return (
        <AppointmentForm.Layout
            className={classes.layout}
            {...restProps}
        >
        </AppointmentForm.Layout>
    );
};

export default AppointmentFormLayout;