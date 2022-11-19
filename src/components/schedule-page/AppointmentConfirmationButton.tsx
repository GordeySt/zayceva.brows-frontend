import { ConfirmationDialog } from "@devexpress/dx-react-scheduler-material-ui";
import { LoadingButton } from "@mui/lab";
import { observer } from "mobx-react-lite";
import { useStore } from "../../common/stores/Store";

const AppointmentConfirmationButton = observer(
  ({ title, ...restProps }: ConfirmationDialog.ButtonProps) => {
    const {
      appointmentsStore: { loadingDeleteAppointment },
    } = useStore();

    return (
      <LoadingButton
        loading={loadingDeleteAppointment}
        size="small"
        variant="contained"
        {...restProps}
      >
        {title}
      </LoadingButton>
    );
  }
);

export default AppointmentConfirmationButton;
