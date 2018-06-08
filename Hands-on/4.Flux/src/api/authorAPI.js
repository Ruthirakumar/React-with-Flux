"use strict";
var authorList = [{
  id: 1,
  name: "Ruthra",
  technology: "Angular"
}];
var AuthorApi = {
  saveAuthor: function(author) {
    if(author.id){
      for(var index = 0; index < authorList.length; index++){
        if(authorList[index].id === author.id ) {
          authorList[index] = author; } }
    } else {
      author.id = authorList.length;
      authorList.push(author);
    }
    return author;
  },
  getAllAuthor: function(){
    return authorList;
  },
  deleteAuthor: function(authorID){
    for(var index = 0; index < authorList.length; index++){
      if(authorList[index].id === authorID ) {
        authorList.splice(index, 1);
        return authorList[index];
      }
    }
  }
};
module.exports = AuthorApi;
