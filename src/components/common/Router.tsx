import { Route, Switch } from "react-router-dom";
import { routes } from "../../common/config/routes";

export const Router = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
};
