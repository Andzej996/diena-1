/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

let vardas = "darius";
let pavarde = "pazusinskis";
let gimimometai = 1998;
let metai = 2025;

console.log(
  `Aš esu ${vardas} ${pavarde}. Man yra ${metai - gimimometai} metai(-ų)`
);

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
console.log("-----");
let a = Math.floor(Math.random() * 4);
let b = Math.floor(Math.random() * 4);

let result = 0;
if (a > b) {
  result = a / b;
} else {
  result = b / a;
}
console.log(`a = ${a}, b = ${b}, rezultatas = ${result.toFixed(2)}`);

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

console.log("-----");
a = Math.floor(Math.random() * 26);
b = Math.floor(Math.random() * 26);
c = Math.floor(Math.random() * 26);

let max = Math.max(a, b, c);
let min = Math.min(a, b, c);

result = 0;
if (a < max && a > min) {
  result = a;
} else if (b < max && b > min) {
  result = b;
} else if (c < max && c > min) {
  result = c;
}

console.log(`a = ${a}, b = ${b}, c = ${c}, rezultatas = ${result}`);

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

console.log("-----");
let kr1 = Math.floor(Math.random() * 10) + 1;
let kr2 = Math.floor(Math.random() * 10) + 1;
let kr3 = Math.floor(Math.random() * 10) + 1;

if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1) {
  console.log(`Kraštinės: kr1 = ${kr1}, kr2 = ${kr2}, kr3 = ${kr3}`);
  console.log("Galima sudaryti trikampį.");
} else {
  console.log("Trikampio sudaryti negalima.");
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

console.log("-----");
let k1 = Math.floor(Math.random() * 2);
let k2 = Math.floor(Math.random() * 2);
let k3 = Math.floor(Math.random() * 2);
let k4 = Math.floor(Math.random() * 2);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

function skaiciuojam(skaicius) {
  if (skaicius === 0) {
    nuliai++;
  } else if (skaicius === 1) {
    vienetai++;
  } else if (skaicius === 2) {
    dvejetai++;
  }
}

skaiciuojam(k1);
skaiciuojam(k2);
skaiciuojam(k3);
skaiciuojam(k4);

console.log(`k1 ${k1}, k2 ${k2}, k3 ${k3}, k4 ${k4}`);
console.log(`nuliu ${nuliai}, vienetu ${vienetai}, dvejetu ${dvejetai}`);

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 - (), didesni už 0 {}.
*/

console.log("-----");
let a1 = Math.floor(Math.random() * 21) - 10;
let a2 = Math.floor(Math.random() * 21) - 10;
let a3 = Math.floor(Math.random() * 21) - 10;

console.log(`a1 ${a1}, a2 ${a2}, a3 ${a3}`);

function formatNumber(num) {
  if (num < 0) {
    return `[${num}]`;
  } else if (num > 0) {
    return `{${num}}`;
  } else {
    return `(${num})`;
  }
}

console.log(`${formatNumber(a1)} ${formatNumber(a2)} ${formatNumber(a3)}`);

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

console.log("-----");
let zvakes = Math.floor(Math.random() * 2995) + 5;
let suma = zvakes * 1;
let nuolaida = 0;

if (suma > 1000 && suma <= 2000) {
  nuolaida = 3;
} else if (suma > 2000) {
  nuolaida = 4;
}

console.log(
  `Zvakiu kiekis ${zvakes}, suma ${suma}, nuolaida ${nuolaida}%, galutine suma ${
    suma * (1 - nuolaida / 100)
  }`
);

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

console.log("-----");
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);

let sum = 0;
let count = 0;

if (num1 >= 10 && num1 <= 90) {
  sum += num1;
  count++;
}

if (num2 >= 10 && num2 <= 90) {
  sum += num2;
  count++;
}

if (num3 >= 10 && num3 <= 90) {
  sum += num3;
  count++;
}

let avg1 = Math.round((num1 + num2 + num3) / 3);
let avg2 = Math.round(sum / count);

console.log(`Sugeneruoti skaičiai: ${num1}, ${num2}, ${num3}`);
console.log(`Pirmas vidurkis: ${avg1}`);
console.log(`Antras vidurkis (be reikšmių <10 ir >90): ${avg2}`);

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/

console.log("-----");

let hours = Math.floor(Math.random() * 24);
let minutes = Math.floor(Math.random() * 60);
let seconds = Math.floor(Math.random() * 60);

let extraSeconds = Math.floor(Math.random() * 301);

console.log(`Pradinis laikas: ${hours}:${minutes}:${seconds}`);
console.log(`Pridedamos sekundės: ${extraSeconds}`);

// Konvertuojame laiką į sekundes ir pridedame papildomas sekundes
let totalSeconds = hours * 3600 + minutes * 60 + seconds + extraSeconds;

let newHours = Math.floor((totalSeconds / 3600) % 24);
let newMinutes = Math.floor((totalSeconds % 3600) / 60);
let newSeconds = totalSeconds % 60;

// Atspausdiname laiką po pakeitimo
console.log(`Naujas laikas: ${newHours}:${newMinutes}:${newSeconds}`);

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

console.log("-----");
let kint1 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint2 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint3 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint4 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint5 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let kint6 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

let first = Math.max(kint1, kint2, kint3, kint4, kint5, kint6);
let last = Math.min(kint1, kint2, kint3, kint4, kint5, kint6);

if (first === kint1 || last === kint1) {
  kint1 = 0;
}

if (first === kint2 || last === kint2) {
  kint2 = 0;
}

if (first === kint3 || last === kint3) {
  kint3 = 0;
}

if (first === kint4 || last === kint4) {
  kint4 = 0;
}

if (first === kint5 || last === kint5) {
  kint5 = 0;
}

if (first === kint6 || last === kint6) {
  kint6 = 0;
}

let second = Math.max(kint1, kint2, kint3, kint4, kint5, kint6);

if (second === kint1) {
  kint1 = 0;
} else if (second === kint2) {
  kint2 = 0;
} else if (second === kint3) {
  kint3 = 0;
} else if (second === kint4) {
  kint4 = 0;
} else if (second === kint5) {
  kint5 = 0;
} else if (second === kint6) {
  kint6 = 0;
}

let third = Math.max(kint1, kint2, kint3, kint4, kint5, kint6);

if (third === kint1) {
  kint1 = 0;
} else if (third === kint2) {
  kint2 = 0;
} else if (third === kint3) {
  kint3 = 0;
} else if (third === kint4) {
  kint4 = 0;
} else if (third === kint5) {
  kint5 = 0;
} else if (third === kint6) {
  kint6 = 0;
}

let fourth = Math.max(kint1, kint2, kint3, kint4, kint5, kint6);

if (fourth === kint1) {
  kint1 = 0;
} else if (fourth === kint2) {
  kint2 = 0;
} else if (fourth === kint3) {
  kint3 = 0;
} else if (fourth === kint4) {
  kint4 = 0;
} else if (fourth === kint5) {
  kint5 = 0;
} else if (fourth === kint6) {
  kint6 = 0;
}

let fifth = Math.max(kint1, kint2, kint3, kint4, kint5, kint6);

if (fifth === kint1) {
  kint1 = 0;
} else if (fifth === kint2) {
  kint2 = 0;
} else if (fifth === kint3) {
  kint3 = 0;
} else if (fifth === kint4) {
  kint4 = 0;
} else if (fifth === kint5) {
  kint5 = 0;
} else if (fifth === kint6) {
  kint6 = 0;
}

console.log(`${first} ${second} ${third} ${fourth} ${fifth} ${last}`);
