"use strict";
var React = require("react");
var AuthorForm = require("./authorForm");
var Router = require("react-router");

var ManageAuthors = React.createClass({
  mixins: [
    Router.Navigation
  ],
  getInitialState: function(){
    return {
      author: { id: "", firstName: "", lastName: ""},
      error: {}
    };
  },
  setAuthorState: function(event){
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    this.setState({author: this.state.author});
  },
  isFormValid: function(){
    var isValid = true;
    this.state.error = {};
    if(this.state.author.firstName.length < 3){
      this.state.error.firstName = "First Name should be greater than 3 character";
      isValid = false;
    }
    if(this.state.author.lastName.length < 3) {
      this.state.error.lastName = "Last Name should be greater than 3 character";
      isValid = false;
    }
    this.setState({error: this.state.error});
    return isValid;
  },
  saveAuthor: function(event){
    event.preventDefault();
    if(!this.isFormValid()){
      return;
    }
    console.log(this.state.author);
    this.transitionTo("authors");
  },
  render: function(){
    return (<div>
      <h1>Manage Authors</h1>
      <AuthorForm author={this.state.author} onChange={this.setAuthorState}
      onSave={this.saveAuthor} error={this.state.error}/>
      </div>
    );
  }
});

module.exports = ManageAuthors;
