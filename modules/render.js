function basicPage(res, view, title) {
    res.render(view, {
        title: title
    })
}

function homePage(res, queries) {
    res.render('home', {
        title: 'Minor Web Development',
        queries
    })
}

function questionsOverview(res, data, queries) {
    res.render('questions', {
        title: 'Questions',
        data,
        queries
    })
}

module.exports = { basicPage, homePage, questionsOverview };
