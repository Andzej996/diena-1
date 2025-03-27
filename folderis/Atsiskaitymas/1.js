function eurTOusd(eur) {
  const kursas = 1.08;
  return eur * kursas;
}

const atsitiktinisEur = Math.floor(Math.random() * 1000) + 1;

const usd = eurTOusd(atsitiktinisEur);

console.log(`Suma eurais: ${atsitiktinisEur} EUR`);
console.log(`Suma doleriais: ${usd.toFixed(2)} USD`);
