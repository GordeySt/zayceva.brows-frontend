import axios from "axios";
import { APPOINTMENTS_API_URLS } from "../constants/apiConstants";
import { Appointment } from "../models/appointment";
import { requests, responseBody } from "./baseApi";

export const appointmentsApi = {
  getAppointments: (params: URLSearchParams): Promise<Appointment[]> =>
    axios
      .get<Appointment[]>(APPOINTMENTS_API_URLS.getAppointments, {
        params,
      })
      .then(responseBody),
  createAppointment: (appointment: Appointment) =>
    requests.post(APPOINTMENTS_API_URLS.createAppointment, appointment),
  deleteAppointment: (id: string) =>
    requests.delete(APPOINTMENTS_API_URLS.deleteAppointment + `/${id}`),
  editAppointment: (appointment: Appointment) =>
    requests.put(APPOINTMENTS_API_URLS.editAppointment, appointment),
  bookAppointment: (id: string) =>
    requests.post(APPOINTMENTS_API_URLS.bookAppointment + `/${id}`, {}),
  unbookAppointment: (id: string) =>
    requests.post(APPOINTMENTS_API_URLS.unbookAppointment + `/${id}`, {}),
  getCurrentUserBookedAppointments: () =>
    requests.get<Appointment[]>(
      APPOINTMENTS_API_URLS.getCurrentUserBookedAppointments
    ),
};
