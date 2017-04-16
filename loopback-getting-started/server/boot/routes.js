module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  var path = require('path');
  app.get('/index', function(req, res) {
    res.sendFile(path.resolve('client/index.html'));
  });
}
