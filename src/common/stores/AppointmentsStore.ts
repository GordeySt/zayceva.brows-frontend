import { makeAutoObservable, runInAction } from "mobx";
import { appointmentsApi } from "../api/appointmentsApi";
import { Appointment } from "../models/appointment";

export default class AppointmentsStore {
  appointmentsRegistry = new Map();
  loadingAppointments = false;

  constructor() {
    makeAutoObservable(this);
  }

  get appointments(): Appointment[] {
    return Array.from(this.appointmentsRegistry.values());
  }

  getAppointments = async (currentDate: Date) => {
    const date = new Date(currentDate);
    const first = date.getDate() - date.getDay();
    const last = first + 6;

    const firstday = new Date(date.setDate(first));
    const lastday = new Date(date.setDate(last));

    const params = new URLSearchParams();
    params.append(
      "startDate",
      new Date(firstday.setHours(0, 0, 0, 0)).toLocaleDateString("en")
    );
    params.append(
      "endDate",
      new Date(lastday.setHours(0, 0, 0, 0)).toLocaleDateString("en")
    );

    try {
      this.setLoadingAppointments(true);
      const appointments = await appointmentsApi.getAppointments(params);
      runInAction(() => {
        appointments.forEach((appointment) => {
          appointment.startDate = new Date(appointment.startDate);
          appointment.endDate = new Date(appointment.endDate);
          this.appointmentsRegistry.set(appointment.id, appointment);
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoadingAppointments(false);
    }
  };

  setLoadingAppointments = (value: boolean) => {
    this.loadingAppointments = value;
  };
}
