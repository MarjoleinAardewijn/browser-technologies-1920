<h1>Browser Technologies @cmda-minor-web 1920</h1>

A demo based on the use case:
<p align="center"><b>I want to be able to fill in a survey about the Minor Web Development, with various answer options. If I don't finish the survey, I want to continue where I left off later.</b></p>

<br>

<p align="center">
  <a href="https://boiling-gorge-63096.herokuapp.com/">
    <img src="https://img.shields.io/badge/demo-LIVE-brightgreen.svg?style=flat-square" alt="Demo">
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/LICENSE.txt">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="License">
  </a>
</p> 

<br>

![Minor Web Development Enquete](https://user-images.githubusercontent.com/23479038/78010505-b8948b80-7342-11ea-9b4b-7cb94abd5f9b.png "Minor Web Development Enquete")

## Introduction

The survey for the minor Web Development is part of the course [@ cmda-minor-web 1920](https://github.com/cmda-minor-web/browser-technologies-1920).
In this cursor I had to create a website with the aim that all users, regardless of which browser they use, can use the core functionality.
This is based on [Progressive Enhancement (PE)](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement). 
To apply this, I had to built the website in 3 different layers (1. Functional/ Reliable; 2. Usable; 3. Pleasurable). So, first I added the HTML (functional/ reliable layer), then the CSS (usable layer) and finally (in the most enhanced version, the pleasurable layer) the JavaScript.

## Table of Content

* [Installation](#Installation)
  * [Development](#Development)
  * [Production](#Production)
* [Feature Research](#Feature-Research)
* [Survey Minor Web Development](#Survey-Minor-Web-Development)
  * [Progressive Enhancement](#Progressive-Enhancement)
    * [Functional and Reliable Layer](#Functional-and-Reliable-Layer)
    * [Usable Layer](#Usable-Layer)
    * [Pleasurable Layer](#Pleasurable-Layer)
  * [Feature Detection](#Feature-Detection)
    * [CSS](#CSS)
    * [JavaScript](#JavaScript)
* [Sources](#Sources)
* [Credits](#Credits)
* [Licence](#Licence)

## Installation

See the installation guide to learn how to install and use the app.

<details>
    <summary>Installation Guide</summary>

Go via the terminal to the folder you want the project to be placed:

```
    cd Path/To/Folder
```

Clone the repository and go to the project folder:

```
    git clone https://github.com/MarjoleinAardewijn/browser-technologies-1920.git && cd browser-technologies-1920
```

After cloning the project go to the docs folder:

```
    cd docs
```

Install npm:

```
    npm init
```

Install all the dependencies:

```
    npm install
```

### Development

When in development, run the following command to watch the changes:

```
    npm run dev:watch
```

In you browser. go to:

```
   localhost:4000 
```

### Production

When the app the finished use Heroku to deploy it.

First, login to Heroku:
```
    heroku login
```

Deploy the app by creating a new domain on Heroku. Heroku generates a random name for your app.
```
    heroku create
```

Clone the repository:
```
    heroku git:remote -a name-of-the-heroku-app
```

Push master branch to Heroku:
```
    git add .
    git commit -m "Heroku"
    git push heroku master
```

Open the app in your browser to check if everything went well:
```
    heroku open
```

To see the logs when something went wrong, run the following command:
```
    heroku logs --tail
```
</details>

## Feature Research

This reasearch was divided into 2 parts. In the first part the goal was to investigated 2 features that are being used on websites and figure out what impact these features have on websites. 
In the second part, I the goal was to test all 8 features on my [OBA project](https://marjoleinaardewijn.github.io/project-1-1920/) in the browsers Chrome, Firefox and Safari and on 3 different devices.

The research I did is in Dutch and can be found in my [wiki](https://github.com/MarjoleinAardewijn/browser-technologies-1920/wiki "Wiki").

## Survey Minor Web Development

With the survey about the Minor Web Development you answer some questions, with various options. And if you don't finish the survey, you can continue where you left off later.

<details>
    <summary>Wireframes</summary>

![Wireframes](https://user-images.githubusercontent.com/23479038/77156346-82801d80-6a9f-11ea-8855-3633ff8c9369.jpg "Wireframes")
</details>

### Progressive Enhancement

We start with a simple usable experience, and step by step enrich the user experience based on the browser support.

#### Functional and Reliable Layer

When JavaScript and CSS are turned off the website will only show the HTML.

![Survey Minor Web Development - Questions - HTML](https://user-images.githubusercontent.com/23479038/78015007-07452400-7349-11ea-9b09-484f7a7981e5.png "Questions")

<details>
    <summary>Home page</summary>

![Survey Minor Web Development - Home page - HTML](https://user-images.githubusercontent.com/23479038/78015019-0c09d800-7349-11ea-9dce-81f53554c232.png "Home page")
</details>

<details>
    <summary>Save Progress page</summary>

![Survey Minor Web Development - Save Progress page - HTML](https://user-images.githubusercontent.com/23479038/78017188-2ee9bb80-734c-11ea-9c64-1b6fdb8cd966.png "Save Progress page")
</details>

<details>
    <summary>Final page</summary>

![Survey Minor Web Development - Final page - HTML](https://user-images.githubusercontent.com/23479038/78015031-1035f580-7349-11ea-8336-8c45c8777765.png "Final page")
</details>

I know... it looks terrible! but the core functionality still works in all browsers used today! The user can still fill in the survey and continue the survey where they left off later if they didn't have the time to finish it.

<details>
    <summary>Audit Results</summary>

![Audit Results - HTML only](https://user-images.githubusercontent.com/23479038/78015808-360fca00-734a-11ea-893e-df09ca9af2c0.png "Audit Results - HTML only")
</details>


#### Usable Layer

Now let's turn on CSS to make it more pleasant for users to look at.

![Survey Minor Web Development - Questions (1) - CSS](https://user-images.githubusercontent.com/23479038/78018535-5d689600-734e-11ea-8e8d-6541d2e6ea85.png "Questions (1)")

![Survey Minor Web Development - Questions (2) - CSS](https://user-images.githubusercontent.com/23479038/78018539-5f325980-734e-11ea-871a-1c12969f9dc0.png "Questions (2)")

<details>
    <summary>Home page</summary>

![Survey Minor Web Development - Home page - CSS](https://user-images.githubusercontent.com/23479038/78018670-999bf680-734e-11ea-95bd-739b3be8801d.png "Home page")
</details>

<details>
    <summary>Save Progress page</summary>

![Survey Minor Web Development - Save Progress page - CSS](https://user-images.githubusercontent.com/23479038/78018676-9acd2380-734e-11ea-86d3-1e831dd53dcb.png "Save Progress page")
</details>

<details>
    <summary>Final page</summary>

![Survey Minor Web Development - Final page - CSS](https://user-images.githubusercontent.com/23479038/78018680-9bfe5080-734e-11ea-8a2a-14f78d4a7fa2.png "Final page")
</details>

Adding the CSS makes it actually usable.

<details>
    <summary>Audit Results</summary>

![Audit Results - CSS](https://user-images.githubusercontent.com/23479038/78018931-116a2100-734f-11ea-8899-cee882f93135.png "Audit Results - CSS")
</details>

#### Pleasurable Layer

Now finally, let's turn on everything!

![Survey Minor Web Development - Questions - JS](https://user-images.githubusercontent.com/23479038/78019151-732a8b00-734f-11ea-8445-7eb3f201ccc9.png "Questions")

<details>
    <summary>Home page</summary>

![Survey Minor Web Development - Home page - CSS](https://user-images.githubusercontent.com/23479038/78018670-999bf680-734e-11ea-95bd-739b3be8801d.png "Home page")
</details>

<details>
    <summary>Save Progress page</summary>

![Survey Minor Web Development - Save Progress page - CSS](https://user-images.githubusercontent.com/23479038/78018676-9acd2380-734e-11ea-86d3-1e831dd53dcb.png "Save Progress page")
</details>

<details>
    <summary>Final page</summary>

![Survey Minor Web Development - Final page - CSS](https://user-images.githubusercontent.com/23479038/78018680-9bfe5080-734e-11ea-8a2a-14f78d4a7fa2.png "Final page")
</details>

That look great and a lot quieter now all the questions have an own page! And it even has a progress bar, wow!

<details>
    <summary>Audit Results</summary>

![Audit Results - CSS](https://user-images.githubusercontent.com/23479038/78018931-116a2100-734f-11ea-8899-cee882f93135.png "Audit Results - CSS")
</details>

### Feature Detection

With [Feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) you work out whether a browser supports a certain block of code, and run different code (a fallback) depending on whether it's supported or not.
This way the browser can always provide a working experience rather than crashing/erroring in some browsers.

#### CSS

I used some modern CSS properties, so I had to write fallbacks for those properties to make sure it'll work in older browsers as well.

**1. Custom properties**

I used a lot of custom properties, but [it isn't supported in older browser, IE and mobile browsers](https://caniuse.com/#search=custom%20properties). But luckily, it's very easy to write fallback for this using [CSS cascade](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).
Since in CSS the order of CSS rules matter. When you have two rules that appled who have equal specificity the one that comes last in the CSS is the one that will be used. But if that one doesn't work, the second-last will be used etc.

```css
    :root {
        --black: #000;
        --light: #fff;
        --dark: #333;
        --gray: #dedede;
        --light-gray: #f5f5f5;
        --yellow-700: #fbc02d;
        --green: #4caf50;
        --font: Helvetica, sans-serif;
        ...
    }
```
    
```css
    body {
        font-family: Helvetica, sans-serif; /* Fallback */
        font-family: var(--font);
        font-weight: 500;
        line-height: 18px; /* Fallback */
        line-height: 1.125;
        margin-bottom: 5px;
        font-size: 16px; /* Fallback */
        font-size: 1em;
        color: #333; /* Fallback */
        color: var(--dark);
    }
```

**2. REM and EM**

REM and EM are widely [supported in all browser](https://caniuse.com/#search=rem), but not in all of them. In IE 6 - IE 8 for example, it isn't supported. And in iOS Safari 5.0-5.1, it's isn't supported in combination with media queries.

To make sure it work in all the browsers, I wrote fallbacks when using REM or EM units.

```css
.content {
    margin: 8px 16px; /* Fallback */
    margin: 0.5rem 1rem;
}
```

**3. Multiple Box Shadows**

When using `box-shadow` I used multiple shadows, this [isn't supported in older browsers](https://caniuse.com/#search=box-shadow%20Multiple%20shadows) and the support for some mobile browsers is unknown.

I wrote a fallback for this but since this isn't enough I used the `@support` rule as well to make sure it's only visible in browsers that support it.
I used a fallback and the `@support` rule because in IE 11 for example, custom properties aren't supported but `@supports` is.

```css
@supports (box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)) {
    button,
    .button {
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); /* Fallback */
        box-shadow: var(--box-shadow);
    }
}
```

**4. Flex**

`flex-box` is [supported in almost all the modern browsers](https://caniuse.com/#search=flex-box), but there are still some old browsers who don't support it or have some bugs with is (like IE browsers for example).
And some older browsers don't support the wrapping or `align-content` properties.

To detect if the browser supports `flex-box` I used the `@support` rule again.

```css
@supports (display: flex) {
    .flex-links {
        display: flex;
        justify-content: space-between;
    }

    .form-group {
        display: flex;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }
    
    ...
}
```

**5. Others**

There are more properties I used like: transform, transitions, border-radius etc. But they don't require a fallback, since they aren't necessary.

#### JavaScript

**1. ES6**

A lot of the JavaScript code I write is based on ES6, since I use arrow functions and write variables with const and let instead of var. 
But since [arrow functions](https://caniuse.com/#search=arrow%20functions), [const](https://caniuse.com/#search=const) and [let](https://caniuse.com/#search=let) aren't supported in older and some mobile browsers. Besides arrow functions (which aren't supported here), `const` and `let` have some bugs in IE 11.

To fix this I wrote all the client-side JavaScript without arrow functions and don't use `const` and `let` for my variables.

```js
/* Variables */
// Before:
const question = document.querySelectorAll('.question');
let currentSlide = 0;

// After:
var question = document.querySelectorAll('.question');
var currentSlide = 0;

/* Functions */
// Before:
showSlide = (n) => { ... }

// After:
function showSlide(n) { ... }
```

**2. querySelector(All)**

Since `querySelector` and `querySelectorAll` [aren't supported in some older browsers](https://caniuse.com/#search=querySelector) I used `getElementById` and `getElementsByClassName` instead.

```js
// Before:
var question = document.querySelectorAll('.question');
var links = document.querySelector('.links.pagination');

// After:
var question = document.getElementsByClassName('question');
var links = document.getElementById('links-pagination');
```

For `links` I had to use an ID instead, because otherwise it wouldn't work with `insertAdjacentHTML`. And since the classes are only used in one place, I refactored it to an ID.

## Sources

- [Progress Bar](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_3)
- [Safe Web Fonts](https://web.mit.edu/jmorzins/www/fonts.html)
- [Pagination](https://www.sitepoint.com/simple-javascript-quiz/)
- [overflow-wrap: break-word](https://stackoverflow.com/questions/12196885/text-flowing-out-of-div)
- [Material Color Tool](https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=2979FF&secondary.color=FBC02D)

## Credits

- [Form styling](https://codepen.io/andytran/pen/GpyKLM/)
- Afronden Cijfers:
   - [Breakingpar](https://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87257124007E0011)
   - [StackOverflow](https://stackoverflow.com/questions/15762768/javascript-math-round-to-two-decimal-places)
- [README, from Menno de Vries](https://github.com/Mennauu/browser-technologies-1819)
