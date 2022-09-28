import React from 'react';
import Scheduler from "../../components/schedule-page/Scheduler";
import { appointments, currentDate } from "./utils/schedulerMockData";

const SchedulePage = () => {
    return (
        <Scheduler currentDate={currentDate} appointments={appointments} />
    );
};

export default SchedulePage;