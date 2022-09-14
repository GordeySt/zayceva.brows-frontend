import React, { useState } from 'react';
import { Chip, Container, Divider, Grid, Theme } from "@mui/material";
import { tips } from "../tips-page/tips";
import TipsCard from "../../components/tips-page/TipsCard";
import { MAX_TABLET_WIDTH, MIN_WIDTH } from "../../common/constants/AdaptiveConstants";
import { ShowMode, showModes } from "./utils/showMode";
import TabGroupUnmemoized from "../../components/services-page/TabGroupUnmemoized";
import { makeStyles } from "@mui/styles";

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
            {(showMode === 'all' || showMode === 'brows') &&
                <Divider textAlign='left' style={{ marginBottom: "1rem" }}>
                    <Chip label={showModes.find(t => t.mode === 'brows')?.text}/>
                </Divider>
            }
            {showMode !== 'eyelashes' &&
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
            }
            {showMode !== 'brows' &&
                <>
                    <Divider textAlign='left' style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                        <Chip label={showModes.find(t => t.mode === 'eyelashes')?.text}/>
                    </Divider>
                    <Grid container spacing={2}>
                        {tips.slice(0, 3).map((tip, idx) => (
                            <TipsCard
                                key={idx}
                                circleColor={tip.circleColor}
                                hashtag={tip.hashtag}
                                text={tip.text}
                            />
                        ))}
                    </Grid>
                </>}
        </Container>
    );
};

export default ServicesPage;