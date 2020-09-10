var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        throw err;
      } else {
        res.json(results);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var params = [req.body[chat_content], req.body[user_id], req.body[roomname]];
    models.messages.create(params, (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json(result);
      }
    });
  }
  // a function which handles posting a message to the database
};
