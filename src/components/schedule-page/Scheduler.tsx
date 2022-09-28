import React, { useState } from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler as ReactScheduler,
    WeekView,
    DayView,
    Appointments,
    Toolbar,
    DateNavigator,
    TodayButton,
    AppointmentTooltip
} from '@devexpress/dx-react-scheduler-material-ui';
import { Grid, Button, IconButton, Paper, useMediaQuery, useTheme } from "@mui/material";
import { MAX_TABLET_WIDTH } from "../../common/constants/adaptiveConstants";
import CustomAppointment from "./CustomAppointment";
import {
    getEndDayHourDay,
    getEndDayHourWeek,
    getStartDayHourDay,
    getStartDayHourWeek
} from "./utils/schedulerTimeUtils";
import { IAppointments } from "../../common/models/schedule";
import { getUserSettingsFromLocalStorage } from "../../common/utils/localStorageUtils";
import { currentMockDate } from "../../pages/schedule-page/utils/schedulerMockData"
import EditIcon from '@mui/icons-material/Edit';

interface IProps {
    appointments: IAppointments[];
}

const Header = ({ children, appointmentData, ...restProps }: any) => {
    return (
        <AppointmentTooltip.Header
            {...restProps}
            appointmentData={appointmentData}
            style={{ display: "flex", alignItems: "center" }}
        >
            <IconButton onClick={() => console.log(appointmentData)}>
                <EditIcon />
            </IconButton>
        </AppointmentTooltip.Header>
    )
};

const Content = ({ children, appointmentData, ...restProps }: any) => (
    <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
        <Grid container style={{ alignItems: "center" }}>
            <Grid item style={{ margin: "10px 0 0 15px" }}>
                <Button variant="contained">Записаться</Button>
            </Grid>
        </Grid>
    </AppointmentTooltip.Content>
);

const Scheduler = ({ appointments }: IProps) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(MAX_TABLET_WIDTH));

    const [schedulerData, setSchedulerData] = useState({
        appointments,
        currentDate: currentMockDate
    });

    const onCurrentDateChange = (currentDate: Date) => {
        setSchedulerData(prevState => ({
            appointments: [...prevState.appointments],
            currentDate: currentDate
        }))
    }

    return (
        <Paper>
            <ReactScheduler
                data={schedulerData.appointments}
                locale={getUserSettingsFromLocalStorage().language}
            >
                <ViewState
                    defaultCurrentDate={schedulerData.currentDate}
                    onCurrentDateChange={onCurrentDateChange}
                />
                {matches ?
                    <DayView
                        startDayHour={getStartDayHourDay(appointments, schedulerData.currentDate)}
                        endDayHour={getEndDayHourDay(appointments, schedulerData.currentDate)}
                    />
                    :
                    <WeekView
                        startDayHour={getStartDayHourWeek(appointments)}
                        endDayHour={getEndDayHourWeek(appointments)}
                    />
                }
                <Appointments appointmentComponent={CustomAppointment}/>
                <AppointmentTooltip showCloseButton headerComponent={Header} contentComponent={Content} />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
            </ReactScheduler>
        </Paper>
    );
};

export default Scheduler;