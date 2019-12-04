<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <!--<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"/>-->
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0" name="viewport">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.19/css/dataTables.bootstrap.min.css" integrity="sha256-PbaYLBab86/uCEz3diunGMEYvjah3uDFIiID+jAtIfw=" crossorigin="anonymous" /> -->
        <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.19/css/dataTables.bootstrap.css" integrity="sha256-Q+x64zyaIbaTWUmjS87njt7p+Vod9DQwNAAG2RDFJzo=" crossorigin="anonymous" /> -->
        <!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.18/r-2.2.2/sl-1.2.6/datatables.min.css"/> -->
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.18/r-2.2.2/sl-1.2.6/datatables.min.css"/>

        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/index.css">

      <title>SAProjects</title>
    </head>

    <body>
      <nav class="navbar navbar-expand-md fixed-top">
          <div class="container-fluid">
              <button type="button" id="sidebarCollapse" class="btn d-inline-block d-lg-none" data-toggle="collapse" data-target="#sidebar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fas fa-align-left"></i>
              </button>
              <h3 style="color:white;">APS</h3>
              <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fas fa-align-justify"></i>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent" style="color:white;">
                  <ul class="nav navbar-nav ml-auto">
                      <li class="nav-item active">
                          <a class="nav-link" href="javascript:nuevoProyecto();" id="nuevo_proyecto" style="display:none;">Nuevo Proyecto</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" data-toggle="modal" href="#nuevaCarpeta">Nueva Carpeta</a>
                      </li>
                      <li class="nav-item dropdown">
                          <a class="nav-link" href="#" id="dropdown_usuario" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><strong id="texto_usuario"></strong></a>
                          <div class="dropdown-menu" aria-labelledby="dropdown_usuario">
                           <a class="dropdown-item" href="#">Ajustes</a>
                           <a class="dropdown-item" href="#">Logout</a>
                          </div>
                      </li>
                      <li class="nav-item">
                        <a href="#modalConfiguracion" class="material-icons nav-link " data-toggle="modal">&#xe8b8;</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      <nav id="sidebar" style="margin-top:30px;width:auto" >
            <ul class="list-styled components">
              <li class="active" id="proyectos">
              </li>
          </ul>
      </nav>
            <!-- Page Content  -->
      <div id="content">
      <!-- <div id="contentAll" class="container" style="margin-left: 150px ;margin:0 auto; padding:auto;" > -->
        <div class="card card-outline-secondary" id="cardTodo">
              <!-- <div class="card-header">
                  <h3 class="mb-0" style="text-align:center;" id="titulo">Nuevo Proyecto</h3>
              </div> -->
              <!-- <div class="card-body" id="divTodo">
                  <form class="form" role="form" autocomplete="off" id="formTodo"> -->
                      <!-- <div class="form-group row" id="divTitulo">
                          <label class="col-lg-3 col-form-label form-control-label">Titulo</label>
                          <div class="col-lg-9" id="verProyecto">
                              <input class="form-control" type="text" required value="" id="txtTitulo">
                          </div>
                          <hr>
                      </div>
                      <div class="form-group row" id="divObjetivos">
                          <label class="col-lg-3 col-form-label form-control-label">Objetivos</label>
                          <div class="col-lg-9" id="objetivos">
                              <input class="form-control" type="text" required id="txtObjetivo_1">
                              <br>
                              <input class="form-control" type="text" id="txtObjetivo_2">
                              <br>
                              <input class="form-control" type="text" id="txtObjetivo_3">
                              <br>
                          </div>
                          <div class="col-lg-12" id="">
                            <p class="text-right" style="color:blue;" onclick="crearObjetivo();" id="masObjetivos">More</p>
                          </div>
                          <hr>
                      </div>
                      <div class="form-group row" id="divAlcances">
                          <label class="col-lg-3 col-form-label form-control-label">Alcances</label>
                          <div class="col-lg-9" id="alcances">
                              <input class="form-control" type="text" required id="txtAlcance_1">
                              <br>
                              <input class="form-control" type="text" id="txtAlcance_2">
                              <br>
                              <input class="form-control" type="text" id="txtAlcance_3">
                              <br>
                          </div>
                          <div class="col-lg-12" id="">
                            <p class="text-right" style="color:blue;" onclick="crearAlcance();" id="masAlcances">More</p>
                          </div>
                          <hr>
                      </div>
                      <div class="form-group row" id="divRestricciones">
                          <label class="col-lg-3 col-form-label form-control-label">Restricciones</label>
                          <div class="col-lg-9" id="restricciones">
                              <input class="form-control" type="text" required id="txtRes_1">
                              <br>
                              <input class="form-control" type="text" id="txtRes_2">
                              <br>
                              <input class="form-control" type="text" id="txtRes_3">
                              <br>
                          </div>
                          <div class="col-lg-12" >
                            <p class="text-right" style="color:blue;" onclick="crearRestriccion();" id="masRestricciones">More</p>
                          </div>
                          <hr>
                      </div>
                      <div class="form-group row" id="div_select">
                          <label class="col-lg-3 col-form-label form-control-label">Carpeta</label>
                          <div class="col-lg-9">
                              <select id="select_carpeta" class="form-control" required>
                                  <option value = "" selected>==Seleccione Una==</option>
                              </select>
                          </div>
                          <hr>
                      </div>
                      <div class="form-group row" id="divBotones">
                          <label class="col-lg-8 col-form-label form-control-label"></label>
                          <div class="col-lg-4 text-right">
                            <input type="reset" class="btn btn-secondary" id="btnCancelar" style="display:none;" onclick="cancelar();" value="Cancel">
                            <!-- <input type="button" class="btn btn-primary" value="Continuar" id="btnGuardar" onclick="guardarProyecto();"> -->
                              <!-- <input type="button" class="btn btn-primary" value="Continuar" id="btnContinuar" onclick="guardarProyecto();">
                            <input type="button" class="btn btn-primary" value="Edit" id="btnEdit" style="display:none;" onclick="editarProyecto();">
                            <input type="button" class="btn btn-primary" value="Actualizar" id="btnActualizar" style="display:none;" onclick="actualizarProyecto();">
                            <!-- <input type="button" class="btn btn-primary" value="Continuar" id="btnContinuar" style="display:none;" onclick=""> -->
                            <!-- </div>
                          <div id="datos">
                          </div>
                      </div> -->
                  <!-- </form>
              </div> -->
          </div>
      </div>
      <!--########### Modal para agregar carpeta ##############-->
        <div class="modal fade" id="nuevaCarpeta" role="dialog">
            <div class="modal-dialog modal-md">
                <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-header">
                    <button class="close" data-dismiss="modal" type="button">
                        ×
                    </button>
                </div>
                <div class="modal-body">
                  <div class="card card-outline-secondary" >
                    <div class="card-header">
                        <h3 class="mb-0" style="text-align:center;" id="titulo">Nueva Carpeta</h3>
                    </div>
                    <div class="card-body">
                        <form class="form" role="form" autocomplete="off">
                          <div class="form-group row">
                            <!-- <i class="col-lg-1 fas fa-folder-open"></i> -->
                            <div class="col-lg-12 " id="verProyecto">
                              <input class="form-control" id="txtNombreCarpeta" placeholder="Folder Name" required="true" type="text" width="200px"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <div class="col-lg-12 text-right">
                              <button class="btn btn-primary" type="submit" onclick="guardarCarpeta();">
                                  Guardar
                              </button>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <!-- ############### Modal agregar carpeta ############################# -->

    <!--########### Modal Configuracion ##############-->
      <div class="modal fade" id="modalConfiguracion" role="dialog">
          <div class="modal-dialog modal-md">
              <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                  <button class="close" data-dismiss="modal" type="button">
                      ×
                  </button>
              </div>
              <div class="modal-body">
                <div class="card card-outline-secondary" >
                  <div class="card-header">
                      <h3 class="mb-0" style="text-align:center;" id="titulo">Configuración General</h3>
                  </div>
                  <div class="card-body">
                      <form class="form" role="form" autocomplete="off">
                        <div class="form-group row">
                          <label class="col-lg-4 col-form-label form-control-label">Datos</label>
                          <div class="col-lg-8 ">
                            <select id="selectDatos" class="form-control" required width="200px">
                                <option value = "" selected>Seleccione Datos</option>
                                <option value ="loc">Lineas de Código</option>
                                <option value ="fop">Puntos de Función</option>
                            </select>
                            <!-- <input class="form-control" id="txt" placeholder="Folder Name" required="true" type="text" width="200px"/> -->
                          </div>
                          <hr>
                        </div>
                        <div class="form-group row">
                          <label class="col-lg-4 col-form-label form-control-label">Lenguaje</label>
                          <div class="col-lg-8 ">
                            <select id="selectLenguaje" class="form-control" required width="200px">
                                <option value = "" selected>Seleccione Lenguaje</option>
                                <option value ="java">Java</option>
                                <option value ="python">Python</option>
                                <option value ="php">PHP</option>
                                <option value ="cplus">C++</option>
                            </select>
                            <!-- <input class="form-control" id="txt" placeholder="Folder Name" required="true" type="text" width="200px"/> -->
                          </div>
                          <hr>
                          <div class="form-group row">
                            <label class="col-lg-4 col-form-label form-control-label">Modelo</label>
                            <div class="col-lg-8 ">
                              <select id="selectModelo" class="form-control" required width="200px">
                                  <option value = "" selected>Seleccione Modelo</option>
                                  <option value ="java">COCOMO Básico</option>
                                  <option value ="python">COCOMO Intermedio</option>
                                  <option value ="php">COCOMO Avanzado</option>
                                  <option value ="cplus">COCOMO 2</option>
                                  <option value ="cplus">Puntos de Función</option>
                                  <option value ="cplus">Algorítmico de Costos de Software</option>
                                  <option value ="cplus">Estimación para Proyectos Cliente/Servidor</option>
                                  <option value ="cplus">estimación para aplicaciones Intranet/Internet</option>
                                  <option value ="cplus">estimación para aplicaciones Intranet/Internet</option>


                              </select>
                              <!-- <input class="form-control" id="txt" placeholder="Folder Name" required="true" type="text" width="200px"/> -->
                            </div>
                            <hr>
                        </div>
                        <div class="form-group row">
                          <div class="col-lg-12 text-right">
                            <button class="btn btn-primary" type="submit" onclick="guardarCarpeta();">
                                Guardar
                            </button>
                          </div>
                        </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
    </body>
    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.18/r-2.2.2/sl-1.2.6/datatables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
    <!-- <script type="text/javascript" src="https://cdn.datatables.net/responsive/2.2.3/js/responsive.bootstrap4.min.js"></script> -->
    <script src="../js/events.js" type="text/javascript"></script>
    <script src="../js/datosProyecto.js" type="text/javascript"></script>

    <script type="text/javascript">

        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
            // $('#tablaPuntosFuncion').DataTable();
        });
    </script>

    <script>
      $(document).ready(function() {
        $('#tablaPuntosFuncion').DataTable();
      } );
    </script>
</html>
