import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const axios = require("axios")

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor() {
    super();
    this.list = []
    this.state = {
      imgURL: "",
      selectDog: "",
      breeds: []
    }
  }

pokemonList = () =>{
  const pNames = `Select Pokemon
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
Sandshrew
Sandslash
Nidoran♀
Nidorina
Nidoqueen
Nidoran♂
Nidorino
Nidoking
Clefairy
Clefable
Vulpix
Ninetales
Jigglypuff
Wigglytuff
Zubat
Golbat
Oddish
Gloom
Vileplume
Paras
Parasect
Venonat
Venomoth
Diglett
Dugtrio
Meowth
Persian
Psyduck
Golduck
Mankey
Primeape
Growlithe
Arcanine
Poliwag
Poliwhirl
Poliwrath
Abra
Kadabra
Alakazam
Machop
Machoke
Machamp
Bellsprout
Weepinbell
Victreebel
Tentacool
Tentacruel
Geodude
Graveler
Golem
Ponyta
Rapidash
Slowpoke
Slowbro
Magnemite
Magneton
Farfetch'd
Doduo
Dodrio
Seel
Dewgong
Grimer
Muk
Shellder
Cloyster
Gastly
Haunter
Gengar
Onix
Drowzee
Hypno
Krabby
Kingler
Voltorb
Electrode
Exeggcute
Exeggutor
Cubone
Marowak
Hitmonlee
Hitmonchan
Lickitung
Koffing
Weezing
Rhyhorn
Rhydon
Chansey
Tangela
Kangaskhan
Horsea
Seadra
Goldeen
Seaking
Staryu
Starmie
Mr. Mime
Scyther
Jynx
Electabuzz
Magmar
Pinsir
Tauros
Magikarp
Gyarados
Lapras
Ditto
Eevee
Vaporeon
Jolteon
Flareon
Porygon
Omanyte
Omastar
Kabuto
Kabutops
Aerodactyl
Snorlax
Articuno
Zapdos
Moltres
Dratini
Dragonair
Dragonite
Mewtwo
Mew
Chikorita
Bayleef
Meganium
Cyndaquil
Quilava
Typhlosion
Totodile
Croconaw
Feraligatr
Sentret
Furret
Hoothoot
Noctowl
Ledyba
Ledian
Spinarak
Ariados
Crobat
Chinchou
Lanturn
Pichu
Cleffa
Igglybuff
Togepi
Togetic
Natu
Xatu
Mareep
Flaaffy
Ampharos
Bellossom
Marill
Azumarill
Sudowoodo
Politoed
Hoppip
Skiploom
Jumpluff
Aipom
Sunkern
Sunflora
Yanma
Wooper
Quagsire
Espeon
Umbreon
Murkrow
Slowking
Misdreavus
Unown
Wobbuffet
Girafarig
Pineco
Forretress
Dunsparce
Gligar
Steelix
Snubbull
Granbull
Qwilfish
Scizor
Shuckle
Heracross
Sneasel
Teddiursa
Ursaring
Slugma
Magcargo
Swinub
Piloswine
Corsola
Remoraid
Octillery
Delibird
Mantine
Skarmory
Houndour
Houndoom
Kingdra
Phanpy
Donphan
Porygon2
Stantler
Smeargle
Tyrogue
Hitmontop
Smoochum
Elekid
Magby
Miltank
Blissey
Raikou
Entei
Suicune
Larvitar
Pupitar
Tyranitar
Lugia
Ho-Oh
Celebi
Treecko
Grovyle
Sceptile
Torchic
Combusken
Blaziken
Mudkip
Marshtomp
Swampert
Poochyena
Mightyena
Zigzagoon
Linoone
Wurmple
Silcoon
Beautifly
Cascoon
Dustox
Lotad
Lombre
Ludicolo
Seedot
Nuzleaf
Shiftry
Taillow
Swellow
Wingull
Pelipper
Ralts
Kirlia
Gardevoir
Surskit
Masquerain
Shroomish
Breloom
Slakoth
Vigoroth
Slaking
Nincada
Ninjask
Shedinja
Whismur
Loudred
Exploud
Makuhita
Hariyama
Azurill
Nosepass
Skitty
Delcatty
Sableye
Mawile
Aron
Lairon
Aggron
Meditite
Medicham
Electrike
Manectric
Plusle
Minun
Volbeat
Illumise
Roselia
Gulpin
Swalot
Carvanha
Sharpedo
Wailmer
Wailord
Numel
Camerupt
Torkoal
Spoink
Grumpig
Spinda
Trapinch
Vibrava
Flygon
Cacnea
Cacturne
Swablu
Altaria
Zangoose
Seviper
Lunatone
Solrock
Barboach
Whiscash
Corphish
Crawdaunt
Baltoy
Claydol
Lileep
Cradily
Anorith
Armaldo
Feebas
Milotic
Castform
Kecleon
Shuppet
Banette
Duskull
Dusclops
Tropius
Chimecho
Absol
Wynaut
Snorunt
Glalie
Spheal
Sealeo
Walrein
Clamperl
Huntail
Gorebyss
Relicanth
Luvdisc
Bagon
Shelgon
Salamence
Beldum
Metang
Metagross
Regirock
Regice
Registeel
Latias
Latios
Kyogre
Groudon
Rayquaza
Jirachi
Deoxys
Turtwig
Grotle
Torterra
Chimchar
Monferno
Infernape
Piplup
Prinplup
Empoleon
Starly
Staravia
Staraptor
Bidoof
Bibarel
Kricketot
Kricketune
Shinx
Luxio
Luxray
Budew
Roserade
Cranidos
Rampardos
Shieldon
Bastiodon
Burmy
Wormadam
Mothim
Combee
Vespiquen
Pachirisu
Buizel
Floatzel
Cherubi
Cherrim
Shellos
Gastrodon
Ambipom
Drifloon
Drifblim
Buneary
Lopunny
Mismagius
Honchkrow
Glameow
Purugly
Chingling
Stunky
Skuntank
Bronzor
Bronzong
Bonsly
Mime Jr.
Happiny
Chatot
Spiritomb
Gible
Gabite
Garchomp
Munchlax
Riolu
Lucario
Hippopotas
Hippowdon
Skorupi
Drapion
Croagunk
Toxicroak
Carnivine
Finneon
Lumineon
Mantyke
Snover
Abomasnow
Weavile
Magnezone
Lickilicky
Rhyperior
Tangrowth
Electivire
Magmortar
Togekiss
Yanmega
Leafeon
Glaceon
Gliscor
Mamoswine
Porygon-Z
Gallade
Probopass
Dusknoir
Froslass
Rotom
Uxie
Mesprit
Azelf
Dialga
Palkia
Heatran
Regigigas
Giratina
Cresselia
Phione
Manaphy
Darkrai
Shaymin
Arceus
Victini
Snivy
Servine
Serperior
Tepig
Pignite
Emboar
Oshawott
Dewott
Samurott
Patrat
Watchog
Lillipup
Herdier
Stoutland
Purrloin
Liepard
Pansage
Simisage
Pansear
Simisear
Panpour
Simipour
Munna
Musharna
Pidove
Tranquill
Unfezant
Blitzle
Zebstrika
Roggenrola
Boldore
Gigalith
Woobat
Swoobat
Drilbur
Excadrill
Audino
Timburr
Gurdurr
Conkeldurr
Tympole
Palpitoad
Seismitoad
Throh
Sawk
Sewaddle
Swadloon
Leavanny
Venipede
Whirlipede
Scolipede
Cottonee
Whimsicott
Petilil
Lilligant
Basculin
Sandile
Krokorok
Krookodile
Darumaka
Darmanitan
Maractus
Dwebble
Crustle
Scraggy
Scrafty
Sigilyph
Yamask
Cofagrigus
Tirtouga
Carracosta
Archen
Archeops
Trubbish
Garbodor
Zorua
Zoroark
Minccino
Cinccino
Gothita
Gothorita
Gothitelle
Solosis
Duosion
Reuniclus
Ducklett
Swanna
Vanillite
Vanillish
Vanilluxe
Deerling
Sawsbuck
Emolga
Karrablast
Escavalier
Foongus
Amoonguss
Frillish
Jellicent
Alomomola
Joltik
Galvantula
Ferroseed
Ferrothorn
Klink
Klang
Klinklang
Tynamo
Eelektrik
Eelektross
Elgyem
Beheeyem
Litwick
Lampent
Chandelure
Axew
Fraxure
Haxorus
Cubchoo
Beartic
Cryogonal
Shelmet
Accelgor
Stunfisk
Mienfoo
Mienshao
Druddigon
Golett
Golurk
Pawniard
Bisharp
Bouffalant
Rufflet
Braviary
Vullaby
Mandibuzz
Heatmor
Durant
Deino
Zweilous
Hydreigon
Larvesta
Volcarona
Cobalion
Terrakion
Virizion
Tornadus
Thundurus
Reshiram
Zekrom
Landorus
Kyurem
Keldeo
Meloetta
Genesect
Chespin
Quilladin
Chesnaught
Fennekin
Braixen
Delphox
Froakie
Frogadier
Greninja
Bunnelby
Diggersby
Fletchling
Fletchinder
Talonflame
Scatterbug
Spewpa
Vivillon
Litleo
Pyroar
Flabébé
Floette
Florges
Skiddo
Gogoat
Pancham
Pangoro
Furfrou
Espurr
Meowstic
Honedge
Doublade
Aegislash
Spritzee
Aromatisse
Swirlix
Slurpuff
Inkay
Malamar
Binacle
Barbaracle
Skrelp
Dragalge
Clauncher
Clawitzer
Helioptile
Heliolisk
Tyrunt
Tyrantrum
Amaura
Aurorus
Sylveon
Hawlucha
Dedenne
Carbink
Goomy
Sliggoo
Goodra
Klefki
Phantump
Trevenant
Pumpkaboo
Gourgeist
Bergmite
Avalugg
Noibat
Noivern
Xerneas
Yveltal
Zygarde
Diancie
Hoopa
Volcanion
Rowlet
Dartrix
Decidueye
Litten
Torracat
Incineroar
Popplio
Brionne
Primarina
Pikipek
Trumbeak
Toucannon
Yungoos
Gumshoos
Grubbin
Charjabug
Vikavolt
Crabrawler
Crabominable
Oricorio
Cutiefly
Ribombee
Rockruff
Lycanroc
Wishiwashi
Mareanie
Toxapex
Mudbray
Mudsdale
Dewpider
Araquanid
Fomantis
Lurantis
Morelull
Shiinotic
Salandit
Salazzle
Stufful
Bewear
Bounsweet
Steenee
Tsareena
Comfey
Oranguru
Passimian
Wimpod
Golisopod
Sandygast
Palossand
Pyukumuku
Type: Null
Silvally
Minior
Komala
Turtonator
Togedemaru
Mimikyu
Bruxish
Drampa
Dhelmise
Jangmo-o
Hakamo-o
Kommo-o
Tapu Koko
Tapu Lele
Tapu Bulu
Tapu Fini
Cosmog
Cosmoem
Solgaleo
Lunala
Nihilego
Buzzwole
Pheromosa
Xurkitree
Celesteela
Kartana
Guzzlord
Necrozma
Magearna
Marshadow`.split(`
`)
const natDex =`National Dex
001: Bulbasaur
002: Ivysaur
003: Venusaur
004: Charmander
005: Charmeleon
006: Charizard
007: Squirtle
008: Wartortle
009: Blastoise
010: Caterpie
011: Metapod
012: Butterfree
013: Weedle
014: Kakuna
015: Beedrill
016: Pidgey
017: Pidgeotto
018: Pidgeot
019: Rattata
020: Raticate
021: Spearow
022: Fearow
023: Ekans
024: Arbok
025: Pikachu
026: Raichu
027: Sandshrew
028: Sandslash
029: Nidoran♀
030: Nidorina
031: Nidoqueen
032: Nidoran♂
033: Nidorino
034: Nidoking
035: Clefairy
036: Clefable
037: Vulpix
038: Ninetales
039: Jigglypuff
040: Wigglytuff
041: Zubat
042: Golbat
043: Oddish
044: Gloom
045: Vileplume
046: Paras
047: Parasect
048: Venonat
049: Venomoth
050: Diglett
051: Dugtrio
052: Meowth
053: Persian
054: Psyduck
055: Golduck
056: Mankey
057: Primeape
058: Growlithe
059: Arcanine
060: Poliwag
061: Poliwhirl
062: Poliwrath
063: Abra
064: Kadabra
065: Alakazam
066: Machop
067: Machoke
068: Machamp
069: Bellsprout
070: Weepinbell
071: Victreebel
072: Tentacool
073: Tentacruel
074: Geodude
075: Graveler
076: Golem
077: Ponyta
078: Rapidash
079: Slowpoke
080: Slowbro
081: Magnemite
082: Magneton
083: Farfetch’d
084: Doduo
085: Dodrio
086: Seel
087: Dewgong
088: Grimer
089: Muk
090: Shellder
091: Cloyster
092: Gastly
093: Haunter
094: Gengar
095: Onix
096: Drowzee
097: Hypno
098: Krabby
099: Kingler
100: Voltorb
101: Electrode
102: Exeggcute
103: Exeggutor
104: Cubone
105: Marowak
106: Hitmonlee
107: Hitmonchan
108: Lickitung
109: Koffing
110: Weezing
111: Rhyhorn
112: Rhydon
113: Chansey
114: Tangela
115: Kangaskhan
116: Horsea
117: Seadra
118: Goldeen
119: Seaking
120: Staryu
121: Starmie
122: Mr. Mime
123: Scyther
124: Jynx
125: Electabuzz
126: Magmar
127: Pinsir
128: Tauros
129: Magikarp
130: Gyarados
131: Lapras
132: Ditto
133: Eevee
134: Vaporeon
135: Jolteon
136: Flareon
137: Porygon
138: Omanyte
139: Omastar
140: Kabuto
141: Kabutops
142: Aerodactyl
143: Snorlax
144: Articuno
145: Zapdos
146: Moltres
147: Dratini
148: Dragonair
149: Dragonite
150: Mewtwo
151: Mew
152: Chikorita
153: Bayleef
154: Meganium
155: Cyndaquil
156: Quilava
157: Typhlosion
158: Totodile
159: Croconaw
160: Feraligatr
161: Sentret
162: Furret
163: Hoothoot
164: Noctowl
165: Ledyba
166: Ledian
167: Spinarak
168: Ariados
169: Crobat
170: Chinchou
171: Lanturn
172: Pichu
173: Cleffa
174: Igglybuff
175: Togepi
176: Togetic
177: Natu
178: Xatu
179: Mareep
180: Flaaffy
181: Ampharos
182: Bellossom
183: Marill
184: Azumarill
185: Sudowoodo
186: Politoed
187: Hoppip
188: Skiploom
189: Jumpluff
190: Aipom
191: Sunkern
192: Sunflora
193: Yanma
194: Wooper
195: Quagsire
196: Espeon
197: Umbreon
198: Murkrow
199: Slowking
200: Misdreavus
201: Unown
202: Wobbuffet
203: Girafarig
204: Pineco
205: Forretress
206: Dunsparce
207: Gligar
208: Steelix
209: Snubbull
210: Granbull
211: Qwilfish
212: Scizor
213: Shuckle
214: Heracross
215: Sneasel
216: Teddiursa
217: Ursaring
218: Slugma
219: Magcargo
220: Swinub
221: Piloswine
222: Corsola
223: Remoraid
224: Octillery
225: Delibird
226: Mantine
227: Skarmory
228: Houndour
229: Houndoom
230: Kingdra
231: Phanpy
232: Donphan
233: Porygon2
234: Stantler
235: Smeargle
236: Tyrogue
237: Hitmontop
238: Smoochum
239: Elekid
240: Magby
241: Miltank
242: Blissey
243: Raikou
244: Entei
245: Suicune
246: Larvitar
247: Pupitar
248: Tyranitar
249: Lugia
250: Ho-Oh
251: Celebi
252: Treecko
253: Grovyle
254: Sceptile
255: Torchic
256: Combusken
257: Blaziken
258: Mudkip
259: Marshtomp
260: Swampert
261: Poochyena
262: Mightyena
263: Zigzagoon
264: Linoone
265: Wurmple
266: Silcoon
267: Beautifly
268: Cascoon
269: Dustox
270: Lotad
271: Lombre
272: Ludicolo
273: Seedot
274: Nuzleaf
275: Shiftry
276: Taillow
277: Swellow
278: Wingull
279: Pelipper
280: Ralts
281: Kirlia
282: Gardevoir
283: Surskit
284: Masquerain
285: Shroomish
286: Breloom
287: Slakoth
288: Vigoroth
289: Slaking
290: Nincada
291: Ninjask
292: Shedinja
293: Whismur
294: Loudred
295: Exploud
296: Makuhita
297: Hariyama
298: Azurill
299: Nosepass
300: Skitty
301: Delcatty
302: Sableye
303: Mawile
304: Aron
305: Lairon
306: Aggron
307: Meditite
308: Medicham
309: Electrike
310: Manectric
311: Plusle
312: Minun
313: Volbeat
314: Illumise
315: Roselia
316: Gulpin
317: Swalot
318: Carvanha
319: Sharpedo
320: Wailmer
321: Wailord
322: Numel
323: Camerupt
324: Torkoal
325: Spoink
326: Grumpig
327: Spinda
328: Trapinch
329: Vibrava
330: Flygon
331: Cacnea
332: Cacturne
333: Swablu
334: Altaria
335: Zangoose
336: Seviper
337: Lunatone
338: Solrock
339: Barboach
340: Whiscash
341: Corphish
342: Crawdaunt
343: Baltoy
344: Claydol
345: Lileep
346: Cradily
347: Anorith
348: Armaldo
349: Feebas
350: Milotic
351: Castform
352: Kecleon
353: Shuppet
354: Banette
355: Duskull
356: Dusclops
357: Tropius
358: Chimecho
359: Absol
360: Wynaut
361: Snorunt
362: Glalie
363: Spheal
364: Sealeo
365: Walrein
366: Clamperl
367: Huntail
368: Gorebyss
369: Relicanth
370: Luvdisc
371: Bagon
372: Shelgon
373: Salamence
374: Beldum
375: Metang
376: Metagross
377: Regirock
378: Regice
379: Registeel
380: Latias
381: Latios
382: Kyogre
383: Groudon
384: Rayquaza
385: Jirachi
386: Deoxys
387: Turtwig
388: Grotle
389: Torterra
390: Chimchar
391: Monferno
392: Infernape
393: Piplup
394: Prinplup
395: Empoleon
396: Starly
397: Staravia
398: Staraptor
399: Bidoof
400: Bibarel
401: Kricketot
402: Kricketune
403: Shinx
404: Luxio
405: Luxray
406: Budew
407: Roserade
408: Cranidos
409: Rampardos
410: Shieldon
411: Bastiodon
412: Burmy
413: Wormadam
414: Mothim
415: Combee
416: Vespiquen
417: Pachirisu
418: Buizel
419: Floatzel
420: Cherubi
421: Cherrim
422: Shellos
423: Gastrodon
424: Ambipom
425: Drifloon
426: Drifblim
427: Buneary
428: Lopunny
429: Mismagius
430: Honchkrow
431: Glameow
432: Purugly
433: Chingling
434: Stunky
435: Skuntank
436: Bronzor
437: Bronzong
438: Bonsly
439: Mime Jr.
440: Happiny
441: Chatot
442: Spiritomb
443: Gible
444: Gabite
445: Garchomp
446: Munchlax
447: Riolu
448: Lucario
449: Hippopotas
450: Hippowdon
451: Skorupi
452: Drapion
453: Croagunk
454: Toxicroak
455: Carnivine
456: Finneon
457: Lumineon
458: Mantyke
459: Snover
460: Abomasnow
461: Weavile
462: Magnezone
463: Lickilicky
464: Rhyperior
465: Tangrowth
466: Electivire
467: Magmortar
468: Togekiss
469: Yanmega
470: Leafeon
471: Glaceon
472: Gliscor
473: Mamoswine
474: Porygon-Z
475: Gallade
476: Probopass
477: Dusknoir
478: Froslass
479: Rotom
480: Uxie
481: Mesprit
482: Azelf
483: Dialga
484: Palkia
485: Heatran
486: Regigigas
487: Giratina
488: Cresselia
489: Phione
490: Manaphy
491: Darkrai
492: Shaymin
493: Arceus
494: Victini
495: Snivy
496: Servine
497: Serperior
498: Tepig
499: Pignite
500: Emboar
501: Oshawott
502: Dewott
503: Samurott
504: Patrat
505: Watchog
506: Lillipup
507: Herdier
508: Stoutland
509: Purrloin
510: Liepard
511: Pansage
512: Simisage
513: Pansear
514: Simisear
515: Panpour
516: Simipour
517: Munna
518: Musharna
519: Pidove
520: Tranquill
521: Unfezant
522: Blitzle
523: Zebstrika
524: Roggenrola
525: Boldore
526: Gigalith
527: Woobat
528: Swoobat
529: Drilbur
530: Excadrill
531: Audino
532: Timburr
533: Gurdurr
534: Conkeldurr
535: Tympole
536: Palpitoad
537: Seismitoad
538: Throh
539: Sawk
540: Sewaddle
541: Swadloon
542: Leavanny
543: Venipede
544: Whirlipede
545: Scolipede
546: Cottonee
547: Whimsicott
548: Petilil
549: Lilligant
550: Basculin
551: Sandile
552: Krokorok
553: Krookodile
554: Darumaka
555: Darmanitan
556: Maractus
557: Dwebble
558: Crustle
559: Scraggy
560: Scrafty
561: Sigilyph
562: Yamask
563: Cofagrigus
564: Tirtouga
565: Carracosta
566: Archen
567: Archeops
568: Trubbish
569: Garbodor
570: Zorua
571: Zoroark
572: Minccino
573: Cinccino
574: Gothita
575: Gothorita
576: Gothitelle
577: Solosis
578: Duosion
579: Reuniclus
580: Ducklett
581: Swanna
582: Vanillite
583: Vanillish
584: Vanilluxe
585: Deerling
586: Sawsbuck
587: Emolga
588: Karrablast
589: Escavalier
590: Foongus
591: Amoonguss
592: Frillish
593: Jellicent
594: Alomomola
595: Joltik
596: Galvantula
597: Ferroseed
598: Ferrothorn
599: Klink
600: Klang
601: Klinklang
602: Tynamo
603: Eelektrik
604: Eelektross
605: Elgyem
606: Beheeyem
607: Litwick
608: Lampent
609: Chandelure
610: Axew
611: Fraxure
612: Haxorus
613: Cubchoo
614: Beartic
615: Cryogonal
616: Shelmet
617: Accelgor
618: Stunfisk
619: Mienfoo
620: Mienshao
621: Druddigon
622: Golett
623: Golurk
624: Pawniard
625: Bisharp
626: Bouffalant
627: Rufflet
628: Braviary
629: Vullaby
630: Mandibuzz
631: Heatmor
632: Durant
633: Deino
634: Zweilous
635: Hydreigon
636: Larvesta
637: Volcarona
638: Cobalion
639: Terrakion
640: Virizion
641: Tornadus
642: Thundurus
643: Reshiram
644: Zekrom
645: Landorus
646: Kyurem
647: Keldeo
648: Meloetta
649: Genesect
650: Chespin
651: Quilladin
652: Chesnaught
653: Fennekin
654: Braixen
655: Delphox
656: Froakie
657: Frogadier
658: Greninja
659: Bunnelby
660: Diggersby
661: Fletchling
662: Fletchinder
663: Talonflame
664: Scatterbug
665: Spewpa
666: Vivillon
667: Litleo
668: Pyroar
669: Flabébé
670: Floette
671: Florges
672: Skiddo
673: Gogoat
674: Pancham
675: Pangoro
676: Furfrou
677: Espurr
678: Meowstic
679: Honedge
680: Doublade
681: Aegislash
682: Spritzee
683: Aromatisse
684: Swirlix
685: Slurpuff
686: Inkay
687: Malamar
688: Binacle
689: Barbaracle
690: Skrelp
691: Dragalge
692: Clauncher
693: Clawitzer
694: Helioptile
695: Heliolisk
696: Tyrunt
697: Tyrantrum
698: Amaura
699: Aurorus
700: Sylveon
701: Hawlucha
702: Dedenne
703: Carbink
704: Goomy
705: Sliggoo
706: Goodra
707: Klefki
708: Phantump
709: Trevenant
710: Pumpkaboo
711: Gourgeist
712: Bergmite
713: Avalugg
714: Noibat
715: Noivern
716: Xerneas
717: Yveltal
718: Zygarde
719: Diancie
720: Hoopa
721: Volcanion
722: Rowlet
723: Dartrix
724: Decidueye
725: Litten
726: Torracat
727: Incineroar
728: Popplio
729: Brionne
730: Primarina
731: Pikipek
732: Trumbeak
733: Toucannon
734: Yungoos
735: Gumshoos
736: Grubbin
737: Charjabug
738: Vikavolt
739: Crabrawler
740: Crabominable
741: Oricorio
742: Cutiefly
743: Ribombee
744: Rockruff
745: Lycanroc
746: Wishiwashi
747: Mareanie
748: Toxapex
749: Mudbray
750: Mudsdale
751: Dewpider
752: Araquanid
753: Fomantis
754: Lurantis
755: Morelull
756: Shiinotic
757: Salandit
758: Salazzle
759: Stufful
760: Bewear
761: Bounsweet
762: Steenee
763: Tsareena
764: Comfey
765: Oranguru
766: Passimian
767: Wimpod
768: Golisopod
769: Sandygast
770: Palossand
771: Pyukumuku
772: Type: Null
773: Silvally
774: Minior
775: Komala
776: Turtonator
777: Togedemaru
778: Mimikyu
779: Bruxish
780: Drampa
781: Dhelmise
782: Jangmo-o
783: Hakamo-o
784: Kommo-o
785: Tapu Koko
786: Tapu Lele
787: Tapu Bulu
788: Tapu Fini
789: Cosmog
790: Cosmoem
791: Solgaleo
792: Lunala
793: Nihilego
794: Buzzwole
795: Pheromosa
796: Xurkitree
797: Celesteela
798: Kartana
799: Guzzlord
800: Necrozma
801: Magearna
802: Marshadow`.split(`
`)

const sortbyAlphabet =``

// this.list.pus
console.log(natDex)

this.setState({
  breeds: pNames
})
}

  // getPokemonSelect = async () => {

  //   for (var i = 1; i <= 8; i++) {
  //     const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i + '/');
  //     const json = await response.json();


  //     // fetch(`http://pokeapi.co/api/v2/pokemon/4/`,{ method: 'GET',
  //     //   mode: 'cors'})
  //     // .then(response => {
  //     console.log("response is: " + json)
  //     // return response.json();


  //     // })
  //     // .then(obj =>{
  //     this.list.push(json.name)

  //     // })
  //     // .catch(err => {
  //     // console.log(err)
  //     // })
  //   }
  //   this.setState({
  //     breeds: this.list
  //     // this.setState({
  //     //   breeds: response.data.message
  //     // })


  //   })
  // }

  getRandomImage = () => {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        this.setState({
          imgURL: response.data.message
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  getSelectedDog = () => {
    axios
      .get(`https://dog.ceo/api/breed/${this.state.selectDog}/images/random`)
      .then(response => {
        this.setState({
          imgURL: response.data.message
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handlerSelectDog = e => {
    this.setState({
      selectDog: e.target.value
    })
  }

  componentWillMount() {
    // this.fetchData();
    // this.getPokemonSelect();
    this.pokemonList();

  }


  // fetchData = async () => {
  //   const response = await fetch('https://pokeapi.co/api/v2/pokemon/2/');
  //   const json = await response.json();
  //   this.setState({ data: json });
  //   console.warn(json.sprites.front_default)
  //   console.warn(json.species.name)
  // };

  componentDidMount() {
    this.getRandomImage();
    // this.getPokemonSelect();
    this.getSelectedDog();
  }

  render() {
    const { imgURL } = this.state;
    const styles = {
      img: {
        height: "15em"
      }
    }
    console.log(this.list)
    return (
      <div>
        <p> PokeDex v1 </p>
        <br />
        <div>
        <input type="text" />
        <button>Search PokeDex</button>
        </div>
        <div>
          <select onChange={this.handlerSelectDog}>
            {this.state.breeds.map(el => <option value={el}>{el}</option>)}
          </select>
          <button onClick={this.getSelectedDog}>This Pokemon!</button>
        </div>
        <div>
          <img style={styles.img} alt="" src={imgURL} />
        </div>
        <p>
          <button onClick={this.getRandomImage}> one more! </button>
        </p>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
