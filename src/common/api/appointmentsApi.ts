import axios from "axios";
import { APPOINTMENTS_API_URLS } from "../constants/apiConstants";
import { Appointment } from "../models/appointment";
import { responseBody } from "./baseApi";

export const appointmentsApi = {
  getAppointments: (params: URLSearchParams): Promise<Appointment[]> =>
    axios
      .get<Appointment[]>(APPOINTMENTS_API_URLS.getAppointments, {
        params,
      })
      .then(responseBody),
};
