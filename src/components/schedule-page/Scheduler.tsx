import React from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler as ReactScheduler,
    WeekView,
    DayView,
    Appointments
} from '@devexpress/dx-react-scheduler-material-ui';
import { Paper, useMediaQuery, useTheme } from "@mui/material";
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

interface IProps {
    currentDate: Date;
    appointments: IAppointments[];
}

const Scheduler = ({ currentDate, appointments }: IProps) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(MAX_TABLET_WIDTH));

    return (
        <Paper>
            <ReactScheduler
                data={appointments}
                locale={getUserSettingsFromLocalStorage().language}
            >
                <ViewState
                    defaultCurrentDate={currentDate}
                />
                {matches ?
                    <DayView
                        startDayHour={getStartDayHourDay(appointments, currentDate)}
                        endDayHour={getEndDayHourDay(appointments, currentDate)}
                    />
                    :
                    <WeekView
                        startDayHour={getStartDayHourWeek(appointments)}
                        endDayHour={getEndDayHourWeek(appointments)}
                    />
                }
                <Appointments appointmentComponent={CustomAppointment}/>
            </ReactScheduler>
        </Paper>
    );
};

export default Scheduler;