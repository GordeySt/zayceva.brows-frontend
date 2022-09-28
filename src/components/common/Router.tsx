import { Route, Switch } from "react-router-dom";
import { routes } from "../../common/config/routes";
import ScrollToTop from "./ScrollToTop";

const Router = () => {
  return (
      <>
        <ScrollToTop />
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
      </>
  );
};

export default Router;
