import { ISignUpFormValues } from "../../components/sign-up-page/SignUpForm";
import { requests } from "./baseApi";
import { AUTH_API_URLS } from "../constants/apiConstants";
import { ILoginFormValues } from "../../components/login-page/LoginForm";
import { AuthUser } from "../models/user";

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
  signIn: (data: ILoginFormValues): Promise<AuthUser> =>
    requests.post<AuthUser>(AUTH_API_URLS.signInUrl, data),
};
