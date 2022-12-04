import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { format } from "date-fns";
import { useEffect } from "react";
import { useStore } from "../../common/stores/Store";
import ClearIcon from "@mui/icons-material/Clear";
import { observer } from "mobx-react-lite";
import { LoadingButton } from "@mui/lab";

const BookedAppointmentsTable = observer(() => {
  const {
    appointmentsStore: {
      getCurrentUserBookedAppointments,
      currentUserBookedAppointments,
      unbookAppointment,
    },
  } = useStore();

  useEffect(() => {
    getCurrentUserBookedAppointments();
  }, [getCurrentUserBookedAppointments]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Услуга</TableCell>
            <TableCell align="right">Начало</TableCell>
            <TableCell align="right">Конец</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentUserBookedAppointments &&
            currentUserBookedAppointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell component="th" scope="row">
                  {appointment.title}
                </TableCell>
                <TableCell align="right">
                  {format(appointment.startDate, "MM/dd/yyyy HH:mm")}
                </TableCell>
                <TableCell align="right">
                  {format(appointment.endDate, "MM/dd/yyyy HH:mm")}
                </TableCell>
                <TableCell align="right">{appointment.price}р.</TableCell>
                <TableCell align="right">
                  <LoadingButton
                    onClick={(e) => unbookAppointment(appointment.id!)}
                    aria-label="Cancel appointment"
                  >
                    <ClearIcon />
                  </LoadingButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default BookedAppointmentsTable;
