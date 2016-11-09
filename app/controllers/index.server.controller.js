var moment = require('moment');
exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    
    var now = moment().format("MM-DD-YYYY h:mm:ss a");
    req.session.lastVisit = now;
    
    
    res.render('index', {
        title: "Hello World",
        message: "My MEAN Application at work!"
    });
};