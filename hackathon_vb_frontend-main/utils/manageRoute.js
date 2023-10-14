import { UNAUTHENTICATED_ROUTES } from "../routes";

export const checkRoute = (path) => {
  let authorized = false;
  for (let route in UNAUTHENTICATED_ROUTES) {
    if (
      route.endsWith("/*") &&
      path.startsWith(route.slice(0, route.length - 2))
    ) {
      authorized = true;
      break;
    } else if (!route.endsWith("/*") && path === route) {
      authorized = true;
      break;
    }
  }
  return authorized;
};
