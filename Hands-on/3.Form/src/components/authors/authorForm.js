"use strict";
//AuthorForm
var React = require("react");
var Input = require("../common/textInput");

var AuthorForm = React.createClass({
  render: function() {
    return (
      <form>
        <Input name="firstName" label="First Name" value={this.props.author.firstName}
        onChange={this.props.onChange} error={this.props.error.firstName}/>
        <br/>
        <Input name="lastName" label="Last Name" value={this.props.author.lastName}
        onChange={this.props.onChange} error={this.props.error.lastName}/>
        <br/>
        <input type="submit" value="Save" onClick={this.props.onSave} className="btn btn-default"/>
      </form>
    );
  }
});

module.exports = AuthorForm;
