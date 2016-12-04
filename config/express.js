var path = require('path'),
    config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    moment = require('moment'),
    session = require('express-session'),
    passport = require('passport'),
    redisStore = require('connect-redis')(session);
    

module.exports = function() {
    var app = express();
    
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    
    app.use(bodyParser.urlencoded( {
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    
    app.use(session({
        store: new redisStore({ host: '127.0.0.1', port:6379, ttl:260}),
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(passport.initialize());
    app.use(passport.session());
    
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);
    
    app.use(express.static('public'));
    
    return app;
};