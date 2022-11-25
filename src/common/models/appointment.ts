export type Appointment = {
  id?: string;
  title: string;
  startDate: Date;
  endDate: Date;
  isBooked?: boolean;
  userId?: string;
  price?: number;
};
