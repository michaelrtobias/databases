var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = "SELECT messages.id, messages.chat_content, messages.roomname, users.username FROM messages OUTER JOIN users ON (messages.user_id = users.id)";
    db.query(queryStr, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  }, // a function which produces all the messages

  create: function (params, callback) {
    var queryStr = "INSERT INTO messages (chat_content, user_id, roomname) VALUES (?, ?, ?)";
    db.query(queryStr, params, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  } // a function which can be used to insert a message into the database
};