import { Route, Switch } from "react-router-dom";
import { routes } from "../../common/config/routes";

const Router = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={i}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Router;
