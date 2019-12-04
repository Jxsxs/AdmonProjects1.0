// JavaScript Document
$(window).on("load",function(){
  // $('#tablaPuntosFuncion').DataTable();
  crearElementosProyecto("Nuevo Proyecto");
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

function cargarSelectCarpeta(){
  var datos = {
    "pasa":"pasa"
  };
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
}

function crearElementosProyecto(titulo){
  crearCardHeader(titulo);
  crearCardBody();
  crearDivTitulo();
  crearDivObjetivos();
  crearDivAlcances();
  crearDivRestricciones();
  crearDivSelectCarpeta();
  crearDivBotonesProyecto();
}

function crearCardBody(){
  var divCardBody = document.createElement("div");
  divCardBody.className = "card-body";
  divCardBody.id = "divTodo";
  document.getElementById("cardTodo").appendChild(divCardBody);
  var formTodo = document.createElement("form");
  formTodo.className = "form";
  formTodo.role = "form";
  formTodo.autocomplete = "off";
  formTodo.id = "formTodo";
  document.getElementById("divTodo").appendChild(formTodo);
}

function crearCardHeader(titulo){
  var divCardHeader = document.createElement("div");
  divCardHeader.className = "card-header";
  divCardHeader.id = "header";
  divCardHeader.innerHTML = '<h3 class="mb-0" style="text-align:center;" id="titulo">' + titulo + '</h3>';
  document.getElementById("cardTodo").appendChild(divCardHeader);
}

function crearHrFormTodo(div){
  var hr = document.createElement("hr");
  document.getElementById(div).appendChild(hr);
}

function crearDivTitulo(){
  var divTitulo = document.createElement("div");
  divTitulo.id = "divTitulo";
  divTitulo.className = "form-group row";
  divTitulo.innerHTML = '<label class="col-lg-3 col-form-label form-control-label">Titulo</label>';
  document.getElementById("formTodo").appendChild(divTitulo);
  var divInputTitulo = document.createElement("div");
  divInputTitulo.className = "col-lg-9";
  divInputTitulo.id = "verProyecto";
  divInputTitulo.innerHTML = '<input class="form-control" type="text" required value="" id="txtTitulo">';
  document.getElementById("divTitulo").appendChild(divInputTitulo);
  crearHrFormTodo("divTitulo");

}

function crearDivObjetivos(){
  var divObjetivos = document.createElement("div");
  divObjetivos.id = "divObjetivos";
  divObjetivos.className = "form-group row";
  divObjetivos.innerHTML = '<label class="col-lg-3 col-form-label form-control-label">Objetivos</label>';
  document.getElementById("formTodo").appendChild(divObjetivos);
  var divInputObjetivos = document.createElement("div");
  divInputObjetivos.id = "objetivos";
  divInputObjetivos.className = "col-lg-9";
  // for (var i = 0; i < 3; i++) {
  divInputObjetivos.innerHTML = '<input class="form-control" type="text" required id="txtObjetivo_1"><br>'+
                                '<input class="form-control" type="text" required id="txtObjetivo_2"><br>'+
                                '<input class="form-control" type="text" required id="txtObjetivo_3"><br>';
  document.getElementById("divObjetivos").appendChild(divInputObjetivos);
  // }

  var divMasObjetivos = document.createElement("div");
  divMasObjetivos.className = "col-lg-12";
  divMasObjetivos.innerHTML = '<p class="text-right" style="color:blue;" onclick="crearObjetivo();" id="masObjetivos">More</p>';

  document.getElementById("divObjetivos").appendChild(divMasObjetivos);
  crearHrFormTodo("divObjetivos");


}

function crearDivAlcances(){
  var divAlcances = document.createElement("div");
  divAlcances.id = "divAlcances";
  divAlcances.className = "form-group row";
  divAlcances.innerHTML = '<label class="col-lg-3 col-form-label form-control-label">Alcances</label>';
  document.getElementById("formTodo").appendChild(divAlcances);
  var divInputAlcances = document.createElement("div");
  divInputAlcances.id = "alcances";
  divInputAlcances.className = "col-lg-9";
  divInputAlcances.innerHTML = '<input class="form-control" type="text" required id="txtAlcance_1"><br>'+
                                '<input class="form-control" type="text" required id="txtAlcance_2"><br>'+
                                '<input class="form-control" type="text" required id="txtAlcance_3"><br>';
  document.getElementById("divAlcances").appendChild(divInputAlcances);

  var divMasAlcances =  document.createElement("div");
  divMasAlcances.className = "col-lg-12";
  divMasAlcances.innerHTML = '<p class="text-right" style="color:blue;" onclick="crearAlcance();" id="masAlcances">More</p>';

  document.getElementById("divAlcances").appendChild(divMasAlcances);
  crearHrFormTodo("divAlcances");

}

function crearDivRestricciones(){
  var divRestricciones = document.createElement("div");
  divRestricciones.id = "divRestricciones";
  divRestricciones.className = "form-group row";
  divRestricciones.innerHTML = '<label class="col-lg-3 col-form-label form-control-label">Restricciones</label>';
  document.getElementById("formTodo").appendChild(divRestricciones);
  var divInputRestricciones = document.createElement("div");
  divInputRestricciones.id = "restricciones";
  divInputRestricciones.className = "col-lg-9";
  for (var i = 0; i < 3; i++) {
    divInputRestricciones.innerHTML = '<input class="form-control" type="text" required id="txtRes_1"><br>'+
                                      '<input class="form-control" type="text" required id="txtRes_2"><br>'+
                                      '<input class="form-control" type="text" required id="txtRes_3"><br>';
    document.getElementById("divRestricciones").appendChild(divInputRestricciones);
  }

  var divMasRestricciones = document.createElement("div");
  divMasRestricciones.className = "col-lg-12";
  divMasRestricciones.innerHTML = '<p class="text-right" style="color:blue;" onclick="crearRestriccion();" id="masRestricciones">More</p>';

  document.getElementById("divRestricciones").appendChild(divMasRestricciones);
  crearHrFormTodo("divRestricciones");
}

function crearDivSelectCarpeta(){
  var divSelectCarpeta = document.createElement("div");
  divSelectCarpeta.id = "div_select";
  divSelectCarpeta.className = "form-group row";
  divSelectCarpeta.innerHTML = '<label class="col-lg-3 col-form-label form-control-label">Carpeta</label>';
  document.getElementById("formTodo").appendChild(divSelectCarpeta);
  var divSelect = document.createElement("div");
  divSelect.className = "col-lg-9";
  divSelect.innerHTML = '<select id="select_carpeta" class="form-control" required>'+
                          '<option value = "" selected>==Seleccione Una==</option>'+
                        '</select>';

  document.getElementById("div_select").appendChild(divSelect);
  crearHrFormTodo("div_select");
  cargarSelectCarpeta();
}

function crearDivBotonesProyecto(){
  var divContenidoBotones = document.createElement("div");
  divContenidoBotones.id = "divBotones";
  divContenidoBotones.className = "form-group row";
  divContenidoBotones.innerHTML = '<label class="col-lg-8 col-form-label form-control-label"></label>';
  document.getElementById("formTodo").appendChild(divContenidoBotones);
  var divBotones = document.createElement("div");
  divBotones.className = "col-lg-4 text-right";
  divBotones.innerHTML = '<input type="reset" class="btn btn-secondary" id="btnCancelar" style="display:none;" onclick="cancelar();" value="Cancel">'+
                          '<!-- <input type="button" class="btn btn-primary" value="Continuar" id="btnGuardar" onclick="guardarProyecto();"> -->'+
                          '<input type="button" class="btn btn-primary" value="Continuar" id="btnContinuar" onclick="guardarProyecto();">'+
                          '<input type="button" class="btn btn-primary" value="Edit" id="btnEdit" style="display:none;" onclick="editarProyecto();">'+
                          '<input type="button" class="btn btn-primary" value="Actualizar" id="btnActualizar" style="display:none;" onclick="actualizarProyecto();">'+
                          '<!-- <input type="button" class="btn btn-primary" value="Continuar" id="btnContinuar" style="display:none;" onclick=""> -->';
  document.getElementById("divBotones").appendChild(divBotones);

  var divDatos = document.createElement("div");
  divDatos.id = "datos";
  document.getElementById("divBotones").appendChild(divDatos);

}

function nuevoProyecto(){
  if (banderaEditar) {
    var confirmacion = confirm("Dejar de EDITAR?");
    if (confirmacion) {
      document.getElementById("titulo").innerHTML = "Nuevo Proyecto";
      document.getElementById("btnEdit").style.display = "none";
      document.getElementById("btnCancelar").style.display = "none";
      document.getElementById("btnActualizar").style.display = "none";
      // document.getElementById("btnGuardar").style.display = "";
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
    // document.getElementById("btnGuardar").style.display = "";
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
    if (document.getElementById("txtObjetivo_" + i).value != "" && document.getElementById("txtObjetivo_" + i).value != null) {
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
    "nombre_proyecto_anterior":nombre_proyecto_anterior
    // "nombre_objetivos_anterior":nombre_objetivos_anterior,
    // "nombre_alcances_anterior":nombre_alcances_anterior,
    // "nombre_restricciones_anterior":nombre_restricciones_anterior
  };
  $.ajax({
    data:datos,
    url : "../controller/control_actualizar_proyecto.php",
    type: "POST",
    success:  function (response) {
      alert(response);
      // nombre_objetivos_anterior = [];
    },
    error: function(){
      alert("No se pudo actualizar");
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
            limpiarElementos();
            crearElementosProyecto("Detalles de Proyecto");
            // alert(response);
            // document.getElementById("titulo").innerHTML = "Detalles de Proyecto";
            verNombreProyecto(response.titulo_proyecto);
            verObjetivosProyecto(response.objetivos);
            verAlcancesProyecto(response.alcances);
            verResProyecto(response.restricciones);
            document.getElementById("div_select").style.display = "none";
            document.getElementById("nuevo_proyecto").style.display = "";
            document.getElementById("btnEdit").style.display = "";
            // document.getElementById("btnGuardar").style.display = "none";
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
          limpiarElementos();
          crearElementosProyecto("Detalles de Proyecto");
          // alert(response);
          // document.getElementById("titulo").innerHTML = "Detalles de Proyecto";
          verNombreProyecto(response.titulo_proyecto);
          verObjetivosProyecto(response.objetivos);
          verAlcancesProyecto(response.alcances);
          verResProyecto(response.restricciones);
          document.getElementById("div_select").style.display = "none";
          document.getElementById("nuevo_proyecto").style.display = "";
          document.getElementById("btnEdit").style.display = "";
          // document.getElementById("btnGuardar").style.display = "none";
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
function verNombreProyecto(nombre_proyecto){
  var divRes = document.getElementById("verProyecto");
  // document.getElementById("etiquetaMenosRes").setAttribute("style","display:none;");
  if (divRes != null) {
      while (divRes.hasChildNodes()) {
          divRes.removeChild(divRes.lastChild);
      }
  }
  var titulo = document.createElement('input');
  var br = document.createElement('br');
  titulo.className = "form-control";
  titulo.id = "txtTitulo";
  titulo.name = "txtTitulo";
  titulo.required = true;
  titulo.disabled = true;
  titulo.type = "text";
  titulo.value = nombre_proyecto;
  document.getElementById('verProyecto').appendChild(titulo);
  document.getElementById("verProyecto").appendChild(br);
}

function verNombreProyecto2(nombre_proyecto) {
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
  document.getElementById('txtTitulo').value = "";

  var inputCountObj = document.getElementById('objetivos').getElementsByTagName('input').length;
  for (var i = 0; i < inputCountObj; i++) {
    document.getElementById('txtObjetivo_'+(i+1)).value = "";
  }

  var inputCountAlc = document.getElementById('alcances').getElementsByTagName('input').length;
  for (var i = 0; i < inputCountAlc; i++) {
    document.getElementById('txtAlcance_'+(i+1)).value = "";
  }

  var inputCountRes = document.getElementById('restricciones').getElementsByTagName('input').length;
  for (var i = 0; i < inputCountRes; i++) {
    document.getElementById('txtRes_'+(i+1)).value = "";
  }

}
