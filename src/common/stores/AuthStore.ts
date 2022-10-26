import { makeAutoObservable } from "mobx";
import { ISignUpFormValues } from "../../components/sign-up-page/SignUpForm";
import { authApi } from "../api/authApi";
import { history } from "../../index"
import { CONFIRM_EMAIL_ROUTE } from "../constants/routesConstants";

export default class AuthStore {
    constructor() {
        makeAutoObservable(this)
    }

    signUp = async (data: ISignUpFormValues) => {
        try {
            await authApi.signUp(data);
            history.push(CONFIRM_EMAIL_ROUTE + `?email=${data.email}`)
        } catch (error) {
            console.log(error);
        }
    }
}