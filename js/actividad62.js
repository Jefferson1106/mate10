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
document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 0.50);
});

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
var random1 = [
    [
      '<span>El número 5 pertenece a los números naturales, enteros, racionales y reales.<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
    ],
    [
      '<span>El número 3,14 es un número irracional.<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
    ],
    [
      '<span>El número √(12) es un número racional.<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
    ],
    [
      '<span>Los números irracionales se pueden transformar en racionales.<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
    ]
  ];
  
  var ranuno = document.getElementsByClassName("imagen1");
  random1.sort(f_randomico);
  for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
      '<span width="50px">' + random1[i][0] + "</span> "
    );
  }
// #endregion

// #region Pregunta1
function pregunta1() {
  var pre1a = document.getElementById("pre1a").value;
  
      tpre1 = pre1a;
  
}
// #endregion

// #region Random2
var testimg = [
    ["1", "img/i2_p52_act2.jpg"],
    ["2", "img/i3_p52_act2.jpg"],
    ["3", "img/i4_p52_act2.jpg"],
    ["4", "img/i5_p52_act2.jpg"]
  ];
  
  finitimg();
  
  function finitimg() {
    var cajasImg = document.getElementsByClassName("imagen2");
  
    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
      $("#" + cajasImg[i].id).html(
        "<img id=" +
          testimg[i][1] +
          ' class="img-responsive imgAcom" src="' +
          testimg[i][1] +
          '">'
      );
    }
  }
// #endregion

// #region Pregunta2

$(".enc1").click(function() {
    if ($(this).hasClass("seleccionCajai")) {
      $(this).removeClass("seleccionCajai");
    } else {
      $(this).addClass("seleccionCajai");
    }
  });
  var respr1 = 0;
  var respr2 = 0;
  var respr3 = 0;
  var respr4 = 0;
  var respri1 = 0;
  var respri2 = 0;
  var respri3 = 0;
  var respri4 = 0;
  
  function pregunta2() {
    var CorrectasP = [["1", "img/i4_p52_act2.jpg"]];
    var caja1 = $("div[id=randos1]").find("img")[0].id;
    if ($("#randos1").hasClass("seleccionCajai")) {
      if (caja1 == "img/i4_p52_act2.jpg") {
        respr1 = 1;
        $("#randos1").addClass("correctoi");
      } else {
        respri1 = 1;
        $("#randos1").addClass("incorrectoi");
      }
    } else {
      respr1 = 0;
    }
  
    var caja2 = $("div[id=randos2]").find("img")[0].id;
    if ($("#randos2").hasClass("seleccionCajai")) {
      if (caja2 == "img/i4_p52_act2.jpg") {
        respr2 = 1;
        $("#randos2").addClass("correctoi");
      } else {
        respri2 = 1;
        $("#randos2").addClass("incorrectoi");
      }
    } else {
      respr2 = 0;
    }
  
    var caja3 = $("div[id=randos3]").find("img")[0].id;
    if ($("#randos3").hasClass("seleccionCajai")) {
      if (caja3 == "img/i4_p52_act2.jpg") {
        respr3 = 1;
        $("#randos3").addClass("correctoi");
      } else {
        respri3 = 1;
        $("#randos3").addClass("incorrectoi");
      }
    } else {
      respr3 = 0;
    }
    var caja4 = $("div[id=randos4]").find("img")[0].id;
    if ($("#randos4").hasClass("seleccionCajai")) {
      if (caja4 == "img/i4_p52_act2.jpg") {
        respr4 = 1;
        $("#randos4").addClass("correctoi");
      } else {
        respri4 = 1;
        $("#randos4").addClass("incorrectoi");
      }
    } else {
      respr4 = 0;
    }
  
    var suma =
      parseInt(respr1) + parseInt(respr2) + parseInt(respr3) + parseInt(respr4);
    var sumai =
      parseInt(respri1) +
      parseInt(respri2) +
      parseInt(respri3) +
      parseInt(respri4);
  
    var totalR = (suma * 0.50) / 1;
    if (totalR < 0) {
      tpre2 = 0;
    } else {
      tpre2 = totalR;
    }
  }
  
// #endregion

// #region Random3
var random3 = [
    [
      '<sup>3</sup><label>√(16)=</label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3c">'+
      '<sup><input type="text" maxlength="1" size="1" style="width:15px" id="cj3d"></sup><label>√(</label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3e"><label>)</label>'
    ],
    [
      '<sup>4</sup><label>√(x<sup>6</sup>)=</label></label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3f">'+
      '<label>√(</label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3g"><label>)</label>'
    ],
    [
      '<label>√(32)=</label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3a">'+
      '<label>√(</label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3b"><label>)</label>'
    ],
    [
      '<label>1/2</label><label>√(12)=</label>'+
      '<label>√(</label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3h"><label>)</label>'
    ]
  ];
  
  var rantres = document.getElementsByClassName("imagen3");
  random3.sort(f_randomico);
  for (i = 0; i < rantres.length; i++) {
    $("#" + rantres[i].id).html(
      '<span width="50px">' + random3[i][0] + "</span> "
    );
  }
// #endregion

// #region Pregunta3
function pregunta3() {
    var cor = 0;
    var inc = 0;
  
    var cj3a = document.getElementById("cj3a").value;
    var cj3b = document.getElementById("cj3b").value;
    var cj3c = document.getElementById("cj3c").value;
    var cj3d = document.getElementById("cj3d").value;
    var cj3e = document.getElementById("cj3e").value;
    var cj3f = document.getElementById("cj3f").value;
    var cj3g = document.getElementById("cj3g").value;
    var cj3h = document.getElementById("cj3h").value;
  
    if (cj3a == "4") {
      cor = cor + 1;
      $("#cj3a").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3a").addClass("incorrecto");
    }
  
    if (cj3b == "2") {
      cor = cor + 1;
      $("#cj3b").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3b").addClass("incorrecto");
    }
  
    if (cj3c == "2") {
      cor = cor + 1;
      $("#cj3c").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3c").addClass("incorrecto");
    }
  
    if (cj3d == "3") {
      cor = cor + 1;
      $("#cj3d").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3d").addClass("incorrecto");
    }
  
    if (cj3e == "2") {
      cor = cor + 1;
      $("#cj3e").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3e").addClass("incorrecto");
    }
  
    if (cj3f == "x") {
      cor = cor + 1;
      $("#cj3f").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3f").addClass("incorrecto");
    }
  
    if (cj3g == "x") {
      cor = cor + 1;
      $("#cj3g").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3g").addClass("incorrecto");
    }
  
    if (cj3h == "3") {
      cor = cor + 1;
      $("#cj3h").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3h").addClass("incorrecto");
    }
  
    var total = ((cor - inc) * 1) / 8;
    if (total < 0) {
      total = 0;
      tpre3 = total.toFixed(2);
    } else {
      tpre3 = total.toFixed(2);
    }
  }
// #endregion

// #region Random3

// #endregion

// #region Pregunta5

// #endregion

// #region Random6

// #endregion

// #region Pregunta6

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

// #region Pregunta10

// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "" ) {
    alert("Califiqué todas las preguntas");
  } else {
    pregunta1();
    pregunta2();
    pregunta3();

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
      parseFloat(tpre10) ;
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
  }
}

// #endregion
