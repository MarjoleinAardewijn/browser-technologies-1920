urlStorageFromForm = (query) => {
    let queries = {
        firstname: "",
        lastname: "",
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        q8: "",
        q9: "",
        q10: ""
    };

    if (Object.entries(query).length > 0) {
        queries = query;
    }

    return queries;
};

getSaveUrl = (req, searchValue, newValue) => {
    let fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
    let destination = fullUrl.replace(searchValue, newValue);

    return destination;
};

module.exports = { urlStorageFromForm, getSaveUrl };