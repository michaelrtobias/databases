var db = require('../db');

module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function (message, callback) {

  } // a function which can be used to insert a message into the database
};


/*
 items: function() {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  add: function(message, callback = ()=>{}) {
    Messages._data[message.objectId] = message;
    callback(Messages.items());
  },