import React from 'react';
import Scheduler from "../../components/schedule-page/Scheduler";
import { appointments } from "./utils/schedulerMockData";

const SchedulePage = () => {
    return (
        <Scheduler appointments={appointments} />
    );
};

export default SchedulePage;