let vardas = "Andzej";
let pavarde = "Stankovskij";
let sovris = "84kg";
let mokykla = "VTDK";
let kodas = "72";
let kursas = "Bet kas";
let programa = "belekas";
let kredita = "10";

let a = 2;
let b = 3;
let c = 4;

if (a == b) {
  console.log("tiesa");
}
if (a != b) {
  console.log("netiesa");
}
console.log(a > b);
console.log(b > c * 2);
console.log(c > 0);
console.log(a < 0);
console.log(b / 4);
console.log(c / 8);

let amzius = 17;

if (amzius >= 18) {
  console.log("Jus galite balsuoti");
} else {
  console.log("Jus per jaunas");
}

let d = 5;
let e = 7;
let f = 10;

if ((d + e + f) / 3 >= 5) {
  console.log("taip yra teigiamas");
}

let g = 6;

if (g % 2 === 0) {
  console.log(g, Math.pow(g, 2), g / 2);
}

if (g % 7 !== 0) {
  let o = 5;
  console.log(g + o);
  console.log(g - o);
  console.log(g * o);
  console.log(g / o);
}

let pazymys = 5;
let tekstas = "";

if (pazymys === 10) {
  tekstas = "puiku";
} else if (pazymys > 10) {
  tekstas = "tokio pazymio nera";
} else if (pazymys >= 9) {
  tekstas = "labai gerai";
} else if (pazymys >= 8) {
  tekstas = "labai gerai";
} else if (pazymys >= 7) {
  tekstas = "gerai";
} else if (pazymys >= 5) {
  tekstas = "petenkinamai";
} else if (pazymys < 5) {
  tekstas = "egzaminas neislaikytas";
}

console.log(tekstas);

let pirmas = 5;
let antras = 6;
let trecias = 7;

if (pirmas === antras) {
} else if (pirmas === trecias) {
  console.log("pirmas lygus antram");
} else if (pirmas > trecias) {
  console.log("trecias didesnis uz pirma");
} else if (antras === trecias * 2) {
  console.log("antras lygus dviem treciam");
} else if (pirmas % 3 === 0) {
  console.log("pirmas dalinas is 3");
} else {
  console.log("klaida");
}

const figura = document.querySelectorAll(".figura");
const stiliai = window.getComputedStyle(figura);
const figurosPlotis = figura.clientWidth;
const figurosAukstis = figura.clientHeight;
const kvadratoRiba = 200;

if (figurosAukstis === figurosPlotis)
  if (stiliai.borderRadius == "50%") {
    figura.style.backgroudColor = "purple";
  } else {
    if (figurosPlotis >= kvadratoRiba) {
      figura.style.backgroudColor = "blue";
    } else {
      figura.style.backgroudColor = "blue";
    }
  }
//**switch
// switch salyga

console.log("\n\n\nSWITCH SALYGA\n\n\n");

// const uzsakymoStatusas = true;

// // sukurtas, patvirtintas, apmoketas, paruostas, vykdomas, pristatytas, grazintas

// switch (uzsakymoStatusas) {
//   case 10:
//     console.log("10 tekstas");
//     console.log("dsadsad");
//     break;
//   default:
//     console.log("rodyti sita zinute visais kitais atvejais");
//     break;
// }

// 5. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai
// būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet
// vykdyti for, kuris atskirose eilutėse išvestų kiekvieną skaičių iš tų rėžių, bei
// atskiriant tarpu - tų skaičių kvadratus.

console.log("5 uzduotis");
let pradzia = 2;
let pabaiga = 4;

if (pradzia < pabaiga) {
  for (let i = pradzia; i <= pabaiga; i++) {
    console.log(i, i * i);
  }
}

// 6. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai
// būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet
// vykdyti for, kuris iš duotų skaičių išvestų visus nelyginius skaičius arba tuos,
// kurie dalinasi iš 8.

console.log("\n6 uzduotis");
pradzia = 4;
pabaiga = 8;

if (pradzia < pabaiga) {
  for (let i = pradzia; i <= pabaiga; i++) {
    if (i % 2 !== 0 || i % 8 === 0) {
      console.log(i);
    }
  }
}

// 7. (papildomai, sunkiau) Be daugybos veiksmo programoje, sudauginti du skaičius.

console.log("\n7 uzduotis");
let pirmassk = 5;
let antrassk = 8;
let rezultatas = 0;

for (let i = 0; i < pirmassk; i++) {
  rezultatas += antrassk;
}

console.log(rezultatas);

