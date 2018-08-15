var titulos = 'aplico';
numero_pagina(21);


var testimg = [
    ["5", "img/i5_p21_act2.jpg"],
    ["1", "img/i1_p21_act2.jpg"],
    ["8", "img/i8_p21_act2.jpg"],
    ["3", "img/i3_p21_act2.jpg"],
    ["4", "img/i4_p21_act2.jpg"],
    ["7", "img/i7_p21_act2.jpg"],
    ["2", "img/i2_p21_act2.jpg"],
    ["6", "img/i6_p21_act2.jpg"],  
]

var CorrectasP = [
    ["1", "img/i2_p21_act2.jpg"],
    ["2", "img/i5_p21_act2.jpg"],
    ["3", "img/i7_p21_act2.jpg"],
    ["4", "img/i8_p21_act2.jpg"],
]

finitimg();


function finitimg() {
    var cajasImg = document.getElementsByClassName('imagen');

    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        $('#' + cajasImg[i].id).html('<img id='+testimg[i][1]+' class="img-responsive imgAcom" src="' + testimg[i][1] + '">');
    }
}


$('.enc').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});
var respr1=0;
var respr2=0;
var respr3=0;
var respr4=0;
var respr5=0;
var respr6=0;
var respr7=0;
var respr8=0;

function calculoR() {
    var caja1 = $("div[id=caja_img1]").find('img')[0].id;
    if ($("#caja_img1").hasClass("seleccionCaja")) {

        if ((caja1 == "img/i2_p21_act2.jpg") || (caja1 == "img/i5_p21_act2.jpg") || (caja1 == "img/i7_p21_act2.jpg") || (caja1 == "img/i8_p21_act2.jpg")) {
            respr1 = 1;
            $("#caja_img1").addClass('correcto')
        } else {
            $("#caja_img1").removeClass('correcto')
            $("#caja_img1").addClass('incorrecto')

        }

    } else {
        respr1 = 0;

    }

    var caja2 = $("div[id=caja_img2]").find('img')[0].id;
    if ($("#caja_img2").hasClass("seleccionCaja")) {

        if ((caja2 == "img/i2_p21_act2.jpg") || (caja2 == "img/i5_p21_act2.jpg") || (caja2 == "img/i7_p21_act2.jpg") || (caja2 == "img/i8_p21_act2.jpg")) {
            respr2 = 1;
            $("#caja_img2").addClass('correcto')

        } else {
            $("#caja_img2").removeClass('correcto')
            $("#caja_img2").addClass('incorrecto')


        }

    } else {
        respr2 = 0;

    }

    var caja3 = $("div[id=caja_img3]").find('img')[0].id;
    if ($("#caja_img3").hasClass("seleccionCaja")) {

        if ((caja3 == "img/i2_p21_act2.jpg") || (caja3 == "img/i5_p21_act2.jpg") || (caja3 == "img/i7_p21_act2.jpg") || (caja3 == "img/i8_p21_act2.jpg")) {
            respr3 = 1;
            $("#caja_img3").addClass('correcto')
        } else {
            $("#caja_img3").removeClass('correcto')
            $("#caja_img3").addClass('incorrecto')


        }

    } else {
        respr3 = 0;

    }
    var caja4 = $("div[id=caja_img4]").find('img')[0].id;
    if ($("#caja_img4").hasClass("seleccionCaja")) {

        if ((caja4 == "img/i2_p21_act2.jpg") || (caja4 == "img/i5_p21_act2.jpg") || (caja4 == "img/i7_p21_act2.jpg") || (caja4 == "img/i8_p21_act2.jpg")) {
            respr4 = 1;
            $("#caja_img4").addClass('correcto')


        } else {
            $("#caja_img4").removeClass('correcto')
            $("#caja_img4").addClass('incorrecto')


        }

    } else {
        respr4 = 0;

    }

    var caja5 = $("div[id=caja_img5]").find('img')[0].id;
    if ($("#caja_img5").hasClass("seleccionCaja")) {

        if ((caja5 == "img/i2_p21_act2.jpg") || (caja5 == "img/i5_p21_act2.jpg") || (caja5 == "img/i7_p21_act2.jpg") || (caja5 == "img/i8_p21_act2.jpg")) {
            respr5 = 1;

            $("#caja_img5").addClass('correcto')


        } else {
            $("#caja_img5").removeClass('correcto')
            $("#caja_img5").addClass('incorrecto')


        }

    } else {
        respr5 = 0;

    }

    var caja6 = $("div[id=caja_img6]").find('img')[0].id;
    if ($("#caja_img6").hasClass("seleccionCaja")) {

        if ((caja6 == "img/i2_p21_act2.jpg") || (caja6 == "img/i5_p21_act2.jpg") || (caja6 == "img/i7_p21_act2.jpg") || (caja6 == "img/i8_p21_act2.jpg")) {
            respr6 = 1;

            $("#caja_img6").addClass('correcto')


        } else {
            $("#caja_img6").removeClass('correcto')
            $("#caja_img6").addClass('incorrecto')


        }

    } else {
        respr6 = 0;

    }

    var caja7 = $("div[id=caja_img7]").find('img')[0].id;
    if ($("#caja_img7").hasClass("seleccionCaja")) {

        if ((caja7 == "img/i2_p21_act2.jpg") || (caja7 == "img/i5_p21_act2.jpg") || (caja7 == "img/i7_p21_act2.jpg") || (caja7 == "img/i8_p21_act2.jpg")) {
            respr7 = 1;

            $("#caja_img7").addClass('correcto')


        } else {
            $("#caja_img7").removeClass('correcto')
            $("#caja_img7").addClass('incorrecto')


        }

    } else {
        respr7 = 0;

    }

    var caja8 = $("div[id=caja_img8]").find('img')[0].id;
if ($("#caja_img8").hasClass("seleccionCaja")) {

    if ((caja8 == "img/i2_p21_act2.jpg") || (caja8 == "img/i5_p21_act2.jpg") || (caja8 == "img/i7_p21_act2.jpg") || (caja8 == "img/i8_p21_act2.jpg")) {
        respr8 = 1;

        $("#caja_img8").addClass('correcto')


    } else {
        $("#caja_img8").removeClass('correcto')
        $("#caja_img8").addClass('incorrecto')


    }

} else {
    respr8 = 0;

}




    var suma = parseInt(respr1) + parseInt(respr2) + parseInt(respr3) + parseInt(respr4) + parseInt(respr5) + parseInt(respr6) + parseInt(respr7)+parseInt(respr8);
    var totalR = suma ;
    var NotaF = (totalR * 10) / 4;
    $('#txtNota').html(NotaF.toFixed(2) + ' ');

    document.getElementById('bt_comprobar').disabled = true;

}