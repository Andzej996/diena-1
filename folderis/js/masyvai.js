// 1. Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame masyve yra narių.

console.log("------- 1.");
let masyvas1 = [1, 25, 43, 436, 432, 324, 324, 3];

console.log(
  "Pirmas ir paskutinis narys:",
  masyvas1[0],
  masyvas1[masyvas1.length - 1]
);
console.log("Pasirinkti nariai is masyvo vidurio:", masyvas1[3], masyvas1[4]);
console.log("Kiek masyve yra nariu:", masyvas1.length);

// 2. Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite pakeisto masyvo informaciją.

console.log("------- 2.");
let masyvas2 = [1, 25, 43, 436, 432];

console.log("Visa masyvo informacija:", masyvas2);
masyvas2[masyvas2.length - 1] = 12;
masyvas2[masyvas2.length - 2] = 10;
masyvas2[masyvas2.length - 3] = 9;
console.log("Pakeisto masyvo informacija:", masyvas2);

// 3. Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.

console.log("------- 3.");

let masyvas3 = [];

masyvas3.push(3, 2, 1, 5, 223);

console.log("Visa masyvo informacija:", masyvas3);

// 4. Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais skaičiais. Išveskite šio masyvo informaciją.

console.log("------- 4.");

let masyvas4 = [];
masyvas4.push(Math.floor(Math.random() * 25));
masyvas4.push(Math.floor(Math.random() * 25));
masyvas4.push(Math.floor(Math.random() * 25));
console.log("Visa masyvo informacija:", masyvas4);

// 5. Sukurkite du masyvus dviejų studentų pažymiams saugoti. Įveskite po 3-5 pažymius kiekvienam studentui (iškart kuriant masyvus arba per push funkciją). Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio studento vidurkis didesnis ir išveskite atsakymą.

console.log("------- 5.");

let pazymiai1 = [2, 4, 6, 8, 7];
let pazymiai2 = [4, 5, 8, 7, 6];
let suma1 = 0;
let suma2 = 0;

for (let i = 0; i < pazymiai1.length; i++) {
  suma1 += pazymiai1[i];
}

for (let i = 0; i < pazymiai2.length; i++) {
  suma2 += pazymiai2[i];
}

const pirmoStudentoVidurkis = suma1 / pazymiai1.length;
const antroStudentoVidurkis = suma2 / pazymiai2.length;

if (pirmoStudentoVidurkis > antroStudentoVidurkis) {
  console.log("Pirmo studento vidurkis didesnis:", suma1 / pazymiai1.length);
} else {
  console.log("Antro studento vidurkis didesnis:", suma2 / pazymiai2.length);
}

// 6. Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.

console.log("------- 6.");

let studijuProgramos = [
  "Programu sistemos",
  "Ekonomika",
  "Matematika",
  "Informacines sistemos",
  "Duomenu mokslas",
];

for (let i = 0; i < studijuProgramos.length; i++) {
  console.log(studijuProgramos[i]);
}

// 7. Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis. Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada nurodant šalį iš masyvo.

console.log("------- 7.");

let saliuPavadinimai = [
  "Islandija",
  "Izraelis",
  "Indonezija",
  "Italija",
  "Ispanija",
];

for (let i = 0; i < saliuPavadinimai.length; i++) {
  console.log(`Salis: ${saliuPavadinimai[i]}`);
}

// 8. Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).

console.log("------- 8.");

let projektai = ["Saule", "Elektra", "Menulis", "Toyota"];

for (let i = 0; i < projektai.length; i++) {
  console.log(`${i + 1} projektas: ${projektai[i]}`);
}

// 9. Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.

console.log("------- 9.");

let skaiciai = [5, 1, 6, 3, 2, 9];

console.log("Skaiciai:", skaiciai);
console.log("Skaiciai didesni uz 5:");
for (let i = 0; i < skaiciai.length; i++) {
  if (skaiciai[i] > 5) {
    console.log(skaiciai[i]);
  }
}

// 10. Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite visų skaičių, kurie dalinasi iš 4 sumą.

console.log("------- 10.");

let skaiciai10 = [12, 8, 6, 3, 2, 9];
let suma10 = 0;

console.log("Skaiciai:", skaiciai10);
for (let i = 0; i < skaiciai10.length; i++) {
  if (skaiciai10[i] % 4 === 0) {
    suma10 += skaiciai10[i];
  }
}

console.log(`Skaiciu, kurie dalinasi is 4 suma: ${suma10}`);

