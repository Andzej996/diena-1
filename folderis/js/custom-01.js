/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let vardas = "Andzej";
let pavarde = "Stankovskij";
let gimimo = 1992;
let sie = 2025;

let amzius = sie - gimimo;

console.log(`As esu ${vardas} ${pavarde}. Man yra ${amzius} metai.`);

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

console.log("---------");

let skaicius1 = Math.random() * 5;
let skaicius2 = Math.random() * 5;

console.log(`Pirmas skaičius: ${skaicius1}, Antras skaičius: ${skaicius2}`);
if (skaicius1 === 0 && skaicius2 === 0) {
  console.log("Dalyba negalima, nes abu skaičiai yra 0.");
} else {
  let didesnis = Math.max(skaicius1, skaicius2);
  let mazesnis = Math.min(skaicius1, skaicius2);

  let rezultatas = mazesnis === 0 ? didesnis : didesnis / mazesnis;

  console.log(`Rezultatas: ${rezultatas.toFixed(2)}`);
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

console.log("---------");

let a = Math.random() * 26;
let b = Math.random() * 26;
let c = Math.random() * 26;

console.log(`Sugeneruoti skaičiai: ${a}, ${b}, ${c}`);

let vidurine = [a, b, c].sort((x, y) => x - y)[1];

console.log(`Vidurinė reikšmė: ${vidurine}`);

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
console.log("---------");

let kr1 = Math.random() * 11;
let kr2 = Math.random() * 11;
let kr3 = Math.random() * 11;

console.log(`Sugeneruotos kraštinės: ${kr1}, ${kr2}, ${kr3}`);

if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1) {
  console.log("Iš šių kraštinių galima sudaryti trikampį.");
} else {
  console.log("Iš šių kraštinių trikampio sudaryti negalima.");
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
console.log("---------");

let sk1 = Math.random() * 3;
let sk2 = Math.random() * 3;
let sk3 = Math.random() * 3;
let sk4 = Math.random() * 3;

console.log(`Sugeneruoti skaičiai: ${sk1}, ${sk2}, ${sk3}, ${sk4}`);

let nuliuKiekis = (sk1 === 0) + (sk2 === 0) + (sk3 === 0) + (sk4 === 0);
let vienetuKiekis = (sk1 === 1) + (sk2 === 1) + (sk3 === 1) + (sk4 === 1);
let dvejetuKiekis = (sk1 === 2) + (sk2 === 2) + (sk3 === 2) + (sk4 === 2);

console.log(
  `Nulių: ${nuliuKiekis}, Vienetų: ${vienetuKiekis}, Dvejetų: ${dvejetuKiekis}`
);

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

console.log("---------");

let skcs1 = Math.random() * 21 - 10;
let skcs2 = Math.random() * 21 - 10;
let skcs3 = Math.random() * 21 - 10;

function formatuotiSkaiciu(skaicius) {
  if (skaicius < 0) {
    return `[${skaicius}]`;
  } else if (skaicius > 0) {
    return `{${skaicius}}`;
  } else {
    return `(${skaicius})`;
  }
}

console.log(
  `${formatuotiSkaiciu(skcs1)} ${formatuotiSkaiciu(skcs2)} ${formatuotiSkaiciu(
    skcs3
  )}`
);

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

console.log("---------");

let zvakiuKiekis = Math.floor(Math.random() * (3000 - 5 + 1)) + 5;

let pradineKaina = zvakiuKiekis * 1;

let nuolaida = 0;
if (pradineKaina > 2000) {
  nuolaida = 0.04;
} else if (pradineKaina > 1000) {
  nuolaida = 0.03;
}

let galutineKaina = pradineKaina * (1 - nuolaida);

console.log(`Perkama žvakių: ${zvakiuKiekis}`);
console.log(`Pradinė kaina: ${pradineKaina.toFixed(2)} EUR`);
console.log(`Nuolaida: ${nuolaida * 100}%`);
console.log(`Galutinė kaina: ${galutineKaina.toFixed(2)} EUR`);

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

console.log("---------");

let skai1 = Math.random() * 101;
let skai2 = Math.random() * 101;
let skai3 = Math.random() * 101;

let vidurkis1 = (skai1 + skai2 + skai3) / 3;

let validNumbers = [skai1, skai2, skai3].filter(
  (num) => num >= 10 && num <= 90
);

let vidurkis2 =
  validNumbers.length > 0
    ? validNumbers.reduce((acc, num) => acc + num, 0) / validNumbers.length
    : 0;

console.log(`Pirmas vidurkis: ${Math.round(vidurkis1)}`);
console.log(`Antras vidurkis (po filtravimo): ${Math.round(vidurkis2)}`);

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
console.log("---------");

let valandos = Math.floor(Math.random() * 24);
let minutės = Math.floor(Math.random() * 60);
let sekundės = Math.floor(Math.random() * 60);

console.log(`Laikrodis prieš pridėjimą: ${valandos}:${minutės}:${sekundės}`);

let papildomosSekundės = Math.floor(Math.random() * 301);

sekundės += papildomosSekundės;

while (sekundės >= 60) {
  sekundės -= 60;
  minutės += 1;
}

while (minutės >= 60) {
  minutės -= 60;
  valandos += 1;
}

if (valandos >= 24) {
  valandos -= 24;
}

console.log(`Papildomos sekundės: ${papildomosSekundės}`);
console.log(`Laikrodis po pridėjimo: ${valandos}:${minutės}:${sekundės}`);

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
