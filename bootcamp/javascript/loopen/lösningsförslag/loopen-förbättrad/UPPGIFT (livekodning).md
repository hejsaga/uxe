# Livekodning: Loopen med en loop

Vi skriver om Loopen så att koden inte upprepas en gång per låt. Sidan ska se ut och bete sig exakt som förut. Det enda som ändras är hur koden är skriven.

**Utgångsläge:** `script.js` i rotmappen för Loopen
**Mål:** efter-versionen, där en femte låt i HTML fungerar utan att vi rör JavaScript

## Innan du börjar: kolla HTML:en

Efter-versionen letar efter klasser, inte id:n. Varje låt behöver se ut ungefär så här:

```html
<li class="track" id="track-1">
  <span class="track-title">Låtens namn</span>
  <button class="play-button" id="play-1" aria-pressed="false">Spela</button>
  <button class="like-button" id="like-1" aria-pressed="false">Gilla</button>
</li>
```

Id:na kan ligga kvar, de gör ingen skada. Men utan klasserna `track`, `play-button` och `like-button` hittar loopen ingenting.

## Steg 0: visa problemet (3 min)

Hitta mönstret innan du skriver något.

1. Scrolla igenom `script.js`. Fråga: **vad skiljer raderna åt?** Svaret är bara siffran.
2. Kopiera en låt i HTML och gör den till låt 5. Ladda om sidan och klicka. Ingenting händer.
3. Fråga: **vad skulle vi behöva ändra i JavaScript för att låt 5 ska fungera?** Tre nya variabler, tre nya rader i `stopAllTracks` och två nya eventlyssnare. För varje ny låt.

Koden växer med innehållet. Vi vill ha kod som fungerar oavsett hur många låtar som finns.

## Steg 1: arrayer och NodeList i konsolen (7 min)

Innan vi rör koden ska vi titta på en lista:

```javascript
const songs = ["Dancing Queen", "Levitating", "Blinding Lights"];

songs.length;   // 3
songs[0];       // "Dancing Queen"

songs.forEach(function (song) {
  console.log("Nu spelas: " + song);
});
```

- En **array** är en lista med värden i ordning. Den första har index 0.
- `forEach` kör samma kod en gång för varje värde. Värdet hamnar i parametern, här `song`.
- Vi skriver koden **en** gång. Loopen upprepar den åt oss.

Visa sedan samma sak med elementen på sidan:

```javascript
const tracks = document.querySelectorAll(".track");

tracks;          // NodeList(4)
tracks.length;   // 4
tracks[0];       // första låten

tracks.forEach(function (track) {
  console.log(track);
});
```

- `querySelector` ger **ett** element, det första den hittar.
- `querySelectorAll` ger **alla** som matchar, i en NodeList.
- En NodeList är inte riktigt en array, men den fungerar som en: den har `length`, index och `forEach`. Mer än så behöver vi inte i dag.

Hovra över `tracks[0]` i konsolen så att låten lyser upp på sidan.

## Steg 2: hämta alla låtar på en gång (2 min)

Lägg till överst i filen:

```javascript
const tracks = document.querySelectorAll(".track");
```

Låt de gamla variablerna ligga kvar tills vidare. Då fungerar sidan hela tiden medan vi skriver om, och vi tar ett steg i taget.

## Steg 3: skriv om stopAllTracks (7 min)

Titta på de tolv raderna och fråga: **vad gör vi med varje låt?** Tre saker: tar bort klassen `playing`, sätter texten till "Spela" och sätter `aria-pressed` till false. Samma tre saker, fyra gånger.

Skriv loopen och gör en sak för en låt:

```javascript
function stopAllTracks() {
  tracks.forEach(function (track) {
    track.classList.remove("playing");
  });
}
```

Nu kommer frågan som är viktigast i hela övningen: **var hittar vi knappen, när vi inte har `playButton1` längre?** Svaret är att den ligger inuti låten. Då letar vi där, i stället för i hela dokumentet:

```javascript
const playButton = track.querySelector(".play-button");
```

Poängera skillnaden:
- `document.querySelector(".play-button")` söker i hela sidan och hittar alltid den första knappen.
- `track.querySelector(".play-button")` söker bara inuti den här låten och hittar rätt knapp.

Lägg till de två sista raderna så att funktionen blir färdig:

```javascript
function stopAllTracks() {
  tracks.forEach(function (track) {
    const playButton = track.querySelector(".play-button");

    track.classList.remove("playing");
    playButton.textContent = "Spela";
    playButton.setAttribute("aria-pressed", "false");
  });
}
```

Testa i webbläsaren. Spela en låt, spela en annan. 

## Steg 4: koppla knapparna med en loop (7 min)

Samma fråga igen: **vad gör vi för varje låt?** Vi hämtar två knappar och kopplar en lyssnare till var och en.

```javascript
tracks.forEach(function (track) {
  const playButton = track.querySelector(".play-button");
  const likeButton = track.querySelector(".like-button");

  playButton.addEventListener("click", function () {
    togglePlayback(track, playButton);
  });

  likeButton.addEventListener("click", function () {
    toggleTrackLike(likeButton);
  });
});
```

- `togglePlayback` och `toggleTrackLike` ändrar vi inte alls. De tog redan emot låten och knappen som parametrar, så de bryr sig inte om var värdena kommer ifrån.
- Varje varv i loopen har sin egen `track`, sin egen `playButton` och sin egen `likeButton`. När någon klickar vet lyssnaren vilken låt den hör till.

Ta nu bort de åtta gamla `addEventListener`-blocken. Testa. Varje knapp ska fortfarande fungera, och bara en gång per klick.

## Steg 5: städa och bevisa (4 min)

1. Ta bort de tolv variablerna `track1` till `likeButton4`. Sök i filen efter `track1`, `playButton1` och `likeButton1` så att inget ligger kvar.
2. Ladda om och testa alla knappar.
3. Lägg till låt 5 i HTML igen. Ladda om. Nu fungerar den, utan att vi rört JavaScript.

Det sista är beviset. Stanna kvar vid det en stund.

## Summering (2 min)

- Hämtningen gick från tolv rader till en.
- `stopAllTracks` gick från tolv rader till fem.
- Kopplingen av knapparna gick från 32 rader till tolv.
- `updateStatusText`, `togglePlayback` och `toggleTrackLike` är orörda. Bra funktioner med tydliga parametrar behöver inte skrivas om när resten ändras.

Knyt an till att-göra-listan: där ligger uppgifterna redan i en array, och ni använder `forEach` för att rita ut dem. Samma mönster, men åt andra hållet: i stället för att hämta element från sidan skapar ni dem.