// 8. Raskite visų skaičių nuo 1 iki 100 sumą.
// 9. Raskite visų lyginių skaičių nuo 20 iki 50 sumą.
// 10. Raskite visų nelyginių skaičių nuo 30 iki 60 sumą.
// 11. Rasti visų skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5
// sumą.
// Pavyzdys:
// Visi skaičiai mažesni už 10 ir kurie dalinasi iš 3 arba 5 yra: 3, 5, 6, 9.
// Šių skaičių suma yra 23.
// Turite gauti 233168 atsakymą.

let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
}
console.log(`8 uzduoties suma: ${suma}`);

suma = 0;
for (let i = 20; i <= 50; i++) {
  if (i % 2 === 0) {
    suma += i;
  }
}
console.log(`9 uzduoties suma: ${suma}`);

suma = 0;
for (let i = 30; i <= 60; i++) {
  if (i % 2 !== 0) {
    suma += i;
  }
}
console.log(`10 uzduoties suma: ${suma}`);

suma = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    suma += i;
  }
}
console.log(`11 uzduoties suma: ${suma}`);

// 12.The "Fizz-Buzz test" is an interview question designed to help filter out the
// 99.5% of programming job candidates who can't seem to program their
// way out of a wet paper bag. The text of the programming assignment is as
// follows:
// "Write a program that prints the numbers from 1 to 100. But for multiples
// of three print “Fizz” instead of the number and for the multiples of five
// print “Buzz”. For numbers which are multiples of both three and five print
// “FizzBuzz”."

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    continue;
  }
  if (i % 3 === 0) {
    console.log("Fizz");
    continue;
  }
  if (i % 5 === 0) {
    console.log("Buzz");
    continue;
  }
  console.log(i);
}

// 13.(sunkesnė) Parašyti for ciklą, kuris išvestų norimą kiekį fibonačiaus
// skaičių į ekraną. Fibonačiaus sekoje kiekvienas skaičius yra lygus prieš
// jį ėjusių dviejų skaičių sumai: 1, 1, 2, 3, 5, 8, 13, 21…
// 1. Susikurkite tris sveikųjų skaičių kintamuosius, kurie jums padės tai
// pasiekti.
//      1. Pirmi du kintamieji saugos paskutinius du skaičius.
//      2. Trečiasis bus šių pirmų dviejų skaičių suma.
// 2. Pirmus du skaičius išveskite ne cikle, o prieš jį ir ciklą pradėkite
// vykdyti nuo 2, o ne nuo 0.
// 3. Kiekvieno ciklo metu turite perskaičiuot trečiąjį skaičių
// (pirmų dviejų skaičių sudėtis), tuomet
// pirmasis skaičius yra lygus antram, o antrasis lygus trečiam,
// išvesti į ekraną trečią skaičių.

console.log("\n13 uzduotis");

let q = 2;
let w = 3;
let r = 5;

console.log(q);
console.log(w);
for (let i = 2; i < 15; i++) {
  r = q + w;
  q = w;
  w = r;
  console.log(r);
}

// 1. Išveskite visus skaičius nuo 1 iki 20.
// 2. Išveskite visus skaičius nuo 1 iki 50. Prie kiekvieno lyginio skaičiaus
// parašykite žodį „lyginis“, o prie kiekvieno nelyginio – „nelyginis“.
// 3. Išveskite visus skaičius nuo 25 iki 50. Vietoj skaičių, kurie dalinasi iš 3
// išveskite tekstą „skaičius {skaičius} dalinasi iš 3“.

console.log("\n\n\nWHILE\n\n\n");

console.log("1 uzduotis\n");

let skaicius = 1;
while (skaicius <= 20) {
  console.log(skaicius);
  skaicius++;
}

console.log("\n2 uzduotis\n");

skaicius = 1;
while (skaicius <= 50) {
  if (skaicius % 2 === 0) {
    console.log(skaicius, "lyginis");
  } else {
    console.log(skaicius, "nelyginis");
  }
  skaicius++;
}

console.log("\n3 uzduotis\n");

skaicius = 25;
while (skaicius <= 50) {
  if (skaicius % 3 === 0) {
    console.log(`skaičius ${skaicius} dalinasi iš 3`);
  } else {
    console.log(skaicius);
  }
  skaicius++;
}

// Žemiau parodytą pavyzdį pakeiskite taip, kad toje pačioje eilutėje išvestų ne tik skaičių, bet ir jo kvadratą:

console.log("\n3 uzduotis\n");
