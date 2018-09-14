var titulos = "prueba";
numero_pagina(100);

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
      '<img class="img-responsive" src="img/i2_p100_act1.jpg"><br><label>x=</label><input type="text" size="1" style="width:70px" id="cj1c">'
    ],
    [
      '<img class="img-responsive" src="img/i3_p100_act1.jpg"><br><table><td><table><tr><td></td></tr><tr><td><label>x=</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:70px" id="cj1d"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:70px" id="cj1e"></td></tr></table></td></table>'
    ],
    [
        '<img class="img-responsive" src="img/i1_p100_act1.jpg"><br><table><td><table><tr><td></td></tr><tr><td><label>x=</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:70px" id="cj1a"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:70px" id="cj1b"></td></tr></table></td></table>'
      ],
    [
      '<img class="img-responsive" src="img/i4_p100_act1.jpg"><br><label>x=</label><input type="text" size="1" style="width:70px" id="cj1f">'
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
    var cor = 0;
    var inc = 0;
  
    var cj1a = document.getElementById("cj1a").value;
    var cj1b = document.getElementById("cj1b").value;
    var cj1c = document.getElementById("cj1c").value;
    var cj1d = document.getElementById("cj1d").value;
    var cj1e = document.getElementById("cj1e").value;
    var cj1f = document.getElementById("cj1f").value;
  
    if (cj1a == "20" ) {
      cor = cor + 1;
      $("#cj1a").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj1a").addClass("incorrecto");
    }
  
    if (cj1b == "3" ) {
      cor = cor + 1;
      $("#cj1b").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj1b").addClass("incorrecto");
    }
  
    if (cj1c == "2" ) {
      cor = cor + 1;
      $("#cj1c").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj1c").addClass("incorrecto");
    }
  
    if (cj1d == "5" ) {
      cor = cor + 1;
      $("#cj1d").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj1d").addClass("incorrecto");
    }

    if (cj1e == "4") {
        cor = cor + 1;
        $("#cj1e").addClass("correcto");
      } else {
        inc = inc + 1;
        $("#cj1e").addClass("incorrecto");
      }

      if (cj1f == "11") {
        cor = cor + 1;
        $("#cj1f").addClass("correcto");
      } else {
        inc = inc + 1;
        $("#cj1f").addClass("incorrecto");
      }
  
    var total = (cor * 1) / 6;
    if (total < 0) {
      total = 0;
      tpre1 = total.toFixed(2);
    } else {
      tpre1 = total.toFixed(2);
    }
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
  }
// #endregion

// #region Random2
var random2 = [
    [
      '<table><td><img class="img-responsive" src="img/i2_p100_act2.jpg"></td><td><input type="text" size="1" style="width:70px" id="cj2c"></td></table>'
    ],
    [
      '<table><td><img class="img-responsive" src="img/i1_p100_act2.jpg"></td><td><table><tr><td><input type="text" size="1" style="width:70px" id="cj2a"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:70px" id="cj2b"></td></tr></table></td></table>'
    ],
    [
        '<table><td><img class="img-responsive" src="img/i3_p100_act2.jpg"></td><td><input type="text" size="1" style="width:70px" id="cj2d"></td></table>'
      ],
    [
      '<table><td><img class="img-responsive" src="img/i4_p100_act2.jpg"></td><td><label>|<input type="text" size="1" style="width:70px" id="cj2e">|</label></td></table>'
    ]
  ];
  
  var randos = document.getElementsByClassName("imagen2");
  random2.sort(f_randomico);
  for (i = 0; i < randos.length; i++) {
    $("#" + randos[i].id).html(
      '<span width="50px">' + random2[i][0] + "</span> "
    );
  }
// #endregion

// #region Pregunta2
function pregunta2() {
    var cor = 0;
    var inc = 0;
  
    var cj2a = document.getElementById("cj2a").value;
    var cj2b = document.getElementById("cj2b").value;
    var cj2c = document.getElementById("cj2c").value;
    var cj2d = document.getElementById("cj2d").value;
    var cj2e = document.getElementById("cj2e").value;
  
    if (cj2a == "1" ) {
      cor = cor + 1;
      $("#cj2a").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj2a").addClass("incorrecto");
    }
  
    if (cj2b == "x+3" || cj2b == "x + 3" || cj2b == "x+ 3"  || cj2b == "x +3") {
      cor = cor + 1;
      $("#cj2b").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj2b").addClass("incorrecto");
    }
  
    if (cj2c == "-1" || cj2c == "- 1" ) {
      cor = cor + 1;
      $("#cj2c").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj2c").addClass("incorrecto");
    }
  
    if (cj2d == "1-w" || cj2d == "1 - w" || cj2d == "1 -w"|| cj2d == "1- w" ) {
      cor = cor + 1;
      $("#cj2d").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj2d").addClass("incorrecto");
    }

    if (cj2e == "100-g"||cj2e == "100 - g"||cj2e == "100 -g" ||cj2e == "100- g") {
        cor = cor + 1;
        $("#cj2e").addClass("correcto");
      } else {
        inc = inc + 1;
        $("#cj2e").addClass("incorrecto");
      }

  
    var total = (cor * 1) / 5;
    if (total < 0) {
      total = 0;
      tpre2 = total.toFixed(2);
    } else {
      tpre2 = total.toFixed(2);
    }
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
  }
// #endregion

// #region Random3
var random3 = [
    [
      '<img class="img-responsive" src="img/i4_p100_act3.jpg"><br><label>x=</label><input type="text" size="1" style="width:70px" id="cj3d">'
    ],
    [
      '<img class="img-responsive" src="img/i3_p100_act3.jpg"><br><label>x=</label><input type="text" size="1" style="width:70px" id="cj3c">'
    ],
    [
        '<img class="img-responsive" src="img/i1_p100_act3.jpg"><br><label>x=</label><input type="text" size="1" style="width:70px" id="cj3a">'
      ],
    [
      '<img class="img-responsive" src="img/i2_p100_act3.jpg"><br><label>x=</label><input type="text" size="1" style="width:70px" id="cj3b">'
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
  
    if (cj3a == "4" ) {
      cor = cor + 1;
      $("#cj3a").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3a").addClass("incorrecto");
    }
  
    if (cj3b == "-2") {
      cor = cor + 1;
      $("#cj3b").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3b").addClass("incorrecto");
    }
  
    if (cj3c == "1" ) {
      cor = cor + 1;
      $("#cj3c").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3c").addClass("incorrecto");
    }
  
    if (cj3d == "-5" ) {
      cor = cor + 1;
      $("#cj3d").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3d").addClass("incorrecto");
    }


  
    var total = (cor * 1) / 4;
    if (total < 0) {
      total = 0;
      tpre3 = total.toFixed(2);
    } else {
      tpre3 = total.toFixed(2);
    }
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
  }
// #endregion

// #region Random4

// #endregion

// #region Pregunta4

// #endregion

// #region Random5

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

// #region Random12

// #endregion

// #region Pregunta12

// #endregion

// #region Calculo Nota Final
function NotaFinal() {
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
    parseFloat(tpre10) +
    parseFloat(tpre11) +
    parseFloat(tpre12);

  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
}

// #endregion
