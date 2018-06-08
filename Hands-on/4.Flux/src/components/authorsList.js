"use strict";
var React = require("react");
var Link = require("react-router").Link;
var AuthorStore = require("../stores/authorStore");
var AuthorAction = require("../actions/authorActions");
var AuthorsList = React.createClass({
  getInitialState: function(){return {authors: []};},
  componentDidMount: function(){
     if(this.isMounted()){
      this.setState({authors: AuthorStore.getAllAuthor()});
    }
  },
  deleteAuthor: function(authorID, event){
    debugger;
    event.preventDefault();
    AuthorAction.deleteAuthor(authorID);
  },
  _onChange: function(){ this.setState({authors: AuthorStore.getAllAuthor()});
  },
  componentWillMount: function(){ AuthorStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){ AuthorStore.removeChangeListener(this._onChange);
  },
  render: function(){
    var createAuthourRow = function(item){
      return (<tr key={item.id}>
        <td>{item.id}</td>
        <td><a href={"/#authorDetails/" + item.id + "?authorName=" + item.name}>{item.name}</a></td>
        <td><Link to="techDetails" params={{version: item.id}}> {item.technology}</Link></td>
        <td><input type="button" className="btn danger" onClick={this.deleteAuthor.bind(this, item.id)} value="delete"/></td>
      </tr>);
    };
    return (<div>
      <Link to="manageAuthors">ManageAuthors</Link>
<table className="table">
<thead><th>ID</th><th>Name</th><th>Technology</th><th>Action</th></thead>
<tbody>
{this.state.authors.map(createAuthourRow, this)}
</tbody>
</table>
    </div>);
  }
});
module.exports = AuthorsList;
