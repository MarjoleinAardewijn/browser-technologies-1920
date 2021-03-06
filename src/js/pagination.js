var question = document.getElementsByClassName('question');
var links = document.getElementById('links-pagination');
var previous = `
    <button id="previous" class="button-3">Terug</button>
`;
var next = `
    <button id="next" class="button-3">Volgende</button>
`;

// add slide class
for (var i = 0; i < question.length; ++i) {
    question[i].classList.add('slide');
}

// add buttons
links.insertAdjacentHTML("afterbegin", previous);
links.insertAdjacentHTML("beforeend", next);

// Pagination
var backButton = document.getElementById('back');
var submitButton = document.getElementById('submit');
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
        previousButton.style.display = 'none';
        backButton.style.display = 'inline-block';
    } else {
        backButton.style.display = 'none';
        previousButton.style.display = 'inline-block';
    }

    if(currentSlide === slides.length-1){
        backButton.style.display = 'none';
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

// Show the first slide
showSlide(currentSlide);

function showNextSlide(e) {
    e.preventDefault();
    progressNext();
    showSlide(currentSlide + 1);
}

function showPreviousSlide(e) {
    e.preventDefault();
    progressPrevious();
    showSlide(currentSlide - 1);
}

// Event listeners
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
