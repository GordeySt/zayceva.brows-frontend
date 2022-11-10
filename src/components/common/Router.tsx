import { Switch } from "react-router-dom";
import { routes } from "../../common/config/routes";
import PrivateRoute from "./PrivateRoute";
import ScrollToTop from "./ScrollToTop";

const Router = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {routes.map((route, i) => (
          <PrivateRoute
            key={i}
            exact={route.exact}
            path={route.path}
            component={route.component}
            roles={route.roles}
            privateRoute={route.privateRoute}
          />
        ))}
      </Switch>
    </>
  );
};

export default Router;
