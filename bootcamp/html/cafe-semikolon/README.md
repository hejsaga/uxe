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
cd bootcamp/html/uppstartsexempel/cafe-semikolon
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
| `steg-1-divsoppa-lösningsförslag` | Tisdag | Samma sida med semantiska element, alt-texter och label. |
| `steg-2-css-krock` | Tisdag | Tre inbyggda CSS-fel och ett !important som ska bort. |
| `steg-2-css-krock-lösningförslag` | Tisdag | Rättad CSS med förklaring vid varje fix. |
| `steg-3-fasta-bredder` | Onsdag | Samma sida med pixelbredder och utan meta viewport. Går sönder vid 375 px. |
| `steg-3-fasta-bredder-lösningsförslag` | Onsdag | Mobile-first med max-width, clamp och en media query. Utan flexbox och grid. |
| `steg-4-flex-och-grid` | Torsdag, egenstudier | Guidad uppgift. Läs `UPPGIFT.md` i mappen. |
| `steg-4-flex-och-grid-lösningsförslag` | Torsdag | Färdig lösning. Titta efteråt. |
| `mitt-arbete` | Hela veckan | Din mapp. |
| `bilder` | Delas av alla steg.

## Resan

1. Vad innehållet är avgör vilket element det blir.
2. Samma sida, nu med betydelse. Utseendet ändras knappt.
3. CSS som träffar rätt element, och vad som vinner när regler krockar.
4. Fasta bredder möter en riktig skärm.
5. Samma HTML, ny CSS, fungerar från 320 px och uppåt.
6. Flexbox och grid gör en del av det jobbet automatiskt.

HTML:en är identisk i steg 2, 4, 5 och 6 så när som på en rad, meta viewport.
Responsivitet är ett CSS-jobb, förutsatt att strukturen är vettig från början.
