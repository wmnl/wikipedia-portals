# Wikipedia.nl & Wikipedia.be portals
Developed and designed by [Hay Kranen](https://www.haykranen.nl/).

## Developing
You need [Node.js](https://nodejs.org/en/). In the root of this project run

`npm install`

To install dependencies. After that you can run

`npm run dev`

To build the HTML and CSS whenever you change a source file. To just build the files without 'watching':

`npm run build`

Definitions for the language editions can be found in `etc/data.json`.

## Archival versions
The old versions of the portal can be found in the `archive` directory.

## Rationale (in Dutch)
Waarom een nieuwe Wikipedia.nl/be?

# Problemen met de huidige website
* Alle content wordt ingeladen met Javascript, als iemand geen Javascript heeft aanstaan is de site niet bruikbaar
* De site is technisch verouderd. Bepaalde onderdelen (b.v. de zoekbox) werken niet in alle browsers of niet optimaal
* De site is niet vriendelijk voor mobiele (touch) apparaten zoals smartphones en tablets
* De site is qua vormgeving onrustig en onduidelijk.

# Opzet nieuwe website
* Twee belangrijkste zaken die mensen doen op de portal: zoeken en direct doorlinken naar een taaleditie, dus dat centraal
* 'Mobile first', moet net zo goed werken op touch devices als op een desktop
* Zo licht en snel mogelijk: site moet zo snel mogelijk laden

# Nieuwe website
* Helder en duidelijk ontwerp: zoeken en taaledities als eerste
* Grote zoekbox
* Ook andere talen beschikbaar met één klik, standaard verborgen om beeld rustig en overzichtelijk te houden
* Links naar foundation / WMNL