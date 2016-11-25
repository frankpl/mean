var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
    app.route('/users')
    .post(users.create)
    .get(users.list);

    app.route('/users/:userId')
    .get(users.read)
    .put(users.update);

// app.param method defines a middleware to be executed before any other middleware
// that uses that parameter.
    app.param('userId', users.userByID);
};

