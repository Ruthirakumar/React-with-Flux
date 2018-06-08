"use strict";
var React = require("react");

var About = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback){
      if(!confirm("It is boring page. Are you sure want to read the details")){
        transition.abort();
      } else {
        callback();
      }
    },
    willTransitionFrom: function(transition, component){
      if(!confirm("Are you sure to navigate out?")){
        transition.abort();
      }
    }
  },
  render: function(){
    return (<div>
<h1>List of Technology</h1>
<ol>
<li>Javascript</li>
<li>Bootstrap</li>
<li>Node</li>
</ol>
    </div>);
  }
});

module.exports = About;
