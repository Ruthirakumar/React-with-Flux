"use strict";
var React = require("react");
var AuthorsList = require("./authorsList");

var Authors = React.createClass({
  getInitialState: function(){
    return {authors: []};
  },
  componentDidMount: function(){

    if(this.isMounted()){
      this.setState({authors: [{id: 1, name: "Ruthra", technology: "React", version: 13.0},
      {id: 2, name: "Mohan", technology: "Java", version: 1.8}]});
    }
  },
  render: function(){
    return (<div>
        <h1>Authors</h1>
        <AuthorsList authorList={this.state.authors}/>
      </div> );
  }
});
module.exports = Authors;
