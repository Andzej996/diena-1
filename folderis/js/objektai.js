let studentas = {
  Vardas: "Tadas",
  Pavarde: "Tadauskas",
  Amzius: "25",
  ugis: "155",
  kursas: "1",
  mokykla: "tds",
};

console.log(studentas.Vardas);
console.log(studentas.Pavarde);
console.log(studentas.Amzius);

// Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek
// uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių
// sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto
// informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis -
// biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite
// kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba
// panaudoti new Date(Date.now()).getFullYear() funkciją).

let filmas = {
  pavadinimas: "The Dark Knight",
  rezisierius: "Christopher Nolan",
  biudzetas: 185000000,
  uzdirboPoIsleidimo: 1004558444,
  zanras: "Action, Crime, Drama",
  trukme: 152,
  isleidimoMetai: 2008,
  aktoriai: [
    "Christian Bale",
    "Heath Ledger",
    "Aaron Eckhart",
    "Michael Caine",
    "Maggie Gyllenhaal",
  ],
};
console.log(filmas);

let uzdarbis = filmas.uzdirboPoIsleidimo - filmas.biudzetas;

console.log(uzdarbis);

let aktoriuKiekis = filmas.aktoriai.length;

console.log(aktoriuKiekis);

let senumas = 2025 - filmas.isleidimoMetai;

console.log(senumas);

// 3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename

// objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius,
// žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais),
// išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų
// informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei
// kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos
// kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?

let knyga1 = {
  pavadinimas: "1984",
  autorius: "George Orwell",
  zanras: "Dystopian, Political fiction",
  kaina: 15.99,
  puslapiuKiekis: 328,
  skyriai: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"],
  isleidytaMetai: 1949,
  arGalimaRastiKnygynuose: "taip",
};

let knyga2 = {
  pavadinimas: "To Kill a Mockingbird",
  autorius: "Harper Lee",
  zanras: "Southern Gothic, Drama",
  kaina: 12.99,
  puslapiuKiekis: 281,
  skyriai: ["Part 1", "Part 2", "Part 3"],
  isleidytaMetai: 1960,
  arGalimaRastiKnygynuose: "taip",
};

console.log(knyga1);
console.log(knyga2);

let plonesneKnyga =
  knyga1.puslapiuKiekis < knyga2.puslapiuKiekis
    ? knyga1.pavadinimas
    : knyga2.pavadinimas;
console.log("plonesne knyga:", plonesneKnyga);

let pigesnesKnygosPadvigubintaKaina = knyga2.kaina * 2;
let kainosPalyginimas =
  pigesnesKnygosPadvigubintaKaina > knyga1.kaina ? "brangesnė" : "ne brangesnė";

console.log("Padvigubinus pigesnes knygos kaina ji butu", kainosPalyginimas);

// Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte

// sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas,
// turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite
// visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje
// (pirma prekė kainuoja - ..., antra prekė kainuoja - ..., ir t.t.). Raskite ir
// išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą
// rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos
// prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės
// pelningumą ((kaina - savikaina) * kiekis sandėlyje).

let preke1 = {
  pavadinimas: "Televizorius",
  kaina: 500,
  savikaina: 300,
  kodas: "TV123",
  kiekisSandelyje: 20,
  dezesMatmenys: { x: 80, y: 50, z: 10 },
};

let preke2 = {
  pavadinimas: "Telefonas",
  kaina: 200,
  savikaina: 150,
  kodas: "PH456",
  kiekisSandelyje: 50,
  dezesMatmenys: { x: 15, y: 10, z: 5 },
};

let preke3 = {
  pavadinimas: "Nešiojamas kompiuteris",
  kaina: 1000,
  savikaina: 600,
  kodas: "LAP789",
  kiekisSandelyje: 10,
  dezesMatmenys: { x: 40, y: 30, z: 10 },
};

console.log(preke1);
console.log(preke2);
console.log(preke3);

console.log(preke1.kaina, "EUR");
console.log(preke2.kaina, "EUR");
console.log(preke3.kaina, "EUR");

let brangiausiaPreke =
  preke1.kaina > preke2.kaina && preke1.kaina > preke3.kaina
    ? preke1
    : preke2.kaina > preke1.kaina && preke2.kaina > preke3.kaina
    ? preke2
    : preke3;
console.log("Brangiausia preke:", brangiausiaPreke);

let dezesTuris1 =
  preke1.dezesMatmenys.x * preke1.dezesMatmenys.y * preke1.dezesMatmenys.z;
let dezesTuris2 =
  preke2.dezesMatmenys.x * preke2.dezesMatmenys.y * preke2.dezesMatmenys.z;
let dezesTuris3 =
  preke3.dezesMatmenys.x * preke3.dezesMatmenys.y * preke3.dezesMatmenys.z;

console.log(`Prekės 1 dėžės tūris: ${dezesTuris1} cm³`);
console.log(`Prekės 2 dėžės tūris: ${dezesTuris2} cm³`);
console.log(`Prekės 3 dėžės tūris: ${dezesTuris3} cm³`);

let pelningumas1 = (preke1.kaina - preke1.savikaina) * preke1.kiekisSandelyje;
let pelningumas2 = (preke2.kaina - preke2.savikaina) * preke2.kiekisSandelyje;
let pelningumas3 = (preke3.kaina - preke3.savikaina) * preke3.kiekisSandelyje;

console.log("Prekės nr1 pelningumas:", pelningumas1);
console.log("Prekės nr2 pelningumas:", pelningumas2);
console.log("Prekės nr3 pelningumas:", pelningumas3);

// Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su
// reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys).
// Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai,
// spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio
// informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis
// įrašykite dabartinius metus arba panaudokite new
// Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek
// vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300
// kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).

let automobilis = {};

console.log(automobilis);

automobilis.marke = "Toyota";
automobilis.modelis = "Corolla";
automobilis.rida = 30000;
automobilis.gamybosMetai = 2015;
automobilis.spalva = "Mėlyna";
automobilis.darbinisTūris = 1.8;
automobilis.dauzta = "ne";
automobilis.parduodama = "taip";

console.log(automobilis);

let dabartiniaiMetai = new Date(Date.now()).getFullYear();
let automobilioMetai = dabartiniaiMetai - automobilis.gamybosMetai;

console.log(`Automobiliui yra ${automobilioMetai} metų.`);

let vidutiniaiKmPerMetus = automobilis.rida / automobilioMetai;

console.log(
  `Automobilis vidutiniskai pravezioja per metus: ${vidutiniaiKmPerMetus.toFixed(
    2
  )} km.`
);

// 6. Sukurkite savo norimą objektą(-us). Kiekviename sudėkite bent 5 savybes
// su reikšmėmis (reikšmes galite įdėti ir atskirai). Išveskite informaciją.
// Pagalvokite ką dar galite su šiuo objektu atlikti (paskaičiuoti ir pan.) ir tai
// padarykite.

let kavine = {
  Pavadinimas: "Bet kokia",
  IkurimoData: 2014,
  Apyvarta: 200000,
  Islaidos: 134200,
  SrautasMen: 2000,
};
console.log(kavine);

let sieMetai = new Date(Date.now()).getFullYear();
let metai = sieMetai - kavine.IkurimoData;

console.log(`Kavinei yra: ${metai} metu`);

let uzdarirba = kavine.Apyvarta - kavine.Islaidos;

console.log(`Kavine uzdirba: ${uzdarirba} eur/men`);
