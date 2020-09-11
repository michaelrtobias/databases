var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = 'SELECT messages.id, messages.text, messages.roomname \
    LEFT OUTER JOIN users ON (messages.userid = users.id) \
    order by messages.id desc';
    db.query(queryStr, (err, results) => {
      if (err) {
        throw err;
      } else {
        debugger;
        callback(results);
      }
    });
  }, // a function which produces all the messages

  create: function (params, callback) {
    var queryStr = 'INSERT INTO messages (text, userid, roomname) \
    VALUES (?, (SELECT id FROM users WHERE username = ? limit 1), ?)';
    db.query(queryStr, params, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    });
  } // a function which can be used to insert a message into the database
};