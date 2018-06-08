//route.js
"use strict";
var React = require("react");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var routes = (
  <Route name="app" path="/" handler={require("./components/app")}>
    <DefaultRoute handler={require("./components/homePage")}/>
    <Route name="authors" handler={require("./components/authors")}/>
    <Route name="about" handler={require("./components/aboutPage")}/>
    <Route name="authorDetails/:authorID" handler={require("./components/authorDetails")}/>
    <Route name="techDetails" path="techDetails/:version" handler={require("./components/techDetails")}/>
    <Route name="manageAuthors" handler={require("./components/authors/manageAuthors")}/>
    <NotFoundRoute handler={require("./components/notFound")}/>
    <Redirect from="authors-old" to="authors" />
    <Redirect from="authors/*" to="authors" />
  </Route>

);
module.exports = routes;
