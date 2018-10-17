// JavaScript Document
$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
    });
});

function editable() {
    document.getElementById('txtNombreProyecto').removeAttribute('disabled');
}

function verDatosProyecto(id_pp, nombre_pp, total_objetivos, objetivos) {
    // alert(total_objetivos);
    document.getElementById("contentAll").removeAttribute('style');
    document.getElementById('txtNombreProyecto').value = nombre_pp;
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
        div.innerHTML = '<div class="col-md-6"><div class="form-group" ><div class="input-group"><input class="form-control" name="txtObjetivo_' + (i+1) + '" placeholder="Objetivo" required="true" type="text" disabled="true" value="' + objetivos[i] + '"></input></div></div></div>';
        document.getElementById('contObjetivo').appendChild(div);
    }
    // cantidad de inputs dentro del div contObjetivo
    var inputCount = document.getElementById('contObjetivo').getElementsByTagName('input').length;

    alert(inputCount);
}

function creaObjetivo() {
    var inputCount = document.getElementById('contObjetivo').getElementsByTagName('input').length;
    alert(inputCount);
    var div = document.createElement('div');
    div.setAttribute('class', 'input-group');
    div.innerHTML = '<div class="col-md-6"><div class="form-group" ><div class="input-group"><input class="form-control" name="txtObjetivo_' + (inputCount+1) + '" placeholder="Objetivo" required="true" type="text" disabled="true"></input></div></div></div>';
    document.getElementById('contObjetivo').appendChild(div);
    
}