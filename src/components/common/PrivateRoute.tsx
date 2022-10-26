import React from 'react';
import { RouteComponentProps, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>
    roles: string[];
}

const PrivateRoute = ({ component: Component, roles, ...rest }: Props) => {
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;