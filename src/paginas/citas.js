import React, { useState } from "react";
import { Link } from "react-router-dom";

const Citas = () => {
  const [formData, setFormData] = useState({
    email: "",
    fechaExp: "",
    fechaCita: ""
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fechaActual = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:4500/citas/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(formData),
      });

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

        if (response.status !== 204) {
          try {
            const errorData = await response.json();
            errorMessage = JSON.stringify(errorData, null, 2);
          } catch (error) {
            console.error("Error de la respuesta tipo json:", error);
            errorMessage = "Error del servidor";
          }
        }

        setResponseMessage(errorMessage);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error ", error);
      setResponseMessage(`Error: ${error.message}`);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      fechaExp: fechaActual,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="cont">
<Link to="/dashboard">
<button className="btn btn-outline-dark fixed-top ml-2    btn-sm w-25   " >
VOLVER
</button>
</Link>
      <div className="login-box">
        <div className="login-logo">
          <h1>
            <b>Crea una </b> de Citas
          </h1>
        </div>
        <div className="card">
          <div className="card-body login-card-body">

            <form id="login-form" onSubmit={handleSubmit}>

              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresa tu email"
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
                  type="date"
                  className="form-control"
                  id="fechaExp"
                  name="fechaExp"
                  value={fechaActual}
                  readOnly
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
   <p className="login-box-msg"> fecha de TU-tiket</p>

              <div className="input-group mb-3">
                
                <input
                  type="date"
                  className="form-control"
                  name="fechaCita"
                  id="fechaCita"
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
                <button
                  type="submit"
                  className="btn btn-outline-info"
                  disabled={isLoading}
                >
                  {isLoading ? "Registrando..." : "Registrar"}
                </button>
              </div>

              {responseMessage && (
                <div className={`alert ${isSuccess ? "alert-success" : "alert-danger"} mt-3`}>
                  {responseMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Citas;
