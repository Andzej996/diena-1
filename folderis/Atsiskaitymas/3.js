function calculateBMI(weight, height) {
  if (
    typeof weight !== "number" ||
    typeof height !== "number" ||
    weight <= 0 ||
    height <= 0
  ) {
    return "Iveskite teisingus duomenis!";
  }

  let bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) {
    category = "Svoris per mazas.";
  } else if (bmi < 24.9) {
    category = "Normalus svoris.";
  } else if (bmi < 29.9) {
    category = "Jus turite antsvorio.";
  } else {
    category = "Jus turite nutukimą.";
  }

  return `Jusu BMI: ${bmi.toFixed(2)} - ${category}`;
}

let svoris = 53;
let ugis = 1.73;
console.log(calculateBMI(svoris, ugis));
