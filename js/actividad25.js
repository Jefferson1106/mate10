var titulos = 'aplico';
numero_pagina(23);

var act13 = [
    ['<table><tr><td><label>x < 6&nbsp;&nbsp;</label></td>'+
    '<td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="(−∞;6)"></td>'+
    '</tr></table>'
    ],
    ['<table><tr><td><label>x ≤ –1&nbsp;&nbsp;</label></td>'+
    '<td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="(−∞;−1]"></td>'+
    '</tr></table>'
    ],
    ['<table><tr><td><label>x ≥ 8&nbsp;&nbsp;</label></td>'+
    '<td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="[8;+∞)"></td>'+
    '</tr></table>'
    ],
    ['<table><tr><td><label>–2 ≤ x < 10&nbsp;&nbsp;</label></td>'+
    '<td><input type="text"   size="1" style="width:100px" class="form-control border-blue respuestas">'+
    '<input type="hidden" style="color:blue" class="solucion" value="[−2;10)"></td>'+
    '</tr></table>'
    ]
];

var sumaNum = document.getElementsByClassName('imagen');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i][0] + '</span> ');

}