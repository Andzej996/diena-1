// Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek
// turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto
// raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių
// reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.).

let knygynas = {
  pavadinimas: "Knygų pasaulis",
  adresas: "Gedimino pr. 10, Vilnius",
  plotas: 150, // kvadratiniai metrai
  knyguKiekis: 5000,
  darboValandos: "10:00 - 19:00",
  atidarytas: true,
};

console.log(knygynas);
console.log(
  "knygyno plotas:",
  knygynas.plotas,
  "knygyno knygu kiekis:",
  knygynas.knyguKiekis,
  "knygyno darbo valandos:",
  knygynas.darboValandos,
  "knygyno darbo laikas:",
  knygynas.atidarytas
);

// Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose

// objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų
// programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių
// vidurkius. Išveskite abiejų studentų informaciją, bei pažymių vidurkius.
// Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir
// išveskite jo vardą su pavarde.

let studentas1 = {
  vardas: "Jonas",
  pavarde: "Petraitis",
  studijuPrograma: "Informatika",
  pazymiai: [8, 9, 7, 10, 6],
};

let studentas2 = {
  vardas: "Austėja",
  pavarde: "Kavaliauskaitė",
  studijuPrograma: "Verslo vadyba",
  pazymiai: [6, 7, 8, 9, 7],
};

function skaiciuotiVidurki(pazymiai) {
  let suma = pazymiai.reduce((sum, pazymys) => sum + pazymys, 0);
  return suma / pazymiai.length;
}

let vidurkis1 = skaiciuotiVidurki(studentas1.pazymiai);
let vidurkis2 = skaiciuotiVidurki(studentas2.pazymiai);

console.log(studentas1);
console.log(studentas2);

if (vidurkis1 > vidurkis2) {
  console.log(
    `Didesnį pažymių vidurkį turi: ${studentas1.vardas} ${studentas1.pavarde}`
  );
} else if (vidurkis2 > vidurkis1) {
  console.log(
    `Didesnį pažymių vidurkį turi: ${studentas2.vardas} ${studentas2.pavarde}`
  );
} else {
  console.log("Abu studentai turi vienodą vidurkį.");
}

// 9. Pagal 16-ą pavyzdį, pritaikykite skriptą prie kitos esybės, t.y. sukurkite tokį
// objektą, kuriame turėtumėte tam tikrų savybių, bei metodą/funkciją, kuri
// kažką paskaičiuotų iš objekto duomenų. Šio objekto informacijos ir
// atsakymų išvedimas irgi būtų panašus į duotą nurodytame pavyzdyje.

console.log("-----9-----");

let studentas3 = {
  vardas: "Jonas",
  pavarde: "Petraitis",
  studijuPrograma: "Informatika",
  pazymiai: [8, 9, 7, 10, 6],
  vidurkis: function () {
    let suma = 0;
    for (const paz of this.pazymiai) {
      suma += paz;
    }
    return suma / this.pazymiai.length;
  },
};

console.log(studentas3.vidurkis());

// 10.Pagal 18-ą pavyzdį, pritaikykite skriptą prie kitos esybės. Išveskite visą

// objekto informaciją per atskirą nuo objekto console.log(), taip pat, išveskite
// tam tikrą pasirinktą informaciją pasinaudojant funkcija/metodu iš objekto.

console.log("-----10-----");

let salonas = {
  masinuKiekis: 100,
  masinuSavikaina: 80000,
  masinuPardavimoKaina: 90000,
  pardavus: function () {
    console.log(
      "pardavus visas masinas galetumia uzdirbti:",
      (this.masinuPardavimoKaina - this.masinuSavikaina) * this.masinuKiekis
    );
  },
};

console.log("Salonas:", salonas, "\n");
salonas.pardavus();

// 11.Susikurkite knygų objektų masyvą. Apie kiekvieną knygą į atskirus knygų objektus
// sudėkite norimą informaciją (bent 3 savybes). Į masyvą įdėkite bent 3 knygas. Visas
// šias knygas išsiveskite. Tuomet parodykite pirmą knygą. Antros knygos kažkurią
// savybę.

console.log("-------11-----");

masyvas = [
  { pavadinimas: "belekokia gera", kaina: 800, autorius: "Tadas Tadaitis" },
  { pavadinimas: "kokia nors", kaina: 900, autorius: "Mantas Mantaitis" },
  { pavadinimas: "gera", kaina: 1800, autorius: "Adomas Daitis" },
];

console.log(masyvas);
console.log(masyvas[0]);
console.log(masyvas[1].kaina);

// 12.Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis.
// Išveskite visų prekių pavadinimus su kainomis ir dar kokiais nors atributais
// atskirose eilutėse.

console.log("-------12-----");

preke = [
  { pavadinimas: "belekokia gera", kaina: 800, autorius: "Tadas Tadaitis" },
  { pavadinimas: "kokia nors", kaina: 900, autorius: "Mantas Mantaitis" },
  { pavadinimas: "gera", kaina: 1800, autorius: "Adomas Daitis" },
];

console.log(preke[0].pavadinimas, preke[0].kaina, preke[0].autorius);
console.log(preke[1].pavadinimas, preke[1].kaina, preke[1].autorius);
console.log(preke[2].pavadinimas, preke[2].kaina, preke[2].autorius);

// 13.Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis.
// Išveskite kiekvieno automobilio pavadinimą, metus ir paskaičiuotą jo amžių
// (dabartiniai metai - gamybos metai).

console.log("-------13------");

let automobiliai = [
  {
    marke: "Toyota",
    modelis: "Corolla",
    metai: 2020,
    amzius: function () {
      return new Date().getFullYear() - this.metai;
    },
  },
  {
    marke: "BMW",
    modelis: "X5",
    metai: 2018,
    amzius: function () {
      return new Date().getFullYear() - this.metai;
    },
  },
  {
    marke: "Honda",
    modelis: "Civic",
    metai: 2022,
    amzius: function () {
      return new Date().getFullYear() - this.metai;
    },
  },
];
automobiliai.forEach((auto) => {
  console.log(
    `${auto.marke} ${auto.modelis}, metai: ${
      auto.metai
    }, amžius: ${auto.amzius()} metų`
  );
});

// 14.Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite
// duomenimis. Išveskite kiekvienos įmonės informaciją atskirose eilutėse,
// gražiai suformatuotai (sakinio pavidalu ar pan.). Taip pat, ką nors
// paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis įmonės amžius,
// darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.).

const imones = [
  { pavadinimas: "Auglita", darbotuojuSkaicius: 500, pelnas: 500000 },
  { pavadinimas: "Bomblita", darbotuojuSkaicius: 1500, pelnas: 400000 },
  { pavadinimas: "Donlita", darbotuojuSkaicius: 300, pelnas: 200000 },
];

let bendras_pelnas = 0;

console.log("Imoniu bendras pelnas:");

for (const imone of imones) {
  bendras_pelnas += imones.pelnas;
  console.log("-", imone.pavadinimas, "uzdirbo", imone.pelnas, "eur");
}

console.log(
  "bendras darbuotojus skaicius yra:",
  imones[0].darbotuojuSkaicius +
    imones[1].darbotuojuSkaicius +
    imones[2].darbotuojuSkaicius
);

const bendrasPelanas = imones.reduce((a, imones) => a + imones.pelnas, 0);

console.log(bendrasPelanas);

// 15.Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite ji
// pasirinktais duomenimis. Išveskite ligoninių pavadinimus su adresais
// skirtingose eilutėse. Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.:
// bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan.
