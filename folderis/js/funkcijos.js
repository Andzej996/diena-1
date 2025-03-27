// function vardas() {
//   console.log(
//     "Mano vardas yra Andzej. Pasirinkau programavima nes man tai idomu ir noriu pakeisti profesija"
//   );
// }

// vardas();
// vardas();
// vardas();

// console.log("-----1.2-----");

// function eilerastis() {
//   console.log("Saulė šviečia, dangus giedras,");
//   console.log("Vėjas švelniai glosto skruostus.");
//   console.log("Upė tyliai čiurlena šalia,");
//   console.log("Vasara kviečia pasvajoti.");
//   console.log("Gamta – geriausias įkvėpimas!");
// }

// eilerastis();
// eilerastis();
// eilerastis();
// eilerastis();
// eilerastis();

// console.log("-----1.3-----");

// function pirmasTekstas() {
//   console.log("Pirmoji funkcija: Programavimas yra menas.");
// }

// function antrasTekstas() {
//   console.log("Antroji funkcija: Kiekviena klaida – nauja pamoka.");
// }

// function treciasTekstas() {
//   console.log("Trečioji funkcija: Kodas yra galingas irankis keisti pasaulį.");
// }

// pirmasTekstas();
// antrasTekstas();
// treciasTekstas();

// console.log("-----1.4-----");

// function pirmaEilute() {
//   console.log("Pirmoji eilute");
// }

// function antraEilute() {
//   console.log("Antroji eilute");
// }

// function sujungtaFunkcija() {
//   pirmaEilute();
//   antraEilute();
// }

// sujungtaFunkcija();

// console.log("-----2/3.5-----");

// function atsitiktiniuSkaiciuSuma() {
//   let skaicius1 = Math.floor(Math.random() * 10) + 1;
//   let skaicius2 = Math.floor(Math.random() * 10) + 1;
//   let suma = skaicius1 + skaicius2;

//   console.log(`${skaicius1} + ${skaicius2} = ${suma}`);
// }

// atsitiktiniuSkaiciuSuma();
// atsitiktiniuSkaiciuSuma();
// atsitiktiniuSkaiciuSuma();

// console.log("-----2/3.6-----");

// function policininkoInformacija() {
//   let vardas = "Jonas";
//   let pavarde = "Kazlauskas";
//   let amzius = 35;
//   let alga = 1800;
//   let etatas = "Pilnas";
//   let specializacija = "Kelių policija";

//   console.log(`Policininko informacija:
//     Vardas: ${vardas}
//     Pavardė: ${pavarde}
//     Amžius: ${amzius} metai
//     Alga: ${alga} €
//     Etatas: ${etatas}
//     Specializacija: ${specializacija}`);
// }

// policininkoInformacija();

// console.log("-----3/3.7-----");

// function generuotiAtsitiktinius() {
//   let skaiciai = "";
//   for (let i = 0; i < 10; i++) {
//     let atsitiktinis = Math.floor(Math.random() * 100);
//     skaiciai += atsitiktinis + " ";
//   }
//   console.log(skaiciai.trim());
// }

// generuotiAtsitiktinius();
// generuotiAtsitiktinius();
// generuotiAtsitiktinius();
// generuotiAtsitiktinius();
// generuotiAtsitiktinius();

// console.log("-----3/3.8-----");

// function atsitiktinisSkaicius() {
//   let skaicius = Math.floor(Math.random() * 100);
//   console.log(skaicius);
// }

// for (let i = 0; i < 10; i++) {
//   atsitiktinisSkaicius();
// }

// console.log("-----9-----");

// function labas(vardas) {
//   console.log("Labas", vardas);
// }

// function ate(vardas) {
//   console.log("viso gero", vardas);
// }

// let manoVardas = "Tomas";

// labas(manoVardas);
// ate(manoVardas);

// console.log("-----10-----");

// function palygintiSkaicius(skaicius1, skaicius2) {
//   if (skaicius1 > skaicius2) {
//     console.log(`${skaicius1} yra didesnis uz ${skaicius2}`);
//   } else if (skaicius1 < skaicius2) {
//     console.log(`${skaicius2} yra didesnis uz ${skaicius1}`);
//   } else {
//     console.log(`Skaiciai yra lygus: ${skaicius1} = ${skaicius2}`);
//   }
// }

// palygintiSkaicius(10, 5);
// palygintiSkaicius(3, 8);
// palygintiSkaicius(7, 7);

// console.log("-----11-----");

// function automobilioInformacija(marke, modelis, metai, darbinisTuris) {
//   console.log(`Automobilis: ${marke} ${modelis}`);
//   console.log(`Gamintas:", ${metai}`);
//   console.log(`Darbinis turis: ${darbinisTuris}`);
// }

