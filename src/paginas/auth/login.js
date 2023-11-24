import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password1: "",
    });

    const [responseMessage, setResponseMessage] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const response = await fetch("http://localhost:4500/users/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              mode: "cors",
              credentials: "include",
              body: JSON.stringify(formData),
          });
  
          if (!response.ok) {
              const errorMessage = await response.text();
              setResponseMessage(`Error del servidor: ${errorMessage}`);
              return;
          }
  
          try {
              const responseData = await response.json();
              if (responseData.success) {
                  // Aquí redirigir en función del rol
                  if (responseData.__v === 0) {
                      navigate("/dashboard");
                  } else if (responseData.__v === 1) {
                      navigate("/dashboardAsesor");
                  }
              } else {
                  setResponseMessage("Usuario no encontrado. Verifica tus credenciales.");
              }
          } catch (error) {
              console.error("Error parsing JSON:", error);
              setResponseMessage("Error al procesar la respuesta del servidor.");
          }
      } catch (error) {
          console.error("Error:", error);
          setResponseMessage(`Error: ${error.message}`);
      }
  };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
      <div className="cont">
      <div className="login-box">
        <div className="login-logo">
          <h1 className="text-primary"><b>Inicio de  </b>sesión </h1>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Ingresa tus datos para iniciar sesión</p>
            <form id="login-form" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresar correo"
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
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
                  required
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-outline-info">Ingresar</button>
              </div>
              <p className="mt-3 text-center">
                <Link to="/crear-cuenta">
                  <button type="submit" className="btn btn-outline-info">Crear una Cuenta</button>
                </Link>
              </p>
            </form>
            {responseMessage && <p className="text-center">{responseMessage}</p>}
          </div>
        </div>
      </div>
    </div>
    

    );
};

export default Login;
