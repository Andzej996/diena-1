function convertAge(age) {
  if (typeof age !== "number" || age <= 0) {
    return "Iveskite teisinga amziu!";
  }

  const daysPerYear = 365;
  const hoursPerDay = 24;
  const minutesPerHour = 60;
  const secondsPerMinute = 60;

  let days = age * daysPerYear;
  let hours = days * hoursPerDay;
  let minutes = hours * minutesPerHour;
  let seconds = minutes * secondsPerMinute;

  return `Jusu amzius (${age} metu) yra:
    - ${days} dienu
    - ${hours} valandu
    - ${minutes} minuciu
    - ${seconds} sekundziu`;
}

let amzius = 32;
console.log(convertAge(amzius));
