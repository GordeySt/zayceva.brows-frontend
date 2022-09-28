import { Button, Card, CardActions, CardContent, Chip, Divider, Grid, Theme, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from "@mui/styles";
import { MAX_TABLET_WIDTH, MIN_WIDTH } from "../../common/constants/adaptiveConstants";
import { formatTimeToHoursAndMinutes } from "../../pages/services-page/utils/timeUtils";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { SERVICES_SCHEDULE_ROUTE } from "../../common/constants/routesConstants";

const useStyles = makeStyles((theme: Theme) => ({
    rootCard: {
        padding: "10px",
        borderRadius: "10px",
        height: '100%',
        overflow: "hidden",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        [theme.breakpoints.down(MAX_TABLET_WIDTH)]: {
            width: "100%",
        },
        [theme.breakpoints.down(MIN_WIDTH)]: {
            marginTop: "10px",
        },
    },
    titleAndPriceDiv: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
    },
    title: {
        width: '75%'
    },
    description: {
        display: 'flex',
        alignItems: 'center'
    },
    divider: {
        margin: '1rem 0'
    },
    availabilityTitle: {
        marginBottom: '1rem'
    },
    timeChip: {
        margin: '0 10px 10px 0'
    }
}));

interface IProps {
    title: string;
    price: number;
    description: string;
    availableTime: Date[];
}

const ServiceCard = ({ title, price, description, availableTime }: IProps) => {
    const classes = useStyles();
    const history = useHistory();
    const { t } = useTranslation();

    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.rootCard}>
                <CardContent>
                    <div className={classes.titleAndPriceDiv}>
                        <Typography className={classes.title} variant='h5' component="div">
                            {title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" component="div">
                            {price} р.
                        </Typography>
                    </div>
                    <Typography className={classes.description} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <div>
                    <CardContent>
                        <Divider className={classes.divider} />
                        <Typography className={classes.availabilityTitle} variant='subtitle1' component="div">
                            {t`pages.servicesPage.common.todayAvailability`}:
                        </Typography>
                        <div>
                            {availableTime.map(t =>
                                <Chip className={classes.timeChip} label={formatTimeToHoursAndMinutes(t)} />
                            )}
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => history.push(SERVICES_SCHEDULE_ROUTE)} variant='contained'>
                            {t`pages.servicesPage.common.bookService`}
                        </Button>
                    </CardActions>
                </div>
            </Card>
        </Grid>
    );
}

export default ServiceCard;