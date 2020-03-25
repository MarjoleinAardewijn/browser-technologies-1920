# Browser Technologies @cmda-minor-web 1920

## Feeback punten

Graag zou ik feedback willen ontvangen over de volgende punten:

- Is mijn denkwijze bij de lagen correct?
- In `views/questions.ejs` heb ik allemaal `if` statements staan om te controleren of een waarde van een radio button in de url staat en dan `checked` erbij te zetten. Hiervoor heb ik nu `if` statements gebruikt, aangezien ik alle vragen dynamisch inlaad, maar is er ook een manier om dit zonder al die `if` statements te doen? Ik heb namelijk al van alles geprobeerd maar kon zelf geen een andere oplossing vinden zonder client side JS te moeten gebruiken.

## Inhoudsopgave

* [Live Demo](#Live-Demo)
* [Opdracht 1](#Opdracht-1)
* [Opdracht 2](#Opdracht-2)
  * [Wireframes](#Wireframes)
  * [Opbouw van de lagen](#Opbouw-van-de-lagen)
* [Licence](#Licence)

## Live Demo

The live demo of the app can be found here:
[Live Demo Link](https://boiling-gorge-63096.herokuapp.com/)

## Opdracht 1

De uitwerking van opdracht 1 is te zien in mijn [wiki](https://github.com/MarjoleinAardewijn/browser-technologies-1920/wiki "Wiki").

## Opdracht 2

Voor deze opdracht heb ik gekozen om de volgende use case uit te werken:

> Ik wil een enquete kunnen invullen over de minor Web Development, met verschillende antwoord mogelijkheden. Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

### Wireframes

![Wireframes](https://user-images.githubusercontent.com/23479038/77156346-82801d80-6a9f-11ea-8855-3633ff8c9369.jpg "Wireframes")

### Opbouw van de lagen
<details>
 <summary>Functional en Reliable layer</summary>

Ik zal symantische HTML schrijven, zodat hierdoor al een hoop mensen goed gebruik kunnen maken van de site. Daarbij houd ik rekening met o.a. mensen die geen muis kunnen/ willen gebruiken en blinde en slechtziende mensen die gebruik maken van screenreaders.

Om ervoor te zorgen dat de basis functionaliteiten zoals het submitten van de antwoorden werkt zal ik ervoor zorgen dat dit op de server wordt verwerkt.

Om ervoor te zorgen dat de gebruiker later door kan waar hij/zij was gebleven in de enquête zal ik alle data in de url wegschrijven wanneer de gebruiker het opslaat of naar de volgende pagina gaat. Zodat dit ook voor mensen die cookies hebben uitgeschakeld te gebruiken is.

Verder zal ik in deze laag ook de basis CSS inladen die cross-browser ondersteund wordt. 
</details>

<details>
 <summary>Usable layer</summary> 
 
In deze laag zal ik de CSS meer uitbreiden door gebruik te maken van CSS properties zoals `flex` en `box-shadow`. Hierbij zal ik gebruik maken van de CSS feature detection in de browser door de `@supports` rule te gebruiken om te controleren of een browser een bepaalde CSS property ondersteund.
</details>

<details>
 <summary>Pleasurable layer</summary>

In deze laag zal ik gebruik maken van animations en andere CSS features die misschien niet op alle browsers worden ondersteund. Ook wil ik hier een progress bar toevoegen met JavaScript om de voortgang van de gebruiker op een meer visuele manier te tonen. En daarbij ook het aantrekkelijker maken door pagination toe te voegen, waardoor er elke keer maar 1 vraag zichtbaar is. En verder wil ik er hier nog voor zorgen dat buttons naar de volgende pagina pas clickable zijn wanneer de input field op die "pagina" zijn ingevuld.

Verder wil ik hier ook nog een loading state instellen en cache gaan gebruiken in plaats van alles wegschrijven naar een json bestand.
</details>

## Sources

- [Progress Bar](https://jsfiddle.net/vNCGh/)
- [Copy to Clipboard](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp)
- [Safe Web Fonts](https://web.mit.edu/jmorzins/www/fonts.html)
- [Pagination](https://www.sitepoint.com/simple-javascript-quiz/)
- [overflow-wrap: break-word](https://stackoverflow.com/questions/12196885/text-flowing-out-of-div)

## Credits

## Licence

[MIT License](https://github.com/MarjoleinAardewijn/browser-technologies-1920/blob/master/LICENSE.txt).

Copyright (c) 2020 Marjolein Aardewijn
