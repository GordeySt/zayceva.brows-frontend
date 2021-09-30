import { useLocation, matchPath } from "react-router-dom";
import { routes } from "../config/routes";

export const useRoute = () => {
  const location = useLocation();
  const path = location.pathname;
  const route = routes.find((e) =>
    matchPath(path, { path: e.path, exact: true })
  );

  return route;
};
