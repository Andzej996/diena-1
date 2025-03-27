/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/

let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/
console.log("--------");

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

/*
Užduotis 3
Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.*/

console.log("--------");

let aviuSkaicius = 1;
let menesiai = 12;
let menesioKartais = 4;
let month = 1;

while (month <= menesiai) {
  console.log(`Mėnuo ${month}: ${aviuSkaicius} avys`);
  aviuSkaicius *= menesioKartais;
  month++;
}

/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/

let aviuSkaiciuss = 1;
let menesiais = 12;
let menesioKartaiss = 4;

for (let month = 1; month <= menesiais; month++) {
  console.log(`Mėnuo ${month}: ${aviuSkaiciuss} avys`);
  aviuSkaiciuss *= menesioKartaiss;
}

/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
*/

console.log("--------");

let currentGen = 1;
let totalGen = 19;
let totalMW = 0;

while (currentGen <= 4) {
  totalMW += 62;
  console.log(
    `Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW} MW!`
  );
  currentGen++;
}

for (let i = 0; i < 15; i++) {
  totalMW += 124;
  console.log(
    `Generatorius #${currentGen} įjungtas, pridėjo 124 MW, viso generuojama ${totalMW} MW!`
  );
  currentGen++;
}

/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0;
*/

/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
}
*/

/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/
