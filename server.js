const express = require('express'),
    globalConfig = require('./config'),
    fs = require("./modules/helpers/fs"),
    urlStorage = require("./modules/helpers/url-storage"),
    answersFile = require("./answers"),
    questions = require('./modules/data/questions'),
    questionsData = questions.questions,
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
        let queries = urlStorage.setUrlStorageQuestionsForm(req.query);

        res.render('home', {
            title: 'Minor Web Development',
            queries
        })
    })
    .get('/questions', function(req, res) {
        let queries = urlStorage.setUrlStorageHomeForm(req.query);

        res.render('questions', {
            title: 'Questions',
            questionsData,
            queries
        })
    })

    .get('/thanks', function(req, res) {
        fs.writeAnswersToJsonFile(answersFile, req.query);

        res.render('thanks', {
            title: 'Thanks!'
        })
    })

    .listen(config.port, function() {
        console.log(`Application started on port: ${config.port}`);
    });