# Steg 4: flexbox och grid

Egenstudier. Gör Flexbox Froggy och Grid Garden först.

I går löste ni två problem: fasta bredder och en lista med kort som låg under
varandra. I dag ska sex olika element på samma sida få bete sig på sex olika
sätt, och ni ska själva avgöra om det är flexbox eller grid som passar.

Kopiera hela mappen `steg-4-flex-och-grid` till din `mitt-arbete`-mapp och jobba
där. Öppna `style.css`, uppgifterna står utplacerade som kommentarer vid rätt
selektor.

## Ny syntax ni får gratis

Fyra saker som varken slidesen eller spelen tar upp. Skriv av dem, ni behöver
inte kunna dem utantill i dag.

`flex: 1 1 14rem` på ett **barn** betyder tre saker i rad: får växa, får krympa,
vill helst vara 14rem brett.

`flex-shrink: 0` på ett barn betyder: krymp aldrig, bryt hellre rad.

`grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr))` betyder: gör så
många lika breda kolumner som får plats, men aldrig smalare än 15rem.

`grid-column: 1 / -1` betyder: det här elementet tar hela radens bredd.

## Uppgifterna

**1. Länkarna i sidhuvudet** ska ligga i rad med jämnt mellanrum i alla bredder,
och bryta rad av sig själva när de inte får plats. När det fungerar ska ni ta
bort regeln som gör samma sak i media queryn längst ner.

**2. Sidhuvudet** ska ha loggan till vänster och navigationen till höger, med
båda mitt för varandra i höjdled. När fönstret blir för smalt ska de hamna under
varandra i stället för att tryckas ihop.

**3. Formuläret** ska ha fältet och knappen på samma rad när det finns plats, och
under varandra när det inte finns. Fältet ska ta den plats som blir över.
Knappen ska aldrig krympa, texten på den ska alltid få plats.

**4. Menykorten** ska ligga i ett rutnät som själv väljer antal kolumner: tre på
en bred skärm, två på en surfplatta, ett på en mobil. Ingen media query.
I går löste ni samma sak med flexbox. Gör den här versionen med grid och
jämför: vad händer med det sista kortet om ni lägger till en fjärde rätt på
menyn? Testa, det skiljer sig mellan de två.
För den jämförelsen behöver ni lägga till ett fjärde kort i `index.html` också.
Kopiera en `<li>` och byt text, det spelar ingen roll vad som står i den.

**5. Öppettiderna** ska ligga som två spalter, dagarna till vänster och tiderna
till höger, med spalterna i linje med varandra. Vänsterspalten ska vara precis
så bred som den längsta dagtexten kräver, inte bredare.

**6. Frivillig utmaning.** Få Öppettider och Dagens tips att stå bredvid
varandra på en bred skärm, medan Menyn och Nyhetsbrevet tar hela bredden. På en
smal skärm ligger allt under varandra som vanligt.

## Efteråt

Räkna raderna i media queryn längst ner i filen. Hur många var den på i går, och
vad är kvar nu? Det som är kvar ska bara vara designval, inte lagningar.

Skriv tre till fem meningar i lärloggen: vilka av uppgifterna löste ni med
flexbox, vilka med grid, och hur tänkte ni när ni valde? I morgon ska ni välja
ett av dem till er egen om-mig-sida, och det här är underlaget för det valet.

Ni får ett lösningsförslag för denna uppgift längre fram.
