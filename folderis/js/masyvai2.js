// let skaiciai = [4, 7, 8, 9, 6, 5, 8, 2];
// console.log("skaiciai", skaiciai);

// let arYra2 = skaiciai.includes(8);
// console.log("ar 8 yra", arYra2);

// console.log("---------");

// let valgiuMasyvas = ["Pica", "Sushi", "Cepelinai", "Burgeris", "Lazanija"];
// console.log("Pradiniai valgiai:", valgiuMasyvas.join(", "));
// valgiuMasyvas.unshift("Blynai");
// console.log("Pridėjus priekyje:", valgiuMasyvas.join(", "));
// valgiuMasyvas.push("Šašlykai");
// console.log("Pridėjus gale:", valgiuMasyvas.join(", "));
// valgiuMasyvas.splice(3, 0, "Sriuba");
// console.log("Pridėjus per vidurį:", valgiuMasyvas.join(", "));
// valgiuMasyvas.splice(5, 0, "Makaronai");
// console.log("Pridėjus pasirinktame indekse:", valgiuMasyvas.join(", "));
// valgiuMasyvas.shift();
// console.log("Pašalinus iš priekio:", valgiuMasyvas.join(", "));
// valgiuMasyvas.pop();
// console.log("Pašalinus iš galo:", valgiuMasyvas.join(", "));
// valgiuMasyvas.splice(3, 1);
// console.log("Pašalinus iš vidurio:", valgiuMasyvas.join(", "));

// console.log("---------");
// let zodziai = ["obuolys", "bananas", "kriaušė", "persikas", "vyšnia"];

// let sakinys = zodziai.join("\n");
// console.log(sakinys);

// console.log("---------");

// let sakinys1 = "Aš ejau pro šali, ir nieko nepamates praejau tuoliau";

// let zodziuMasyvas = sakinys1.split(" ");

// let zodziuKiekis = zodziuMasyvas.lenght;

// console.log(sakinys);
// console.log("Masyvas:", zodziuMasyvas);
// console.log("Žodžiu kiekis:", zodziuKiekis);

// // 5. Susikurkite pažymių masyvą. Surikiuokite pažymius nuo didžiausio iki
// // mažiausio. Išveskite tris didžiausius pažymius.

// console.log("---------");
// let pazymiai = [4, 7, 8, 9, 6, 5, 2];

// let surikiuotiPazymiai = pazymiai.sort((a, b) => b - a);
// console.log("surikiuoti pazymiai", surikiuotiPazymiai);
// console.log("Trys didžiausi pažymiai:", pazymiai.slice(0, 3));

// // 6. Susikurkite du masyvus, pirmąjame būtų saugomi biologijos pamokos
// // studentų vardai, o antrąjame būtų saugojami matematikos pamokos
// // studentų vardai. Apjunkite šiuos masyvų informaciją į vieną masyvą.
// // Bonus: ar jums pavyktų išskirti tik unikalius vardus? (galima ieškoti kaip
// // panaudoti set).

console.log("---------");

let biologija = ["Marius", "Laura", "Tomas", "Greta", "Jonas"];
let matematika = ["Jonas", "Greta", "Simona", "Tadas", "Marius"];

let visiStudentai = biologija.concat(matematika);
console.log("Visi studentai:", visiStudentai);

let unikalusStudentai = [...new Set(visiStudentai)];
console.log("Unikalūs studentai:", unikalusStudentai);

// // 7. Susikurkite du masyvus. Pirmame masyve bus išvardinta pirmo semestro
// // paskaitų temos, o antrame masyve - antro semestro paskaitų temos.
// // Sujunkite šiuos masyvus naudojant spread operator, taip, kad pirmiausia
// // būtų pateikta pirmo semestro informacija ir tada antro.

console.log("---------");

let pirmasSemestras = ["taekwondo", "matematika", "win chiun", "šahmatai"];
let antrasSemestras = ["filosofija", "boxas", "algebra", "MMA"];

console.log([...pirmasSemestras, ...antrasSemestras]);

// // 8. Susikurkite masyvą, kuriame būtų išvardintos kelios spalvos. Padarykite
// // šio masyvo kopiją ir duomenis iš originalaus masyvo pašalinkite. Išveskite
// // abu masyvus, atkreipkite dėmesį į tai kad pašalinus duomenis iš pirmojo
// // masyvo, turėjo pasinaikinti tik iš jo, o antrame viskas likti tvarkingai, o
// // jeigu išsitrynė abiejų duomenys - pamėginkite surasti priežastį ir
// // sutvarkyti.

console.log("---------");

let spalvos = ["Raudona", "Mėlyna", "Žalia", "Geltona", "Juoda"];

let spalvosKopija = spalvos.slice();

spalvos.length = 0;

console.log("Masyvas po išvalymo:", spalvos);
console.log("Kopijuotas masyvas:", spalvosKopija);

// 9. Susikurkite masyvą, kuriame būtų saugomi miestų pavadinimai. Atlikite
// paiešką masyve su indexOf surasdami kurioje pozicijoje yra pasirinktas
// miestas.

