//pirmas div

document.getElementById("pirma-antraste").innerHTML =
  "Naujas pirmos antrastes tekstas";
document.getElementById("pirmas-paragrafas").innerHTML =
  "Naujas pakeistas pirmo paragrafo tekstas";

//antras div

console.log("ANTRAS DIV");

let tekstasIsParagrafo = document.getElementById("paragrafo-tekstas").innerHTML;
console.log("paimtas su innerHTML tekstas:", tekstasIsParagrafo);

let tekstasIsParagrafo2 =
  document.getElementById("paragrafo-tekstas").innerHTML;
console.log("paimtas su innerHTML tekstas:", tekstasIsParagrafo2);

console.log();

//trecias div

console.log("TRECIAS DIV");

console.log("innerHTML turinys", document.getElementById("trecias").innerHTML);
console.log("innerText turinys:", document.getElementById("trecias").innerText);

console.log();

//septintas div

function pakeisti() {
  document.getElementById("septinto-tekstas").innerHTML = "naujas tekstas";
}

//astuntas div

function pakeisti2(elementas, tekstas) {
  document.getElementById(elementas).innerHTML = tekstas;
}

//devintas div

function pakeisti3(elementas, tekstas) {
  document.getElementById(elementas).innerHTML = tekstas;
}

function kitaSpalva(elementas, spalva) {
  document.getElementById(elementas).style.color = spalva;
}

//desimatas div

var pirmas = 8;
var antras = 9;

var suma = pirmas + antras;
var skirtumas = pirmas - antras;
var sandauga = pirmas * antras;
var dalmuo = pirmas / antras;

document.getElementById("suma").innerHTML =
  pirmas + " + " + antras + " = " + suma;
document.getElementById("skirtumas").innerHTML =
  pirmas + " - " + antras + " = " + skirtumas;
document.getElementById("sandauga").innerHTML =
  pirmas + " * " + antras + " = " + sandauga;
document.getElementById("dalmuo").innerHTML =
  pirmas + " / " + antras + " = " + dalmuo;

//venuoliktas DIV

pirmas = 7;
antras = 5;

let isvedimui = `<p>${pirmas} + ${antras} = ${pirmas + antras}</p>
  <p>${pirmas} - ${antras} = ${pirmas - antras}</p>
  <p>${pirmas} * ${antras} = ${pirmas * antras}</p>
  <p>${pirmas} / ${antras} = ${pirmas / antras}</p>
  `;
document.getElementById("vienuolikto-turinis").innerHTML = isvedimui;

//dvyliktas div

function keistiSpalva(elementas, spalva) {
  document.getElementById(elementas).style.color = spalva;
}

function keistiDydi(elementas, Dydis) {
  document.getElementById(elementas).style.fontSize = Dydis + "px";
}

//tryliktas DIV
let divKeitimui = document.getElementById("div-keitimui");

let plocioSlider = document.getElementById("plocio-slider");
let aukscioSlider = document.getElementById("aukscio-slider");

plocioSlider.oninput = function () {
  divKeitimui.style.width = this.value + "px";
};

aukscioSlider.oninput = function () {
  divKeitimui.style.height = this.value + "px";
};

let spalvosPasirinkimas = document.getElementById("spalvos-pasirinkimas");

spalvosPasirinkimas.oninput = function () {
  divKeitimui.style.backgroundColor = this.value;
};

let tekstasDivui = document.getElementById("tekstas-divui");
tekstasDivui.oninput = function () {
  divKeitimui.innerHTML = this.value;
};

//keturioliktas div

function pridetiZodi(elementas, zodis) {
  document.getElementById(elementas).value += zodis + " ";
}

//penkioliktas DIV

let penkioliktoTekstas = document.getElementById("penkiolikto-tekstas");

function zodziuKiekis() {
  let tekstas = penkioliktoTekstas.value;
  let zodziai = tekstas.trim().split(" ");
  document.getElementById(
    "penkiolikto-atsakymai"
  ).innerHTML = `<p>Zodziu kiekis: ${zodziai.length}</p>`;
}

function ilgiausiasZodis() {
  let tekstas = penkioliktoTekstas.value;
  let zodziai = tekstas.trim().split(" ");

  let ilgiausias = " ";

  for (let zodis of zodziai) {
    if (zodis.length > ilgiausias.length) {
      ilgiausias = zodis;
    }
  }

  document.getElementById(
    "penkiolikto-atsakymai"
  ).innerHTML = `<p>Ilgiausias zodis: ${ilgiausias}</p>
  <p>Jo ilgis: ${ilgiausias.length} simboliu.</p>`;
}

//sesioliktas div

let pirmoSkirtukoTurinys = document.getElementById("pirmas-skirtukas");
let antroSkirtukoTurinis = document.getElementById("antras-skirtukas");

function pirmasSkirtukas() {
  pirmoSkirtukoTurinys.style.display = "block";
  antroSkirtukoTurinis.style.display = "none";
}

function antrasSkirtukas() {
  antroSkirtukoTurinis.style.display = "block";
  pirmoSkirtukoTurinys.style.display = "none";
}

//septynioliktas div

let perjingtiMygtukas = document.getElementById("perjungti-mygtukas");
let perjingtiTekstas = document.getElementById("perjungti-tekstas");

perjingtiMygtukas.onclick = function () {
  if (this.innerText == "Rodyti") {
    this.innerText = "nerodyti";
    perjingtiTekstas.style.display = "block";
  } else {
    this.innerText = "Rodyti";
    perjingtiTekstas.style.display = "none";
  }
};

//astuonioliktas div

let kitasPerjungtiTekstas = document.getElementById("kitas-perjungti-tekstas");

document.getElementById("kitas-perjungti-mygtukas").onclick = function () {
  if (kitasPerjungtiTekstas.style.display == "block") {
    this.innerText = "Rodyti";
    kitasPerjungtiTekstas.style.display = "none";
  } else {
    this.innerText = "Nerodyti";
    kitasPerjungtiTekstas.style.display = "block";
  }
};

//devynioliktas div

document.getElementById("devyniolikto-tekstas").onclick = function () {
  this.style.display = "none";
};
