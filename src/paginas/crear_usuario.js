import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';

import React, { useState } from "react";
import { Link } from "react-router-dom";

const CrearCuenta = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:4500/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(formData),
        
  
      });
  

     
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

   
    if (e.target.name === "password2" && formData.password1 !== e.target.value) {
      
      const msg ="las contraseñas son diferentes";
      swal({
        title:'Error',
        text:msg,
        icon:'error',
        buttons:{
          confirm:{
            text:"ok",
            value:true,
            visible:true,
            className:'btn btn-danger',
            closeModal:true

          }
        }
      });

    }else{

    }

   



  };

  return (
    <div className="cont">
      <div className="login-box">
        <div className="login-logo">
          <h1>
            <b> Crear </b>Cuenta
          </h1>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Crea una cuenta de Usuario</p>

            <form id="login-form" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresar nombre"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresar correo"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingresar Contraseña"
                  name="password1"
                  id="password1"
                  onChange={handleChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirma tu contraseña "
                  name="password2"
                  id="password2"
                  onChange={handleChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-outline-info">
                  Registrar
                </button>
              </div>
              <p className="mt-3 text-center">
                <Link to={"/"}>
                  <button type="submit" className="btn btn-outline-info">
                    Volver al login
                  </button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;

