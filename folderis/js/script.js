let skaicius = 1;

while (skaicius < 5) {
  console.log(skaicius, skaicius ** 2);
  skaicius++;
}
console.log("--------");

// isvesti atsitiktini skiaiciu

skaicius = 1;
let ciklai = 5;

while (skaicius < ciklai) {
  console.log(Math.random() * 10);
  skaicius++;
}
console.log("--------");

skaicius = 1;
ciklai = Math.random() * 5;
let summa = 0;

while (skaicius < ciklai) {
  const atstiktinis = Math.random() * 10;
  console.log(atstiktinis);
  summa += atstiktinis;
  skaicius++;
}

console.log("summa", summa);
