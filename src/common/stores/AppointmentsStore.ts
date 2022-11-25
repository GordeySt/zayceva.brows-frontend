import { addDays, endOfWeek, getWeek, startOfWeek } from "date-fns";
import { makeAutoObservable, runInAction } from "mobx";
import { appointmentsApi } from "../api/appointmentsApi";
import {
  END_DATE_QUERY_NAME,
  START_DATE_QUERY_NAME,
} from "../constants/queriesNameConstants";
import { Appointment } from "../models/appointment";
import { createService } from "../../pages/services-page/utils/mockServices";

export default class AppointmentsStore {
  appointmentsRegistry = new Map();
  loadingAppointments = false;
  loadingDeleteAppointment = false;

  constructor() {
    makeAutoObservable(this);
  }

  get appointments(): Appointment[] {
    return Array.from(this.appointmentsRegistry.values());
  }

  isAppointmentsLoadedForWeek = (currentDate: Date): boolean => {
    const currentWeek = getWeek(currentDate);

    return this.appointments.some((a) => {
      const currentWeekForExistingAppointment = getWeek(a.startDate);

      return currentWeekForExistingAppointment === currentWeek;
    });
  };

  getAppointments = async (currentDate: Date) => {
    const firstday = startOfWeek(currentDate);
    const lastday = endOfWeek(currentDate);
    const lastDayFromNextWeek = addDays(lastday, 7);
    const params = new URLSearchParams();

    params.append(
      START_DATE_QUERY_NAME,
      new Date(firstday.setHours(0, 0, 0, 0)).toLocaleDateString("en")
    );
    params.append(
      END_DATE_QUERY_NAME,
      new Date(lastDayFromNextWeek.setHours(0, 0, 0, 0)).toLocaleDateString(
        "en"
      )
    );

    try {
      this.setLoadingAppointments(true);
      const appointments = await appointmentsApi.getAppointments(params);
      runInAction(() => {
        appointments.forEach((appointment) => {
          appointment.startDate = new Date(appointment.startDate);
          appointment.endDate = new Date(appointment.endDate);

          this.setAppointmentToRegistry(appointment);
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoadingAppointments(false);
    }
  };

  createAppointment = async (appointment: Appointment, t: any) => {
    try {
      appointment.price = Object.values(createService(t))
        .map((t) => t.find((t) => t.title === appointment.title))
        .find((t) => t?.title === appointment.title)?.price!;

      await appointmentsApi.createAppointment(appointment);
      this.setAppointmentToRegistry(appointment);
    } catch (error) {
      console.log(error);
    }
  };

  deleteAppointment = async (id: string) => {
    this.setDeleteLoadingAppointments(true);

    try {
      await appointmentsApi.deleteAppointment(id);
      runInAction(() => {
        this.appointmentsRegistry.delete(id);
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setDeleteLoadingAppointments(false);
    }
  };

  editAppointment = async (appointment: any) => {
    this.setDeleteLoadingAppointments(true);

    const appointmentId = Object.keys(appointment)[0];
    console.log(appointmentId);

    let appointmentToEdit = this.appointmentsRegistry.get(appointmentId);
    appointmentToEdit = { ...appointmentToEdit, ...appointment[appointmentId] };

    console.log(appointmentToEdit);

    try {
      await appointmentsApi.editAppointment(appointmentToEdit as Appointment);
      runInAction(() => {
        this.appointmentsRegistry.delete(appointmentId);
        this.setAppointmentToRegistry(appointmentToEdit);
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setDeleteLoadingAppointments(false);
    }
  };

  setAppointmentToRegistry = (appointment: Appointment) => {
    this.appointmentsRegistry.set(appointment.id, appointment);
  };

  setDeleteLoadingAppointments = (value: boolean) => {
    this.loadingDeleteAppointment = value;
  };

  setLoadingAppointments = (value: boolean) => {
    this.loadingAppointments = value;
  };
}
