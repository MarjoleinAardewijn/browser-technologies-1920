# Opdracht 1.2: Tests

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
