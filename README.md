# Browser Technologies @cmda-minor-web 1920

## Inhoudsopgave

* [1 Progressive Enhancements Onderzoeken](#1-Progressive-Enhancements-Onderzoeken)
  * [JavaScript](#JavaScript)
  * [LocalStorage doet het niet](#LocalStorage-doet-het-niet)
* [2 Features Testen](#2-Features-Testen)
  * [Screenreader](#Screenreader)
* [3 Progressive Enhanced Browser Technologie](#3-Progressive-Enhanced-Browser-Technologie)
  * [Wireframes](#Wireframes)
  * [Opbouw van de lagen](#Opbouw-van-de-lagen)
  
## 1 Progressive Enhancements Onderzoeken

Voor opdracht 1.1 moesten we een een groep van 6 personen de volgende features onderzoeken:
 
1. Afbeeldingen uitzetten
2. Custom fonts uitzetten
3. Kleuren uitzetten & kleurenblindheid instellen
4. Muis/Trackpad werkt niet
5. Breedband internet uitzetten
6. JavaScript (volledig)
7. Cookies niet accepteren
8. LocalStorage doet het niet

Van deze 8 features moest ieder 2 features onderzoeken. Ik heb gekozen voor de volgende twee:

1. JavaScript (volledig)
2. LocalStorage doet het niet

De links naar de uitwerking van de onderzoeken zijn hieronder te vinden.

### JavaScript

<details>
 <summary>Onderzoek: JavaScript uitschakelen</summary>

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
</details>

### LocalStorage doet het niet

<details>
 <summary>Onderzoek: LocalStorage</summary>

## Inhoudsopgave

* [Cookies vs LocalStorage](#Cookies-vs-LocalStorage)
* [LocalStorage verwijderen](#LocalStorage-verwijderen)
  * [Developer Tools](#Developer-Tools) 
  * [Browser](#Browser)
* [Bronnen](#Bronnen)

## Cookies vs LocalStorage

- Cookies zijn server-side en LocalStorage is client-side.

- Cookies hebben een maximale grootte van 4KB (4095 bytes) in tegenstelling van LocalStorage die een maximale grootte 
heeft van 5MB.

- LocalStorage gedraagt zich meer als permanente cookies in termen van vervaldatum. Gegevens worden niet 
automatisch vernietigd, tenzij deze worden gewist via JavaScript-code. Dit kan goed zijn voor grotere 
hoeveelheden gegevens die voor langere tijd moeten worden opgeslagen. Met LocalStorage kun je niet alleen 
`strings` opslaan, maar ook Javascript-primitieven en objecten.

- Cookies kunnen verlopen, terwijl LocalStorage met de hand verwijderd moet worden. Dit maakt LocalStorage 
meer permanent.

- Cookie zijn makkelijker voor gebruikers om uit te schakelen dan LocalStorage.

- Cookies zijn kleiner en sturen serverinformatie terug bij elk HTTP-verzoek, terwijl LocalStorage groter is en 
informatie aan de client-side kan bevatten.

- Een van de belangrijkste verschillen is dat, in tegenstelling tot cookies, gegevens niet bij elk HTTP-verzoek 
heen en weer hoeven te worden gestuurd. Dit vermindert het totale verkeer tussen de client en de server en de 
hoeveelheid verspilde bandbreedte. Dit komt omdat gegevens worden opgeslagen op de lokale schijf van de gebruiker 
en niet worden vernietigd of gewist door het verlies van een internetverbinding.

## LocalStorage verwijderen

### Developer Tools

**Chrome**

In dit [artikel](https://developers.google.com/web/tools/chrome-devtools/storage/localstorage?utm_source=devtools) 
kan je lezen hoe je via Dev Tools (`inspector`) de LocalStorage van websites van verwijderen.

**Firefox**

Om de LocalStorage ver websites te verwijderen via Firefox moet je de volgende stappen doorlopen.

1. Ga naar de website waarvan je de LocalStorage wilt verwijderen.

2. Op de `inspector`.

  - Rechtermuisklik in browser.
  - Kies `Inspect Element`.

3. Ga naar de tab `Storage`.

![Firefox Stap 3](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/clear-localstorage/firefox/firefox-localstorage-step-3.png "Firefox Stap 3")

4. Ga naar `LocalStorage`.

![Firefox Stap 4](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/clear-localstorage/firefox/firefox-localstorage-step-4.png "Firefox Stap 4")

### Browser

**Let op**: Dit is een definitieve stap! Als je dit hebt uitgevoerd is de data die je hebt verwijderd niet meer terug te halen.

**Chrome**

1. Druk ctrl+shift+del (Windows) of cmd+shift+back (Mac) om de `Clear browsing data` pagina in Chrome te openen.

2. Vink `Cookies and other site data` aan.

3. Veranderd het tijdsvak naar `the beginning of time` als je het alles wilt verwijderen of een ander tijdvak als je maar van bijv. alleen vandaag wilt verwijderen.

4. Klik op de knop `Clear browsing data` om alles te verwijderen.

**Firefox**

1. Druk ctrl+shift+del (Windows) of cmd+shift+back (Mac) om de `Clear All History` menu in Firefox te openen.

2. Vink `Cookies` aan.

3. Veranderd het tijdsvak naar `teverything` als je het alles wilt verwijderen of een ander tijdvak als je maar van bijv. alleen vandaag wilt verwijderen.

4. Klik op de knop `Clear Now` om alles te verwijderen.

**Safari**

1. Op de `inspector`.

- Rechtermuisklik in browser.
- Kies `Inspect Element`.

2. Ga naar de tab `Console`.

3. type `localStorage.clear()` en klik op `Enter`.

4. Restart te browser.

## Bronnen

- [LocalStorage vs Cookies - Quora](https://www.quora.com/What-are-the-pros-and-cons-of-using-an-HTML5-local-storage-vs-cookies)
- [LocalStorage vs Cookies - Medium](https://medium.com/swlh/cookies-vs-localstorage-whats-the-difference-d99f0eb09b44)
- [LocalStorage verwijderen via Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/storage/localstorage?utm_source=devtools)
- [LocalStorage verwijderen - Ghacks](https://www.ghacks.net/2015/02/05/how-to-clear-web-storage-in-your-browser-of-choice/)
- [LocalStorage verwijderen - Arcgis](https://doc.arcgis.com/en/maps-for-powerbi/get-started/clear-browser-storage.htm)
</details>

## 2 Features Testen

Bij deze opdarcht moesten we individueel alle 8 features testen op Chrome, Firefox en een andere browser. Daarnaast moesten we ook ons [porject van OBA](https://marjoleinaardewijn.github.io/project-1-1920/ "Project OBA") testen op 3 verschillende devices.

<details>
 <summary>Uitkomst tests</summary>

## Inhoudsopgave

* [Inleiding](#Inleiding)
* [Test op 3 verschillende devices](#Test-op-3-verschillende-devices)
  * [HTC Nexus 9 (tablet)](#HTC-Nexus-9-(tablet))
  * [IPod Touch](#IPod-Touch)
  * [Nokia Lumia 620](#Nokia-Lumia-620)
* [Browser Tests](#Browser-Tests)
  * [Layout](#Layout)
    * [Chrome en Safari](#Chrome-en-Safari)
    * [Firefox](#Firefox)
  * [JavaScript Uitzetten](#JavaScript-Uitzetten)
  * [Cookies & LocalStorage](#Cookies-&-LocalStorage)
  * [Geen Afbeeldingen](#Geen-Afbeeldingen)
  * [Muis/Trackpad Werkt Niet](#Muis/Trackpad-Werkt-Niet)
    * [Chrome](#Chrome)
    * [Firefox en Safari](#Firefox-en-Safari)
  * [Custom Fonts Uitzetten](#Custom-Fonts-Uitzetten)
  * [Kleurenblindheid](#Kleurenblindheid)
  * [Breedband Internet Uitzetten](#Breedband-Internet-Uitzetten)

## Inleiding

In dit document zijn de bevindingen van de tests van mijn [OBA project](https://marjoleinaardewijn.github.io/project-1-1920/) te zien.

## Test op 3 verschillende devices

### HTC Nexus 9 (tablet)

whichbrowser.net rapport: 
> You are using Chrome 80 on a HTC Nexus 9 running Android 7.1.1

> Mozilla/5.0 (Linux; Android 7.1.1; Nexus 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36

**Resultaat:** \
Werkt snel en geen bugs tegengekomen.

### IPod Touch

whichbrowser.net rapport: 
> You are using Safari on an Apple iPod touch running iOS 6.1.3

> Mozilla/5.0 (iPod; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B329 
Safari/8536.25

**Resultaat:** \
Alle styling valt weg. \
Router werkt niet > JS werkt waarschijnlijk niet.

### Nokia Lumia 620

whichbrowser.net rapport:
> You are using Mobile Internet Explorer 11.0 on a Nokia Lumia 620 running Windows Phone 8.1

> Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 620) 
like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537

**Resultaat:** \
Bijna alle styling valt weg. \
Router werkt niet > JS werkt waarschijnlijk niet.

## Browser Tests

Ik heb de website op de volgende browsers getest:

- Chrome
- Firefox
- Safari

Hieronder zijn de bevindingen van de tests te lezen. Wanneer er voor een bepaald probleem verschillende uitkomsten zijn 
heb ik mijn bevindingen per browser aangegeven.

### Layout

#### Chrome en Safari

Layout ziet eruit zoals het zou moeten zijn en is goed responsive.

#### Firefox

Op Firefox hebben de cards op de details pagina nog een backface.

![Firefox Layout Card Backface Bug](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/tests/oba-test-firefox-layout.png "OBA test - Card Backface Bug")

**Oplossing:** \
Om dit op te lossen door `transform: rotateY(0deg);` toe te voegen aan de properties van de class `book-front`.

### JavaScript Uitzetten

Wanneer de JavaScript is uitgezet werkt de site helemaal niet meer. De overview pagina ziet er wel nog hetzelfde uit, 
maar alle linkjes werken niet meer. Dit komt doordat alle HTML client-side wordt gerendered.

**Oplossing:** \
Alle HTML die dynamische content bevat server-side renderen.

### Cookies & LocalStorage

Om de cookies uit te schakelen heb ik de plugin [Web Developer](https://chrispederick.com/work/web-developer/) gebruikt.

Wanneer ik de cookies uitschakel, veranderd er qua layout niets aan mijn overview pagina. Maar wanneer ik op een categorie wil 
klikken krijg ik de volgende error in mijn console: 

> Uncaught (in promise) DOMException: Failed to read the 'localStorage' property from 'Window': Access is denied for this document.

Deze melding houd in dat mijn website geen toegang heeft tot de LocalStorage. Dit komt omdat LocalStorage samenhangt met de cookies.

**Oplossing:** \
In mijn code zou ik met een `try catch` deze error kunnen afvangen waarna ik twee mogelijke oplossingen kan implementeren:

1. Data gewoon ophalen zonder gebruik van LocalStorage.
2. Melding geven dat cookies ingeschakeld moeten worden om gebruik te maken van de site.

Deze twee mogelijkheden hebben zo hun voor- en nadelen. Zo kan de gebruiker bij de eerste oplossing toch gebruik maken 
van de website. Maar hier staat wel tegenover dat de website meer data zal ophalen en meer request zal doen naar de 
server. Hierbij loop je steeds het risico dat er ergens onderweg iets fout gaat waardoor de data niet goed opgehaald 
kan worden.

En bij de tweede oplossing is het voordeel dat de gebruiker feedback krijgt van de website. Wat nu niet het geval is. En 
dat de gebruiker dan zelf kan beslissen of hij/zij de cookies aan wilt zetten of niet, met als gevolg dat hij mogelijk 
niet gebruik kan maken van de website.

Voor het kiezen van een oplossing zou de overweging moeten maken met wat belangrijker is: hoeveelheid data verkeer of 
mogelijk helemaal geen gebruik kunnen maken van de website. Bij de eerste overwegen zou dan ook mee genomen moeten worden 
hoeveel request er per uur, dag, etc gedaan mogen worden naar de API. Dit kan namelijk bij de API van OBA een groot 
probleem kunnen opleveren aangezien je daar maar een x-aantal requests per uur mag doen. Dus mogelijk zou de eerste 
oplossing ervoor zorgen dat, wanneer er veel gebruikers zijn of gebruikers veel request maken, op een gegeven moment 
tijdelijk geen gebruik zouden kunnen maken van de app.

Naast dit alles is er sowieso geen feedback naar de user toe op het gebied van errors. Deze worden momenteel allemaal 
in de console gelogged. Hier zou dus sowieso nog naar gekeken moeten worden.

### Geen Afbeeldingen

Om de afbeeldingen uit te schakelen heb ik de plugin [Web Developer](https://chrispederick.com/work/web-developer/) 
gebruikt voor Chrome en voor Firefox en Safari heb ik heb via de instellingen uitgezet.

- Safari: `Preferences > Advanced > Show Develop menu in menu bar > Develop > Disable images`.
- Firefox: `about:config > permissions.default.image > 2 (all images)`.

Wanneer ik de images disable bij mijn OBA site blijft de structuur intact en laat hij mooi alle alt attributen zichtbaar 
worden op de overview pagina. Maar hier kan je wel zien dat ik een alt attribuut op het logo ben vergeten.

![Overview Page No Images](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/tests/oba-test-no-images-overview.png "OBA test - No Images: Overview Page")

Maar op de details pagina zie je dat er geen alt attributen op de afbeeldingen staan.

![Details Page No Images](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/tests/oba-test-no-images-details.png "OBA test - No Images: Details Page")

**Oplossing:** \
Zorgen dat op alle afbeeldingen alt attributen staan.

### Muis/Trackpad Werkt Niet

#### Chrome

Bij het testen werkt de overview pagina naar behoren en kunnen ook alle categorieën worden bereikt via de tab. Maar op de 
details pagina is alleen de terugknop via de tab te bereiken en kan je niet bij de boeken komen.

**Oplossing:** \
Dit kan opgelost worden door de boeken focussable te maken met CSS of JavaScript.

#### Firefox en Safari

Tijdens het testen kwam ik erachter dat ik in Firefox en Safari niet bij mijn content kan komen.
Ik heb geprobeerd om bij `System Preferences > Keyboard > Shortcuts > All Content` aan te zetten, maar ook dit loste het 
probleem niet op. En verder kon ik geen andere fixes voor deze bug vinden via internet.

**Oplossing:** \
Onbekend.

### Custom Fonts Uitzetten

Wanneer ik de cunstom fonts uitzet zie je dat bij de terug knop op de details pagina de back icon verdwijnt.

![Details No Back Icon](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/tests/oba-test-custom-fonts-no-back-icon.png "OBA test -No Back Icon")

**Oplossing:** \
Geen fontawseome gebruiken en icon vervangen voor eigen SVG.

### Kleurenblindheid

Voor het testen van kleurenblindheid heb ik de plugin [Colorblinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa "Chrome Plugin: Colorblinding") 
gebruikt. Met deze plugin kan je testen hoe je pagina eruit ziet bij verschillende soorten kleurenblindheid. 

Qua contrast is alles bij alle soorten kleurenblindheid nog goed zichtbaar. Maar soms zou het wel iets beter kunnen.

**Oplossing:** \
Waar nodig, sterkere contrasten gebruiken.

### Breedband Internet Uitzetten

Voor deze test heb ik in Chrome mijn snelheid op `slow 3G` gezet. Hierbij was wanneer gegevens in de LocalStorage waren 
opgeslagen geen verschil qua snelheid. Maar wanneer dit niet het geval was, duurde het langer voordat de data 
voor de categorie `uilen` binnengehaald was en duurde het ook langer voordat de images ingeladen waren.

Daarnaast kwam ik erachter dat ik ook geen loading state had ingesteld.

**Oplossing:** \
Loading state toevoegen voor ophalen van data. \
Voor images een skeleton UI die een loading state imiteert.
</details>

### Screenreader

Een ander onderdeel van deze opdracht was om een screenreader te gebruiken om je website. Hiervoor heb ik de standaar screenreader `VoiceOver` van Apple gebruikt. 

Wat ik erg lastig vond, is dat ik niet automatisch bij de content kon komen, omdat er geen titel was denk ik. Hierdoor zag hij ook de andere content in eerste instantie niet. Pas wanneer ik met de tab ging werken zag hij de items op de overview pagina staan en las hij die voor. Wanneer ik met de tab op een item ging staan zei hij bijv. bij apen: "visited, link, APEN, aap, main".

Ook zag hij de content van de details pagina niet. Alleen het logo en de back button zag hij. En ook met de tab kon ik er niet bij komen, dit doordat ze niet focussable zijn.

Het is dus zeker de moeite waard om me nog eens extra goed in screenreaders te verdiepen.

## 3 Progressive Enhanced Browser Technologie

Voor deze opdracht heb ik gekozen om de volgende use case uit te werken:

> Ik wil een enquete kunnen invullen over de minor Web Development, met verschillende antwoord mogelijkheden. Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

### Wireframes

![Wireframes](https://user-images.githubusercontent.com/23479038/76976061-b3dbda80-6933-11ea-8a82-177809051bac.jpg "Wireframes")

### Opbouw van de lagen
<details>
 <summary>Functional layer</summary>

Ik zal symantische HTML schrijven, zodat hierdoor al een hoop mensen goed gebruik kunnen maken van de site. Daarbij houd ik rekening met o.a. mensen die geen muis kunnen/ willen gebruiken en blinde en slechtziende mensen die gebruik maken van screenreaders.

In deze laag zal ik de basis CSS inladen die cross-browser ondersteund wordt. Ook zal ik hier geen gebruik maken van JavaScript die Client side wordt gerendered. Om ervoor te zorgen dat de basis functionaliteiten zoals het submitten van de antwoorden werkt zal dit op de server verwerkt worden.

In de wireframes is deze laag de eerste twee flows (HTML & CSS).
</details>

<details>
 <summary>Reliable layer</summary>

Ook om ervoor te zorgen dat er zo min mogelijk fetch request gedaan hoeven te worden heb ik ervoor gekozen om alle vragen op één pagina te laden. Op deze manier zijn er in eerste instantie alleen nog fetch requests nodig voor het ophalen van de vragen en voor het submitten. En zal de gebruiker zo min mogelijk last hebben van bijvoorbeeld een traag netwerk.
</details>

<details>
 <summary>Usable layer</summary>

In deze laag zal ik ervoor zorgen dat in de cache (mbv cookies) de antwoorden, wanneer ze worden ingevuld, worden opgeslagen. Dit zal ervoor zorgen dat wanneer gebruikers stoppen ze later weer verder kunnen waar ze waren gebleven.

Verder zal ik hier ook gebruik gaan maken van CSS properties zoals `flex` en `box-shadow` toevoegen. Waarbij ik gebruik zal maken van de CSS fetaure detection in browser door de `@supports` feature te gebruiken om te controleren of een browser een bepaalde CSS property ondersteund.
</details>

<details>
 <summary>Pleasurable layer</summary>

In deze laag zal ik gebruik maken van animations en andere CSS features die misschien niet op alle browsers worden ondersteund. Ook zal ik hier met JavaScript ervoor zorgen wanneer een gebruiker een antwoord invuld hij/zij automatisch naar de volgende vraag gaat. Daarnaast zal ik ook bij de vragen die beantwoord zijn een vinkje zetten om op deze manier feedback aan de gebruiker terug te geven.

Verder wil ik hier ook nog een loading state instellen.
</details>
