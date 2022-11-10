import React, { useCallback, useState } from "react";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler as ReactScheduler,
  WeekView,
  DayView,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog,
  DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Paper, useMediaQuery, useTheme } from "@mui/material";
import {
  APP_TOP_BAR_DEFAULT_HEIGHT,
  APP_TOP_BAR_MOBILE_HEIGHT,
  MAX_TABLET_WIDTH,
  MIN_WIDTH,
} from "../../common/constants/adaptiveConstants";
import {
  getEndDayHourDay,
  getEndDayHourWeek,
  getStartDayHourDay,
  getStartDayHourWeek,
} from "./utils/schedulerTimeUtils";
import { IAppointments } from "../../common/models/schedule";
import { getUserSettingsFromLocalStorage } from "../../common/utils/localStorageUtils";
import { currentMockDate } from "../../pages/schedule-page/utils/schedulerMockData";
import { useStore } from "../../common/stores/Store";
import AppointmentFormTextEditor from "./AppointmentFormTextEditor";
import AppointmentFormLayout from "./AppointmentFormLayout";
import AppointmentFormRadio from "./AppointmentFormRadio";
import AppointmentTooltipContent from "./AppointmentTooltipContent";
import { getConfirmationDialogMessages, getLabels } from "./utils/localization";
import SchedulerDateTimePicker from "./SchedulerDateTimePicker";
import CustomAppointment from "./CustomAppointment";

interface IProps {
  appointments: IAppointments[];
}

const Scheduler = ({ appointments }: IProps) => {
  const {
    userSettingsStore: { userSettings },
    authStore: { isAdminRole },
  } = useStore();
  const theme = useTheme();
  const matchesTablets = useMediaQuery(
    theme.breakpoints.down(MAX_TABLET_WIDTH)
  );
  const matchesPhones = useMediaQuery(theme.breakpoints.down(MIN_WIDTH));

  const topBarHeight = matchesPhones
    ? APP_TOP_BAR_MOBILE_HEIGHT
    : APP_TOP_BAR_DEFAULT_HEIGHT;

  const [schedulerAppointments, setSchedulerAppointments] =
    useState(appointments);
  const [schedulerCurrentDate, setSchedulerCurrentDate] =
    useState(currentMockDate);

  const onCurrentDateChange = (currentDate: Date) => {
    setSchedulerCurrentDate(currentDate);
  };

  const commitChanges = useCallback(
    ({ added, changed, deleted }: any) => {
      if (added) {
        const startingAddedId =
          schedulerAppointments.length > 0
            ? schedulerAppointments[schedulerAppointments.length - 1].id + 1
            : 0;

        setSchedulerAppointments([
          ...schedulerAppointments,
          { id: startingAddedId, ...added },
        ]);
      }

      if (changed) {
        setSchedulerAppointments(
          schedulerAppointments.map((appointment) =>
            changed[appointment.id]
              ? { ...appointment, ...changed[appointment.id] }
              : appointment
          )
        );
      }

      if (deleted !== undefined) {
        setSchedulerAppointments(
          schedulerAppointments.filter(
            (appointment) => appointment.id !== deleted
          )
        );
      }
    },
    [setSchedulerAppointments, schedulerAppointments]
  );

  return (
    <Paper>
      <ReactScheduler
        height={document.documentElement.clientHeight - topBarHeight}
        data={schedulerAppointments}
        locale={
          getUserSettingsFromLocalStorage()
            ? getUserSettingsFromLocalStorage().language
            : "ru"
        }
      >
        <ViewState
          defaultCurrentDate={schedulerCurrentDate}
          onCurrentDateChange={onCurrentDateChange}
        />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        {matchesTablets ? (
          <DayView
            startDayHour={getStartDayHourDay(
              appointments,
              schedulerCurrentDate
            )}
            endDayHour={getEndDayHourDay(appointments, schedulerCurrentDate)}
          />
        ) : (
          <WeekView
            startDayHour={getStartDayHourWeek(appointments)}
            endDayHour={getEndDayHourWeek(appointments)}
          />
        )}
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ConfirmationDialog
          messages={getConfirmationDialogMessages(userSettings.language)}
        />
        <Appointments appointmentComponent={CustomAppointment} />
        <AppointmentTooltip
          showCloseButton
          showOpenButton={isAdminRole}
          showDeleteButton={isAdminRole}
          contentComponent={AppointmentTooltipContent}
        />
        <AppointmentForm
          layoutComponent={AppointmentFormLayout}
          booleanEditorComponent={AppointmentFormRadio}
          messages={getLabels(userSettings.language)}
          textEditorComponent={(props) => (
            <AppointmentFormTextEditor {...props} />
          )}
          dateEditorComponent={(props) => (
            <SchedulerDateTimePicker
              {...props}
              locale={userSettings.language}
              matchesMinScreenWidth={matchesPhones}
            />
          )}
        />
        {!matchesTablets && isAdminRole && <DragDropProvider />}
      </ReactScheduler>
    </Paper>
  );
};

export default Scheduler;
