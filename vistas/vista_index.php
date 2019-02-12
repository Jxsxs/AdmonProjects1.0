<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <!--<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"/>-->
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0" name="viewport">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
        <link rel="stylesheet" href="../css/style.css">

      <title>SAProjects</title>
    </head>

    <body>
        <?php
        session_start();
        include '../controller/contro_agrega_carpeta.php';
        ?>
        <div class="wrapper" style="margin-top:60px">
            <!-- Sidebar  -->
            <nav id="sidebar">
                  <ul class="list-unstyled components">
                    <li class="active">
                      <?php
                      include '../controller/control_muestra_carpetas.php';
                      // include '../controller/control_nuevo_proyecto.php';
                      ?>
                </ul>
            </nav>

            <!-- Page Content  -->
            <div id="content" >
                <nav class="navbar navbar-expand-lg fixed-top">
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
                                    <a class="nav-link" href="#" onclick="nuevoProyecto()">Nuevo Proyecto</a>
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
                <div class="content" style="margin-top:15%; position: fixed; margin-left: 30%" id="bienvenido">
                  <div class="card" >
                    <div class="card-body" style="text-align:center;" id="siBien">
                        <h1> Bienvenido</h1>
                    </div>
                    <!-- <div class="card-body" id="noBien" style="text-align:center; display:none;">
                        <h1> No eres bienvenido</h1>
                    </div>
                    <div class="card-body" style="text-align:center;">
                      <button class="btn btn-success" name="algo" type="submit" id="btnAlgo" onclick="pruebaMostrar();">
                        Press
                      </button>
                    </div> -->
                  </div>
                </div>
                <div id="contentAll" class="container" style="margin:0 auto; width:auto;padding:auto; display:none;" >
                    <div class="row " id="contNombre">
                      <div class="col-md-12">
                          <div class="well well-md">
                              <form class="form-horizontal" method="post">
                                  <fieldset>
                                    <legend class="text-center header">Proyecto</legend>
                                    <div class="form-group ">
                                      <span class="col-md-1 col-md-offset-3 text-center">Titulo:</span>
                                      <div class="col-md-8" id="verProyecto">
                                        <!-- <div class="input-group"> -->
                                            <!-- <h3>Project Name</h3> -->
                                      </div>
                                      <br>
                                    </div>

                                    <div class="form-group" id="contObjetivo">
                                        <!-- <hr style="float: left; width: 200px;"> -->
                                        <span class="col-md-1 col-md-offset-2 text-center">Objetivos:</span>
                                        <div class="col-md-8" id="verObjetivos">

                                        </div>
                                        <br>
                                    </div>

                                    <div class="form-group" id="contAlcance">
                                        <!-- <hr style="float: left; width: 200px;"> -->
                                        <span class="col-md-1 col-md-offset-2 text-center">Alcances:</span>
                                        <div class="col-md-8" id="verAlcance">

                                        </div>
                                        <br>
                                    </div>

                                    <div class="form-group" id="contRes">
                                        <!-- <hr style="float: left; width: 200px;"> -->
                                        <span class="col-md-1 col-md-offset-2 text-center">Rstricciones:</span>
                                        <div class="col-md-8" id="verRes">

                                        </div>
                                        <br>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>

                    <!-- <div class="row ml-auto" >
                        <div class="col-md-6">

                        </div>
                    </div> -->
                    <div class="row ml-auto align-item-right" style="text-align:right; display:none;" id="etiquetaMenosObj">
                      <div class="col-md-6">
                          <div class="form-group">
                            <a class="nav-link"  onclick="menosObjetivos()" >menos</a>
                          </div>
                      </div>
                    </div>

                    <div class="row ml-auto align-item-right" style="text-align:right" id="etiquetaMenosAlc">
                      <div class="col-md-6">
                          <div class="form-group">
                            <a class="nav-link"  onclick="menosAlcances()" >menos</a>
                          </div>
                      </div>
                    </div>

                    <div class="row ml-auto align-item-right" id="etiquetaMenosRes">
                      <div class="col-md-6">
                          <div class="form-group">
                            <a class="nav-link"  onclick="menosRes()" >menos</a>
                          </div>
                      </div>
                    </div>
                    <!-- en esta parte va el boton para guardar -->
                    <div class="row ml-auto align-item-right" style="text-align:right">
                      <div class="col-md-6">
                          <div class="form-group">
                            <button class="btn btn-success" name="btnGuardaProyecto" type="submit" id="btnGuardar" onclick="enviaVariables();">
                            Save
                            </button>
                            <div id="datos">

                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
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
    </body>
    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
    <script src="../js/events.js" type="text/javascript"></script>

    <script type="text/javascript">
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
    </script>
</html>
