# Loopen

Du har fått en färdig sida: HTML och CSS är på plats, men ingenting händer när
man klickar. Det är ditt jobb den här veckan.

## Innan du börjar

Öppna `index.html` i webbläsaren. Titta igenom markupen så att du vet vad som finns.

Du kommer att skriva nästan samma kod flera gånger. Det är förväntat och inte meningen att du inte ska optimera det nu, vi löser det längre fram i veckan.

## Steg 1: skapa och koppla in din JavaScript

1. Skapa en fil som heter `script.js` i den här mappen.
2. Länka in den i `index.html`. Det finns en kommentar i `<head>` som visar var.
   Kom ihåg `defer`.
3. Skriv en rad kod som ändrar texten i spelaren längst ner till något eget.

**Klart när:** du laddar om sidan och texten längst ner har ändrats. Om ingenting
händer, öppna DevTools och titta på fliken Network. Hittar webbläsaren din fil?

## Steg 2: spela en låt

Få Spela-knappen på första låten att skriva ut låtens titel i spelaren, till
exempel "Spelar nu: Norrsken".

Titeln står redan i markupen. Hämta den därifrån i stället för att skriva samma
text en gång till i din JavaScript.

När den fungerar, gör samma sak för de andra tre låtarna.

**Klart när:** alla fyra Spela-knappar byter texten i spelaren.

## Steg 3: visa i listan att låten spelas

Just nu syns det bara längst ner på sidan vilken låt som är vald. Det räcker
inte. Användaren tittar på listan, inte på spelaren.

1. Lägg till klassen `playing` på den låt som spelas.
2. Gå till `style.css` och bestäm hur `.track.playing` ska se ut. JavaScript
   bestämmer *när* klassen sitter där, CSS bestämmer *hur* den ser ut.
3. Byt också texten på knappen från "Spela" till "Pausa".

Bara en låt kan spelas åt gången. Klickar man på en ny måste den förra släckas.

**Klart när:** det syns i listan vilken låt som spelas, och det är omöjligt att
få två låtar att se ut som om de spelar samtidigt.

## Steg 4: pausa

Klickar man på Pausa ska låten sluta spela. Spelaren längst ner går tillbaka till
"Ingenting spelas just nu" och knappen säger "Spela" igen.

Samma knapp gör alltså två olika saker beroende på tillståndet. Det är precis vad
`if` och `else` är till för.

**Klart när:** samma knapp startar och pausar.

## Steg 5: gilla en låt

1. Få hjärtknappen att växla klassen `liked` på knappen.
2. Formge `.like-button.liked` i `style.css`. Vill du fylla hjärtat i stället
   för att bara rita konturen är raden `.like-button.liked svg { fill: currentColor; }`.
3. Räkna upp siffran i navigeringen högst upp. Klickar man igen ska den räknas
   ner.

Håll koll på antalet i en variabel.

**Tips:** låt `playing` och `liked` se olika ut på olika sätt. Ändrar båda
bakgrundsfärgen på raden går det inte att se vilket som är vilket.

**Klart när:** siffran stämmer när du gillar och ogillar om vartannat.

## Checklista

- [ ] All JavaScript ligger i `script.js`, ingen kod i HTML-filen
- [ ] Inga `onclick` i markupen, allt kopplas med `addEventListener`
- [ ] `const` som standard, `let` bara där värdet faktiskt ändras
- [ ] Beskrivande namn på variabler och funktioner
- [ ] Inga röda fel i konsolen
- [ ] Allt går att nå och använda med tangentbord, testa med Tab och Enter
- [ ] Sidan ser vettig ut både på mobilbredd och på full skärm

## Om du hinner mer

**Spelaren som växer.** Spela låten med den långa titeln. Vad händer med fältet längst ner? Fixa det så att raden håller sig på en rad. Sök på text-overflow och white-space. Fundera också på om det är rätt lösning: är det bättre att kapa titeln, eller att låta den ta två rader?

**Räknaren som vaknar.** Det ligger redan en klass i CSS-filen som heter
`has-items` och gör siffran rosa. Få den att sättas när du gillat minst en låt,
och tas bort när du ogillar den sista.

**Berätta för skärmläsare också.** Knapparna har `aria-pressed="false"` i
markupen. Attributet ska följa med när tillståndet ändras. Sök på `aria-pressed`
på MDN.

**Total speltid.** Varje låt har sin längd i sekunder i markupen, som
`data-duration`. Räkna ut och visa hur lång tid dina gillade låtar tar tillsammans.
Sök på `dataset`.

**Riktigt ljud.** Det går att få sidan att faktiskt spela musik med ett
`<audio>`-element och `play()`. Den knepiga delen är inte att starta ljudet, utan
att gränssnittet ska stämma när låten tar slut av sig själv. 