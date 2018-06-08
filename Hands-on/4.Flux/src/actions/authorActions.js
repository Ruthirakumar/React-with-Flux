"use strict";
var Dispatcher = require("../dispatcher/AppDispatcher");
var AuthorApi = require("../api/authorAPI");
var ActionType = require("../constants/ActionTypes.js");
var AuthorAction = {
  createAuthor: function(author){
    var newAuthor = AuthorApi.saveAuthor(author);
    Dispatcher.dispatch({
      actionType: ActionType.CREATE_AUTHOR,
      author: newAuthor });
  },
  deleteAuthor: function(authorID){
    var deletedAuthor = AuthorApi.deleteAuthor(authorID);
    Dispatcher.dispatch({
      actionType: ActionType.DELETE_AUTHOR,
      id: authorID });
  }

};
module.exports = AuthorAction;
