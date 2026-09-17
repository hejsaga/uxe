# Café Semikolon

Kursmaterial för vecka 38. En och samma webbsida genom hela veckan. Innehållet ändras aldrig, bara sättet det är byggt på.

## Hämta koden

Öppna en terminal. Skapa först en mapp där du vill ha dina kursprojekt och gå dit:

```bash
mkdir -p ~/Documents/chas
cd ~/Documents/chas
```

Klona sedan repot och öppna mappen i VSCode:

```bash
git clone https://github.com/hejsaga/uxe.git
cd uxe/bootcamp/html/uppstartsexempel/cafe-semikolon
code .
```

Fungerar inte `code .` så öppnar du VSCode och väljer Arkiv och sedan Öppna mapp.
Öppna **mappen**, inte en enskild fil, annars hittar inte HTML:en sin CSS.

Lägg mappen någonstans som inte synkas av OneDrive eller iCloud. Det brukar ställa
till det för Git.

## Hämta uppdateringar

Jag lägger till material under veckan. Ställ dig i projektmappen och kör:

```bash
git pull
```

## Regeln som gör att det fungerar

**Redigera aldrig i stegmapparna.** Kopiera den mapp du ska jobba i till
`mitt-arbete/` och redigera kopian. Annars krockar dina ändringar med mina nästa gång
du hämtar uppdateringar, och då blir det din första konflikt i Git. Den sparar vi.

## Innehåll

| Mapp | När | Vad |
|------|-----|-----|
| `steg-1-divsoppa` | Tisdag | Sidan byggd helt av div:ar. Den här bygger ni om. |
| `steg-2-css-krock` | Tisdag | Tre inbyggda CSS-fel och ett `!important` som ska bort. |
| `steg-3-fasta-bredder` | Onsdag | Samma sida med pixelbredder. Går sönder vid 375 px. |
| `steg-4-flex-och-grid` | Torsdag, egenstudier | Guidad uppgift. Läs `UPPGIFT.md` i mappen. |
| `mitt-arbete` | Hela veckan | Din mapp. Här ligger också en kopia av bilderna. |
| `bilder` | Hela veckan | Bilderna som stegmapparna delar på. |

I varje stegmapp ligger en undermapp `lösningsförslag`.

## Resan

1. Vad innehållet är avgör vilket element det blir.
2. CSS som träffar rätt element, och vad som vinner när regler krockar.
3. Fasta bredder möter en riktig skärm, och samma sida löst genom att beskriva gränser i stället för mått.
4. Flexbox och grid gör en del av placeringsjobbet automatiskt.

HTML:en är identisk i steg 2, 4, 5 och 6 så när som på en rad, meta viewport.
Responsivitet är ett CSS-jobb, förutsatt att strukturen är vettig från början.
