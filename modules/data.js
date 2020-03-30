// Max 10 questions

const data = [
    {
        id: 1,
        name: "q1",
        question: "Heb je liever online of klassikaal les?",
        options: {
            a: "Online, dat scheeld veel reistijd.",
            b: "Liever klassikaal.",
            c: "Mijn maakt het niet veel uit."
        }
    },
    {
        id: 2,
        name: "q2",
        question: "Welke tool vind je het fijnst voor comminicatie?",
        options: {
            a: "Slack.",
            b: "Discord.",
            c: "WhatsApp."
        }
    },
    {
        id: 3,
        name: "q3",
        question: "Zit je vaak in de spraak channels op Discord?",
        options: {
            a: "Nee.",
            b: "Soms.",
            c: "Ja."
        }
    },
    {
        id: 4,
        name: "q4",
        question: "Hoe vind je het fijnst op feedback te krijgen?",
        options: {
            a: "Tijdens een call.",
            b: "Als issue op Github.",
            c: "Face-to-face."
        }
    },
    {
        id: 5,
        name: "q5",
        question: "Wil je wanneer de quarentaine is opgeheven nog met mensen uit de groep afspreken?",
        options: {
            a: "Ja dat kijkt me wel leuk, maar alleen met een klein groepje.",
            b: "Ja zeker! Dat moet een groot feest worden!!",
            c: "Van mijn hoedt het niet zo."
        }
    }
];

module.exports = { data };