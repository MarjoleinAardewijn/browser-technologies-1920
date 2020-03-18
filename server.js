// Require (third-party) modules
const express = require('express'),
    globalConfig = require('./config'),
    app = express(),
    config = {
        port: globalConfig.port
    };

require("dotenv").config();

app
    .set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('static'))

    .get('/', function(req, res) {
        res.render('home', {
            title: 'Minor Web Development'
        })
    })

    .listen(config.port, function() {
        console.log(`Application started on port: ${config.port}`);
    });