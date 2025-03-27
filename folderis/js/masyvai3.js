// 1. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find
//     metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai
//     atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai.

// let skaiciai = [1, 3, 7, 2, 5, 6, 7, 8, 6, 4, 23];
// console.log("skaiciai", skaiciai);

// let rastasSkaicius = skaiciai.find((skaicius) => skaicius % 2 === 0);
// console.log("lyginis skaicius", rastasSkaicius);

//     2. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
//     Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu
//     masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5.

// let skaiciai = [-3, 0, 5, -8, 2, 7];

// let teigiami = skaiciai.find((skaicius) => skaicius > 0);

// console.log("teigiami skaiciai", teigiami);

// 3. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
// Suraskite jame pirmą skaičių kuris yra neigiamas ir išveskite jo indeksą, o
// jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu masyvas bus [8, -2, 3, 4],
// tai atsakymas yra 1, nes skaičius -2 yra indekse 1. O jeigu masyvas bus [7,
// 5, 3], tai atsakymas bus -1, nes masyve nėra neigiamo skaičiaus.

// let skaiciai = [-3, 0, 5, -8, 2, 7];

// let pirmasNeigiamasIndeksas = skaiciai.findIndex((skaicius) => skaicius < 0);

// console.log("Pirmo neigiamo skaičiaus indeksas:", pirmasNeigiamasIndeksas);

// 4. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra lygus
// arba didesnis 10 ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra
// išveskite -1. Pvz, jeigu turite masyvą [8, 12, 5, 3, 15, 9], atsakymas bus 1.

// let skaiciai = [-3, 0, 5, 12, -8, 2, 7];

// let pirmasIndeksas = skaiciai.findIndex((skaicius) => skaicius >= 10);

// console.log(pirmasIndeksas);

// 5. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris dalintųsi iš
// 3 ir būtų didesnis nei 10, ir jį išveskite. Pvz, jeigu masyvas yra [5, 9, 12, 7,
// 18, 4], atsakymas bus 12.

// let skaiciai = [-3, 0, 5, 12, -8, 2, 7];

// let pirmasIndeksas = skaiciai.find(
//   (skaicius) => skaicius >= 10 && skaicius % 3 === 0
// );

// console.log(pirmasIndeksas);

// Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra
// neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas
// yra -6.

// let skaiciai = [-3, 0, 5, 12, -8, 2, 7];

// let pirmasIndeksas = skaiciai.find(
//   (skaicius) => skaicius < 0 && skaicius % 2 === 0
// );

// console.log(pirmasIndeksas);

// 7. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra
// teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o
// jeigu masyvas [8, 9, -3, 2], tai atsakymas false.

// let skaiciai = [-3, 0, 5, 12, -8, 2, 7];

// let visiTeigiami = skaiciai.every((skaicius) => {
//   return skaicius > 0;
// });

// console.log(visiTeigiami);

// 8. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra
// lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu
// masyvas [7, 3, 6, 8, 10], tai atsakymas false.

// let skaiciai = [2, 4, 8, 6];

// let visiTeigiami = skaiciai.every((skaicius) => {
//   return skaicius % 2 === 0;
// });

// console.log(visiTeigiami);

// 9. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve yra bent vienas
// skaičius, kuris yra mažesnis nei 5. Pvz, jeigu masyvas [8, 20, 5, 97, 44], tai
// atsakymas false, bet jeigu masyvas [20, 3, 7, 9], tai atsakymas true.

// let skaiciai = [1, -1, 2, 3, 20, 50, 1, 17];

// let yraMazesniu = skaiciai.some(function (skaicius) {
//   return skaicius < 5;
// });

// console.log(yraMazesniu);

// 10. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
// Patikrinkite ar šiame masyve yra bent vienas teigiamas skaičius (didesnis
// nei 0). Pvz, jeigu masyvas [7, 2, -3, -6], tai atsakymas yra true, o jeigu
// masyvas yra [-8, -6, -4], tai atsakymas yra false.

// let skaiciai = [-8, -6, -4];

// let yraMazesniu = skaiciai.some(function (skaicius) {
//   return skaicius > 0;
// });

// console.log(yraMazesniu);

// 11. Susikurkite žodžių masyvą. Patikrinkite ar visi šiame masyve esantys
// žodžiai yra sudaryti iš 3 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘antis’,
// ‘ožka’, ‘arklys’], tai atsakymas true, o jeigu masyvas [‘abc’, ‘de’, ‘fgia’], tai
// atsakymas false.

// let zodziai = ["antis", "ožka", "arklys"];

// const zodziuIlgis = zodziai.every((a) => a.length >= 3);
// console.log(zodziuIlgis);

// 12. Susikurkite žodžių masyvą. Patikrinkite ar šiame masyve yra bent vienas
// žodis prasidedantis raide a (turi surasti nepriklausomai tai didžioji ar
// mažoji raidė). Pvz, jeigu masyvas [‘bananas’, ‘agurkas’, ‘pomidoras’], tai
// atsakymas true, o jeigu masyvas [‘kaunas’, ‘vilnius’, ‘klaipėda’], tai
// atsakymas false.

