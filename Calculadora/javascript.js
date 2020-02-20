
var cifra="";
var acumulado=0;

function display_numeros(numero) {
  document.getElementById("display").value=cifra+numero;
cifra=document.getElementById("display").value;
}

function suma() {
  acumulado=acumulado+parseInt(cifra);
  document.getElementById("display").value=acumulado;
  cifra="";
}