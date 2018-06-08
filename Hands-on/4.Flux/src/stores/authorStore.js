"use strict";
var Dispatcher = require("../dispatcher/AppDispatcher");
var ActionType = require("../constants/ActionTypes");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var CHANGE_EVENT = "change";
var _authors = [];
var AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback){ this.on(CHANGE_EVENT, callback); },
  removeChangeListener: function(callback){  this.removeListener(CHANGE_EVENT, callback); },
  emitChange: function(){ this.emit(CHANGE_EVENT); },
  getAllAuthor: function(){ return _authors; }
});
Dispatcher.register(function(action){
  switch (action.actionType) {
    case ActionType.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case ActionType.DELETE_AUTHOR:
    for(var index = 0; index < _authors.length; index++){
      if(_authors[index].id === action.id ) {
        _authors.splice(index, 1);
      }
    }
    AuthorStore.emitChange();
    break;
    default:
  }
});
module.exports = AuthorStore;
