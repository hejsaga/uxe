# Att göra

En att-göra-lista som ritar ut sig själv från en array. HTML och CSS är klara, och `script.js` är redan inkopplad. Där ligger fyra uppgifter i en array. Resten skriver du.

Sidan är formgiven för en stor skärm. I dag och imorgon lägger du all tid på JavaScript. På fredag gör du den användbar på mobilen.

Planera i kommentarer innan du skriver kod, precis som i Loopen.

## Markupen din kod ska bygga

CSS:en letar efter exakt den här strukturen. Bygger du den, så ser listan rätt ut av sig själv.

```html
<li class="task">
  <label>
    <input type="checkbox">
    <span class="task-text">Göra klart Loopen</span>
  </label>
</li>
```

En avklarad uppgift får klassen `done` på `<li>`: `<li class="task done">`.

## Steg 1: titta på arrayen

Skriv `console.log(tasks)` och öppna konsolen. Skriv ut texten i den första uppgiften, och om den är klar eller inte.

Tips: `tasks[0]` är det första objektet. Hur kommer du åt `text` i det?

## Steg 2: rita ut en uppgift

Hämta `#task-list` med `querySelector`. Skapa ett `<li>` med `createElement`, ge det texten från den första uppgiften med `textContent` och lägg in det i listan med `appendChild`.

Det räcker att det står text i ett `<li>`. Checkbox och label kommer sen.

## Steg 3: rita ut alla

Använd `forEach` på `tasks` så att alla fyra ritas ut. Du ska inte skriva samma kod fyra gånger. Det var hela poängen med i går.

Bygg nu ut varje rad till markupen ovan, med `<label>`, `<input type="checkbox">` och `<span class="task-text">`.

## Steg 4: visa vad som är klart

Om uppgiften är klar ska checkboxen vara ikryssad och `<li>` få klassen `done`. Den första uppgiften i arrayen är redan klar, så där ser du direkt om det fungerar.

Tips: en checkbox har egenskapen `checked`, som är `true` eller `false`.

## Steg 5: lägg till en ny uppgift

När formuläret skickas ska texten i fältet bli en ny uppgift längst ner i listan.

Lyssna efter `"submit"` på formuläret, inte `"click"` på knappen. Då fungerar Enter också, och "Gå" på mobilens tangentbord. Ett formulär laddar om sidan när det skickas, så börja din funktion med den här raden:

```js
event.preventDefault();
```

Lägg till ett nytt objekt i arrayen med `push`. Sedan måste sidan få veta det. Lägg koden från steg 3 i en funktion, till exempel `renderList`, och kör den igen.

Kolla: klickar du två gånger, dyker hela listan upp dubbelt? Då behöver du tömma listan innan du ritar ut den.

## Steg 6: bocka av

När någon kryssar i en checkbox ska uppgiften bli klar, och när krysset tas bort ska den bli oklar igen.

Ändra inte sidan direkt. Ändra `done` i objektet, och rita sedan om. Arrayen bestämmer, sidan visar.

## Om du hinner mer

- Visa hur många uppgifter som är kvar i `#status`, till exempel "3 kvar att göra".
- Lägg till en knapp på varje rad som tar bort uppgiften. Ge den klassen `remove-button`. Titta på `splice` på MDN, och på det andra värdet `forEach` kan ge dig.
- Vad händer om någon skickar formuläret med ett tomt fält? Se till att det inte blir en tom rad.
- Vad ska stå på sidan när listan är tom?
