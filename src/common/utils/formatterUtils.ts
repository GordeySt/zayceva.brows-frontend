const byNumberCode = "375";

export const formatPhoneNumber = (value: string, selectionStart: number | null, data: string) => {
    if (!value) return value;

    const valueWithDigitsOnly = value.replace(/\D/g, "");
    const valueNumberCode = valueWithDigitsOnly.substring(0, 3);
    let formattedValue;

    if (value.length !== selectionStart) {
        if (data && /\D/g.test(data)) {
            return valueWithDigitsOnly;
        }

        return value;
    }

    if (valueNumberCode === byNumberCode) {
        formattedValue = `+${valueNumberCode}`

        if (valueWithDigitsOnly.length > 3) {
            formattedValue += ` (${valueWithDigitsOnly.substring(3, 5)}`
        }

        if (valueWithDigitsOnly.length > 4) {
            formattedValue += `) ${valueWithDigitsOnly.substring(5, 8)}`
        }

        if (valueWithDigitsOnly.length >= 8) {
            formattedValue += `-${valueWithDigitsOnly.substring(8, 10)}`
        }

        if (valueWithDigitsOnly.length >= 10) {
            formattedValue += `-${valueWithDigitsOnly.substring(10, 13)}`
        }
    } else {
        formattedValue = `+${valueWithDigitsOnly.substring(0, 17)}`;
    }

    return formattedValue;
};

export const formatPhoneNumberOnKeyDown = (value: string): string => {
    if (value.substring(1, 4) === byNumberCode) {
        if (value.length === 17) {
            return value.substring(0, 16);
        }

        if (value.length === 14) {
            return value.substring(0, 13);
        }

        if (value.length === 10) {
            return value.substring(0, 8);
        }
    }

    return value;
}