// 11. Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.

console.log("------- 11.");

let pazymiai11 = [5, 1, 6, 9, 10];
let suma11 = 0;

console.log("Pazymiai:", pazymiai11);
for (let i = 0; i < pazymiai11.length; i++) {
  suma11 += pazymiai11[i];
}

console.log("Pazymiu vidurkis:", suma11 / pazymiai11.length);

// 12. Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.

console.log("------- 12.");

let pazymiai12 = [];
let suma12 = 0;

for (let i = 0; i <= 5; i++) {
  const pazymys = Math.floor(Math.random() * 10 + 1);
  pazymiai12.push(pazymys);
  suma12 += pazymys;
}

const pazymiuVidurkis = suma12 / pazymiai12.length;

console.log("Pazymiai:", pazymiai12);
console.log("Pazymiu vidurkis:", pazymiuVidurkis.toFixed(2));
console.log("Pazymiai didesni uz vidurki:");
for (let i = 0; i < pazymiai12.length; i++) {
  if (pazymiai12[i] > pazymiuVidurkis) {
    console.log(pazymiai12[i]);
  }
}

// 13. Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo  kvadratą.

console.log("------- 13.");

let masyvas = [5, 1, 6, 4, 9, 8, 6, 25];
console.log("Skaiciai:", masyvas);

for (let i = 0; i < masyvas.length; i++) {
  let tekstas = masyvas[i];
  if (masyvas[i] % 2 === 0) {
    tekstas += " " + masyvas[i] * masyvas[i];
  }
  console.log(tekstas);
}

// 14.Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis (atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.
console.log("------- 14.");

let pazymiai = [];

for (let i = 0; i < Math.floor(Math.random() * 5 + 5); i++) {
  pazymiai.push(Math.floor(Math.random() * 10 + 1));
}
console.log("Pazymiai:", pazymiai);

for (let i = 0; i < pazymiai.length; i++) {
  let tekstas = pazymiai[i];
  if (pazymiai[i] > 4) {
    tekstas += " teigiamas";
  } else {
    tekstas += " neigiamas.";
    tekstas += ` Iki teigiamo truko ${5 - pazymiai[i]}`;
  }
  console.log(tekstas);
}

// 15. Susikurkite žodžių masyvą ir užpildykite duomenimis. Išveskite visus žodžius ekrane, nurodant iš kiek raidžių kiekvienas šis žodis yra sudarytas. Papildykite skriptą taip, kad rastumėte visų raidžių kiekį (pvz yra žodžiai "medis" ir "alus", 5 ir 4 raidės atitinkamai, o jas sudėjus gaunasi 9 raidės).

console.log("------- 15.");

let zodziai = ["dsad", "dsadsad", "gfdytj", "fdsgfds"];
let suma = 0;

for (let i = 0; i < zodziai.length; i++) {
  console.log(zodziai[i], zodziai[i].length);
  suma += zodziai[i].length;
}

console.log(`Visu zodziu raidziu suma yra ${suma}`);

// 16. Susikurkite skaičių masyvą ir užpildykite duomenimis. Raskite visų skaičių,kurie dalinasi iš 3 sumą ir vidurkį. Išveskite pradinius duomenis ir gautus atsakymus.

console.log("------- 16.");

let skaiciuMasyvas = [5, 9, 600, 1, 5, 4, 66];
let rezultatas = [];
let sumaa = 0;

for (let i = 0; i < skaiciuMasyvas.length; i++) {
  if (skaiciuMasyvas[i] % 3 === 0) {
    rezultatas.push(skaiciuMasyvas[i]);
    sumaa += skaiciuMasyvas[i];
  }
}

console.log("Skaiciai:", skaiciuMasyvas);
console.log("Skaiciai, kurie dalinasi is 3:", rezultatas);
console.log("Suma ir vidurkis:", sumaa, sumaa / rezultatas.length);

// 17. Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...

console.log("------- 17.");

let zodziai17 = ["zuikelis", "medelis", "saulyte", "miskelis"];

for (const indeksas in zodziai17) {
  console.log(indeksas, zodziai17[indeksas]);
}

// 18. Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.

console.log("------- 18.");

let pirkiniai = ["pienas", "duona", "bandele", "arbata"];

console.log("Pirkiniu siame sarase:", pirkiniai.length);
for (const pirkinys of pirkiniai) {
  console.log("-", pirkinys);
}

// 19. Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.

console.log("------- 19.");

let pazymiai19 = [5, 2, 7, 4, 3, 1];
let suma19 = 0;

