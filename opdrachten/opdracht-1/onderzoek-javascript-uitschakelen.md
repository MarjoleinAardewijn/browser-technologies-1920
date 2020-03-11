# Onderzoek: JavaScript uitschakelen

## Inhoudsopgave

* [Chrome](#Chrome)
  * [Stappen](#Stappen)
* [Firefox](#Firefox)
  * [Stappen](#Stappen)
* [Safari](#Safari)
  * [Stappen](#Stappen)
* [Andere mogelijkheden voor uitschakelen van JavaScript](#Andere-mogelijkheden-voor-uitschakelen-van-JavaScript)
  * [Chrome](#Chrome)
  * [Chrome en Firefox](#Chrome-en-Firefox)
* [Hoe te controleren of JavaScript is ingeschakeld](#Hoe-te-controleren-of-JavaScript-is-ingeschakeld)
* [Bronnen](#Bronnen)

## Chrome

### Stappen

Om JavaScript in Chrome uit te zetten moet je de volgende stappen doorlopen. Als je het weet is het erg simpel.

**Stap 1**

Ga naar het menu rechtsboven door op het icoontje met de drie stippen onder elkaar te klikken.

![menu icon](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/disable-javascript/chrome/chrome-step-1.png "Chrome Stap 1 - menu icon")

**Stap 2**
Kies `Settings`.

![Chrome Stap 2](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/disable-javascript/chrome/chrome-step-2.png "Chrome Stap 2")

**Stap 3**

Ga onder het kopje `Privacy and security` naar `Site settings`.

![Chrome Stap 3](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/disable-javascript/chrome/chrome-step-3.png "Chrome Stap 3")

**Stap 4**

Ga naar `JavaScript`.

![Chrome Stap 4](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/disable-javascript/chrome/chrome-step-4.png "Chrome Stap 4")

**Stap 5**

Zet de switch bij `Allowed (recommended)` uit.

![Chrome Stap 5](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/disable-javascript/chrome/chrome-step-2.png "Chrome Stap 5")


## Firefox

### Stappen

Voor Firefox is het iets ingewikkelder om JavaScript uit te zetten, aangezien je dit niet gewoon in de instellingen kan doen. Hiervoor moet je naar een verborgen config pagina.

**Stap 1**

Ga via de navigatiebalk van Firefox naar `about:config`

**Stap 2**

Aanvaard het risico door op de knop te drukken.

![Firefox Stap 2](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/disable-javascript/firefox/firefox-step-2.png "Firefox Stap 2")

**Stap 3**

Type `javascript` in de zoekbalk.

![Firefox Stap 3](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/disable-javascript/firefox/firefox-step-3.png "Firefox Stap 3")

**Stap 4**

Dubbelklik op `javascript:enabled` om hem uit te zetten. Als dit goed gaat komt er `false` te staan in plaats van `true`.

![Firefox Stap 4](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/disable-javascript/firefox/firefox-step-4.png "Firefox Stap 4")

## Safari

### Stappen

Bij Safari is JavaScript uitzetten het makkelijkst om te doen. Dit aangezien je alleen naar de instellingen hoeft te gaan en dat een vinkje bij security uit hoeft te zetten.

**Stap 1**

Ga naar `Safari > Preferences`.

![Safari Stap 1](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/disable-javascript/safari/safari-step-1.png "Safari Stap 1")

**Stap 2**

Ga naar de tab `Security`.

![Safari Stap 2](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/disable-javascript/safari/safari-step-2.png "Safari Stap 2")

**Stap 3**

Zet het vinkje bij `Web content: Enable JavaScript` uit.

![Safari Stap 3](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/disable-javascript/safari/safari-step-3.png "Safari Stap 3")

## Andere mogelijkheden voor uitschakelen van JavaScript

### Chrome

Bij Chrome kan je in DevTools ook JavaScript uitzetten om te testen wat er met een website gebeurt als JavaScript uitstaat. [Hier](https://developers.google.com/web/tools/chrome-devtools/javascript/disable) kan je lezen hoe dat moet.

### Chrome en Firefox

Ook kan je een plug-in downloaden voor Chrome en Firefox waarmee je JavaScript (en andere instellingen) in en uit kan schakelen. Deze plug-in heet [Web Developer](https://chrispederick.com/work/web-developer/ "Web Developer Plugin").

## Hoe te controleren of JavaScript is ingeschakeld

Het is lastig om server-side al te controleren of JavaScript is ingeschakeld of niet. Maar om ervoor te zorgen dat je website ook goed draait wanneer er JavaScript is uitgeschakeld, kan je het HTML-element [<noscript>](https://www.w3.org/TR/html52/semantics-scripting.html#the-noscript-element "Uitleg <noscript>") gebruiken. Wanneer JavaScript is ingeschakeld zullen de children van het element niet zichtbaar zijn, maar wanneer JavaScript is uitgeschakeld zijn ze dat wel.

Alhoewel het af te raden is, kan je dit ook bereiken door inline styles te gebruiken. Zoals in dit voorbeeld van Stack Overflow te zien is:

![Voorbeeld Stack Overflow](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/disable-javascript/stackoverflow-inline-styles-example.png "Voorbeeld Stack Overflow")

## Bronnen

- [Chrome JavaScript uitschakelen](https://nl.ccm.net/faq/2001-javascript-uitschakelen-in-google-chrome)
- [Firefox JavaScript uitschakelen](https://www.technipages.com/firefox-enable-disable-javascript)
- [Safari JavaScript uitschakelen](https://appsliced.co/ask/how-do-i-disable-javascript-in-safari)
- [Chrome DevTools JavaScript uitschakelen](https://developers.google.com/web/tools/chrome-devtools/javascript/disable)
- [Web Developer Plug-in](https://chrispederick.com/work/web-developer/)
- [Stack Overflow voorbeeld controleren JavaScript inline styles](https://stackoverflow.com/questions/121203/how-to-detect-if-javascript-is-disabled)
- [HTML noscript element voor controleren JavaScript](https://www.w3.org/TR/html52/semantics-scripting.html#the-noscript-element)
