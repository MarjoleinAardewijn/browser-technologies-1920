basic = (res, view, title) => {
    res.render(view, {
        title: title
    })
};

save = (res, title, url) => {
    res.render('save', {
        title: title,
        url
    })
};

home = (res, queries) => {
    res.render('home', {
        title: 'Minor Web Development',
        queries
    })
};

questions = (res, data, queries) => {
    res.render('questions', {
        title: 'Vragen',
        data,
        queries
    })
};

module.exports = { basic, save, home, questions };
