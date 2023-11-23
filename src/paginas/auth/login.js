import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
<div className="cont">


    <div className="login-box">
      <div className="login-logo">
        <h1 className="text-primary"><b>Inicio de  </b>sesión </h1>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Ingresa tus datos para iniciar sesión</p>





          <form id="login-form" action="" method="post">

            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Ingresar correo" id="email" name="email"  required  />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Ingresar Contraseña"  name="password" id="password" required />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="text-center">
            <Link to="/dashboard" >  <button type="submit"   className="btn btn-outline-info">Ingresar</button></Link>
            </div>
            <p className="mt-3 text-center">
                 <Link  to="/crear-cuenta"> <button type="submit"    className="btn btn-outline-info">Crear una Cuenta</button></Link>
            </p>
          </form>
          </div>
          </div >

          </div>



        </div>

  );
}

export default Login;
