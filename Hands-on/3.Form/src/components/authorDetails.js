"use strict";
var React = require("react");

var AuthorDetails = React.createClass({
  render: function(){
    return (
      <div>
        <div>Author ID : {this.props.params.authorID}</div>
        <div>Author Name : {this.props.query.authorName}</div>
      </div>
    );
  }
});

module.exports = AuthorDetails;
