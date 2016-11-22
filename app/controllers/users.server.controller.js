var mongoose = require('mongoose');
var User = mongoose.model('User');

// Use native promises for now.
mongoose.Promise = global.Promise;
// assert.equal(query.exec().constructor, global.Promise);

exports.create = function(req, res, next) {
    var user = new User(req.body);

    user.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};