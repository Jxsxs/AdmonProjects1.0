<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8"/>
        <!--<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"/>-->
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0" name="viewport">
        <title>SAProjects</title>

        <!-- Bootstrap CSS CDN -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
        <!-- Our Custom CSS -->
        <link rel="stylesheet" href="../css/style.css">

        <!-- Font Awesome JS -->
        <script src="../js/events.js" type="text/javascript"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    </head>

    <body>
        <?php
        session_start();
        include '../controller/contro_agrega_carpeta.php';
        ?>
        <div class="wrapper">
            <!-- Sidebar  -->
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Administracion Por Carpetas</h3>
                    <strong>SAP</strong>
                </div>

                <ul class="list-unstyled components">
                    <li class="active">
                        <?php
                        include '../controller/control_muestra_carpetas.php';
                        ?>
                </ul>
            </nav>

            <!-- Page Content  -->
            <div id="content" >
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">

                        <button type="button" id="sidebarCollapse" class="btn btn-info">
                            <i class="fas fa-align-left"></i>
                        </button>

                        <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-align-justify"></i>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="nav navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#" onclick="">Nuevo Proyecto</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="modal" href="#nuevaCarpeta">Nueva Carpeta</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="contentAll"  style="margin:0 auto; width:700px;padding:auto;">
                    <div class="row ml-auto" id="contNombre">
                        <div class="col-md-6">
                            <div class="form-group">
                                <div class="input-group">
                                    Project Name
                                </div>
                                <br>
                                <div class="input-group">
                                  <input class="form-control" id="name" name="txtNombreProyecto" placeholder="" required="true" type="text">
                                  </input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row ml-auto" id="contObjetivo">
                        <div class="col-md-6">
                            <div class="form-group" >
                                 <hr style="float: left; width: 200px;">
                                <div class="input-group">
                                  Objetivos
                                </div>
                                <br>
                                <div class="input-group">
                                  <div class="styled-select blue semi-square">
                                     <select name="selectObjetivos" onchange="creaObjetivoSelect()">
                                       <option value="" selected>Objetivos</option>
                                       <option value="1">1</option>
                                       <option value="2">2</option>
                                       <option value="3">3</option>
                                     </select>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
               <!--      <div class="row flex-column align-content-center">
                        <a href="#" onclick="creaObjetivo()">
                            Nuevo Objetivo
                        </a>
                    </div> -->
                    <div class="row ml-auto" id="contAlcance">
                        <div class="col-md-6">
                            <div class="form-group">
                                <hr style="float: left; width: 200px;">
                                <div class="input-group">
                                  Alcances
                                </div>
                                <br>
                                <div class="input-group">
                                  <div class="styled-select blue semi-square">
                                     <select>
                                       <option value="" selected>Alcances</option>
                                       <option value="uno">1</option>
                                       <option value="dos">2</option>
                                       <option value="tres">3</option>
                                     </select>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   <!--  <div class="row flex-column align-content-center">
                        <a href="#" id="generaAlcance">
                            More
                        </a>
                    </div> -->
                    <div class="row ml-auto" id="contRes">
                        <div class="col-md-6">
                            <div class="form-group">
                                <hr style="float: left; width: 200px;">
                                <div class="input-group">
                                  Restricciones
                                </div>
                                <br>
                                <div class="input-group">
                                  <div class="styled-select blue semi-square">
                                     <select>
                                       <option value="" selected>Restricciones</option>
                                       <option value="uno">1</option>
                                       <option value="dos">2</option>
                                       <option value="tres">3</option>
                                     </select>
                                   </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <!-- en esta parte va el boton para guardar -->
                        <div class="row ml-auto align-item-right" style="text-align:right">
                          <div class="col-md-6">
                              <div class="form-group">
                                <button class="btn btn-success" name="btnGuardaProyecto" type="submit">
                                Save
                                </button>
                              </div>
                          </div>
                        </div>
                    </div>
                   <!--  <div class="row flex-column align-content-center">
                        <a href="#" id="generaRestriccion">
                            More
                        </a>
                    </div> -->
                    <!-- boton que envia el formulario -->
                    <!-- <div class="container"> -->
                     <!--  <div class="row">
                        <div class="col-4 col-sm-2">

                           <button class="btn btn-success" name="btnEditProyecto" type="submit" onclick="habilitaEdicionProyecto()">
                            Edit
                            </button>
                        </div>
                        <div class="col-4 col-sm-2">
                            <button class="btn btn-success" name="btnGuardaProyecto" type="submit">
                            Save
                            </button>
                        </div>
                      </div> -->
                    <!-- </div> -->
                </div>
            </div>


            <!--###########Modal para agregar carpeta##############-->
            <div class="modal fade" id="nuevaCarpeta" role="dialog">
                <div class="modal-dialog modal-lg">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button class="close" data-dismiss="modal" type="button">
                                ×
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-3">
                                </div>
                                <div class="col-md-6">
                                    <h2>
                                        New Folder
                                    </h2>
                                    <hr>
                                    </hr>
                                </div>
                            </div>
                            <form role="form" action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>' method="post" class="">
                                <div class="row flex-column align-content-center">
                                    <div class="col-md-6 ">
                                        <div class="form-group">
                                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                                <div class="input-group-addon" style="width: 2.6rem">
                                                    <i class="fas fa-folder-open">
                                                    </i>
                                                </div>
                                                <input class="form-control" id="name" name="txtNombreCarpeta" placeholder="Folder Name" required="true" type="text">
                                                </input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row flex-column align-content-end">
                                    <div class="col-md-6">
                                        <!-- boton que envia el formulario -->
                                        <button class="btn btn-success" name="btnGuardarCarpeta" type="submit">
                                                <i class="fa fa-user-plus">
                                            </i>
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

        <!-- jQuery CDN - Slim version (=without AJAX) -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <!-- Popper.JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
        <!-- Bootstrap JS -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>



        <script type="text/javascript">
            $(document).ready(function () {
                $('#sidebarCollapse').on('click', function () {
                    $('#sidebar').toggleClass('active');
                });
            });
        </script>
    </body>

</html>
