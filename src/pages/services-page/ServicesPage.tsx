import React, { useState } from 'react';
import { Chip, Container, Divider, Grid, Theme } from "@mui/material";
import { MAX_TABLET_WIDTH, MIN_WIDTH } from "../../common/constants/AdaptiveConstants";
import { ShowMode, showModes } from "./utils/showMode";
import TabGroupUnmemoized from "../../components/services-page/TabGroupUnmemoized";
import { makeStyles } from "@mui/styles";
import ServiceCard from "../../components/services-page/ServiceCard";
import { mockServices } from "./utils/mockServices";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        marginBottom: theme.spacing(10),
    },
    rootCard: {
        padding: "20px",
        borderRadius: "10px",
        minHeight: "200px",
        overflow: "hidden",

        [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
            width: "100%",
        },

        [theme.breakpoints.down(MIN_WIDTH)]: {
            marginTop: "10px",
        },
    },
    divider: {
        marginBottom: '1rem',
    },
    grid: {
        marginBottom: '1rem',

        [theme.breakpoints.down(MIN_WIDTH)]: {
            marginBottom: '2rem',
        },
    }
}));

const TabGroup = React.memo(TabGroupUnmemoized)

const ServicesPage = () => {
    const classes = useStyles();
    const [showMode, setShowMode] = useState<ShowMode>(showModes[0].mode)

    const handleShowModeChange = (newShowMode: ShowMode) => {
        setShowMode(newShowMode)
    }

    return (
        <Container className={classes.container}>
            <TabGroup
                handleShowModeChange={(m) => handleShowModeChange(m)}
                showMode={showMode}
            />
            {(showMode === 'all' || showMode === 'brows') &&
                <Divider className={classes.divider} textAlign='left'>
                    <Chip label={showModes.find(t => t.mode === 'brows')?.text}/>
                </Divider>
            }
            {showMode !== 'eyelashes' &&
                <Grid className={classes.grid} container spacing={2}>
                    {mockServices.brows.map((service, idx) => (
                        <ServiceCard key={idx} {...service} />
                    ))}
                </Grid>
            }
            {showMode !== 'brows' &&
                <>
                    <Divider className={classes.divider} textAlign='left'>
                        <Chip label={showModes.find(t => t.mode === 'eyelashes')?.text}/>
                    </Divider>
                    <Grid container spacing={2}>
                        {mockServices.eyelashes.map((service, idx) => (
                            <ServiceCard key={idx} {...service} />
                        ))}
                    </Grid>
                </>}
        </Container>
    );
};

export default ServicesPage;