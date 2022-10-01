import React from 'react';
import { Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import { isDarkTheme } from "../../common/utils/themeUtils";
import { THEME_PRIMARY_COLORS } from "../../common/constants/themeConstants";
import { useTheme } from "@mui/material";

const CustomAppointment = ({ children, style, ...restProps }: any) => {
    const theme = useTheme();

    return (
        <Appointments.Appointment
            style={{
                ...style,
                backgroundColor: isDarkTheme(theme) ?
                    THEME_PRIMARY_COLORS.dark.main :
                    THEME_PRIMARY_COLORS.light.main,
                borderRadius: '8px' }}
            {...restProps}
        >
            {children}
        </Appointments.Appointment>
    );
};

export default CustomAppointment;