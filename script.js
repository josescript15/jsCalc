/*------------
JS CALCULATOR
-------------*/

const inPut = document.getElementById("querry");
const outPut = document.getElementById("result");
const fxBoard = document.getElementById("fx-board");
const bracketBtn = document.getElementById("bracket");
const ansType = document.getElementById('ans');

// append a value
function appendInput(value) {

  if (inPut.innerHTML.at(-1) === ")") {
    inPut.innerHTML += "*" + value;
  } else if (inPut.innerHTML && outPut.innerHTML) {
    inPut.innerHTML = value;
    outPut.innerHTML = "";
  } else {
    inPut.innerHTML += value;
  }
  ansType.textContent = '';
}
function appendOperator(operator) {
  if (outPut.innerHTML && inPut.innerHTML) {
    inPut.innerHTML = `${outPut.innerHTML.concat(operator)}`;
    outPut.innerHTML = "";
  } else {
    inPut.innerHTML += operator;
  }
}
function calculate() {
  var query;
  var cleanQuery
  query = inPut.innerHTML.replaceAll("^", "**");
  cleanQuery = query.replaceAll("%", "/(100)");

  try {
    outPut.innerHTML = eval(cleanQuery);
  } catch(error) {
    inPut.innerHTML = " ";
    outPut.innerHTML = error.name;
    console.log(error.message);
  }
}

function clearCalc() {
  inPut.innerHTML = "";
  outPut.innerHTML = "";
}

function deleteLastDigit() {
  let string = inPut.innerHTML.toString();
  let cleanString = string.slice(0, -1);
  inPut.innerHTML = cleanString;
}

function showFx() {
  fxBoard.classList.toggle("fx-display");
}

/*-----------------
CALC FUCNTIONS / Fx
---------------- */

//sine
function sine() {
  let fxResult = eval(inPut.innerHTML);
  try {
    outPut.innerHTML = isNaN(Math.sin(parseFloat(fxResult) * Math.PI / 180 )) ? "error": Math.sin(parseFloat(fxResult));
  } catch(error) {
    outPut.innerHTML = error.name;
  }
  ansType.textContent = 'sin';
}

//Cosine
function cosine() {
  let fxResult = eval(inPut.innerHTML);
  try {
    outPut.innerHTML = isNaN(Math.cos(parseFloat(fxResult) * Math.PI / 180 ))? "error": Math.cos(parseFloat(fxResult) * Math.PI / 180);
  } catch(error) {
    outPut.innerHTML = error.name;
  }
  ansType.textContent = 'cos';
}

//Tangent
function tangent() {
  let fxResult = eval(inPut.innerHTML);
  try {
    outPut.innerHTML = isNaN(Math.tan(parseFloat(fxResult)))? "error": Math.tan(parseFloat(fxResult));
  } catch(error) {
    outPut.innerHTML = error.name;
  }
  ansType.textContent = 'tan';
}

//logarithm
function logarithm() {
  let fxResult = eval(inPut.innerHTML);
  try {
    outPut.innerHTML = Math.log(parseFloat(fxResult));
  } catch(error) {
    outPut.innerHTML = error.name;
  }
  ansType.textContent = 'log';
}

/*Inverse fx*/
function sineInverse() {

  let fxResult = eval(inPut.innerHTML);
  let result = isNaN(Math.asin(parseFloat(fxResult)))? "error" : Math.acos(parseFloat(fxResult));
  try {
    outPut.innerHTML = result;
  }
  catch (e) {
    outPut.innerHTML = e.name;
  }
  ansType.textContent = 'sin-1';

}

function cosInverse() {
  let fxResult = eval(inPut.innerHTML);
  try {
    outPut.innerHTML = isNaN(Math.acos(parseFloat(fxResult)))? "error" : Math.acos(parseFloat(fxResult));
  } catch(err) {
    outPut.innerHTML = err.name;
  }
  ansType.textContent = 'cos-1';
}

function tanInverse() {
  let fxResult = eval(inPut.innerHTML);
  try {
    outPut.innerHTML = isNaN(Math.atan(parseFloat(fxResult)))? "error" : Math.atan(parseFloat(fxResult));
  } catch(err) {
    outPut.innerHTML = err.name;
  }
  ansType.textContent = 'tan-1';
}