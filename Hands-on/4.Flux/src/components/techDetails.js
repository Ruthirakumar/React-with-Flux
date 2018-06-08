"use strict";
var React = require("react");

var TechDetails = React.createClass({
  render: function(){
    return (
      <div>
      <div>Technology Rating : {this.props.params.version}</div>
      </div>
    );
  }
});
module.exports = TechDetails;
