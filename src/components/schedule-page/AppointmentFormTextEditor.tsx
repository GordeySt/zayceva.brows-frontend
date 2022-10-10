import React from 'react';
import { useTranslation } from "react-i18next";
import { ListSubheader, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { createService } from "../../pages/services-page/utils/mockServices";

interface IProps {
    readOnly?: boolean;
    placeholder?: string;
    value?: string | number;
    onValueChange: (value: string) => void;
    type?: "titleTextEditor" | "multilineTextEditor" | "ordinaryTextEditor" | "numberEditor";
}

const AppointmentFormTextEditor = ({ onValueChange, value, type}: IProps) => {
    const { t } = useTranslation();

    const onSelectChange = (event: SelectChangeEvent) => {
        onValueChange(event.target.value);
    }

    if (type === 'multilineTextEditor') {
        return null;
    }

    return (
        <Select
            style={{ width: '100%' }}
            value={value as string}
            onChange={onSelectChange}
            id="grouped-select"
            inputProps={{ 'aria-label': 'Without label' }}
        >
            <ListSubheader>{t`pages.servicesPage.categories.brows`}</ListSubheader>
            {createService(t).brows.map(t => t.title).map((t, idx) => (
                <MenuItem key={idx} value={t}>{t}</MenuItem>
            ))}
            <ListSubheader>{t`pages.servicesPage.categories.lashes`}</ListSubheader>
            {createService(t).eyelashes.map(t => t.title).map((t, idx) => (
                <MenuItem key={idx} value={t}>{t}</MenuItem>
            ))}
        </Select>
    )
};

export default AppointmentFormTextEditor;