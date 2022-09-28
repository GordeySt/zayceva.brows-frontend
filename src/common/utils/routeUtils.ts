import { matchPath, useLocation } from "react-router-dom";
import { routes } from "../config/routes";

export const useRoute = () => {
  const location = useLocation();
  const path = location.pathname;

  return routes.find((e) =>
      matchPath(path, { path: e.path, exact: true })
  );
};