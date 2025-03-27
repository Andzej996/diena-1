function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

let tempF = 89;
let tempC = 20;

console.log(`${tempF}°F yra ${fahrenheitToCelsius(tempF).toFixed(2)}°C`);
console.log(`${tempC}°C yra ${celsiusToFahrenheit(tempC).toFixed(2)}°F`);
