// JavaScript Document
$(window).on("load",function(){
  var datos = {
    "pasa":"pasa"
  };
  $.ajax({
    data:datos,
    url : "../controller/control_usuario.php",
    type: "POST",
    success:  function (response) {
      // alert(response);
      document.getElementById("texto_usuario").innerHTML = response;
    },
    error: function(){
      $("#datos").html("Error: no se realizó la operación ");
    }
  });
  $.ajax({
    data:datos,
    url : "../controller/control_mostrar_carpeta.php",
    type: "POST",
    success:  function (response) {

      for (var i = 0; i < response.datos_carpetas.length; i++) {
        var a = document.createElement("a");
        a.href = "#"+ response.datos_carpetas[i]["nombre_carpeta"] +"Submenu";
        a.setAttribute("data-toggle","collapse");
        a.className = "dropdown-toggle";
        a.expanded = false;
        a.innerHTML = "<i class='fas fa-folder-open'></i>" + response.datos_carpetas[i]["nombre_carpeta"];
        a.id = "carpetas";
        document.getElementById("proyectos").appendChild(a);
        // console.log("Carpeta: " + response.datos_carpetas[i]["nombre_carpeta"]);
        for (var j = 0; j < response.datos_proyecto.length; j++) {
          if (response.datos_carpetas[i]["id_carpeta"] == response.datos_proyecto[j]["id_carpeta"]) {
            var ul = document.createElement("ul");
            ul.className = 'sub-menu collapse';
            ul.id = response.datos_carpetas[i]["nombre_carpeta"] +"Submenu";
            ul.innerHTML = "<li style='list-style:none;'><a href='javascript:verDatosProyecto("+ response.datos_proyecto[j]["id_pp"] +")'>"+ response.datos_proyecto[j]["nombre_proyecto"] +"</a></li>";
            document.getElementById("proyectos").appendChild(ul);
            // console.log("proyecto: " + response.datos_proyecto[j]["nombre_proyecto"]);
          }
        }
      }
    },
    error: function(){
            $("#datos").html("Error: no se realizó la operación ");
    }
  });
  $.ajax({
    data:datos,
    url : "../controller/control_select_carpeta.php",
    type: "POST",
    success:  function (response) {
      for (var i = 0; i < response.length; i++) {
        var option = document.createElement("option");
        option.value = response[i]["id_carpeta"];
        option.innerHTML = response[i]["nombre_carpeta"];
        document.getElementById("select_carpeta").appendChild(option);
        // document.getElementById("select_carpeta").innerHTML = "<option value='"+ response[i]["id_carpeta"] +"'>"+ response[i]["nombre_carpeta"] +"</option>";
      }
    },
    error: function(){
      $("#datos").html("Error: no se realizó la operación ");
    }
  });
});

$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
    });
});
// function pruebaMostrar(){
//   document.getElementById("noBien").style.display = "block";
//   document.getElementById("siBien").style.display = "none";
//
// }
function nuevoProyecto(){
  if (banderaEditar) {
    var confirmacion = confirm("Dejar de EDITAR?");
    if (confirmacion) {
      document.getElementById("titulo").innerHTML = "Nuevo Proyecto";
      document.getElementById("btnEdit").style.display = "none";
      document.getElementById("btnCancelar").style.display = "none";
      document.getElementById("btnActualizar").style.display = "none";
      document.getElementById("btnGuardar").style.display = "";
      document.getElementById("masObjetivos").style.display = "";
      document.getElementById("masAlcances").style.display = "";
      document.getElementById("masRestricciones").style.display = "";
      document.getElementById("div_select").style.display = "";
      eliminarDivs();
      crearNombre();
      for (var i = 0; i < 3; i++) {
        crearObjetivo();
        crearAlcance();
        crearRestriccion();
      }
      document.getElementById("nuevo_proyecto").style.display = "none";
      banderaEditar = false;
    }
  }else{
    document.getElementById("titulo").innerHTML = "Nuevo Proyecto";
    document.getElementById("btnEdit").style.display = "none";
    document.getElementById("btnCancelar").style.display = "none";
    document.getElementById("btnActualizar").style.display = "none";
    document.getElementById("btnGuardar").style.display = "";
    document.getElementById("masObjetivos").style.display = "";
    document.getElementById("masAlcances").style.display = "";
    document.getElementById("masRestricciones").style.display = "";
    document.getElementById("div_select").style.display = "";

    eliminarDivs();
    crearNombre();
    for (var i = 0; i < 3; i++) {
      crearObjetivo();
      crearAlcance();
      crearRestriccion();
    }
    document.getElementById("nuevo_proyecto").style.display = "none";
  }
}

