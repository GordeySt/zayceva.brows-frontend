import React, { useState } from 'react';
import { Container, Grid, Theme } from "@mui/material";
import { tips } from "../tips-page/tips";
import TipsCard from "../../components/tips-page/TipsCard";
import { makeStyles } from "@mui/styles";
import { MAX_TABLET_WIDTH, MIN_WIDTH } from "../../common/constants/AdaptiveConstants";
import { ShowMode, showModes } from "./utils/showMode";
import TabGroupUnmemoized from "../../components/services-page/TabGroupUnmemoized";

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
    circle: {
        display: "inline-block",
        marginRight: "10px",
        height: "10px",
        width: "10px",
        borderRadius: "30px",
    },
    text: {
        marginTop: "10px",
    },
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
            <Grid container spacing={2}>
                {tips.map((tip, idx) => (
                    <TipsCard
                        key={idx}
                        circleColor={tip.circleColor}
                        hashtag={tip.hashtag}
                        text={tip.text}
                    />
                ))}
            </Grid>
        </Container>
    );
};

export default ServicesPage;