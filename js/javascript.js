/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $('#muestra_oculta2').on('click', function () {
        $('#respuesta2').toggle("swing");
        $('#respuesta').toggle("swing");
        this.getElementById("txt_user").value = "";
        this.getElementById("txt_pass").value = "";
        this.getElementById("txt_token").value = "";
    });

});
function noAtras() {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button" //chrome
    window.onhashchange = function () {
        window.location.hash = "no-back-button";
    }
}

function seleccionar(tr, value) {
    $(function () {
        if ($("#chk" + value).attr("checked") == "checked") {
            $("#chk" + value).removeAttr("checked");
            $(tr).css("background-color", "  #393939  ")
        } else {
            $("#chk" + value).attr("checked", "true");
            $("#chk" + value).prop("checked", "true");
            $(tr).css("background-color", "#5b5b5b");
        }
    });
}

$(document).ready(function () {
    var contenido_filas;
    var coincidencias;
    var exp;
    var codigoAscii;
    $('#txt_buscar').keyup(function (event) {
        if (!checkTeclaDel(event)) {
            if ($(this).val().length >= 1) {
                filtrar($(this).val());
            } else {
                mostrarFilas();
            }
        }
    });
    function filtrar(cadena) {
        $('#tablaGeneral tbody tr').each(function () {
            $(this).removeClass('oculto');
            contenido_filas = $(this).find('td:eq(2)').html();
            exp = new RegExp(cadena, 'gi');
            coincidencias = contenido_filas.match(exp);
            if (coincidencias == null) {
                $(this).addClass('oculto');
            }
        });
    }
    function mostrarFilas() {
        $('#txt_buscar').keyup(function () {
            $(this).removeClass('oculto');
        });
    }

    function checkTeclaDel(e) {
        codigoAscii = e.which;
        if (codigoAscii == 8) {
            if ($('#txt_buscar').val().length >= 0) {
                filtrar($('#txt_buscar').val());
            } else {
                mostrarFilas();
            }
            return true;
        } else {
            return false;
        }
    }
});

$(document).ready(function () {
    $('table.miTablita').DataTable();
});