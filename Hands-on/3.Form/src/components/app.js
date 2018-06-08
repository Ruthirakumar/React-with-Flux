//app.js
"use strict";
var React = require("react");
var RouteHandler = require("react-router").RouteHandler;
var Header = require("./header");

var App = React.createClass({
    render: function(){
      return (<div> <Header/>
        <div className="container">
          <RouteHandler/>
        </div>
        </div> );
    }
  });

module.exports = App;
