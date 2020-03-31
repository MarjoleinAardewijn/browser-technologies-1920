var progressText = document.getElementsByClassName('text-progress');
var progressBarWrapper = document.getElementById('progress-bar-wrapper');
var bar = document.getElementById('bar');
var progressBar = document.getElementById('progress-bar');
var progress = document.getElementById('progress');
var numberOfQuestions = round((100 / progressText.length), 1);

progressBarWrapper.classList.add('show');

for (var i = 0; i < progressText.length; ++i) {
    progressText[i].style.display = 'none';
}

bar.style.width = numberOfQuestions + '%';
progress.innerText = Math.round(numberOfQuestions) + '%';

function progressNext() {
    var progressBarWidth = progressBar.clientWidth;
    var barWidth = bar.clientWidth;
    var widthPercentage = roundToHalf((barWidth / progressBarWidth) * 100);

    var newBarWidth = (widthPercentage + numberOfQuestions);
    var newBarWidthHTML = newBarWidth;

    if (newBarWidthHTML >= 99) {
        newBarWidthHTML = 100;
    }

    bar.style.width = newBarWidth + '%';
    progress.innerHTML = Math.round(newBarWidthHTML) + '%';
}

function progressPrevious() {
    var progressBarWidth = progressBar.clientWidth;
    var barWidth = bar.clientWidth;
    var widthPercentage = roundToHalf((barWidth / progressBarWidth) * 100);
    var newBarWidth = widthPercentage - numberOfQuestions;

    bar.style.width = newBarWidth + '%';
    progress.innerHTML = Math.round(newBarWidth) + '%';
}


function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function roundToHalf(value) {
    var converted = parseFloat(value); // Make sure we have a number
    var decimal = (converted - parseInt(converted, 10));

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