function eliminarDivs(){
  var divRes = document.getElementById("verProyecto");
  // document.getElementById("etiquetaMenosRes").setAttribute("style","display:none;");
  if (divRes != null) {
      while (divRes.hasChildNodes()) {
          divRes.removeChild(divRes.lastChild);
      }
  }
  var divRes = document.getElementById("objetivos");
  // document.getElementById("etiquetaMenosRes").setAttribute("style","display:none;");
  if (divRes != null) {
      while (divRes.hasChildNodes()) {
          divRes.removeChild(divRes.lastChild);
      }
  }
  var divRes = document.getElementById("alcances");
  // document.getElementById("etiquetaMenosRes").setAttribute("style","display:none;");
  if (divRes != null) {
      while (divRes.hasChildNodes()) {
          divRes.removeChild(divRes.lastChild);
      }
  }
  var divRes = document.getElementById("restricciones");
  // document.getElementById("etiquetaMenosRes").setAttribute("style","display:none;");
  if (divRes != null) {
      while (divRes.hasChildNodes()) {
          divRes.removeChild(divRes.lastChild);
      }
  }
}

function guardarCarpeta(){

  if (document.getElementById("txtNombreCarpeta").value != "") {
    var guardar = confirm("Desea Continuar?");
    if (guardar) {
      var nombre_carpeta = document.getElementById("txtNombreCarpeta").value;
      var datos = {
        "nombre_carpeta":nombre_carpeta
      };
      $.ajax({
        data:datos,
        url : "../controller/control_agrega_carpeta.php",
        type: "POST",
        success:  function (response) {
          alert(response);
        },
        error: function(){
          alert("Error: no se realizó la operación ");
        }
      });
    }
  }
}

function guardarProyecto(){
  var titulo_proyecto = document.getElementById("txtTitulo").value;
  var contObjetivos = document.getElementById('objetivos').getElementsByTagName('input').length;
  var contAlcances = document.getElementById('alcances').getElementsByTagName('input').length;
  var contRes = document.getElementById('restricciones').getElementsByTagName('input').length;
  var objetivos = [];
  var alcances = [];
  var restricciones = [];
  if (document.getElementById("select_carpeta").value != "") {
    var id_carpeta = document.getElementById("select_carpeta").value;
    // console.log(id_carpeta);
  }
  for (var i = 1; i <= contObjetivos; i++) {
    if (document.getElementById("txtObjetivo_" + i).value != "") {
      objetivos.push(document.getElementById("txtObjetivo_" + i).value);
    }
  }
  for (var i = 1; i <= contAlcances; i++) {
    if (document.getElementById("txtAlcance_" + i).value != "") {
      alcances.push(document.getElementById("txtAlcance_" + i).value);
    }
  }
  for (var i = 1; i <= contRes; i++) {
    if (document.getElementById("txtRes_" + i).value != "") {
      restricciones.push(document.getElementById("txtRes_" + i).value);
    }
  }

  var datos = {
    "titulo_proyecto":titulo_proyecto,
    "objetivos":objetivos,
    "alcances":alcances,
    "restricciones":restricciones,
    "id_carpeta":id_carpeta
  };
  $.ajax({
    data:datos,
    url : "../controller/control_guardar_proyecto.php",
    type: "POST",
    success:  function (response) {
      alert(response);
    },
    error: function(){
    }
  });
}

function actualizarProyecto(){
  var titulo_proyecto = document.getElementById("txtTitulo").value;
  var contObjetivos = document.getElementById('objetivos').getElementsByTagName('input').length;
  var contAlcances = document.getElementById('alcances').getElementsByTagName('input').length;
  var contRes = document.getElementById('restricciones').getElementsByTagName('input').length;
  var objetivos = [];
  var alcances = [];
  var restricciones = [];
  if (document.getElementById("select_carpeta").value != "") {
    var id_carpeta = document.getElementById("select_carpeta").value;
    // console.log(id_carpeta);
  }
  for (var i = 1; i <= contObjetivos; i++) {
    if (document.getElementById("txtObjetivo_" + i).value != "") {
      objetivos.push(document.getElementById("txtObjetivo_" + i).value);
    }
  }
  for (var i = 1; i <= contAlcances; i++) {
    if (document.getElementById("txtAlcance_" + i).value != "") {
      alcances.push(document.getElementById("txtAlcance_" + i).value);
    }
  }
  for (var i = 1; i <= contRes; i++) {
    if (document.getElementById("txtRes_" + i).value != "") {
      restricciones.push(document.getElementById("txtRes_" + i).value);
    }
  }

  var datos = {
    "titulo_proyecto":titulo_proyecto,
    "objetivos":objetivos,
    "alcances":alcances,
    "restricciones":restricciones,
    "id_carpeta":id_carpeta,
    "nombre_proyecto_anterior":nombre_proyecto_anterior,
    "nombre_objetivos_anterior":nombre_objetivos_anterior,
    "nombre_alcances_anterior":nombre_alcances_anterior,
    "nombre_restricciones_anterior":nombre_restricciones_anterior
  };
  $.ajax({
    data:datos,
    url : "../controller/control_actualizar_proyecto.php",
    type: "POST",
    success:  function (response) {
      alert(response);
      nombre_objetivos_anterior = [];
    },
    error: function(){
    }
  });
}


