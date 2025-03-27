function usdTOeur(usd) {
  const kursas = 0.93;
  return usd * kursas;
}

const atsitiktinisUsd = Math.floor(Math.random() * 1000) + 1;

const eur = usdTOeur(atsitiktinisUsd);

console.log(`Suma doleriais: ${atsitiktinisUsd} USD`);
console.log(`Suma eurais: ${eur.toFixed(2)} EUR`);