let miestai = ["Vilnius", "Kaunas", "Ukmerge", "Klaipeda", "Palanga"];
console.log("Miestai", miestai);

let rastasIndeksas = miestai.indexOf("Ukmerge");
console.log("Ukmerges indeksas:", rastasIndeksas);

// 10. Susikurkite bet kokį masyvą. Parašykite programą kuri išsiaiškintų ar
// masyve yra bent vienas dublikatas.
// Pvz, masyve [1, 2, 3] nėra dublikatų.
// O masyve [1, 2, 3, 4, 2] yra dublikatų (skaičius 2).

let skaiciai = [1, 4, 2, 1, 5, 2, 1, 2, 7, 8, 9, 4];

console.log("Masyvas:", skaiciai);
let turiDublikatu = new Set(skaiciai).size !== skaiciai.length;

if (turiDublikatu) {
  console.log("Masyve yra dublikatų!");
} else {
  console.log("Masyve nėra dublikatų.");
}

// 11. Parašykite programą, kuri galėtų masyvą išskaidyti į pasirinkto dydžio
// gabalėlius (chunk size). Pvz turint masyvą [1, 2, 3, 4, 5, 6] ir pasirinkus
// chunk size 2, turėtų gautis toks masyvas - [[1, 2], [3, 4], [5, 6]].

// 12. Susikurkite string tipo kintamąjį, kuriame būtų išsaugoti skaitmenys, pvz
// “01458”. Patikrinkite ar nurodytas “skaičius” yra palindromis, t.y. toks kuris
// yra vienodas tiek skaitant iš priekio, tiek iš galo (palindromio pvz: 01310).
// Hint: su string kintamuoju galima panaudoti ir dalį masyvų metodų.

console.log("---------");

let skaicius = "01458";

console.log("Patikrinamas skaičius:", skaicius);

let apverstas = skaicius.split("").reverse().join("");

if (skaicius === apverstas) {
  console.log("Šis skaičius yra palindromis!");
} else {
  console.log("Šis skaičius nėra palindromis.");
}

// 13. Susikurkite du skaičių masyvus. Susikurkite trečią, tačiau tuščią masyvą.
// Parašykite programą kuri sudėtų pirmų dviejų masyvų skaičius į trečiąjį,
// tačiau nekartojant jau trečiame egzistuojančių reikšmių (sudėtų tik
// unikalius skaičius). Pvz jeigu turime masyvus [1, 2, 3, 4] ir [2, 3, 5, 6], tai
// trečiasis turėtų gautis [1, 2, 3, 4, 5, 6].

console.log("---------");

let masyvas10 = [1, 2, 12, 43, 23, 43, 222, 732];
let masyvas20 = [231, 12, 124, 212, 53, 12, 732];
let masyvas30 = [];

let apjugtiMasyvai = masyvas10.concat(masyvas20);
console.log("Visi studentai:", apjugtiMasyvai);

let unikalusMasyvas = [...new Set(apjugtiMasyvai)];
console.log("Unikalus masyvas", unikalusMasyvas);

// 14. Susikurkite du bet kokius masyvus. Raskite kurie elementai egzistuoja tiek
// viename tiek kitame masyve. Pvz jeigu pirmasis yra [1, 2, 3], o antrasis yra
// [2, 3, 4], tai atsakymas [2, 3].

console.log("---------");

let masyvas11 = [1, 23, 777, 2, 2002, 734, 987, 3];
let masyvas22 = [2, 3, 77, 500, 200, 777, 2002, 734, 4];

let bendriElementai = masyvas11.filter((elementas) =>
  masyvas22.includes(elementas)
);

console.log("Bendri elementai:", bendriElementai);

// 15. Susikurkite skaičių masyvą, kuriame skaičiai nebūtinai eina didėjimo
// tvarka. Raskite mažiausią teigiamą skaičių kuris neegzistuoja. Pvz jeigu
// masyvas yra [7, 5, 1, 9, 3, 4], tai atsakymas yra 2.

console.log("---------");

let visiskaiciai = [7, 5, 2, 9, 3, 4, -1, 22, -74];

let teigiamiSkaiciai = visiskaiciai.filter((skaicius) => skaicius > 0);

let unikalusSkaiciai = [...new Set(teigiamiSkaiciai)].sort((a, b) => a - b);

let maziausiasTrukstamas = 1;
for (let i = 0; i < unikalusSkaiciai.length; i++) {
  if (unikalusSkaiciai[i] === maziausiasTrukstamas) {
    maziausiasTrukstamas++;
  }
}

console.log(
  "Mažiausias teigiamas skaičius, kuris neegzistuoja:",
  maziausiasTrukstamas
);

// 16. Susikurkite norimą masyvą. Apverskite šį masyvą, kad elementai eitų
// atvirkščiai. Pvz jeigu turime masyvą [1, 2, 3, 4], tai apvertus turime gauti [4,
// 3, 2, 1].

console.log("---------");

let paskutinis = [1, 2, 3, 4, 5, 6];

let atvirksciaiSurikiuotiSk = paskutinis.slice().reverse();
console.log("atvirksciai surikiuoti sk", atvirksciaiSurikiuotiSk);