var banderaEditar = false;
// #############EDITAR EL PROYECTO##################
function editarProyecto(){
  banderaEditar = true;
  document.getElementById("btnEdit").style.display = "none";
  document.getElementById("btnActualizar").style.display = "";
  document.getElementById("btnCancelar").style.display = "";
  document.getElementById("div_select").style.display = "";
  // titulo
  document.getElementById("txtTitulo").disabled = false;
  // objetivos
  var inputObjetivos = document.getElementById('objetivos').getElementsByTagName('input').length;
  for (var i = 1; i <= inputObjetivos; i++) {
    document.getElementById("txtObjetivo_" + i).disabled = false;
  }
  document.getElementById("masObjetivos").style.display = "";
  // Alcances
  var inputAlcances = document.getElementById('alcances').getElementsByTagName('input').length;
  for (var i = 1; i <= inputAlcances; i++) {
    document.getElementById("txtAlcance_" + i).disabled = false;
  }
  document.getElementById("masAlcances").style.display = "";
  // Restricciones
  var inputRestricciones = document.getElementById('restricciones').getElementsByTagName('input').length;
  for (var i = 1; i <= inputRestricciones; i++) {
    document.getElementById("txtRes_" + i).disabled = false;
  }
  document.getElementById("masRestricciones").style.display = "";

}
// ##############################################

function crearNombre(){
  var inputNombre = document.createElement('input');
  inputNombre.className = "form-control";
  inputNombre.id = "txtTitulo";
  inputNombre.required = true;
  inputNombre.type = "text";
  // div.innerHTML = '<input class="form-control" id="txtNombreProyecto" name="txtNombreProyecto" placeholder="Objetivo" required="true" type="text" disabled="true" value="' + nombre_pp + '"></input></div></div></div>';
  document.getElementById('verProyecto').appendChild(inputNombre);
  // document.getElementById('etiquetaMenosObj').removeAttribute("style");
  // document.getElementById('etiquetaMenosAlc').removeAttribute("style");
  // document.getElementById('etiquetaMenosRes').removeAttribute("style");
}

function crearObjetivo() {
  var inputCount = document.getElementById('objetivos').getElementsByTagName('input').length;
  // alert(inputCount);
    var input = document.createElement('input');
    var br = document.createElement('br');
    input.className = "form-control";
    input.id = "txtObjetivo_" + (inputCount+1);
    // input.required = true;
    input.type = "text";
     document.getElementById('objetivos').appendChild(input);
     document.getElementById("objetivos").appendChild(br);
}

function crearAlcance() {

    var inputCount = document.getElementById('alcances').getElementsByTagName('input').length;
    // alert(inputCount);
      var input = document.createElement('input');
      var br = document.createElement('br');
      input.className = "form-control";
      input.id = "txtAlcance_" + (inputCount+1);
      // input.required = true;
      input.type = "text";
      document.getElementById('alcances').appendChild(input);
      document.getElementById("alcances").appendChild(br);
}

