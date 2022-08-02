import { Validators } from "@lemoncode/fonk";
import { createFinalFormValidation } from "@lemoncode/fonk-final-form";

export const createValidation = (t: any) => {
    const validationSchema = {
        field: {
            firstName: [
                {
                    validator: Validators.required.validator,
                    message: t('pages.signUpPage.errors.firstNameRequired')
                }
            ],
            lastName: [
                {
                    validator: Validators.required.validator,
                    message: t('pages.signUpPage.errors.lastNameRequired')
            }
        ],
            email: [
                {
                    validator: Validators.required.validator,
                    message: t('pages.signUpPage.errors.emailRequired')
                },
                {
                    validator: Validators.email.validator,
                    message: t('pages.signUpPage.errors.emailFormat')
                }
            ],
            password: [
                {
                    validator: Validators.required.validator,
                    message: t('pages.signUpPage.errors.passwordRequired')
                }
            ]
        }
    }

    return createFinalFormValidation(validationSchema);
};

export const isBYPhoneNumber = (value: string, errorMsg = "Phone number is not valid") => {
    const phoneRegex = /^\+375 \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/g;

    return phoneRegex.test(value) ? undefined : errorMsg
}
