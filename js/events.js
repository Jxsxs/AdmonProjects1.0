// JavaScript Document
$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
    });
});

function nuevoProyecto(){
  document.getElementById("bienvenido").setAttribute("style", "display:none");
  document.getElementById("contentAll").style.display = "";
  limpiaDivs();
  crearNombre();
  crearObjetivo();
  crearAlcance();
  crearRestriccion();
}
function enviaVariables(){
  var data = { "numero":4 };
    $.ajax({
    type:"POST",
    url:"../controller/control_nuevo_proyecto.php",
    data: data,
    success:function(){
      alert("Se ha ejecutado el paso de la variable");
    }
  });
}
function crearNombre(){
  var inputNombre = document.createElement('input');
  inputNombre.className = "form-control";
  inputNombre.id = "txtNombreProyecto";
  inputNombre.required = true;
  inputNombre.type = "text";
  // div.innerHTML = '<input class="form-control" id="txtNombreProyecto" name="txtNombreProyecto" placeholder="Objetivo" required="true" type="text" disabled="true" value="' + nombre_pp + '"></input></div></div></div>';
  document.getElementById('verProyecto').appendChild(inputNombre);
  document.getElementById('etiquetaMenosObj').removeAttribute("style");
  document.getElementById('etiquetaMenosAlc').removeAttribute("style");
  document.getElementById('etiquetaMenosRes').removeAttribute("style");
}

function crearObjetivo() {
    var div = document.createElement('div');
    div.className = 'styled-select blue semi-square';
    div.innerHTML = '<select name="selectObjetivos" onchange="creaObjetivoSelect(this)"  id="idSelectObjetivos">'+
     '<option value="" selected>Objetivos</option> <option value="1">1</option>'+
     '<option value="2">2</option> <option value="3">3</option></select>';
     document.getElementById('verObjetivos').appendChild(div);
}

function crearAlcance() {
    var div = document.createElement('div');
    div.className = 'styled-select blue semi-square';
    div.innerHTML = '<select name="selectAlcances" onchange="creaAlcanceSelect(this)"  id="idSelectAlcances">'+
     '<option value="" selected>Alcances</option> <option value="1">1</option>'+
     '<option value="2">2</option> <option value="3">3</option></select>';
     document.getElementById('verAlcance').appendChild(div);
}

function crearRestriccion() {
    var div = document.createElement('div');
    div.className = 'styled-select blue semi-square';
    div.innerHTML = '<select name="selectRes" onchange="creaResSelect(this)"  id="idSelectRes">'+
     '<option value="" selected>Restricciones</option> <option value="1">1</option>'+
     '<option value="2">2</option> <option value="3">3</option></select>';
     document.getElementById('verRes').appendChild(div);
}

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
    document.getElementById("bienvenido").setAttribute("style", "display:none");
    document.getElementById("contentAll").style.display = "";
    verNombreProyecto(id_pp, nombre_pp);
    verObjetivosProyecto(total_objetivos, objetivos);
    verAlcancesProyecto(total_alcances, alcances);
    verResProyecto(total_res, restricciones);
    document.getElementById("btnGuardar").setAttribute("style", "display:none;");
}
//======================================================================================
// funcion que muestra el nombre del proyecto obtiene su id
function verNombreProyecto(id_pp, nombre_pp) {
    // document.getElementById("contentAll").removeAttribute('style');
    // document.getElementById('txtNombreProyecto').value = nombre_pp;
    var divNombre = document.getElementById("verProyecto");
    var n = 0;
    if (divNombre != null) {
        while (divNombre.hasChildNodes()) {
            divNombre.removeChild(divNombre.lastChild);
        }
    }
    var inputNombre = document.createElement('input');
    inputNombre.className = "form-control";
    inputNombre.id = "txtNombreProyecto";
    inputNombre.required = true;
    inputNombre.type = "text";
    inputNombre.disabled = true;
    inputNombre.value = nombre_pp;
    // div.innerHTML = '<input class="form-control" id="txtNombreProyecto" name="txtNombreProyecto" placeholder="Objetivo" required="true" type="text" disabled="true" value="' + nombre_pp + '"></input></div></div></div>';
    document.getElementById('verProyecto').appendChild(inputNombre);
}
// funcion que muestra la y cuenta los objetivos por proyecto seleccionado
function verObjetivosProyecto(total_objetivos, objetivos) {
    var divObjetivo = document.getElementById("verObjetivos");
    document.getElementById("etiquetaMenosObj").setAttribute("style","display:none;");
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
        div.innerHTML = '<input class="form-control" id="txtObjetivo_' + (i + 1) + '" name="txtObjetivo_' + (i + 1) + '" placeholder="Objetivo" required="true" type="text" disabled="true" value="' + objetivos[i] + '"></input>';
        document.getElementById('verObjetivos').appendChild(div);
    }
    // cantidad de inputs dentro del div contObjetivo
    var inputCount = document.getElementById('contObjetivo').getElementsByTagName('input').length;
    // alert(inputCount);
}
// funcion que muestra todos los alcances almacenados en un proyecto
function verAlcancesProyecto(total_alcances, alcances) {
    var divAlcance = document.getElementById("verAlcance");
    document.getElementById("etiquetaMenosAlc").setAttribute("style","display:none;");
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
        div.innerHTML = '<input class="form-control" id="txtAlcance_' + (i + 1) + '" name="txtAlcance_' + (i + 1) + '" placeholder="Alcance" required="true" type="text" disabled="true" value="' + alcances[i] + '"></input>';
        document.getElementById('verAlcance').appendChild(div);
    }
    // cantidad de inputs dentro del div contObjetivo
    var inputCount = document.getElementById('contAlcance').getElementsByTagName('input').length;
    // alert(inputCount);
}

