import { ru } from "date-fns/locale";

export const getLabels = (locale: keyof IDetails): any => detailsLabelLocalization[locale];

interface IDetails {
    [key: string]: {
        detailsLabel: string;
        commitCommand: string;
        moreInformationLabel: string;
    }
}

const detailsLabelLocalization: IDetails = {
    'en': {
        detailsLabel: 'Details',
        commitCommand: 'Save',
        moreInformationLabel: ''
    },
    'ru': {
        detailsLabel: 'Детали',
        commitCommand: 'Сохранить',
        moreInformationLabel: ''
    }
}

export const getDateFnsLocaleFromUserSettings = (locale: string) => (
    locale === 'ru' ? ru : undefined
)