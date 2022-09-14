export const formatTimeToHoursAndMinutes = (date: Date) =>
    date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');