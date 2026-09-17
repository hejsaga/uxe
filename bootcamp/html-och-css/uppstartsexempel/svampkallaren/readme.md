# Om index.html och about-us.html

De här två filerna är exempel som du kan titta i och ändra i. Du kan inte "förstöra"
något, så var nyfiken. Ändra ett värde, ladda om sidan och se vad som hände.

## Tre språk i samma fil

I filerna hittar du HTML, CSS och JavaScript på samma ställe. En HTML-fil tillåter
nämligen att andra språk används inom särskilda taggar.

| Språk | Vad det gör | Var du hittar det |
|-------|-------------|-------------------|
| HTML | Strukturen: innehållet och taggarna omkring det | Hela filen |
| CSS | Utseendet | `<style>` i `<head>`, eller `style`-attribut på enskilda element |
| JavaScript | Det som händer, oftast vid klick eller inmatning | `<script>` |

Träna på att se skillnaden redan från början. Fråga dig vid varje rad:

> Beskriver den **vad något är**, **hur det ser ut**, eller **vad som ska hända**
> när någon gör något?

## Varför allt ligger i en och samma fil

I ett riktigt projekt ligger vanligtvis CSS i en egen `.css`-fil och JavaScript i en egen
`.js`-fil, och HTML-filen länkar till dem. Här ligger allt tillsammans för att det
ska gå snabbt att överblicka. Vi delar upp det längre fram, och då kommer du känna
igen dig.

## Så öppnar du filerna

1. Dubbelklicka på filen för att se sidan i webbläsaren.
2. Öppna mappen i VSCode för att se koden.
3. Ha gärna båda uppe samtidigt. Då ser du effekten av varje ändring direkt.

Högerklicka sedan på sidan och välj **Inspektera**. Där ser du strukturen till
vänster och den CSS som faktiskt gäller till höger. Det är samma verktyg vi
använder på lektionerna.

## Prova själv

- Ändra en färg eller en storlek i CSS:en och ladda om.
- Byt ut en rubriktext i HTML:en.
- Leta upp det som händer vid klick i script-taggen och läs igenom det långsamt.
Du behöver inte förstå allt än.