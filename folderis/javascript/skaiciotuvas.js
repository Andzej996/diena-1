let input = document.getElementById("calc-input");

function onNumberClick(number) {
  input.value += number;
}

let firstNumber = 0;
let secondNumber = 0;
let action = "+";
let anwser = 0;

let calculationSpan = document.getElementById("calculation");

let history = [];

function onNumberClick(number) {
  input.value += number.toString().replace(",", ".");
}

function onActionClick(clickedAction) {
  if (input.value === "") return;
  input.value += " " + clickedAction + " ";
  action = clickedAction;
}
function onCountClick() {
  let splitted = input.value.trim().split(" ");

  if (splitted.length < 3) {
    console.error("Klaida: neteisinga įvestis");
    return;
  }
}

function onCountClick() {
  let splitted = input.value.split(" ");
  firstNumber = parseFloat(splitted[0]);
  action = splitted[1];
  secondNumber = parseFloat(splitted[2]);
  function onNumberClick(number) {
    let lastNumber = input.value.split(" ").pop();

    if (number === "." && lastNumber.includes(".")) return;

    input.value += number;
  }

  calculateAnwser();
  input.value = anwser;

  calculationSpan.innerText = `${firstNumber} ${action} ${secondNumber}`;

  addToHistory();
}
function calculateAnwser() {
  switch (action) {
    case "+":
      anwser = firstNumber + secondNumber;
      break;
    case "-":
      anwser = firstNumber - secondNumber;
      break;
    case "x":
      anwser = firstNumber * secondNumber;
      break;
    case "/":
      anwser = firstNumber / secondNumber;
      break;
  }
}

function onCleanClick() {
  firstNumber = 0;
  secondNumber = 0;
  action = "+";
  anwser = 0;
  input.value = "";
  calculationSpan.innerText = "";
}

function addToHistory() {
  let historyItem = {
    firstNumber,
    action,
    secondNumber,
    anwser,
  };
  history.push(historyItem);
}

document.getElementById("show-history").onclick = function () {
  let formatted = history.map(
    (x) => `<p>${x.firstNumber}${x.action}${x.secondNumber}=${x.anwser}`
  );
  let historyBlock = document.querySelector(".calculator .history-items");
  historyBlock.innerHTML = formatted.join(" ");
  console.log(history);
};
