import React, { useState } from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler as ReactScheduler,
    WeekView,
    DayView,
    Appointments,
    Toolbar,
    DateNavigator,
    TodayButton
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
import {  currentMockDate } from "../../pages/schedule-page/utils/schedulerMockData"

interface IProps {
    appointments: IAppointments[];
}

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
                <Toolbar />
                <DateNavigator />
                <TodayButton />
            </ReactScheduler>
        </Paper>
    );
};

export default Scheduler;