import { USERS_API_URLS } from "../constants/apiConstants";
import { User } from "../models/user";
import { requests } from "./baseApi";

export const usersApi = {
  getCurrentUser: (): Promise<User> =>
    requests.get<User>(USERS_API_URLS.getCurrentUser),
};
