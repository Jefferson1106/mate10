var titulos = 'refuerzo';
numero_pagina(39);


function validarN(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /[,qwertyuiopñlkjhgfdsazcvxbnmQWERTYUIOPÑLKJHGFDSAZCVBNM]/;
    te = String.fromCharCode(tecla);
    if (patron.test(te)) {
        alert("INGRESE SOLO LA LETRA X MAYÚSCULA");
        return false;
    }

}
function validar3(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /[,qwertyuiopñlkjhgdsazcxbnmQWERTYUIOPÑLKJHGDSAZCBNM]/;
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
// #region Random1
var ejer = 1, itemsT = 5, cont = 0, tmp, cor = 0, inc = 0, calificacion = 10, claseAnimada = 'animate bounceIn';
var resp = [], i;

var pal1 = ['<span class="bg_palabra c1">&nbsp;-0,25&nbsp;</span>', '<span class="bg_palabra c2">&nbsp;3,14&nbsp;</span>', '<span class="bg_palabra c3">&nbsp;π&nbsp;</span>', '<span class="bg_palabra c4">&nbsp;2,<label class="periodo">66</label>&nbsp;</span>', '<span class="bg_palabra c5">&nbsp;-5&nbsp;</span>'];
var txt1 = ['<tr><td><div class="cajas imagen c1" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">"- (1/4)"</div></td></tr>', '<tr><td><div class="cajas imagen c2" id="caja_img2"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt2"><img src="img/i1_p38_act1.jpg"></div></td></tr>', '<tr><td><div class="cajas imagen c3" id="caja_img3"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt3">“3,141592654…”</div></td></tr>', '<tr><td><div class="cajas imagen c4" id="caja_img4"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt4"><img src="img/i2_p38_act1.jpg"></div></td></tr>', , '<tr><td><div class="cajas imagen c5" id="caja_img3"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt3">“-(5/1)”</div></td></tr>'];
pal1.sort(f_randomico);
txt1.sort(f_randomico);
$(".textos").append(pal1);
$(".contenidos").append(txt1);
$(".bg_palabra").css('cursor', 'move');
$(".bg_palabra").draggable({ //arrastramos
    revert: "invalid",
    zIndex: 5,
    containment: ".actividad7",
    scroll: false,
});
$(".imagen").droppable({
    drop: function (e, ui) {
        //v_idsp5.push(ui.draggable.attr("id").substr(3));//obtenemos el id del arrastre
        //r_idsp5.push($(this).attr("id").substr(4)); //obtenemos el id del destino
        for (i = 1; i < 6; i++) { //4 elementos
            var nn = 'c' + i; //obtenemos la clase
            if ($(ui.draggable).hasClass(nn)) { //comparamos la clase del arrastre
                if ($(this).hasClass(nn)) { //con la clase del destino q tienen en mismo nombre
                    resp.push('ok');
                } else {
                    resp.push('no');
                }
            }
        }
        $(ui.draggable).removeClass("bg_palabra");//quitamos clase de background
        //console.log(resp); //respuestas
        ui.draggable.attr("style", "");
        $(this).append(ui.draggable);
    }
});
// #endregion
// #region Pregunta1
function pregunta1() {
    cont++;
    $(this).unbind("click");
    AgregaClase(".nota", claseAnimada);
    QuitaClase(".actividad", claseAnimada);
    temp = $(".imagen");
    for (i = 0; i < resp.length; i++) {
        if (resp.length == 5 && resp[i] == 'ok') {
            cor++;
            f_ok(temp);
        } else {
            inc++;
            f_no(temp);
        }
    }
    //var calc = (calificacion / itemsT);
    var total = (cor / itemsT).toFixed(2);
    tpre1 = total;
    f_tiempo();

}
// #endregion
// #region Random2
var random2 = [
    ['<td ><label>log(5)</label></td>' +
        '<td ><input type="text" maxlength="1"  style="width:40px" id=cj1a onkeypress="return validarN(event)"></td>' +
        '<td ><input type="text" maxlength="1" style="width:40px" id=cj1b onkeypress="return validarN(event)"></td>' +
        '<td ><input type="text" maxlength="1" style="width:40px" id=cj1c onkeypress="return validarN(event)"></td>'
    ],
    ['<td><label><sup>3</sup>√(4)</label> </td>' +
        '<td><input type="text" maxlength="1"  style="width:40px" id=cj2a onkeypress="return validarN(event)"></td>' +
        '<td><input type="text" maxlength="1"  style="width:40px" id=cj2b onkeypress="return validarN(event)" onkeypress="return validarN(event)"></td>' +
        '<td><input type="text" maxlength="1"  style="width:40px" id=cj2c onkeypress="return validarN(event)"></td>'
    ],
    ['<td><label>0,111…</label></td>' +
        '<td><input type="text" maxlength="1"  style="width:40px" id=cj3a onkeypress="return validarN(event)"></td>' +
        '<td><input type="text" maxlength="1"  style="width:40px" id=cj3b onkeypress="return validarN(event)"> </td>' +
        '<td><input type="text" maxlength="1"  style="width:40px" id=cj3c onkeypress="return validarN(event)"></td>'
    ],
    ['    <td><label>log(1)</label></td>' +
        '<td><input type="text" maxlength="1"  style="width:40px" id=cj4a onkeypress="return validarN(event)"></td>' +
        '<td><input type="text"  maxlength="1" style="width:40px" id=cj4b onkeypress="return validarN(event)"></td>' +
        '<td><input type="text"  maxlength="1" style="width:40px" id=cj4c onkeypress="return validarN(event)"></td>'
    ],
    ['  <td><label>e</label></td>' +
        '<td><input type="text" maxlength="1"  style="width:40px" id=cj5a onkeypress="return validarN(event)"></td>' +
        '<td><input type="text" maxlength="1"  style="width:40px" id=cj5b onkeypress="return validarN(event)"></td>' +
        '<td><input type="text" maxlength="1"  style="width:40px" id=cj5c onkeypress="return validarN(event)"></td>'
    ]
];

var sumaNum = document.getElementsByClassName('imagent');
random2.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + random2[i][0] + '</span> ');

}
// #endregion
// #region Pregunta2