// automobilioInformacija("Audi", "A8", 2020, 4.2);
// automobilioInformacija("BMW", "X5", 2020, 3.0);

// console.log("-----12-----");

// function sudetis(a, b) {
//   console.log(`${a} + ${b} = ${a + b}`);
// }

// function skirtumas(a, b) {
//   console.log(`${a} - ${b} = ${a - b}`);
// }

// function sandauga(a, b) {
//   console.log(`${a} * ${b} = ${a * b}`);
// }

// function dalmuo(a, b) {
//   if (b !== 0) {
//     console.log(`${a} / ${b} = ${(a / b).toFixed(2)}`);
//   } else {
//     console.log(`${a} / ${b} = negalima dalinti iš nulio!`);
//   }
// }

// function atlikVeiksmus() {
//   let skaicius1 = Math.floor(Math.random() * 10) + 1;
//   let skaicius2 = Math.floor(Math.random() * 10) + 1;

//   console.log(`Generuojami skaičiai: ${skaicius1} ir ${skaicius2}`);
//   sudetis(skaicius1, skaicius2);
//   skirtumas(skaicius1, skaicius2);
//   sandauga(skaicius1, skaicius2);
//   dalmuo(skaicius1, skaicius2);
// }

// atlikVeiksmus();
// atlikVeiksmus();
// atlikVeiksmus();

// console.log("-----13-----");

// function isvestiZodziusIrIlgi(zodziai) {
//   zodziai.forEach((zodis) => {
//     console.log(`${zodis} - ilgis: ${zodis.length} simboliai`);
//   });
// }

// let zodziaiMasyvas = ["obuolys", "banana", "kriaušė", "avokadas", "mangos"];

// isvestiZodziusIrIlgi(zodziaiMasyvas);

// console.log("-----14-----");

// function visiSkaiciai(skaiciai) {
//   skaiciai.forEach((skaicius) => {
//     console.log(
//       `${skaicius} - skaiciaus kvadratas: ${
//         skaicius ** 2
//       } skaicius padalintas is dveju: ${skaicius / 2}`
//     );
//   });
// }

// let skaiciuMasyvas1 = [2, 24, 3, 4, 5, 7];
// let skaiciuMasyvas2 = [2, 24, 3, 4, 5, 7];

// visiSkaiciai(skaiciuMasyvas1);
// visiSkaiciai(skaiciuMasyvas2);

console.log("-----15-----");

function studentas(vardas, pavarde, pazymiai) {
  console.log(
    `Studentas: ${vardas} ${pavarde}, turi pažymius: ${pazymiai.join(", ")}`
  );

  let vidurkis =
    pazymiai.reduce((total, pazymys) => total + pazymys, 0) / pazymiai.length;

  console.log(`Vidurkis: ${vidurkis.toFixed(2)}`);
}

let vardas = "Pszemyslovas";
let pavarde = "Pszemyslovicius";
let pazymiai = [4, 5, 9, 8, 10];

studentas(vardas, pavarde, pazymiai);

console.log("---------16--------");

function rastiDidziausia(masyvas) {
  const didziausias = Math.max(...masyvas);
  console.log(didziausias);
}

function sugeneruotiAtsitiktinius(masyvas, kiekis) {
  for (let i = 0; i < kiekis; i++) {
    const atsitiktinisSk = Math.floor(Math.random() * 100) + 1;
    masyvas.push(atsitiktinisSk);
  }
  console.log(masyvas.join(", "));
}

let masyvas1 = [];
let masyvas2 = [];
let masyvas3 = [];

sugeneruotiAtsitiktinius(masyvas1, 5);
sugeneruotiAtsitiktinius(masyvas2, 5);
sugeneruotiAtsitiktinius(masyvas3, 5);

rastiDidziausia(masyvas1);
rastiDidziausia(masyvas2);
rastiDidziausia(masyvas3);

console.log("---------17--------");

function sakinys() {
  let tekstas = "kazkoks sakynis grazinimui";
  return tekstas;
}

console.log(sakinys());

let atsakymas = sakinys();
console.log(atsakymas);

console.log("---------18--------");

function skaiciusGrazinimui() {
  let skaicius18 = Math.floor(Math.random() * 10) + 1;
  return skaicius18;
}

console.log(skaiciusGrazinimui());

let atskiaiciui = skaiciusGrazinimui();
console.log(atskiaiciui);

console.log("---------19--------");

function studentoInformacija(vardas, vidurkis) {
  return `Studentas ${vardas} turi vidurkį ${vidurkis}.`;
}

let atsakymas1 = studentoInformacija("Tomas", 8.7);
let atsakymas2 = studentoInformacija("Petras", 9.2);

console.log(atsakymas1);
console.log(atsakymas2);
