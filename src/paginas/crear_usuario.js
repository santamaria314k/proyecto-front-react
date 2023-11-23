import React, { useState } from "react";
import { Link } from "react-router-dom";

const CrearCuenta = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:4500/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(formData),
      });
  
      console.log(response);
  
      if (response.ok) {
        if (response.status === 200) {
          setResponseMessage("Registro exitoso");
          setIsSuccess(true);
        } else {
          setResponseMessage("¡Registrado!");
          setIsSuccess(true);
        }
      } else {
        console.error("Error al enviar el formulario");
  
        let errorMessage = "Error en la solicitud";
  
        // Verificar si la respuesta tiene un cuerpo
        if (response.status !== 204) {
          try {
            const errorData = await response.json();
            errorMessage = JSON.stringify(errorData, null, 2);
          } catch (error) {
            console.error("Error de la respuesta typ json:", error);
            errorMessage = "error del servidor";
          }
        }
  
        setResponseMessage(errorMessage);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error ", error);
      setResponseMessage(`Error  ${error.message}`);
      setIsSuccess(false);
    }
  }
  
  


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "password2" && formData.password1 !== e.target.value) {
      setPasswordError("Las contraseñas no coinciden");
    } else {
      setPasswordError("");
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

              {passwordError && <p className="text-danger">{passwordError}</p>}

              {responseMessage && (
                <div>
                  <p className={isSuccess ? "text-success" : "text-danger"}>
                    {isSuccess ? "Registro exitoso" : "Error en el registro"}
                  </p>
                  <pre>{responseMessage}</pre>
                </div>
              )}

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
