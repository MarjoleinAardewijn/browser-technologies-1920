const fs = require('fs');

function writeAnswersToJsonFile(file, query) {
    let answer = {
        firstname: `${query.firstname}`,
        lastname: `${query.lastname}`,
        answers: [
            `${query.q1}`,
            `${query.q2}`,
            `${query.q3}`,
            `${query.q4}`,
            `${query.q5}`,
            `${query.q6}`,
            `${query.q7}`,
            `${query.q8}`,
            `${query.q9}`,
            `${query.q10}`
        ]
    };

    file.push(answer);

    fs.writeFile("answers.json", JSON.stringify(file, null, 2), err => {
        if (err) throw err;

        console.log("Done writing"); // Success
    });
}

module.exports = { writeAnswersToJsonFile };