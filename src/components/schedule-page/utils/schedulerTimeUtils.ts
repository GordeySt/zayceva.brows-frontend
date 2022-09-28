import { IAppointments } from "../../../common/models/schedule";

export const getStartDayHourWeek = (appointments: IAppointments[]) => (
    Math.min(...appointments.map(a => a.startDate.getHours())) - 0.5
);

export const getEndDayHourWeek = (appointments: IAppointments[]) => {
    const startDayHour = getStartDayHourWeek(appointments);
    const endDayHour = Math.max(...appointments.map(a => a.endDate.getHours())) + 0.5;

    if (startDayHour + 10 > endDayHour) {
        return startDayHour + 10;
    }

    return endDayHour;
};


export const getStartDayHourDay = (appointments: IAppointments[], currentDate: Date) => {
    const daySchedule = appointments.filter(t => t.startDate.getDate() === currentDate.getDate());

    if (daySchedule.length !== 0) {
        return Math.min(...daySchedule.map(d => d.startDate.getHours())) - 0.5;
    }

    return 0;
};

export const getEndDayHourDay = (appointments: IAppointments[], currentDate: Date) => {
    const startDayHour = getStartDayHourDay(appointments, currentDate);
    const daySchedule = appointments.filter(t => t.startDate.getDate() === currentDate.getDate());
    const endDayHour = Math.max(...daySchedule.map(a => a.endDate.getHours())) + 1.5;

    if (startDayHour + 9 > endDayHour) {
        return startDayHour + 9;
    }

    return endDayHour;
};