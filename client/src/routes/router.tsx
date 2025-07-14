import {
  Router,
  Route,
  RootRoute,
  Outlet,
} from '@tanstack/react-router';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

const rootRoute = new RootRoute({
  component: () => <Outlet />,
});

const routeTree = rootRoute.addChildren([
  new Route({ getParentRoute: () => rootRoute, path: '/', component: Home }),
  new Route({ getParentRoute: () => rootRoute, path: 'login', component: Login }),
  new Route({ getParentRoute: () => rootRoute, path: 'register', component: Register }),
  new Route({ getParentRoute: () => rootRoute, path: 'dashboard', component: Dashboard }),
]);

export const router = new Router({
  routeTree,
});
