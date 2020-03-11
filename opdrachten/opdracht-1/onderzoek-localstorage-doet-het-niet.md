# Onderzoek: LocalStorage

## Inhoudsopgave

* [Cookies vs LocalStorage](#Cookies-vs-LocalStorage)
* [LocalStorage verwijderen](#LocalStorage-verwijderen)
  * [Developer Tools](#Developer-Tools)
    * [Chrome](#Chrome)
    * [Firefox](#Firefox)  
  * [Browser](#Browser)
    * [Chrome](#Chrome)
    * [Firefox](#Firefox)
    * [Safari](#Safari)
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

#### Chrome

In dit [artikel](https://developers.google.com/web/tools/chrome-devtools/storage/localstorage?utm_source=devtools) 
kan je lezen hoe je via Dev Tools (`inspector`) de LocalStorage van websites van verwijderen.

#### Firefox

Om de LocalStorage ver websites te verwijderen via Firefox moet je de volgende stappen doorlopen.

**Stap 1**

Ga naar de website waarvan je de LocalStorage wilt verwijderen.

**Stap 2**

Op de `inspector`.

- Rechtermuisklik in browser.
- Kies `Inspect Element`.

**Stap 3**

Ga naar de tab `Storage`.

![Firefox Stap 3](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/clear-localstorage/firefox/firefox-localstorage-step-3.png "Firefox Stap 3")

**Stap 4**

Ga naar `LocalStorage`.

![Firefox Stap 4](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/images/clear-localstorage/firefox/firefox-localstorage-step-4.png "Firefox Stap 4")

### Browser

**Let op**: Dit is een definitieve stap! Als je dit hebt uitgevoerd is de data die je hebt verwijderd niet meer terug te halen.

#### Chrome

**Stap 1**

Druk ctrl+shift+del (Windows) of cmd+shift+back (Mac) om de `Clear browsing data` pagina in Chrome te openen.

**Stap 2**

Vink `Cookies and other site data` aan.

**Stap 3**

Veranderd het tijdsvak naar `the beginning of time` als je het alles wilt verwijderen of een ander tijdvak als je maar van bijv. alleen vandaag wilt verwijderen.

**Stap 4**

Klik op de knop `Clear browsing data` om alles te verwijderen.

#### Firefox

**Stap 1**

Druk ctrl+shift+del (Windows) of cmd+shift+back (Mac) om de `Clear All History` menu in Firefox te openen.

**Stap 2**

Vink `Cookies` aan.

**Stap 3**

Veranderd het tijdsvak naar `teverything` als je het alles wilt verwijderen of een ander tijdvak als je maar van bijv. alleen vandaag wilt verwijderen.

**Stap 4**

Klik op de knop `Clear Now` om alles te verwijderen.

#### Safari

**Stap 1**

Op de `inspector`.

- Rechtermuisklik in browser.
- Kies `Inspect Element`.

**Stap 2**

Ga naar de tab `Console`.

**Stap 3**

type `localStorage.clear()` en klik op `Enter`.

**Stap 4**

Restart te browser.

## Bronnen

- [LocalStorage vs Cookies - Quora](https://www.quora.com/What-are-the-pros-and-cons-of-using-an-HTML5-local-storage-vs-cookies)
- [LocalStorage vs Cookies - Medium](https://medium.com/swlh/cookies-vs-localstorage-whats-the-difference-d99f0eb09b44)
- [LocalStorage verwijderen via Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/storage/localstorage?utm_source=devtools)
- [LocalStorage verwijderen - Ghacks](https://www.ghacks.net/2015/02/05/how-to-clear-web-storage-in-your-browser-of-choice/)
- [LocalStorage verwijderen - Arcgis](https://doc.arcgis.com/en/maps-for-powerbi/get-started/clear-browser-storage.htm)
