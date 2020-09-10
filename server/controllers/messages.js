var models = require('../models');
var con = require('../db/index.js');

module.exports = {
  get: function (req, res) {}, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('STEP ONE');
    if (req.method === 'POST') {
      res.statusCode = 200;
      con.connect((err) => {
        if (err) {
          throw err;
        } else {
          console.log('CONNECTED');
        }
      });
      var newSQL = "INSERT INTO messages (chat_content, user_id, room_id) VALUES ('In mercy\'s name, three days is all I need.', 'Valjean', '1')";
      con.query(newSQL, (err, result) => {
        if (err) {
          throw err;
        } else {
          console.log('SUCCESS!');
        }
      });
      res.end('');
    }

  }
  // a function which handles posting a message to the database
};
