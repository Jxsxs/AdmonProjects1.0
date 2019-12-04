var id_proyecto_actual = 0;
var bandDatosNuevos = true;

function puntos_funcion(){
  limpiarElementos();
  crearCardHeader("Puntos de Función");
  crearCardBody();
  crearElementoFunciones();
  crearElementoNombre();
  crearElementoDescripcion();
  crearElementoComplejidad();
  crearBotones();
}

function guardarProyecto(){
  puntos_funcion();
  // if (bandDatosNuevos) {
  //   var titulo_proyecto = document.getElementById("txtTitulo").value;
  //   var contObjetivos = document.getElementById('objetivos').getElementsByTagName('input').length;
  //   var contAlcances = document.getElementById('alcances').getElementsByTagName('input').length;
  //   var contRes = document.getElementById('restricciones').getElementsByTagName('input').length;
  //   var objetivos = [];
  //   var alcances = [];
  //   var restricciones = [];
  //   if (document.getElementById("select_carpeta").value != "") {
  //     var id_carpeta = document.getElementById("select_carpeta").value;
  //     // console.log(id_carpeta);
  //   }
  //   for (var i = 1; i <= contObjetivos; i++) {
  //     if (document.getElementById("txtObjetivo_" + i).value != "") {
  //       objetivos.push(document.getElementById("txtObjetivo_" + i).value);
  //     }
  //   }
  //   for (var i = 1; i <= contAlcances; i++) {
  //     if (document.getElementById("txtAlcance_" + i).value != "") {
  //       alcances.push(document.getElementById("txtAlcance_" + i).value);
  //     }
  //   }
  //   for (var i = 1; i <= contRes; i++) {
  //     if (document.getElementById("txtRes_" + i).value != "") {
  //       restricciones.push(document.getElementById("txtRes_" + i).value);
  //     }
  //   }
  //
  //   var datos = {
  //     "titulo_proyecto":titulo_proyecto,
  //     "objetivos":objetivos,
  //     "alcances":alcances,
  //     "restricciones":restricciones,
  //     "id_carpeta":id_carpeta
  //   };
  //
  //   // var datos = {
  //   //   "pasa":"pasa"
  //   // }
  //   $.ajax({
  //     data:datos,
  //     url : "../controller/control_guardar_proyecto.php",
  //     type: "POST",
  //     success: function (response) {
  //        // alert(response.id_plan);
  //        id_proyecto_actual = response.id_plan;
  //        puntos_funcion();
  //       // limpiaDivs();
  //       // location.reload();
  //       // puntos_funcion();
  //     },
  //     error: function(){
  //       alert("No se guardó el proyecto");
  //     }
  //   });
  // }else{
  //    puntos_funcion();
  // }
}

function limpiarElementos(){
  // document.getElementById("titulo").innerHTML = "";
  var header = document.getElementById("header");
  header.parentNode.removeChild(header);
  var divRes = document.getElementById("formTodo");

  var cardBody = document.getElementById("divTodo");
  cardBody.parentNode.removeChild(cardBody);
  // document.getElementById("etiquetaMenosRes").setAttribute("style","display:none;");
  if (divRes != null) {
      while (divRes.hasChildNodes()) {
          divRes.removeChild(divRes.lastChild);
      }
  }
}

function crearElementoFunciones(){
  document.getElementById("titulo").innerHTML = "Puntos de función";
  var divFunciones = document.createElement("div");
  divFunciones.id = "divFunciones";
  divFunciones.className = "form-group row";
  divFunciones.innerHTML = '<label class="col-lg-3 col-form-label form-control-label">Funciones:</label>';
  document.getElementById("formTodo").appendChild(divFunciones);
  $.ajax({
    //data:datos,
    url : "../controller/control_obtener_funciones.php",
    type: "GET",
    success: function (response) {
      // alert(response.funciones[0]['id_clasificacion'] + " - " + response.funciones[0]['nombre_clasificacion']);
      var divInputFunciones = document.createElement("div");
      divInputFunciones.className = "col-lg-9";
      var cadenaSelect = '<option value = "0" selected>==Seleccione Una==</option>';
      for (var i = 0; i < response.funciones.length; i++) {
        cadenaSelect += '<option value = "'+ response.funciones[i]['id_clasificacion'] +'">' + response.funciones[i]['nombre_clasificacion'] + '</option>';
      }
      // console.log( cadenaSelect );

      divInputFunciones.innerHTML = '<select id="selectFuncion" class="form-control" >' + cadenaSelect + '</select><span id="errorFunciones"></span>';
      document.getElementById("divFunciones").appendChild(divInputFunciones);
      // limpiaDivs();
      // location.reload();
    },
    error: function(){
      alert("No se guardó el proyecto");
    }
  });
}

