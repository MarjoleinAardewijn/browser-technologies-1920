# Browser Technologies @cmda-minor-web 1920

## Inhoudsopgave

* [Opdracht 1 Deel 1 Progressive Enhancements](#Opdracht-1-Deel-1-Progressive-Enhancements)
  * [JavaScript](#JavaScript)
  * [LocalStorage doet het niet](#LocalStorage-doet-het-niet)
* [Opdracht 1 Deel 2 Features Testen](#Opdracht-1-Deel-2-Features-Testen)
  * [Screenreader](#Screenreader)
* [Opdracht 2](#Opdracht-2)
  * [Wireframes](#Wireframes)
  * [Functional layer](#Functional-layer)
  * [Reliable layer](#Reliable-layer)
  * [Usable layer](#Usable-layer)
  * [Pleasurable layer](#Pleasurable-layer)
  
## Opdracht 1 Deel 1 Progressive Enhancements

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

De uitwerking van dit onderzoek is [hier](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/opdrachten/opdracht-1/deel-1/onderzoek-javascript-uitschakelen.md "Onderzoek: JavaScript (volledig)") te lezen.

### LocalStorage doet het niet

De uitwerking van dit onderzoek is [hier](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/opdrachten/opdracht-1/deel-1/onderzoek-localstorage-doet-het-niet.md "Onderzoek: LocalStorage doet het niet") te lezen.

## Opdracht 1 Deel 2 Features Testen

Bij deze opdarcht moesten we individueel alle 8 features testen op Chrome, Firefox en een andere browser. Daarnaast moesten we ook ons [porject van OBA](https://marjoleinaardewijn.github.io/project-1-1920/ "Project OBA") testen op 3 verschillende devices.

De uitkomst van deze tests zijn [hier](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/opdrachten/opdracht-1/deel-2/tests.md "Uitkomst tests features") te lezen.

### Screenreader

Een ander onderdeel van deze opdracht was om een screenreader te gebruiken om je website. Hiervoor heb ik de standaar screenreader `VoiceOver` van Apple gebruikt. 

Wat ik erg lastig vond, is dat ik niet automatisch bij de content kon komen, omdat er geen titel was denk ik. Hierdoor zag hij ook de andere content in eerste instantie niet. Pas wanneer ik met de tab ging werken zag hij de items op de overview pagina staan en las hij die voor. Wanneer ik met de tab op een item ging staan zei hij bijv. bij apen: "visited, link, APEN, aap, main".

Ook zag hij de content van de details pagina niet. Alleen het logo en de back button zag hij. En ook met de tab kon ik er niet bij komen, dit doordat ze niet focussable zijn.

Het is dus zeker de moeite waard om me nog eens extra goed in screenreaders te verdiepen.

## Opdracht 2

### Wireframes

![Wireframes](https://user-images.githubusercontent.com/23479038/76976061-b3dbda80-6933-11ea-8a82-177809051bac.jpg "Wireframes")

### Functional layer

Ik zal symantische HTML schrijven, zodat hierdoor al een hoop mensen goed gebruik kunnen maken van de site. Daarbij houd ik rekening met o.a. mensen die geen muis kunnen/ willen gebruiken en blinde en slechtziende mensen die gebruik maken van screenreaders.

In deze laag zal ik de basis CSS inladen die cross-browser ondersteund wordt. Ook zal ik hier geen gebruik maken van JavaScript die Client side wordt gerendered. Om ervoor te zorgen dat de basis functionaliteiten zoals het submitten van de antwoorden werkt zal dit op de server verwerkt worden.

In de wireframes is deze laag de eerste twee flows (HTML & CSS).

### Reliable layer

Ook om ervoor te zorgen dat er zo min mogelijk fetch request gedaan hoeven te worden heb ik ervoor gekozen in get design om alle vragen op één pagina te laden. Op deze manier is er in eerste instantie alleen nog fetch requests nodig voor het ophalen van de vragen en voor het submitten.

### Usable layer

In deze laag zal ik ervoor zorgen dat in de cache (mbv cookies) de antwoorden, wanneer ze worden ingevuld, worden opgeslagen. Dit zal ervoor zorgen dat wanneer gebruikers stoppen ze later weer verder kunnen waar ze waren gebleven.

Verder zal ik hier ook gebruik gaan maken van CSS properties zoals `flex` en `box-shadow` toevoegen. Waarbij ik gebruik zal maken van de CSS fetaure detection in browser door de `@supports` feature te gebruiken om te controleren of een browser een bepaalde CSS property ondersteund.

### Pleasurable layer

In deze laag zal ik gebruik maken van animations en andere CSS features die misschien niet op alle browsers worden ondersteund. Ook zal ik hier met JavaScript ervoor zorgen wanneer een gebruiker een antwoord invuld hij/zij automatisch naar de volgende vraag gaat. Daarnaast zal ik ook bij de vragen die beantwoord zijn een vinkje zetten om op deze manier feedback aan de gebruiker terug te geven.

Verder wil ik hier ook nog een loading state instellen.
