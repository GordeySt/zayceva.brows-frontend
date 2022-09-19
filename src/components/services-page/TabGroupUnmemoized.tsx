import { createStyles, withStyles } from "@mui/styles";
import { Tab, Tabs, Theme } from "@mui/material";
import { MIN_WIDTH } from "../../common/constants/adaptiveConstants";
import React, { SyntheticEvent } from "react";
import { ShowMode, createShowModes } from "../../pages/services-page/utils/showMode";
import {isDarkTheme} from "../../common/utils/themeUtils";
import { useTranslation } from "react-i18next";

interface TabGroupProps {
    handleShowModeChange: (newShowMode: ShowMode) => void
    showMode: ShowMode
}

interface StyledTabProps {
    label: string
}

const IOSTabs = withStyles((theme: Theme) => ({
    root: {
        background: isDarkTheme(theme) ? 'rgba(288, 288, 288, 0.1)' : 'rgba(0, 0, 0, 0.03)',
        borderRadius: 12,
        display: 'flex',
        minHeight: 'unset',
        maxWidth: 'unset',
        marginBottom: '1rem',
        marginTop: '5px',

        [theme.breakpoints.down(MIN_WIDTH)]: {
            marginTop: "10px",
        },
    },
    scroller: {
        padding: 4,
    },
    indicator: {
        background: isDarkTheme(theme) ? 'rgba(288, 288, 288, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        height: 'calc(100% - 8px)',
        marginBottom: 4,
        borderRadius: 8,
        boxShadow:
            '0 3px 6px ' +
            'rgba(0, 0, 0, 0.03)' +
            ' !important',
    },
}))(Tabs)

const TabGroupUnmemoized: React.FC<TabGroupProps> = ({ handleShowModeChange, showMode }) => {
    const { t } = useTranslation();
    const currentValue = createShowModes(t).findIndex((e) => e.mode === showMode)

    const handleChange = (event: SyntheticEvent<Element, Event>, value: any) => {
        handleShowModeChange(createShowModes(t)[value].mode)
    }

    const IOSTab = withStyles((theme: Theme) =>
        createStyles({
            root: {
                textTransform: 'none',
                minWidth: 72,
                minHeight: 38,
                flexGrow: 1,
                fontSize: 16,
                padding: 0,
                maxWidth: 'unset',
                fontFamily: 'Google Sans',
                fontWeight: theme.typography.fontWeightMedium,
                transition: 'opacity 0.1s ease',
                '&:hover': {
                    opacity: 1,
                },
                '&$selected': {
                    color: theme.palette.text.primary,
                    fontWeight: theme.typography.fontWeightMedium,
                },
            },
            selected: {},
        })
    )((props: StyledTabProps) => <Tab disableRipple {...props} />)

    return (
        <IOSTabs value={currentValue} onChange={handleChange}>
            {createShowModes(t).map((e, i) => (
                <IOSTab label={e.text} key={i} />
            ))}
        </IOSTabs>
    )
}

export default TabGroupUnmemoized;