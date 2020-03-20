function urlStorageFromForm(query) {
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
}

module.exports = { urlStorageFromForm };