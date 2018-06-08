"use strict";
//AuthorForm
var React = require("react");
var Input = require("../common/textInput");

var AuthorForm = React.createClass({
  render: function() {
    return (
      <form>
        <Input name="name" label="Name" value={this.props.author.name}
        onChange={this.props.onChange} error={this.props.error.name}/>
        <br/>
        <Input name="technology" label="Technology" value={this.props.author.technology}
        onChange={this.props.onChange} error={this.props.error.technology}/>
        <br/>
        <input type="submit" value="Save" onClick={this.props.onSave} className="btn btn-default"/>
      </form>
    );
  }
});

module.exports = AuthorForm;
