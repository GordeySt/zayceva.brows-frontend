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
  currentUserBookedAppointmentsRegistry = new Map();
  loadingAppointments = false;
  loadingBookAppointment = false;

  constructor() {
    makeAutoObservable(this);
  }

  get currentUserBookedAppointments(): Appointment[] {
    return Array.from(this.currentUserBookedAppointmentsRegistry.values());
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
    try {
      await appointmentsApi.deleteAppointment(id);
      runInAction(() => {
        this.appointmentsRegistry.delete(id);
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  editAppointment = async (appointment: any) => {
    const appointmentId = Object.keys(appointment)[0];
    console.log(appointmentId);

    let appointmentToEdit = this.appointmentsRegistry.get(appointmentId);
    appointmentToEdit = { ...appointmentToEdit, ...appointment[appointmentId] };

    try {
      await appointmentsApi.editAppointment(appointmentToEdit as Appointment);
      runInAction(() => {
        this.appointmentsRegistry.delete(appointmentId);
        this.setAppointmentToRegistry(appointmentToEdit);
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  bookAppointment = async (id: string) => {
    this.setBookLoadingAppointments(true);

    try {
      await appointmentsApi.bookAppointment(id);
    } catch (error) {
      console.log(error);
    } finally {
      this.setBookLoadingAppointments(false);
    }
  };

  unbookAppointment = async (id: string) => {
    this.setBookLoadingAppointments(true);

    try {
      await appointmentsApi.unbookAppointment(id);
      runInAction(() => {
        this.currentUserBookedAppointmentsRegistry.delete(id);
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setBookLoadingAppointments(false);
    }
  };

  getCurrentUserBookedAppointments = async () => {
    try {
      const appointments =
        await appointmentsApi.getCurrentUserBookedAppointments();

      runInAction(() => {
        appointments.forEach((appointment) => {
          appointment.startDate = new Date(appointment.startDate);
          appointment.endDate = new Date(appointment.endDate);

          this.setCurrentUserBookedAppointmentToRegistry(appointment);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  setCurrentUserBookedAppointmentToRegistry = (appointment: Appointment) => {
    this.currentUserBookedAppointmentsRegistry.set(appointment.id, appointment);
  };

  setAppointmentToRegistry = (appointment: Appointment) => {
    this.appointmentsRegistry.set(appointment.id, appointment);
  };

  setBookLoadingAppointments = (value: boolean) => {
    this.loadingBookAppointment = value;
  };

  setLoadingAppointments = (value: boolean) => {
    this.loadingAppointments = value;
  };
}