function crearElementoNombre(){
  var divNombre = document.createElement("div");
  divNombre.id = "divNombre";
  divNombre.className = "form-group row";
  divNombre.innerHTML = '<label class="col-lg-3 col-form-label form-control-label">Nombre:</label>';
  document.getElementById("formTodo").appendChild(divNombre);
  var divInputNombre = document.createElement("div");
  divInputNombre.className = "col-lg-9";
  divInputNombre.innerHTML = '<input class="form-control" type="text" value="" id="txtNombrePF"><span id="errorNombre"></span>';
  document.getElementById("divNombre").appendChild(divInputNombre);
}

function crearElementoDescripcion(){
  var divDescripcion = document.createElement("div");
  divDescripcion.id = "divDescripcion";
  divDescripcion.className = "form-group row";
  divDescripcion.innerHTML = '<label class="col-lg-3 col-form-label form-control-label">Descripción:</label>';
  document.getElementById("formTodo").appendChild(divDescripcion);
  var divInputDescripcion = document.createElement("div");
  divInputDescripcion.className = "col-lg-9";
  divInputDescripcion.innerHTML = '<textarea class="form-control"  id="txtDescPF" rows="3"></textarea><span id="errorDesc"></span>';
  document.getElementById("divDescripcion").appendChild(divInputDescripcion);
}

function crearElementoComplejidad(){
  var divComplejidad = document.createElement("div");
  divComplejidad.id = "divComplejidad";
  divComplejidad.className = "form-group row";
  divComplejidad.innerHTML = '<label class="col-lg-3 col-form-label form-control-label">Complejidad:</label>';
  document.getElementById("formTodo").appendChild(divComplejidad);

  $.ajax({
    //data:datos,
    url : "../controller/control_obtener_complejidad.php",
    type: "GET",
    success: function (response) {
      var divInputComplejidad = document.createElement("div");
      divInputComplejidad.className = "col-lg-9";
      var cadenaSelect = '<option value = "0" selected>==Seleccione Una==</option>';
      for (var i = 0; i < response.complejidad.length; i++) {
        cadenaSelect += '<option value = "' + response.complejidad[i]['id_complejidad'] + '">' + response.complejidad[i]['nombre_complejidad'] + '</option>'
      }
      divInputComplejidad.innerHTML = '<select id="selectComplejidad" class="form-control">' + cadenaSelect + '</select><span id="errorComplejidad"></span>';
      document.getElementById("divComplejidad").appendChild(divInputComplejidad);
    },
    error: function (){
      alert("No se guardó el proyecto");
    }
  });
}

function crearBotones(){
  var divBotones = document.createElement("div");
  divBotones.id = "divBotones";
  divBotones.className = "form-group row";
  divBotones.innerHTML = '<label class="col-lg-8 col-form-label form-control-label"></label>';
  document.getElementById("formTodo").appendChild(divBotones);
  var divInputBotones = document.createElement("div");
  divInputBotones.className = "col-lg-4 text-right";
  divInputBotones.innerHTML =
  '<input type="button" class="btn btn-primary mr-2" value="Regresar" id="btnRegresar" style="" onclick="regresarPlanProyecto()">'+
  '<input type="button" class="btn btn-primary mr-2" value="Guardar" id="btnGuardar" style="" onclick="guardarPuntosFuncion();">'+
  '<input type="button" class="btn btn-primary" value="Continuar" id="btnContinuar" onclick="verResultadosPuntosFuncion();">';
  document.getElementById("divBotones").appendChild(divInputBotones);

}

function verResultadosPuntosFuncion(){
    var continuarVerResultador = confirm("Desea continuar?");
    if (continuarVerResultador) {
      limpiarElementos();
      crearTablaResultadoPuntosFuncion();
    }
}

