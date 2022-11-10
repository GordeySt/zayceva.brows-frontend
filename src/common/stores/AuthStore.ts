import { configure, makeAutoObservable } from "mobx";
import { ISignUpFormValues } from "../../components/sign-up-page/SignUpForm";
import { authApi } from "../api/authApi";
import { history } from "../../index";
import {
  CONFIRM_EMAIL_ROUTE,
  DEFAULT_ROUTE,
} from "../constants/routesConstants";
import { ILoginFormValues } from "../../components/login-page/LoginForm";
import { AuthUser, Role } from "../models/user";
import { store } from "./Store";

configure({ enforceActions: "always" });

export default class AuthStore {
  user: AuthUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!store.commonStore.token;
  }

  get isAdminRole() {
    return this.user?.user.role === Role.Admin;
  }

  signUp = async (data: ISignUpFormValues) => {
    try {
      await authApi.signUp(data);
      history.push(CONFIRM_EMAIL_ROUTE + `?email=${data.email}`);
    } catch (error) {
      throw error;
    }
  };

  singIn = async (data: ILoginFormValues) => {
    try {
      const user = await authApi.signIn(data);
      this.setUser(user);
      store.commonStore.setToken(user.jwt);
      history.push(DEFAULT_ROUTE);
    } catch (error) {
      throw error;
    }
  };

  signOut = () => {
    store.commonStore.setToken(null);
    window.localStorage.removeItem("jwt");
    this.setUser(null);
    history.push("/");
  };

  setUser = (user: AuthUser | null) => {
    this.user = user;
  };
}
