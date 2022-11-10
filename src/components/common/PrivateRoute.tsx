import React from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";
import {
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
} from "../../common/constants/routesConstants";
import { useStore } from "../../common/stores/Store";

interface Props extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  roles?: string[];
  privateRoute?: boolean;
}

const PrivateRoute = ({
  component: Component,
  roles,
  privateRoute,
  ...rest
}: Props) => {
  const {
    authStore: { isLoggedIn, user },
  } = useStore();

  return (
    <>
      {!privateRoute ? (
        <Route {...rest} component={Component} />
      ) : (
        <Route
          {...rest}
          render={(props) => {
            if (!isLoggedIn) {
              return <Redirect to={LOGIN_ROUTE} />;
            }

            if (roles) {
              for (var i = 0; i < roles?.length; i++) {
                if (user?.user.role !== roles[i]) {
                  return <Redirect to={NOT_FOUND_ROUTE} />;
                }
              }
            }

            console.log(1);

            return <Component {...props} />;
          }}
        />
      )}
    </>
  );
};

export default PrivateRoute;
