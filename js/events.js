// JavaScript Document
$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
    });
});

function habilitaEdicionProyecto() {
    document.getElementById('txtNombreProyecto').removeAttribute('disabled');
}
// =======funcion principal que muestra todos los datos de un proyecto seleccionado============
function verDatosProyecto(id_pp, nombre_pp, total_objetivos, objetivos, total_alcances, alcances) {
    verNombreProyecto(id_pp, nombre_pp);
    verObjetivosProyecto(total_objetivos, objetivos);
    verAlcancesProyecto(total_alcances, alcances);
}
//======================================================================================
// funcion que muestra el nombre del proyecto obtiene su id
function verNombreProyecto(id_pp, nombre_pp) {
    document.getElementById("contentAll").removeAttribute('style');
    document.getElementById('txtNombreProyecto').value = nombre_pp;
}
// funcion que muestra la y cuenta los objetivos por proyecto seleccionado
function verObjetivosProyecto(total_objetivos, objetivos) {
    var divObjetivo = document.getElementById("contObjetivo");
    var n = 0;
    if (divObjetivo != null) {
        while (divObjetivo.hasChildNodes()) {
            divObjetivo.removeChild(divObjetivo.lastChild);
        }
    }
    for (var i = 0; i < total_objetivos; i++) {
        n = i + 1;
        var div = document.createElement('div');
        div.setAttribute('class', 'input-group');
        div.innerHTML = '<div class="col-md-6"><div class="form-group" ><div class="input-group"><input class="form-control" name="txtObjetivo_' + (i + 1) + '" placeholder="Objetivo" required="true" type="text" disabled="true" value="' + objetivos[i] + '"></input></div></div></div>';
        document.getElementById('contObjetivo').appendChild(div);
    }
    // cantidad de inputs dentro del div contObjetivo
    var inputCount = document.getElementById('contObjetivo').getElementsByTagName('input').length;
    // alert(inputCount);
}
// funcion que muestra todos los alcances almacenados en un proyecto
function verAlcancesProyecto(total_alcances, alcances) {
    var divAlcance = document.getElementById("contAlcance");
    var n = 0;
    if (divAlcance != null) {
        while (divAlcance.hasChildNodes()) {
            divAlcance.removeChild(divAlcance.lastChild);
        }
    }
    for (var i = 0; i < total_alcances; i++) {
        n = i + 1;
        var div = document.createElement('div');
        div.setAttribute('class', 'input-group');
        div.innerHTML = '<div class="col-md-6"><div class="form-group" ><div class="input-group"><input class="form-control" name="txtAlcance_' + (i + 1) + '" placeholder="Alcance" required="true" type="text" disabled="true" value="' + alcances[i] + '"></input></div></div></div>';
        document.getElementById('contAlcance').appendChild(div);
    }
    // cantidad de inputs dentro del div contObjetivo
    var inputCount = document.getElementById('contAlcance').getElementsByTagName('input').length;
    // alert(inputCount);
}

function creaObjetivo() {
    var inputCount = document.getElementById('contObjetivo').getElementsByTagName('input').length;
    alert(inputCount);
    var div = document.createElement('div');
    div.setAttribute('class', 'input-group');
    div.innerHTML = '<div class="col-md-6"><div class="form-group" ><div class="input-group"><input class="form-control" name="txtObjetivo_' + (inputCount + 1) + '" placeholder="Objetivo" required="true" type="text" disabled="true"></input></div></div></div>';
    document.getElementById('contObjetivo').appendChild(div);
}