function verResProyecto(total_res, restricciones) {
    var divRes = document.getElementById("verRes");
    document.getElementById("etiquetaMenosRes").setAttribute("style","display:none;");
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
        div.innerHTML = '<input class="form-control" id="txtRes_' + (i + 1) + '" name="txtRes_' + (i + 1) + '" placeholder="Restriccion" required="true" type="text" disabled="true" value="' + restricciones[i] + '"></input>';
        document.getElementById('verRes').appendChild(div);
    }
    // cantidad de inputs dentro del div contObjetivo
    var inputCount = document.getElementById('contRes').getElementsByTagName('input').length;
    // alert(inputCount);
}
// De aqui para adelante es donde se crean los objetos con los selects
// =======================================================================
function creaObjetivoSelect(val){
  var div = null, br = null;
  var valor = val.value;
  // $('select[name=selectObjetivos]').val;
  // alert("val: " + valor);
    for (var i = 0; i < valor; i++) {
      var inputCount = document.getElementById('contObjetivo').getElementsByTagName('input').length;
      // alert(inputCount);
      div = document.createElement('div');
      div.id = 'obj_' + (inputCount+1);
      div.className = 'input-group';
      // $(div).attr('id', 'obj');
      // $(div).attr('class', 'input-group');
      div.innerHTML = '<input class="form-control" name="txtObjetivo_' + (inputCount + 1) + '" placeholder="" required="true" type="text"></input>';
      document.getElementById('contObjetivo').appendChild(div);
  }
}
// es la funcion para el boton de menos en los objetivos
function menosObjetivos(){
  // var divObjetivo = document.getElementById("contObjetivo");
  var inputCount = document.getElementById('contObjetivo').getElementsByTagName('input').length;
  if (inputCount != 0) {
    document.getElementById("obj_"+inputCount).remove();
  }
}

// Creamos las funciones correspondientes para los alcances
// ===================================================================
function creaAlcanceSelect(val){
  var div = null;
  var valor = val.value;
  // $('select[name=selectAlcances]').val;
  // alert(valor);
    for (var i = 0; i < valor; i++) {
      var inputCount = document.getElementById('contAlcance').getElementsByTagName('input').length;
      // alert(inputCount);
      div = document.createElement('div');
      div.id = 'alc_' + (inputCount+1);
      div.className = 'input-group';
      // $(div).attr('id', 'obj');
      // $(div).attr('class', 'input-group');
      div.innerHTML = '<input class="form-control" name="txtAlcance_' + (inputCount + 1) + '" placeholder="" required="true" type="text"></input>';
      document.getElementById('contAlcance').appendChild(div);
  }
}

function menosAlcances(){
  // var divObjetivo = document.getElementById("contAlcance");
  var inputCount = document.getElementById('contAlcance').getElementsByTagName('input').length;
  if (inputCount != 0) {
    document.getElementById("alc_"+inputCount).remove();
  }
}
// Comienzan los metodos necesarios para crear las restricciones
// ======================================================================
function creaResSelect(val){
  var div = null;
  var valor = val.value;
  // $('select[name=selectAlcances]').val;
  // alert(valor);
    for (var i = 0; i < valor; i++) {
      var inputCount = document.getElementById('contRes').getElementsByTagName('input').length;
      // alert(inputCount);
      div = document.createElement('div');
      div.id = 'res_' + (inputCount+1);
      div.className = 'input-group';
      // $(div).attr('id', 'obj');
      // $(div).attr('class', 'input-group');
      div.innerHTML = '<input class="form-control" name="txtRes_' + (inputCount + 1) + '" placeholder="" required="true" type="text"></input>';
      document.getElementById('contRes').appendChild(div);
  }
}

function menosRes(){
  var inputCount = document.getElementById('contRes').getElementsByTagName('input').length;
  if (inputCount != 0) {
    document.getElementById("res_"+inputCount).remove();
  }
}

// ===============================================================================
function habilita(){
  document.getElementById("idSelectObjetivos").removeAttribute("disabled");
  document.getElementById("idSelectAlcances").removeAttribute("disabled");
  document.getElementById("idSelectRes").removeAttribute("disabled");
}

function limpiaDivs(){
  var divNombre = document.getElementById("verProyecto");
  var n = 0;
  if (divNombre != null) {
      while (divNombre.hasChildNodes()) {
          divNombre.removeChild(divNombre.lastChild);
      }
  }
  var divObjetivo = document.getElementById("verObjetivos");
  document.getElementById("etiquetaMenosObj").setAttribute("style","display:none;");
  var n = 0;
  if (divObjetivo != null) {
      while (divObjetivo.hasChildNodes()) {
          divObjetivo.removeChild(divObjetivo.lastChild);
      }
  }
  var divAlcance = document.getElementById("verAlcance");
  document.getElementById("etiquetaMenosAlc").setAttribute("style","display:none;");
  var n = 0;
  if (divAlcance != null) {
      while (divAlcance.hasChildNodes()) {
          divAlcance.removeChild(divAlcance.lastChild);
      }
  }
  var divRes = document.getElementById("verRes");
  document.getElementById("etiquetaMenosRes").setAttribute("style","display:none;");
  var n = 0;
  if (divRes != null) {
      while (divRes.hasChildNodes()) {
          divRes.removeChild(divRes.lastChild);
      }
  }
}
