let masivai = [12, 15, 72, 74, 91, 802];

console.log(masivai[0]);
console.log(masivai[5]);
console.log(masivai[2]);
console.log(masivai[3]);
console.log("masivu skaicius", masivai.length);

console.log("---------");
let masivai2 = [12, 15, 72, 74, 91, 802];
console.log(masivai2);

masivai2[2] = 7;
masivai2[3] = 234;
masivai2[5] = 0;

console.log(masivai2);

console.log("---------");
let masivas = [];

masivas.push(202, 814, 234, 0);

console.log(masivas);

console.log("---------");

let tuscias = [];

tuscias.push(Math.random());

console.log(tuscias);

console.log("---------");

let petras = [2, 3, 7, 6, 1];
let bronius = [10, 1, 2, 3, 9];

let vidurkisPetro =
  (petras[0] + petras[1] + petras[2] + petras[3] + petras[4]) / petras.length;
let vidurkisBroniaus =
  (bronius[0] + bronius[1] + bronius[2] + bronius[3] + bronius[4]) /
  bronius.length;
console.log("Petro vidurkis =", vidurkisPetro);
console.log("Broniaus vidurkis =", vidurkisBroniaus);

if (vidurkisPetro > vidurkisBroniaus) {
  console.log("Petro vidurkis didesnis");
} else if (vidurkisPetro < vidurkisBroniaus) {
  console.log("Broniaus vidurkis didesnis");
} else {
  console.log("Vidurkiai vienodi");
}

console.log("---------");

let studijos = [
  "inzenerija",
  "verslo vadyba",
  "IT",
  "matematika",
  "filologija",
];

for (let i = 0; i < studijos.length; i++) {
  console.log(studijos[i]);
}

console.log("---------");

let salis = ["Grakija", "Ispanija", "Italija", "Suomija", "Vokietija"];

for (let i = 0; i < salis.length; i++) {
  console.log("salis", salis[i]);
}

console.log("---------");

let proektas = ["Bajorai", "Trakai", "Vilnius", "Sveicarai", "Anglai"];

for (let i = 0; i < proektas.length; i++) {
  console.log(i + 1 + "-as proektas", proektas[i]);
}

// 9. Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite

//tik tuos skaičius, kurie yra didesni nei 5.
console.log("---------");

let skaiciai = [1, 23, 4, 12, 73, 2];

for (let i = 0; i < skaiciai.length; i++) {
  if (skaiciai[i] > 5) console.log(skaiciai[i]);
}

//10.Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite

//visų skaičių, kurie dalinasi iš 4 sumą.

console.log("---------");

let skaiciu = [1, 23, 4, 12, 73, 2];
let suma = 0;

for (let i = 0; i < skaiciu.length; i++) {
  if (skaiciu[i] % 4 == 0) suma += skaiciai[i];
}

console.log(suma);
//11.Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite
//šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.

console.log("---------");

let pazymi = [
  Math.floor(Math.random() * 11),
  Math.floor(Math.random() * 11),
  Math.floor(Math.random() * 11),
];

let summa = pazymi[0] + pazymi[1] + pazymi[2];
let vidurkis = summa / pazymi.length;

console.log("sugeneruoti pazymiai:", pazymi);
console.log("Pažymių vidurkis:", vidurkis.toFixed(2));
//12.Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite
//šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.

console.log("---------");

let pazymiss = [
  Math.floor(Math.random() * 11),
  Math.floor(Math.random() * 11),
  Math.floor(Math.random() * 11),
  Math.floor(Math.random() * 11),
  Math.floor(Math.random() * 11),
];

let summas =
  pazymiss[0] + pazymiss[1] + pazymiss[2] + pazymiss[3] + pazymiss[4];
let vidurkiss = summas / pazymiss.length;

console.log("Sugeneruoti pažymiai:", pazymiss);
console.log("Pažymių vidurkis:", vidurkiss.toFixed(2));

console.log("didesni uz vidurki:");
for (let i = 0; i < pazymiss.length; i++) {
  if (pazymiss[i] > vidurkiss) {
    console.log(pazymiss[i]);
  }
}

//13.Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus
//skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo
//kvadratą.

console.log("---------");

let skaic = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < skaic.length; i++) {
  console.log(skaic[i]);
  if (skaic[i] % 2 === 0) {
    console.log(skaic[i] ** 2);
  }
}

//14.Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis
//(atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje
//eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas
//pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek
//balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.

console.log("---------");

let studento = [5, 10, 3, 4, 7, 9];

for (let i = 0; i < studento.length; i++) {
  if (studento[i] >= 5) {
    console.log(studento[i], "Teigiamas");
  } else {
    console.log(studento[i], "Neigimas", 5 - studento[i], "balu iki teigiamo.");
  }
}

// 15.Susikurkite žodžių masyvą ir užpildykite duomenimis. Išveskite visus

// žodžius ekrane, nurodant iš kiek raidžių kiekvienas šis žodis yra sudarytas.
// Papildykite skriptą taip, kad rastumėte visų raidžių kiekį (pvz yra žodžiai
// "medis" ir "alus", 5 ir 4 raidės atitinkamai, o jas sudėjus gaunasi 9 raidės).

console.log("---------");

let zodziai = ["medis", "alus", "namas", "katė", "programavimas"];
let visoRaidziu = 0;

for (let i = 0; i < zodziai.length; i++) {
  let raidziuSkaicius = zodziai[i].length; // Skaičiuojame kiekvieno žodžio ilgį
  console.log(zodziai[i], "- sudarytas iš", raidziuSkaicius, "raidžių.");
  visoRaidziu += raidziuSkaicius; // Kaupiame bendrą raidžių kiekį
}

console.log("Viso raidžių:", visoRaidziu);

// 16.Susikurkite skaičių masyvą ir užpildykite duomenimis. Raskite visų skaičių,
// kurie dalinasi iš 3 sumą ir vidurkį. Išveskite pradinius duomenis ir gautus
// atsakymus.

console.log("---------");

let skaaiciai = [3, 7, 9, 12, 15, 20, 21, 25, 30]; // Skaičių masyvas
let suuma = 0;
let kiekis = 0;

console.log("Pradiniai duomenys:", skaaiciai.join(", "));

for (let i = 0; i < skaaiciai.length; i++) {
  if (skaaiciai[i] % 3 === 0) {
    // Tikriname, ar skaičius dalinasi iš 3
    suuma += skaaiciai[i]; // Kaupiame sumą
    kiekis++; // Skaičiuojame kiek skaičių atitiko sąlygą
  }
}

let viidurkis = kiekis > 0 ? suuma / kiekis : 0; // Apskaičiuojame vidurkį

console.log("Skaičių, kurie dalinasi iš 3, suma:", suuma);
console.log("Vidurkis:", vidurkis.toFixed(2));
