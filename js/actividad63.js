var titulos = "prueba";
numero_pagina(56);

var titulos = "evaluacion";
numero_pagina(53);

function validarN(e) {
  tecla = document.all ? e.keyCode : e.which;
  if (tecla == 8) return true;
  patron = /[,qwertyuiopñlkjhgfdsazcvxbnmQWERTYUIOPÑLKJHGFDSAZCVBNM]/;
  te = String.fromCharCode(tecla);
  if (patron.test(te)) {
    alert("INGRESE SOLO LA LETRA X MAYÚSCULA");
    return false;
  }
}
function validar3(e) {
  tecla = document.all ? e.keyCode : e.which;
  if (tecla == 8) return true;
  patron = /[,qwertyuiopñlkjhgdsazcxbnmQWERTYUIOPÑLKJHGDSAZCBNM1230456789.]/;
  te = String.fromCharCode(tecla);
  if (patron.test(te)) {
    alert("INGRESE V(VERDADERO) O F(FALSO) ");
    return false;
  }
}


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;
var tpre10 = 0;
var tpre11 = 0;
var tpre12 = 0;

// #region Random1

// #endregion

// #region Pregunta1

// #endregion

// #region Random2

// #endregion

// #region Pregunta2

// #endregion

// #region Random3

// #endregion

// #region Pregunta3

// #endregion

// #region Pregunta4

// #endregion

// #region Pregunta5

// #endregion

// #region Random6

// #endregion

// #region Pregunta6

// #endregion

// #region Random7

// #endregion

// #region Pregunta7

// #endregion

// #region Random8

// #endregion

// #region Pregunta8

// #endregion

// #region Random9

// #endregion

// #region Pregunta9

// #endregion

// #region Random10

// #endregion

// #region Pregunta10

// #endregion

// #region Random11

// #endregion

// #region Pregunta11

// #endregion

// #region Pregunta12

// #endregion

// #region Calculo Nota Final
function NotaFinal() {
 
    pregunta1();
    var Nf =
      parseFloat(tpre1) +
      parseFloat(tpre2) +
      parseFloat(tpre3) +
      parseFloat(tpre4) +
      parseFloat(tpre5) +
      parseFloat(tpre6) +
      parseFloat(tpre7) +
      parseFloat(tpre8) +
      parseFloat(tpre9) +
      parseFloat(tpre10) +
      parseFloat(tpre11) +
      parseFloat(tpre12) ;
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}

// #endregion

