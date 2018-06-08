"use strict";
var React = require("react");
var Link = require("react-router").Link;
var AuthorsList = React.createClass({
propTypes: {
  authorList: React.PropTypes.array.isRequired
},
  render: function(){
    var createAuthourRow = function(item){
      return (<tr key={item.id}>
        <td>{item.id}</td>
        <td><a href={"/#authorDetails/" + item.id + "?authorName=" + item.name}>{item.name}</a></td>
        <td><Link to="techDetails" params={{version: item.version}}> {item.technology}</Link></td>
      </tr>);
    };
    return (<div>
      <Link to="manageAuthors">ManageAuthors</Link>
<table className="table">
<thead><th>ID</th><th>Name</th><th>Technology</th></thead>
<tbody>
{this.props.authorList.map(createAuthourRow, this)}
</tbody>
</table>
    </div>);
  }
});
module.exports = AuthorsList;