function crearTablaResultadoPuntosFuncion(){
  crearCardHeader("Resultado Puntos de Función");
  crearCardBody();

  var tabla = document.createElement("table");
  tabla.id = "tablaPuntosFuncion";
  tabla.className = "table table-striped table-bordered";
  tabla.style = "width:100%";
  var thead = document.createElement("thead");
  tabla.appendChild(thead);
  var trHead = document.createElement("tr");
  trHead.innerHTML = "<th>Funciones</th>"+
                 "<th>Complejidad</th>"+
                 "<th></th>"+
                 "<th>Cantidad</th>"+
                 "<th>Total por tipo</th>"
  thead.appendChild(trHead);
  var tbody = document.createElement("tbody");
  var trBody = document.createElement("tr");
  var trBody2 = document.createElement("tr");
  trBody.innerHTML = "<td>Test</td>"+
                 "<td>test</td>"+
                 "<td>0</td>"+
                 "<td>0</td>"+
                 "<td>0</td>";
   trBody2.innerHTML = "<td>Test</td>"+
                  "<td>test</td>"+
                  "<td>0</td>"+
                  "<td>0</td>"+
                  "<td>0</td>"
 tbody.appendChild(trBody);
 tbody.appendChild(trBody2);

 tabla.appendChild(tbody);
 document.getElementById("formTodo").appendChild(tabla);
}

function regresarPlanProyecto(){
  bandDatosNuevos = false;
  verDatosProyecto(id_proyecto_actual);
}

function guardarPuntosFuncion(){
  var confirmaGuardarPuntosFuncion = confirm("Guardar Punto de función?");
  if (confirmaGuardarPuntosFuncion) {
    var funcion;
    var nombre_punto_funcion;
    var descripcion_punto_funcion;
    var complejidad;
    var errorName = document.getElementById("errorNombre");
    var errorDesc = document.getElementById("errorDesc");
    var errorFunciones = document.getElementById("errorFunciones");
    var errorComplejidad = document.getElementById("errorComplejidad");


    if (document.getElementById('selectFuncion').value > 0) {
      funcion = document.getElementById('selectFuncion').value;
      if (document.getElementById('txtNombrePF').value.length > 0) {
        nombre_punto_funcion = document.getElementById('txtNombrePF').value;
        errorName.innerHTML = "";
        errorDesc.innerHTML = "";
        if (document.getElementById('txtDescPF').value.length > 0) {
          descripcion_punto_funcion = document.getElementById('txtDescPF').value;

          if (document.getElementById('selectComplejidad').value > 0) {
            complejidad = document.getElementById('selectComplejidad').value;
            errorFunciones.innerHTML = "";
            errorDesc.innerHTML = "";
            errorName.innerHTML = "";
            errorComplejidad.innerHTML = "";

            var datos = {
              'funcion':funcion,
              'nombre_punto_funcion':nombre_punto_funcion,
              'descripcion_punto_funcion':descripcion_punto_funcion,
              'complejidad':complejidad
            };

            console.log(datos);
            $.ajax({
              data:datos,
              url : "../controller/control_guardar_puntos_funcion.php",
              type: "post",
              success: function (response) {
                limpiaDivs();
                console.log(response);
              },
              error: function (){
                alert("No se guardó el proyecto");
              }
            });

          }else{
            errorFunciones.innerHTML = "";
            errorComplejidad.innerHTML = "Seleccione la complejidad";
            errorComplejidad.style.color = "red";
            errorComplejidad.style.fontStyle = "italic";
            errorComplejidad.style.fontSize = "12px";
          }
        }else{
          errorFunciones.innerHTML = "";
          errorDesc.innerHTML = "Completa la descripcion";
          errorDesc.style.color = "red";
          errorDesc.style.fontStyle = "italic";
          errorDesc.style.fontSize = "12px";
        }
      }else{
        errorFunciones.innerHTML = "";
        errorDesc.innerHTML = "";
        errorName.innerHTML = "Completa el nombre";
        errorName.style.color = "red";
        errorName.style.fontStyle = "italic";
        errorName.style.fontSize = "12px";
        //agregar un mensaje para que el usuario ingrese este campo (en realidad hay que investigar como hacerlo xD)
      }
    }else{
      errorFunciones.innerHTML = "Seleccione una funcion";
      errorFunciones.style.color = "red";
      errorFunciones.style.fontStyle = "italic";
      errorFunciones.style.fontSize = "12px";
    }
  }
}

function validacion(){

}

function limpiaDivs(){
  $('#selectFuncion option').prop('selected', function() {
       return this.defaultSelected;
   });
   document.getElementById('txtNombrePF').value = "";

   $('#selectComplejidad option').prop('selected', function() {
       return this.defaultSelected;
   });
   document.getElementById("txtDescPF").value = "";
}
