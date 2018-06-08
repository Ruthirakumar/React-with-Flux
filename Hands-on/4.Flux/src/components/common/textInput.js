"use strict";
var React = require("react");

var Input = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
  },
  render: function(){
    var wrapperClass = "form-group";
    if(this.props.error && this.props.error.length > 0) {
      wrapperClass += " has-error";
    }
    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div>
          <input type="text" name={this.props.name} placeholder={this.props.placeholder}
           className="form-control" ref={this.props.name} value={this.props.value}
           onChange={this.props.onChange}/>
           <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
});

module.exports = Input;
