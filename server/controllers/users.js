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
  },

  post: function (req, res) {
    var params = [req.body.username];
    models.messages.create(params, (err, result) => {
      if (err) {
        throw err;
      } else {
        res.sendStatus(201);
      }
    });
  }
};