function crearRestriccion() {
    var inputCount = document.getElementById('restricciones').getElementsByTagName('input').length;
    // alert(inputCount);
      var input = document.createElement('input');
      var br = document.createElement('br');
      input.className = "form-control";
      input.id = "txtRes_" + (inputCount+1);
      // input.required = true;
      input.type = "text";
      document.getElementById('restricciones').appendChild(input);
      document.getElementById("restricciones").appendChild(br);
}
// =======funcion principal que muestra todos los datos de un proyecto seleccionado============
var nombre_proyecto_anterior = null;
var nombre_objetivos_anterior = [];
var nombre_alcances_anterior = [];
var nombre_restricciones_anterior = [];
function verDatosProyecto(id_pp) {
    // document.getElementById("bienvenido").setAttribute("style", "display:none");
    if (banderaEditar) {
      var confirmacion = confirm("Dejar de EDITAR?");
      if (confirmacion) {
        banderaEditar = false;
        var datos = {
          "id_pp":id_pp
        };
        $.ajax({
          data:datos,
          url : "../controller/control_muestra_proyecto.php",
          type: "POST",
          success:  function (response) {
            // alert(response);
            document.getElementById("titulo").innerHTML = "Detalles de Proyecto";
            verNombreProyecto(response.titulo_proyecto);
            verObjetivosProyecto(response.objetivos);
            verAlcancesProyecto(response.alcances);
            verResProyecto(response.restricciones);
            document.getElementById("div_select").style.display = "none";
            document.getElementById("nuevo_proyecto").style.display = "";
            document.getElementById("btnEdit").style.display = "";
            document.getElementById("btnGuardar").style.display = "none";
            document.getElementById("btnActualizar").style.display = "none";
            document.getElementById("btnCancelar").style.display = "none";
          },
          error: function(){
              alert("Error: no se realizó la operación ");
          }
        });
      }
    }else{
      var datos = {
        "id_pp":id_pp
      };
      $.ajax({
        data:datos,
        url : "../controller/control_muestra_proyecto.php",
        type: "POST",
        success:  function (response) {
          // alert(response);
          document.getElementById("titulo").innerHTML = "Detalles de Proyecto";
          verNombreProyecto(response.titulo_proyecto);
          verObjetivosProyecto(response.objetivos);
          verAlcancesProyecto(response.alcances);
          verResProyecto(response.restricciones);
          document.getElementById("div_select").style.display = "none";
          document.getElementById("nuevo_proyecto").style.display = "";
          document.getElementById("btnEdit").style.display = "";
          document.getElementById("btnGuardar").style.display = "none";
          document.getElementById("btnActualizar").style.display = "none";
          document.getElementById("btnCancelar").style.display = "none";
        },
        error: function(){
            alert("Error: no se realizó la operación ");
        }
      });
    }



    // document.getElementById("btnGuardar").setAttribute("style", "display:none;");
}
//======================================================================================
// funcion que muestra el nombre del proyecto obtiene su id
function verNombreProyecto(nombre_proyecto) {
    var txtTitulo = document.getElementById("txtTitulo");
    txtTitulo.value = nombre_proyecto;
    txtTitulo.disabled = true;
    nombre_proyecto_anterior = nombre_proyecto;
}
// funcion que muestra la y cuenta los objetivos por proyecto seleccionado
function verObjetivosProyecto(objetivos) {
    var divRes = document.getElementById("objetivos");
    // document.getElementById("etiquetaMenosRes").setAttribute("style","display:none;");
    if (divRes != null) {
        while (divRes.hasChildNodes()) {
            divRes.removeChild(divRes.lastChild);
        }
    }
    for (var i = 0; i < objetivos.length; i++) {
        var input = document.createElement('input');
        var br = document.createElement('br');
        input.className = "form-control";
        input.id = "txtObjetivo_" + (i+1);
        input.name = "txtObjetivo_" + (i+1);
        input.required = true;
        input.disabled = true;
        input.type = "text";
        input.value = objetivos[i]["desc_objetivo"];
        document.getElementById('objetivos').appendChild(input);
        document.getElementById("objetivos").appendChild(br);
        nombre_objetivos_anterior.push(objetivos[i]["desc_objetivo"]);
    }
    document.getElementById("masObjetivos").style.display = "none";
    // cantidad de inputs dentro del div contObjetivo
    // alert(inputCount);
}
// funcion que muestra todos los alcances almacenados en un proyecto
function verAlcancesProyecto(alcances) {
  var divRes = document.getElementById("alcances");
  // document.getElementById("etiquetaMenosRes").setAttribute("style","display:none;");
  if (divRes != null) {
      while (divRes.hasChildNodes()) {
          divRes.removeChild(divRes.lastChild);
      }
  }
  for (var i = 0; i < alcances.length; i++) {
      var input = document.createElement('input');
      var br = document.createElement('br');
      input.className = "form-control";
      input.id = "txtAlcance_" + (i+1);
      input.name = "txtAlcance_" + (i+1);
      input.required = true;
      input.disabled = true;
      input.type = "text";
      input.value = alcances[i]["desc_alcances"];
      document.getElementById('alcances').appendChild(input);
      document.getElementById("alcances").appendChild(br);
      nombre_alcances_anterior.push(alcances[i]["desc_alcances"]);
  }
  document.getElementById("masAlcances").style.display = "none";
}

function verResProyecto(restricciones) {
    var divRes = document.getElementById("restricciones");
    // document.getElementById("etiquetaMenosRes").setAttribute("style","display:none;");
    if (divRes != null) {
        while (divRes.hasChildNodes()) {
            divRes.removeChild(divRes.lastChild);
        }
    }
    for (var i = 0; i < restricciones.length; i++) {
      var input = document.createElement('input');
      var br = document.createElement('br');
      input.className = "form-control";
      input.id = "txtRes_" + (i+1);
      input.name = "txtRes_" + (i+1);
      input.required = true;
      input.disabled = true;
      input.type = "text";
      input.value = restricciones[i]["desc_restriccion"];
      document.getElementById('restricciones').appendChild(input);
      document.getElementById("restricciones").appendChild(br);
      nombre_restricciones_anterior.push(restricciones[i]["desc_restriccion"]);
    }
    document.getElementById("masRestricciones").style.display = "none";
    // cantidad de inputs dentro del div contObjetivo
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

function masAlcances(){
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
