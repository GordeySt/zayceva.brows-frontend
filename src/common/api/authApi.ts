import { ISignUpFormValues } from "../../components/sign-up-page/SignUpForm";
import { requests } from "./baseApi";
import { AUTH_API_URLS } from "../constants/apiConstants";

type VerifyData = {
  email: string;
  token: string;
};

export const authApi = {
  signUp: (user: ISignUpFormValues) =>
    requests.post<void>(AUTH_API_URLS.signUpUrl, user),
  confirmEmail: (data: VerifyData) =>
    requests.post<void>(AUTH_API_URLS.confirmEmailUrl, data),
  resendEmailConfirmation: (email: string) =>
    requests.get<void>(
      AUTH_API_URLS.resendEmailConfirmationUrl + `?email=${email}`
    ),
};
