import { configure, makeAutoObservable } from "mobx";
import { ISignUpFormValues } from "../../components/sign-up-page/SignUpForm";
import { authApi } from "../api/authApi";
import { history } from "../../index";
import {
  CONFIRM_EMAIL_ROUTE,
  DEFAULT_ROUTE,
} from "../constants/routesConstants";
import { ILoginFormValues } from "../../components/login-page/LoginForm";
import { AuthUser, Role, User } from "../models/user";
import { store } from "./Store";
import { usersApi } from "../api/usersApi";

configure({ enforceActions: "always" });

export default class AuthStore {
  user: AuthUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get User() {
    return this.user;
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
      this.setSignInUser(user);
      store.commonStore.setToken(user.jwt);
      history.push(DEFAULT_ROUTE);
    } catch (error) {
      throw error;
    }
  };

  signOut = () => {
    store.commonStore.setToken(null);
    window.localStorage.removeItem("jwt");
    this.setSignInUser(null);
    history.push("/");
  };

  getCurrentUser = async () => {
    try {
      const user = await usersApi.getCurrentUser();
      this.setCurrentUser(user, store.commonStore.token);
    } catch (error) {
      console.log(error);
    }
  };

  setSignInUser = (user: AuthUser | null) => {
    this.user = user;
  };

  setCurrentUser = (user: User, jwt: string | null) => {
    this.user = {
      jwt,
      user,
    };
  };
}