// let zodziai = ["antis", "ožka", "arklys"];

// const zodziuIlgis = zodziai.some((x) => x.startsWith("a"));
// console.log(zodziuIlgis);

// 13. Susikurkite skaičių masyvą. Patikrinkite ar visi šiame masyve esantys
// skaičiai yra teigiami ir ar yra bent vienas skaičius, kuris būtų lyginis. Pvz,
// masyvas [3, 7, 2, 9, 6, 4], grąžina true, o masyvas [4, -2, 3, 7] grąžina false.

// let skaiciai = [4, -2, 3, 7];

// const visiTeigiami = skaiciai.every((skaicius) => skaicius > 0);
// const bentVienasLyginis = skaiciai.some((skaicius) => skaicius % 2 === 0);

// console.log(visiTeigiami && bentVienasLyginis);

// 14. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
// Išfiltruokite skaičius, kurie yra teigiami. Pvz, jeigu masyvas yra [4, -3, -2, 8,
// 9, 5], tai išfiltruotas variantas yra [4, 8, 9, 5].

// let skaiciai = [4, -3, -2, 8, 9, 5];

// let teigiamiSkaiciai = skaiciai.filter((skaicius) => skaicius > 0);

// console.log(teigiamiSkaiciai);

// 15. Susikurkite skaičių masyvą, kuriame būtų saugomi prekės reitingai
// (skaičiai nuo 1 iki 5). Išfiltruokite tuos įrašus, kur balų yra 1 arba 2. Pvz,
// jeigu masyvas [5, 1, 4, 5, 1, 3, 4, 5, 2], tai išfiltravus gausis [1, 1, 2].

// let skaiciai = [5, 1, 4, 5, 1, 3, 4, 5, 2];

// const balai = skaiciai.filter((a) => a <= 2);

// console.log(balai);

// 16. Susikurkite skaičių masyvą, kuriame būtų ir teigiamų ir neigiamų skaičių.
// Išfiltruokite tik tuos skaičius, kurie yra teigiami ir yra lyginiai. Pvz, jeigu
// turite masyvą [5, -3, 2, 7, 8, -4, 1] tai turi gautis [2, 8].

// let skaiciai = [5, -3, 2, 7, 8, -4, 1];

// const balai = skaiciai.filter((a) => a > 0 && a % 2 === 0);

// console.log(balai);

// 17. Susikurkite šalių pavadinimų masyvą. Išfiltruokite tik tas šalis, kurių
// pavadinime yra raidė b (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu turite
// masyvą [‘Belgija’, ‘Lietuva’, ‘Graikija’, ‘Bulgarija’], tai turi gautis [‘Belgija’,
// ‘Bulgarija’].

// let skaiciai = ["Belgija", "Lietuva", "Graikija", "Bulgarija"];

// const balai = skaiciai.filter((a) => a.toLowerCase().includes("b"));

// console.log(balai);

// 18. Susikurkite skaičių masyvą. Išfiltruokite lyginius skaičius ir juos
// padvigubinkite. Pvz, jeigu masyvas yra [3, 7, 2, 9, 6, 4], išfiltravus gausis [2,
// 6, 4], o padvigubinus galutinis variantas bus [4, 12, 8].

// let skaiciai = [3, 7, 2, 9, 6, 4];

// let lyginiaiPadvigubinti = skaiciai
//   .filter((skaicius) => skaicius % 2 === 0)
//   .map((skaicius) => skaicius * 2);

// console.log(lyginiaiPadvigubinti);

// 19. Susikurkite skaičių masyvą. Kiekvieną skaičių jame padidinkite per 1. Pvz,
// jeigu masyvas yra [7, 8, 9, 2, 3], tai turi gautis [8, 9, 10, 3, 4].

// let skaiciai = [3, 7, 2, 9, 6, 4];

// const rezultatas = skaiciai.map((skaicius) => skaicius + 1);

// console.log(rezultatas);

// 20. Susikurkite žodžių masyvą. Kiekvieną žodį iš šio masyvo paverskite į
// variantą iš didžiųjų raidžių. Pvz, jeigu turite masyvą [‘bananas’, ‘baba’,
// ‘klėtis’], tai turi gautis [‘BANANAS’, ‘BABA’, ‘KLĖTIS’].

// let zodziai = ["bananas", "baba", "namas", "belekas"];

// const rezultatas = zodziai.map((a) => a.toUpperCase());

// console.log(rezultatas);

// 21. Susikurkite skaičių masyvą. Gaukite visų skaičių sumą. Pvz, jeigu masyvas
// yra [2, 3, 1], tai atsakymas 6.

// let skaiciai = [2, 3, 1];

// let suma = 0;

// for (let skaicius of skaiciai) {
//   suma += skaicius;
// }
// console.log(suma);

// 22. Susikurkite skaičių masyvą. Atrinkite tik tuos skaičius, kurie yra lyginiai ir
// gaukite jų sumą. Pvz, jeigu masyvas yra [1, 2, 3, 4, 5], atrinkus gausis [2, 4],
// o šių skaičių suma ir galutinis atsakymas yra 6.

