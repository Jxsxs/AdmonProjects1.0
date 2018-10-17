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

        <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script> 
        <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

        <link href="../css/login.css" media="screen" rel="StyleSheet" type="text/css">

        <!------ Include the above in your HEAD tag ---------->
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" id="bootstrap-css" rel="stylesheet">
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js">
        </script>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" rel="stylesheet">
        <!-- Site Properties -->
        <title>
            SAProjects 1.0
        </title>
        <!-- Stylesheets -->

        <!------ Include the above in your HEAD tag ---------->
    </head>
    <body id="LoginForm">
        <div class="container">
            <h1 class="form-heading">
                SA Projects
            </h1>
            <div class="login-form">
                <div class="main-div">
                    <div class="panel">
                        <h2>
                            Ingreso al sistema
                        </h2>
                        <p>
                            Please enter your email and password
                        </p>
                    </div>
                    <form role="form" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" class="">
                        <div class="form-group ">
                            <input class="form-control" id="inputEmail" name="txtEmail" placeholder="Email Address" type="email">
                            </input>
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="inputPassword" name="txtPass" placeholder="Password" type="password">
                            </input>
                        </div>
                        <div class="forgot">
                            <a data-toggle="modal" href="#reset">
                                Forgot password?
                            </a>
                        </div>
                        <button class="btn btn-primary" id="" name="btnEnviar" type="submit">
                            Login
                        </button>

                    </form>
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
                                        <div class="col-md-3 field-label-responsive">
                                            <label for="name">
                                                Name
                                            </label>
                                        </div>
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
                                        <div class="col-md-3 field-label-responsive">
                                            <label for="password">
                                                Password
                                            </label>
                                        </div>
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
                                        <div class="col-md-3 field-label-responsive">
                                            <label for="password">
                                                Confirm Password
                                            </label>
                                        </div>
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
            </div>

        </div>
    </body>
</html>