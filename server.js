const express = require('express'),
    globalConfig = require('./config'),
    fileSystem = require("./modules/helpers/file-system"),
    urlStorage = require("./modules/helpers/url-storage"),
    answersFile = require("./answers"),
    questions = require('./modules/data'),
    render = require("./modules/render"),
    questionsData = questions.data,
    app = express(),
    config = {
        port: globalConfig.port
    };

require("dotenv").config();

app
    .set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('static'))

    .get('/', (req, res) => {
        let queries = urlStorage.urlStorageFromForm(req.query);

        render.home(res, queries);
    })
    .get('/questions', (req, res) => {
        let queries = urlStorage.urlStorageFromForm(req.query);

        render.questions(res, questionsData, queries);
    })

    .get('/save', (req, res) => {
        let destination = urlStorage.getSaveUrl(req, "save", "questions");

        render.save(res, 'Opgeslagen!', destination);
    })

    .get('/thanks', (req, res) => {
        fileSystem.writeAnswersToJsonFile(answersFile, req.query);

        render.basic(res, 'thanks', 'Bedankt!');
    })

    .listen(config.port, function() {
        console.log(`Application started on port: ${config.port}`);
    });