let skaiciai = [1, 2, 3, 4, 5];

let lyginiai = skaiciai.filter((skaicius) => skaicius % 2 === 0);

let suma = lyginiai.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(suma);

// 23. Susikurkite žodžių masyvą. Pasiimkite kiekvieno žodžio pirmą raidę, ją
// padarykite iš didžiosios raidės. Pvz, jeigu turite masyvą [‘šuo’, ‘katė’,
// ‘gyvatė’], tai turi gautis [‘Š’, ‘K’, ‘G’].

let zodziai23 = ["šuo", "katė", "gyvatė"];

let pirmosRaides23 = zodziai23.map((a) => a[0].toLocaleUpperCase());

console.log(pirmosRaides23);

// 24. Susikurkite žodžių masyvą. Raskite kiek šiame masyve yra žodžių, kurie
// susideda iš 5 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘bananas’,
// ‘persikas’, ‘abc’, ‘de’], tai atrinkus žodžius gausis [‘bananas’, ‘persikas’], o
// tokių žodžių yra ir galutinis atsakymas skaitosi 2.

let zodziai24 = ["bananas", "persikas", "abc", "de"];

let ilgiZodziai24 = zodziai24.filter((zodis24) => zodis24.length >= 5);

let kiekis24 = ilgiZodziai24.length;

console.log(ilgiZodziai24);
console.log(kiekis24);

// 25. Susikurkite žodžių masyvą. Raskite kiekvieno žodžio simbolių kiekį. Pvz,
// jeigu masyvas yra [‘obelis’, ‘liepa’, ‘eglė’, ‘uosis’], tai turi gautis [6, 5, 4, 5].

let zodziai25 = ["obelis", "liepa", "eglė", "uosis"];

let zodziuIlgis25 = zodziai25.map((zodis25) => zodis25.length);

console.log(zodziuIlgis25);
// 26. Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti
// vardai ir amžiai. Ištraukite iš tokio masyvo tik vardus. Pvz, jeigu masyvas
// yra [‘Tomas 34’, ‘Jonas 20’, ‘Gintarė 40’, ‘Inga 24’], tai turi gautis [‘Tomas’,
// ‘Jonas’, ‘Gintarė’, ‘Inga’].

let zmones = ["Tomas 34", "Jonas 20", "Gintarė 40", "Inga 24"];

let vardai = zmones.map((zmogus) => zmogus.split(" ")[0]);

console.log(vardai);

// 27. Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti
// vardai ir amžiai. Ištraukite iš tokio masyvo tik amžius, juos paverskite į
// skaičius ir raskite bendrą sumą. Pvz, jeigu masyvas yra [‘Tomas 34’, ‘Jonas
// 20’, ‘Gintarė 40’, ‘Inga 24’], tai išrinkus info gausis [34, 20, 40, 24] ir suradus
// sumą turėsime 118.

// let zmones27 = ["Tomas 34", "Jonas 20", "Gintarė 40", "Inga 24"];

// let amziai27 = zmones27
// .map((zmogus27) => zmogus27.split(" ")[1]);
// .map((a) => parseInt(a));
// let suma27 = amziai27.reduce((acc, amzius27) => acc + amzius27, 0);

// console.log(amziai27);

// 28. Susikurkite masyvą prekių likučiams saugoti (tik likučių skaičiai). Išrinkite
// visus likučius, kurių liko mažai (mažiau nei 5 vnt.), ties kiekvienu likučiu
// paskaičiuokite kiek trūksta iki ribos. Pvz, jeigu turite masyvą [74, 2, 54, 3,
// 1, 87], išfiltravus liks [2, 3, 1], o paskaičiavus kiek kiekvieno trūksta iki 5,
// gausis [3, 2, 4].

let likuciai = [74, 2, 54, 3, 1, 87];

let mazaiLiko = likuciai.filter((likutis) => likutis < 5);
let trukstaIki5 = mazaiLiko.map((likutis) => 5 - likutis);

console.log(mazaiLiko);
console.log(trukstaIki5);

// 29. Susikurkite masyvą studento pažymiams saugoti. Suraskite kiek studentas
// turi gerų pažymių (8 ar daugiau). Pvz, jeigu masyvas yra [7, 8, 10, 6, 5, 9],
// išfiltravus gausis [8, 10, 9], o tokių pažymių jis turi 3.

let pazymiai = [7, 8, 10, 6, 5, 9];

let geriPazymiai = pazymiai.filter((pazymys) => pazymys >= 8);
let geruPazymiuKiekis = geriPazymiai.length;

console.log(geriPazymiai);
console.log(geruPazymiuKiekis);

// 30. Susikurkite žodžių masyvą. Suraskite kiek iš viso šiame masyve per visus
// žodžius yra raidžių a (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu masyvas
// yra [‘bananas’, ‘obelis’, ‘automobilis’], gausis kad yra 4 raidės.

let zodziai = ["bananas", "obelis", "automobilis"];

let aRaidziuKiekis = zodziai
  .join("")
  .toLowerCase()
  .split("")
  .filter((raide) => raide === "a").length;

console.log(aRaidziuKiekis);
