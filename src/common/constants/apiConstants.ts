export const AUTH_API_URLS = {
  signUpUrl: "/auth/sign-up",
  confirmEmailUrl: "/auth/confirm-email",
  resendEmailConfirmationUrl: "/auth/resend-confirmation-email",
  signInUrl: "/auth/sign-in",
};

export const USERS_API_URLS = {
  getCurrentUser: "/users/get-current-user",
  editCurrentUser: "/users/edit-current-user",
};

export const APPOINTMENTS_API_URLS = {
  getAppointments: "/appointments",
  createAppointment: "/appointments",
  deleteAppointment: "/appointments/id",
  editAppointment: "/appointments",
  bookAppointment: "/appointments/book-appointment",
  unbookAppointment: "/appointments/unbook-appointment",
  getCurrentUserBookedAppointments:
    "/appointments/get-current-user-booked-appointments",
};
