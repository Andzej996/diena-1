function daysUntilChristmas() {
  let today = new Date();
  let currentYear = today.getFullYear();
  let christmas = new Date(currentYear, 11, 25);

  let diffTime = christmas - today;
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return `Iki Kalėdų liko ${diffDays} dienų! 🎄`;
}

console.log(daysUntilChristmas());
