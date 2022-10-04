import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField } from "@mui/material";
import React from "react";
import './css/date-time-picker.css'
import { getDateFnsLocaleFromUserSettings } from "./utils/localization";

interface IProps {
    readOnly?: boolean;
    value?: string | number | Date;
    excludeTime?: boolean;
    onValueChange: (nextValue: Date) => void;
    locale?: string | Array<string>;
    matchesMinScreenWidth: boolean;
}

const SchedulerDateTimePicker = ({ onValueChange, value, matchesMinScreenWidth, locale }: IProps) => {
    const onDateTimePickerChange = (value: Date | null) => {
        onValueChange(value as Date);
    }

    return (
        <LocalizationProvider
            adapterLocale={getDateFnsLocaleFromUserSettings(locale as string)}
            dateAdapter={AdapterDateFns}
        >
            <DateTimePicker
                value={value}
                onChange={onDateTimePickerChange}
                renderInput={(params: any) =>
                    <TextField
                        style={{ width: matchesMinScreenWidth && '100%', marginTop: '10px' }}
                        {...params}
                    />
                }
            />
        </LocalizationProvider>
    )
};

export default SchedulerDateTimePicker;