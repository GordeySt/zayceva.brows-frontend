import { Validators } from "@lemoncode/fonk";
import { createFinalFormValidation } from "@lemoncode/fonk-final-form";
import { REQUIRED_PASSWORD_LENGTH } from "../constants/passwordConstants";

export const createSignUpValidationShema = (t: any) => {
  const validationSchema = {
    field: {
      firstName: [
        {
          validator: Validators.required.validator,
          message: t("pages.signUpPage.errors.firstNameRequired"),
        },
      ],
      lastName: [
        {
          validator: Validators.required.validator,
          message: t("pages.signUpPage.errors.lastNameRequired"),
        },
      ],
      email: [
        {
          validator: Validators.required.validator,
          message: t("pages.signUpPage.errors.emailRequired"),
        },
        {
          validator: Validators.email.validator,
          message: t("pages.signUpPage.errors.emailFormat"),
        },
      ],
      password: [
        {
          validator: Validators.required.validator,
          message: t("pages.signUpPage.errors.passwordRequired"),
        },
        {
          validator: Validators.minLength,
          customArgs: { length: REQUIRED_PASSWORD_LENGTH },
          message: t("pages.signUpPage.errors.passwordLength") + " {{length}}",
        },
      ],
      phoneNumber: [
        {
          validator: Validators.required.validator,
          message: t("pages.signUpPage.errors.phoneNumberRequired"),
        },
      ],
    },
  };

  return createFinalFormValidation(validationSchema);
};

export const createSignInValidationSchema = (t: any) => {
  const validationSchema = {
    field: {
      email: [
        {
          validator: Validators.required.validator,
          message: t("pages.signUpPage.errors.emailRequired"),
        },
        {
          validator: Validators.email.validator,
          message: t("pages.signUpPage.errors.emailFormat"),
        },
      ],
      password: [
        {
          validator: Validators.required.validator,
          message: t("pages.signUpPage.errors.passwordRequired"),
        },
        {
          validator: Validators.minLength,
          customArgs: { length: REQUIRED_PASSWORD_LENGTH },
          message: t("pages.signUpPage.errors.passwordLength") + " {{length}}",
        },
      ],
    },
  };

  return createFinalFormValidation(validationSchema);
};
