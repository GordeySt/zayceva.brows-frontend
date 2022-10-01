import React from 'react';
import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";

const AppointmentFormTextEditor = (props: any) => {
    if (props.type === 'multilineTextEditor') {
        return null;
    }

    return <AppointmentForm.TextEditor {...props} />;
};

export default AppointmentFormTextEditor;