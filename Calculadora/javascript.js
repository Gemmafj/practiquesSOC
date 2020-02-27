
var cifra="";
var acumulado=0;
var sumar=false;
var restar=false;
var p_operacion=true;
/*var multiplicar=false;
var dividir=false;*/

function display_numeros(numero) { /// funcio per concatenar sense sumar
  document.getElementById("display").value=cifra+numero;
cifra=document.getElementById("display").value;
}

/*window.onload=function() {
  this.document.getElementById("display").value=0
}*/

function suma() {
  if (restar) {
    acumulado=acumulado-parseInt(cifra);
  document.getElementById("display").value=acumulado;
  }
  else{
    acumulado=acumulado+parseInt(cifra);
  document.getElementById("display").value=acumulado;
  }
  cifra="";
  sumar=true;
  p_operacion=false;
}


function resta() {
  if (sumar) {
    acumulado=acumulado+parseInt(cifra);
    document.getElementById("display").value=acumulado;
  }else{
  acumulado=acumulado-parseInt(cifra);
  document.getElementById("display").value=acumulado;}

  cifra="";
  sumar=false;
  restar=true;
}

function resultado() {
  if (sumar) {
    document.getElementById("display").value=acumulado+parseInt(cifra);
  } else if(restar){
    document.getElementById("display").value=acumulado-parseInt(cifra);
  }
  
}