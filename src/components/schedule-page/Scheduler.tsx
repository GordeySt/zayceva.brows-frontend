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
    AppointmentTooltip,
    AppointmentForm
} from '@devexpress/dx-react-scheduler-material-ui';
import { Paper, useMediaQuery, useTheme } from "@mui/material";
import {
    APP_TOP_BAR_DEFAULT_HEIGHT,
    APP_TOP_BAR_MOBILE_HEIGHT,
    MAX_TABLET_WIDTH,
    MIN_WIDTH
} from "../../common/constants/adaptiveConstants";
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
import { useStore } from "../../common/stores/Store";
import AppointmentFormTextEditor from "./AppointmentFormTextEditor";
import AppointmentFormLayout from "./AppointmentFormLayout";
import AppointmentFormRadio from "./AppointmentFormRadio";
import AppointmentTooltipContent from "./AppointmentTooltipContent";
import { getLabels } from "./utils/localization";

interface IProps {
    appointments: IAppointments[];
}

const Scheduler = ({ appointments }: IProps) => {
    const {
        userSettingsStore: { userSettings },
    } = useStore();
    const theme = useTheme();
    const matchesTablets = useMediaQuery(theme.breakpoints.down(MAX_TABLET_WIDTH));
    const matchesPhones = useMediaQuery(theme.breakpoints.down(MIN_WIDTH));

    const topBarHeight = matchesPhones ? APP_TOP_BAR_MOBILE_HEIGHT : APP_TOP_BAR_DEFAULT_HEIGHT;

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
                height={document.documentElement.clientHeight - topBarHeight}
                data={schedulerData.appointments}
                locale={getUserSettingsFromLocalStorage().language}
            >
                <ViewState
                    defaultCurrentDate={schedulerData.currentDate}
                    onCurrentDateChange={onCurrentDateChange}
                />
                {matchesTablets ?
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
                <AppointmentTooltip
                    showCloseButton
                    showOpenButton
                    contentComponent={AppointmentTooltipContent}
                />
                <AppointmentForm
                    layoutComponent={AppointmentFormLayout}
                    booleanEditorComponent={AppointmentFormRadio}
                    messages={getLabels(userSettings.language)}
                    textEditorComponent={AppointmentFormTextEditor}
                />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
            </ReactScheduler>
        </Paper>
    );
};

export default Scheduler;