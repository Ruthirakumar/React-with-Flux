"use strict";
var React = require("react");
var AuthorsList = require("./authorsList");

var Authors = React.createClass({
  render: function(){
    return (<div>
        <h1>Authors</h1>
        <AuthorsList />
      </div> );
  }
});
module.exports = Authors;