function pregunta2() {
    var cor = 0;
    var inc = 0;
    var cj1a = document.getElementById('cj1a').value;
    var cj1b = document.getElementById('cj1b').value;
    var cj1c = document.getElementById('cj1c').value;
    var cj2a = document.getElementById('cj2a').value;
    var cj2b = document.getElementById('cj2b').value;
    var cj2c = document.getElementById('cj2c').value;
    var cj3a = document.getElementById('cj3a').value;
    var cj3b = document.getElementById('cj3b').value;
    var cj3c = document.getElementById('cj3c').value;
    var cj4a = document.getElementById('cj4a').value;
    var cj4b = document.getElementById('cj4b').value;
    var cj4c = document.getElementById('cj4c').value;
    var cj5a = document.getElementById('cj5a').value;
    var cj5b = document.getElementById('cj5b').value;
    var cj5c = document.getElementById('cj5c').value;


    if (cj1a == "X" && cj1b == "X" && cj1c == "X") {
        inc = inc + 1;
        $("#cj1a").addClass('incorrecto');
        $("#cj1b").addClass('incorrecto');
        $("#cj1c").addClass('incorrecto');
    }
    else {
        if (cj1a == "X" && cj1b == "X") {
            inc = inc + 1;
            $("#cj1a").addClass('incorrecto');
            $("#cj1b").addClass('incorrecto');
        }
        else {
            if (cj1b == "X" && cj1c == "X") {
                inc = inc + 1;
                $("#cj1b").addClass('incorrecto');
                $("#cj1c").addClass('incorrecto');
            }
            else {
                if (cj1a == "X" && cj1c == "X") {
                    inc = inc + 1;
                    $("#cj1a").addClass('incorrecto');
                    $("#cj1c").addClass('incorrecto');
                }
                else {
                    if (cj1a != "") {
                        inc = inc + 1;
                        $("#cj1a").addClass('incorrecto')
                    }
                    else {
                        if (cj1b == "X") {
                            cor = cor + 1;
                            $("#cj1b").addClass('correcto')
                        }
                        else {
                            if (cj1c != "") {
                                inc = inc + 1;
                                $("#cj1c").addClass('incorrecto')
                            }
                            else {

                            }
                        }
                    }
                }
            }
        }
    }

    if (cj2a == "X" && cj2b == "X" && cj2c == "X") {
        inc = inc + 1;
        $("#cj2a").addClass('incorrecto');
        $("#cj2b").addClass('incorrecto');
        $("#cj2c").addClass('incorrecto');
    } else {
        if (cj2b == "X" && cj2c == "X") {
            inc = inc + 1;
            $("#cj2b").addClass('incorrecto');
            $("#cj2c").addClass('incorrecto');
        } else {
            if (cj2a == "X" && cj2c == "X") {
                inc = inc + 1;
                $("#cj2a").addClass('incorrecto');
                $("#cj2c").addClass('incorrecto');
            } else {
                if (cj2a == "X" && cj2b == "X") {
                    inc = inc + 1;
                    $("#cj2a").addClass('incorrecto');
                    $("#cj2b").addClass('incorrecto');
                } else {
                    if (cj2a != "") {
                        inc = inc + 1;
                        $("#cj2a").addClass('incorrecto')
                    }
                    else {
                        if (cj2b != "") {
                            inc = inc + 1;
                            $("#cj2b").addClass('incorrecto')
                        }
                        else {
                            if (cj2c == "X") {
                                cor = cor + 1;
                                $("#cj2c").addClass('correcto')
                            }
                            else {

                            }
                        }
                    }
                }
            }
        }
    }
    if (cj3a == "X" && cj3b == "X" && cj3c == "X") {
        inc = inc + 1;
        $("#cj3a").addClass('incorrecto');
        $("#cj3b").addClass('incorrecto');
        $("#cj3c").addClass('incorrecto');
    } else {
        if (cj3b == "X" && cj3c == "X") {
            inc = inc + 1;
            $("#cj3b").addClass('incorrecto');
            $("#cj3c").addClass('incorrecto');
        } else {
            if (cj3a == "X" && cj3c == "X") {
                inc = inc + 1;
                $("#cj3a").addClass('incorrecto');
                $("#cj3c").addClass('incorrecto');
            } else {
                if (cj3a == "X" && cj3b == "X") {
                    inc = inc + 1;
                    $("#cj3a").addClass('incorrecto');
                    $("#cj3b").addClass('incorrecto');
                } else {
                    if (cj3a == "X") {
                        cor = cor + 1;
                        $("#cj3a").addClass('correcto')
                    }
                    else {
                        if (cj3b != "") {
                            inc = inc + 1;
                            $("#cj3b").addClass('incorrecto')
                        }
                        else {
                            if (cj3c != "") {
                                inc = inc + 1;
                                $("#cj3c").addClass('incorrecto')
                            }
                            else {

                            }
                        }
                    }
                }
            }
        }
    }
    if (cj4a == "X" && cj4b == "X" && cj4c == "X") {
        inc = inc + 1;
        $("#cj4a").addClass('incorrecto');
        $("#cj4b").addClass('incorrecto');
        $("#cj4c").addClass('incorrecto');
    } else {
        if (cj4b == "X" && cj4c == "X") {
            inc = inc + 1;
            $("#cj4b").addClass('incorrecto');
            $("#cj4c").addClass('incorrecto');
        } else {
            if (cj4a == "X" && cj4c == "X") {
                inc = inc + 1;
                $("#cj4a").addClass('incorrecto');
                $("#cj4c").addClass('incorrecto');
            } else {
                if (cj4a == "X" && cj4b == "X") {
                    inc = inc + 1;
                    $("#cj4a").addClass('incorrecto');
                    $("#cj4b").addClass('incorrecto');
                } else {
                    if (cj4a == "X") {
                        cor = cor + 1;
                        $("#cj4a").addClass('correcto')
                    }
                    else {
                        if (cj4b != "") {
                            inc = inc + 1;
                            $("#cj4b").addClass('incorrecto')
                        }
                        else {
                            if (cj4c != "") {
                                inc = inc + 1;
                                $("#cj4c").addClass('incorrecto')
                            }
                            else {

                            }
                        }
                    }
                }
            }
        }
    }
    if (cj5a == "X" && cj5b == "X" && cj5c == "X") {
        inc = inc + 1;
        $("#cj5a").addClass('incorrecto');
        $("#cj5b").addClass('incorrecto');
        $("#cj5c").addClass('incorrecto');
    } else {
        if (cj5b == "X" && cj5c == "X") {
            inc = inc + 1;
            $("#cj5b").addClass('incorrecto');
            $("#cj5c").addClass('incorrecto');
        } else {
            if (cj5a == "X" && cj5c == "X") {
                inc = inc + 1;
                $("#cj5a").addClass('incorrecto');
                $("#cj5c").addClass('incorrecto');
            } else {
                if (cj5a == "X" && cj5b == "X") {
                    inc = inc + 1;
                    $("#cj5a").addClass('incorrecto');
                    $("#cj5b").addClass('incorrecto');
                } else {
                    if (cj5a != "") {
                        inc = inc + 1;
                        $("#cj5a").addClass('incorrecto')
                    }
                    else {
                        if (cj5b == "X") {
                            cor = cor + 1;
                            $("#cj5b").addClass('correcto')
                        }
                        else {
                            if (cj5c != "") {
                                inc = inc + 1;
                                $("#cj5c").addClass('incorrecto')
                            }
                            else {

                            }
                        }
                    }
                }
            }
        }
    }



    var NotaF = (cor) / 5;
    tpre2 = NotaF;
}
// #endregion

// #region Pregunta3
function pregunta3() 
{
    var pre3a = document.getElementById('pre3a').value;
    if(pre3a=="")
    {
        alert("Califique todas las preguntas abiertas !");
    }
    else
    {
        tpre3=pre3a;
    }
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();




    var Nf = parseFloat(tpre1)+parseFloat(tpre2)+parseFloat(tpre3)+parseFloat(tpre4)+parseFloat(tpre5)+parseFloat(tpre6)+parseFloat(tpre7)+parseFloat(tpre8)+parseFloat(tpre9)+parseFloat(tpre10);
    Nf.toFixed(2);
    $("#txtNota").html(Nf)
    document.getElementById('bt_comprobar').disabled = true;
}


// #endregion