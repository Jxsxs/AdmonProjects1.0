// JavaScript Document
$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
    });
});

function habilitaEdicionProyecto() {
    document.getElementById('txtNombreProyecto').removeAttribute('disabled');
    var inputObjetivo = document.getElementById('contObjetivo').getElementsByTagName('input').length;
    var inputAlcance = document.getElementById('contAlcance').getElementsByTagName('input').length;
    var inputRes = document.getElementById('contRes').getElementsByTagName('input').length;
    for (var i = 1; i <= inputObjetivo; i++) {
        document.getElementById('txtObjetivo_' + i).removeAttribute('disabled');
    }
    for (var i = 1; i <= inputAlcance; i++) {
        document.getElementById('txtAlcance_' + i).removeAttribute('disabled');
    }
    for (var i = 1; i <= inputRes; i++) {
        document.getElementById('txtRes_' + i).removeAttribute('disabled');
    }
}
// =======funcion principal que muestra todos los datos de un proyecto seleccionado============
function verDatosProyecto(id_pp, nombre_pp, total_objetivos, objetivos, total_alcances, alcances, total_res, restricciones) {
    verNombreProyecto(id_pp, nombre_pp);
    verObjetivosProyecto(total_objetivos, objetivos);
    verAlcancesProyecto(total_alcances, alcances);
    verResProyecto(total_res, restricciones);
}
//======================================================================================
// funcion que muestra el nombre del proyecto obtiene su id
function verNombreProyecto(id_pp, nombre_pp) {
    // document.getElementById("contentAll").removeAttribute('style');
    // document.getElementById('txtNombreProyecto').value = nombre_pp;
    var divNombre = document.getElementById("contNombre");
    var n = 0;
    if (divNombre != null) {
        while (divNombre.hasChildNodes()) {
            divNombre.removeChild(divNombre.lastChild);
        }
    }
    var div = document.createElement('div');
    div.setAttribute('class', 'input-group');
    div.innerHTML = '<div class="col-md-6"><div class="form-group" ><div class="input-group"><input class="form-control" id="txtNombreProyecto" name="txtNombreProyecto" placeholder="Objetivo" required="true" type="text" disabled="true" value="' + nombre_pp + '"></input></div></div></div>';
    document.getElementById('contNombre').appendChild(div);
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
        div.innerHTML = '<div class="col-md-6"><div class="form-group" ><div class="input-group"><input class="form-control" id="txtObjetivo_' + (i + 1) + '" name="txtObjetivo_' + (i + 1) + '" placeholder="Objetivo" required="true" type="text" disabled="true" value="' + objetivos[i] + '"></input></div></div></div>';
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
        div.innerHTML = '<div class="col-md-6"><div class="form-group" ><div class="input-group"><input class="form-control" id="txtAlcance_' + (i + 1) + '" name="txtAlcance_' + (i + 1) + '" placeholder="Alcance" required="true" type="text" disabled="true" value="' + alcances[i] + '"></input></div></div></div>';
        document.getElementById('contAlcance').appendChild(div);
    }
    // cantidad de inputs dentro del div contObjetivo
    var inputCount = document.getElementById('contAlcance').getElementsByTagName('input').length;
    // alert(inputCount);
}

function verResProyecto(total_res, restricciones) {
    var divRes = document.getElementById("contRes");
    var n = 0;
    if (divRes != null) {
        while (divRes.hasChildNodes()) {
            divRes.removeChild(divRes.lastChild);
        }
    }
    for (var i = 0; i < total_res; i++) {
        n = i + 1;
        var div = document.createElement('div');
        div.setAttribute('class', 'input-group');
        div.innerHTML = '<div class="col-md-6"><div class="form-group" ><div class="input-group"><input class="form-control" id="txtRes_' + (i + 1) + '" name="txtRes_' + (i + 1) + '" placeholder="Restriccion" required="true" type="text" disabled="true" value="' + restricciones[i] + '"></input></div></div></div>';
        document.getElementById('contRes').appendChild(div);
    }
    // cantidad de inputs dentro del div contObjetivo
    var inputCount = document.getElementById('contRes').getElementsByTagName('input').length;
    // alert(inputCount);
}

function creaObjetivo() {
    var inputCount = document.getElementById('contObjetivo').getElementsByTagName('input').length;
    // alert(inputCount);
    var div = document.createElement('div');
    div.setAttribute('class', 'input-group');
    div.innerHTML = '<div class="col-md-6"><div class="form-group" ><div class="input-group"><input class="form-control" name="txtObjetivo_' + (inputCount + 1) + '" placeholder="Objetivo" required="true" type="text" disabled="true"></input></div></div></div>';
    document.getElementById('contObjetivo').appendChild(div);
}