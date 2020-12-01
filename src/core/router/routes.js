import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/home/index";
import Blog from "../../pages/blog";
import Contact from "../../pages/contact";
import Gallery from "../../pages/gallery";

const routeList = [
  {
    path: "/",
    component: Home,
    exact: true,
    private: false,
  },
  {
    path: "/contact",
    component: Contact,
    exact: true,
    private: false,
  },
  {
    path: "/blog",
    component: Blog,
    exact: true,
    private: false,
  },
  {
    path: "/gallery",
    component: Gallery,
    exact: true,
    private: false,
  },
];

const RouteBuilder = (route) => {
  return (
    <Route
      exact={!!route.exact}
      path={route.path}
      render={(props) => <route.component {...props} />}
    />
  );
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routeList.map((route, key) => (
        <RouteBuilder key={key} {...route} />
      ))}
    </Switch>
  </BrowserRouter>
);
export default Routes;