console.log("Pazymiai:", pazymiai19);
for (const pazymys of pazymiai19) {
  suma19 += pazymys;
}
console.log("Vidurkis:", suma19 / pazymiai19.length);

// 20. Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus per dieną kilometrus, kurie yra didesni nei 150.

console.log("------- 20.");

let kelione = [145, 80, 245, 150, 663, 1322];

console.log("Keliones kilometrai:", kelione);
for (const km of kelione) {
  if (km > 150) {
    console.log(km);
  }
}

// 21. Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis. Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt arba .json tipo.

console.log("------- 21.");

let failai = [
  "failas.txt",
  "paveiksleli.png",
  "ataskaita.csv",
  "duomenys.json",
];

console.log("Failai:", failai);
console.log("Tinkami skaityti failai:");
for (const failas of failai) {
  if (failas.endsWith(".txt") || failas.endsWith(".json")) {
    console.log(failas);
  }
}

// 22. Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant kiek raidžių sudaro jo pavadinimą.

console.log("------- 22.");

let automobiliai = ["BMW", "Audi", "VW", "MB", "Toyota"];

console.log("Markes:", automobiliai);
for (const marke of automobiliai) {
  console.log(marke, marke.length);
}

// 23. Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui, taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.

console.log("------- 23.");

let klaidosKodai = ["ui87", "sys12", "api5"];

console.log("Klaidos kodai:", klaidosKodai);
for (const kodas of klaidosKodai) {
  switch (kodas) {
    case "ui87":
      console.log(kodas, "Grafinės sąsajos klaida navigacijoje");
      break;
    case "ui87":
      console.log(kodas, "Trūksta operatyviosios atminties sistemoje");
      break;
    case "api5":
      console.log(kodas, "Programines sasajos klaida");
      break;
    default:
      console.log(kodas, "Neatpazintas klaidos kodas");
      break;
  }
}

// 24. Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės užteks maždaug 11 dienų ir t.t.

console.log("------- 24.");

let likuciai = [0, 5, 4, 2, 32, 5];

for (const likutis of likuciai) {
  console.log("Dabar yra:", likutis);
  console.log("Kiek dienu uzteks:", Math.ceil(likutis / 5));
}

// 25. Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas  gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų pažymių kiekį.

console.log("------- 25.");

let pazymiai25 = [];
let suma25 = 0;
let neigiami = 0;

for (let i = 0; i <= 5; i++) {
  const pazymys = Math.floor(Math.random() * 10 + 1);
  pazymiai25.push(pazymys);
  suma25 += pazymys;
}

console.log("Pazymiai:", pazymiai25);
console.log("Teigiami pazymiai:");

for (const pazymys of pazymiai25) {
  if (pazymys < 5) {
    neigiami++;
  } else {
    console.log(pazymys);
  }
}

console.log("Vidurkis:", suma25 / pazymiai25.length);
console.log("Neigiamu pazymiu kiekis:", neigiami);

// 26. Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir nurodykite kuris studentas turi didesnį vidurkį.

console.log("------- 26.");

const pazymiai261 = [8, 9, 7, 10, 6];
const pazymiai262 = [7, 8, 9, 9, 10];
let suma261 = 0;
let suma262 = 0;

for (const pazymys of pazymiai261) {
  suma261 += pazymys;
}

for (const pazymys of pazymiai262) {
  suma262 += pazymys;
}

const vidurkis261 = suma261 / pazymiai261.length;
const vidurkis262 = suma262 / pazymiai262.length;

console.log("1-ojo studento pažymiai:", pazymiai261);
console.log("1-ojo studento vidurkis:", vidurkis261);

console.log("2-ojo studento pažymiai:", pazymiai262);
console.log("2-ojo studento vidurkis:", vidurkis262);

if (vidurkis261 > vidurkis262) {
  console.log("1-asis studentas turi didesnį vidurkį.");
} else if (vidurkis262 > vidurkis261) {
  console.log("2-asis studentas turi didesnį vidurkį.");
} else {
  console.log("Abiejų studentų vidurkiai yra vienodi.");
}

// 27. Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.

console.log("------- 27.");

let zodziai27 = ["zole", "gele", "saule", "menulis"];
let atrinkti = [];

for (const zodis of zodziai27) {
  if (zodis.length < 5) {
    atrinkti.push(zodis);
  }
}

console.log("Visi zodziai", zodziai27);
console.log("Atrinkti zodziai", atrinkti);
