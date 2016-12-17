var moment = require('moment');
exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    
    var now = moment().format("MM-DD-YYYY h:mm:ss a");
    req.session.lastVisit = now;
    
    console.log(req.user);
    console.log(req.user.fullName);
    res.render('index', {
        title: "Hello World",
        hdrMessage: "My MEAN Application at work!",
        userFullName: req.user ? req.user.fullName : ''
    });
};