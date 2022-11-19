import { useEffect, useState } from "react";
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
import { getUserSettingsFromLocalStorage } from "../../common/utils/localStorageUtils";
import { useStore } from "../../common/stores/Store";
import AppointmentFormTextEditor from "./AppointmentFormTextEditor";
import AppointmentFormLayout from "./AppointmentFormLayout";
import AppointmentFormRadio from "./AppointmentFormRadio";
import AppointmentTooltipContent from "./AppointmentTooltipContent";
import { getConfirmationDialogMessages, getLabels } from "./utils/localization";
import SchedulerDateTimePicker from "./SchedulerDateTimePicker";
import CustomAppointment from "./CustomAppointment";
import { observer } from "mobx-react-lite";
import CustomSpaceLoader from "../common/CustomSpaceLoader";

const Scheduler = observer(() => {
  const {
    userSettingsStore: { userSettings },
    authStore: { isAdminRole },
    appointmentsStore: {
      getAppointments,
      appointments,
      loadingAppointments,
      isAppointmentsLoadedForWeek,
    },
  } = useStore();
  const theme = useTheme();
  const matchesTablets = useMediaQuery(
    theme.breakpoints.down(MAX_TABLET_WIDTH)
  );
  const matchesPhones = useMediaQuery(theme.breakpoints.down(MIN_WIDTH));

  const topBarHeight = matchesPhones
    ? APP_TOP_BAR_MOBILE_HEIGHT
    : APP_TOP_BAR_DEFAULT_HEIGHT;

  const [schedulerCurrentDate, setSchedulerCurrentDate] = useState(
    new Date(Date.now())
  );

  useEffect(() => {
    getAppointments(new Date(Date.now()));
  }, [getAppointments]);

  const onCurrentDateChange = (currentDate: Date) => {
    setSchedulerCurrentDate(currentDate);

    if (!isAppointmentsLoadedForWeek(currentDate)) {
      getAppointments(currentDate);
    }
  };

  const commitChanges = () => {};

  // const commitChanges = useCallback(
  //   ({ added, changed, deleted }: any) => {
  //     if (added) {
  //       const startingAddedId =
  //         appointments.length > 0
  //           ? appointments[appointments.length - 1].id + 1
  //           : 0;

  //       setSchedulerAppointments([
  //         ...schedulerAppointments,
  //         { id: startingAddedId, ...added },
  //       ]);
  //     }

  //     if (changed) {
  //       setSchedulerAppointments(
  //         schedulerAppointments.map((appointment) =>
  //           changed[appointment.id]
  //             ? { ...appointment, ...changed[appointment.id] }
  //             : appointment
  //         )
  //       );
  //     }

  //     if (deleted !== undefined) {
  //       setSchedulerAppointments(
  //         schedulerAppointments.filter(
  //           (appointment) => appointment.id !== deleted
  //         )
  //       );
  //     }
  //   },
  //   [setSchedulerAppointments, schedulerAppointments]
  // );

  if (loadingAppointments) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `calc(100vh - ${topBarHeight}px)`,
        }}
      >
        <CustomSpaceLoader />
      </div>
    );
  }

  return (
    <Paper>
      <ReactScheduler
        height={document.documentElement.clientHeight - topBarHeight}
        data={appointments}
        locale={
          getUserSettingsFromLocalStorage()
            ? getUserSettingsFromLocalStorage().language
            : "ru"
        }
      >
        <ViewState
          currentDate={schedulerCurrentDate}
          onCurrentDateChange={onCurrentDateChange}
        />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        {matchesTablets ? (
          <DayView startDayHour={8.5} endDayHour={21} />
        ) : (
          <WeekView startDayHour={8.5} endDayHour={21} />
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
});

export default Scheduler;
