<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="utf-8"/>
        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"/>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0" name="viewport">
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0" name="viewport">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

        <link href="../css/login.css" media="screen" rel="StyleSheet" type="text/css">

        <!------ Include the above in your HEAD tag ---------->
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" rel="stylesheet">
        <!-- Site Properties -->
        <title>
            SAProjects 1.0
        </title>
        <!-- Stylesheets -->

        <!------ Include the above in your HEAD tag ---------->
    </head>
    <body id="LoginForm">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center text-white mb-4">SA Projects</h2>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="card rounded-0">
                                <div class="card-header">
                                    <h3 class="mb-0">Login</h3>
                                </div>
                                <div class="card-body">
                                    <form role="form" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" class="">
                                        <div class="form-group ">
                                            <input class="form-control" id="inputEmail" name="txtEmail" placeholder="Email Address" type="email">
                                            </input>
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" id="inputPassword" name="txtPass" placeholder="Password" type="password">
                                            </input>
                                        </div>
                                        <div class="form-group">
                                             <button class="btn btn-primary float-right" id="" name="btnEnviar" type="submit">
                                                 Login
                                            </button>
                                        </div>
                                    </form>
                                    <div class="forgot">
                                        <a data-toggle="modal" href="#reset">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div class="forgot">
                                        No tiene cuenta?
                                        <a data-toggle="modal" href="#registro">
                                            Registrar
                                        </a>
                                    </div>
                                    <?php
                                    include '../controller/control_login.php';
                                    include '../controller/control_registro.php';
                                    ?>
                                </div>
                                    <!--/card-block-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/row-->
        </div>
                <!-- ------############## ventana modal #############------------>
        <div class="modal fade" id="registro" role="dialog">
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
                                    New User
                                </h2>
                                <hr>
                                </hr>
                            </div>
                        </div>
                        <form role="form" action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>' method="post" class="">
                            <div class="row">
                               <!--  <div class="col-md-3 field-label-responsive">
                                    <label for="name">
                                        Name
                                    </label>
                                </div> -->
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                            <div class="input-group-addon" style="width: 2.6rem">
                                                <i class="fa fa-user">
                                                </i>
                                            </div>
                                            <input class="form-control" id="name" name="txtNombreRegistro" placeholder="Juan Perez" required="true" type="text">
                                            </input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <!-- <div class="col-md-3 field-label-responsive">
                                    <label for="email">
                                        E-Mail
                                    </label>
                                </div> -->
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                            <div class="input-group-addon" style="width: 2.6rem">
                                                <i class="fa fa-at">
                                                </i>
                                            </div>
                                            <input autofocus="" class="form-control" id="email" name="txtEmailRegistro" placeholder="you@example.com" required="true" type="email">
                                            </input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                               <!--  <div class="col-md-3 field-label-responsive">
                                    <label for="password">
                                        Password
                                    </label>
                                </div> -->
                                <div class="col-md-6">
                                    <div class="form-group has-danger">
                                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                            <div class="input-group-addon" style="width: 2.6rem">
                                                <i class="fa fa-key">
                                                </i>
                                            </div>
                                            <input class="form-control" id="password" name="txtPassRegistro" placeholder="Password" required="true" type="password">
                                            </input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <!-- <div class="col-md-3 field-label-responsive">
                                    <label for="password">
                                        Confirm Password
                                    </label>
                                </div> -->
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                            <div class="input-group-addon" style="width: 2.6rem">
                                                <i class="fa fa-repeat">
                                                </i>
                                            </div>
                                            <input class="form-control" id="password-confirm" name="txtPassConfRegistro" placeholder="Password" required="true" type="password">
                                            </input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                </div>
                                <div class="col-md-6">
                                    <!-- boton que envia el formulario -->
                                    <button class="btn btn-success" name="btnRegistro" type="submit">
                                        <i class="fa fa-user-plus">
                                        </i>
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-------------###############modal del reset###########---------------------->
        <div class="modal fade" id="reset" role="dialog">
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
                                    Reset Password
                                </h2>
                                <hr>
                                </hr>
                            </div>
                        </div>
                        <form role="form" action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>' method="post" class="">
                            <div class="row">
                                <div class="col-md-3 field-label-responsive">
                                    <label for="email">
                                        E-Mail
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                            <div class="input-group-addon" style="width: 2.6rem">
                                                <i class="fa fa-at">
                                                </i>
                                            </div>
                                            <input autofocus="" class="form-control" id="email" name="txtEmailRegistro" placeholder="you@example.com" required="true" type="email">
                                            </input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                </div>
                                <div class="col-md-6">
                                    <!-- boton que envia el formulario -->
                                    <button class="btn btn-success" name="btnReset" type="submit">
                                        <i class="fa fa-user-plus">
                                        </i>
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <p class="botto-text">
            Copyright Oficial
        </p>
    </body>
    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
</html>
