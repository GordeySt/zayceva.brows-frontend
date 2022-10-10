import { ru } from "date-fns/locale";

export const getLabels = (locale: keyof IDetails): any => detailsLabelLocalization[locale];
export const getConfirmationDialogMessages = (locale: keyof IConfirmationDialog) =>
    confirmationDialogMessages[locale];

interface IDetails {
    [key: string]: {
        detailsLabel: string;
        commitCommand: string;
        moreInformationLabel: string;
    }
}

interface IConfirmationDialog {
    [key: string]: {
        discardButton: string;
        deleteButton: string;
        cancelButton: string;
        confirmDeleteMessage: string;
        confirmCancelMessage: string;
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

const confirmationDialogMessages: IConfirmationDialog = {
    'en': {
        discardButton: 'Discard',
        deleteButton: 'Delete',
        cancelButton: 'Cancel',
        confirmDeleteMessage: 'Are you sure you want to delete this appointment?',
        confirmCancelMessage: 'Discard unsaved changes?'
    },
    'ru': {
        discardButton: 'Отменить',
        deleteButton: 'Удалить',
        cancelButton: 'Назад',
        confirmDeleteMessage: 'Вы точно хотите удалить эту запись?',
        confirmCancelMessage: 'Отменить несохранненые изменения?'
    }
}

export const getDateFnsLocaleFromUserSettings = (locale: string) => (
    locale === 'ru' ? ru : undefined
)