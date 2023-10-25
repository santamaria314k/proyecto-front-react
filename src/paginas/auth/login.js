import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-box">
      <div className="login-logo">
        <Link to={"#"}><b>Iniciar</b> Sesión</Link>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Ingresa tus datos para iniciar sesión</p>
          <form action="../../index3.html" method="post">
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Ingresar correo" id="email" name="email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Ingresar Contraseña"  name="password" id="password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
            </div>
            <p className="mt-3 text-center">
              <button type="submit" className="btn btn-primary btn-block warning">Crear una Cuenta</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
