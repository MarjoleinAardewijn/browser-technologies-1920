const progressText = document.querySelectorAll('.text-progress'),
    progressBarWrapper = document.querySelector('.progress-bar-wrapper'),
    bar = document.querySelector('#bar'),
    progressBar = document.querySelector('#progress-bar'),
    progress = document.querySelector('#progress');

let numberOfQuestions = round((100 / progressText.length), 1);

progressBarWrapper.classList.add('show');

for (let i = 0; i < progressText.length; ++i) {
    progressText[i].style.display = 'none';
}

bar.style.width = numberOfQuestions + '%';
progress.innerText = Math.round(numberOfQuestions) + '%';

function progressNext() {
    let progressBarWidth = progressBar.clientWidth;
    let barWidth = bar.clientWidth;
    let widthPercentage = roundToHalf((barWidth / progressBarWidth) * 100);

    let newBarWidth = (widthPercentage + numberOfQuestions);
    let newBarWidthHTML = newBarWidth;

    if (newBarWidthHTML >= 99) {
        newBarWidthHTML = 100;
    }

    bar.style.width = newBarWidth + '%';
    progress.innerHTML = Math.round(newBarWidthHTML) + '%';
}

function progressPrevious() {
    let progressBarWidth = progressBar.clientWidth;
    let barWidth = bar.clientWidth;
    let widthPercentage = roundToHalf((barWidth / progressBarWidth) * 100);
    let newBarWidth = widthPercentage - numberOfQuestions;

    bar.style.width = newBarWidth + '%';
    progress.innerHTML = Math.round(newBarWidth) + '%';
}


function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function roundToHalf(value) {
    let converted = parseFloat(value); // Make sure we have a number
    let decimal = (converted - parseInt(converted, 10));

    decimal = Math.round(decimal * 10);

    if (decimal === 5) {
        return (parseInt(converted, 10) + 0.5);
    }

    if ((decimal < 3) || (decimal > 7)) {
        return Math.round(converted);
    } else {
        return (parseInt(converted, 10) + 0.5);
    }
}