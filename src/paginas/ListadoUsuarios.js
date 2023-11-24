import React from "react";
import { Link } from "react-router-dom";

class FormularioActualizacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: {
        name: "",
        email: "",
        password1: "",
        __v: "",
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.usuarioId !== this.props.usuarioId) {
      const usuarioId = this.props.usuarioId;
      fetch(`http://localhost:4500/users/${usuarioId}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ usuario: data.data });
        })
        .catch((error) => {
          console.error("Error al obtener detalles del usuario:", error);
        });
    }
  }

  render() {
    return (





 


      <div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.usuario.name}
              onChange={(e) =>
                this.setState({
                  usuario: { ...this.state.usuario, name: e.target.value },
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={this.state.usuario.email}
              onChange={(e) =>
                this.setState({
                  usuario: { ...this.state.usuario, email: e.target.value },
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Contraseña</label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={this.state.usuario.password1}
              onChange={(e) =>
                this.setState({
                  usuario: { ...this.state.usuario, password1: e.target.value },
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Rol</label>
            <input
              type="number"
              className="form-control"
              id="__v"
              name="__v"
              value={this.state.usuario.__v}
              onChange={(e) =>
                this.setState({
                  usuario: { ...this.state.usuario, __v: e.target.value },
                })
              }
            />
          </div>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => this.props.onActualizarUsuario(this.state.usuario)}
          >
            Actualizar
          </button>
        </form>
      </div>
    );
  }
}

class ListarUsuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      showModal: false,
      usuarioSeleccionado: null,
    };
  }

  componentDidMount() {
    this.fetchUsuarios();
  }

  fetchUsuarios = async () => {
    try {
      const response = await fetch("http://localhost:4500/users/");
      const data = await response.json();
      this.setState({ usuarios: data.data });
    } catch (error) {
      console.error("Error al obtener la lista de usuarios:", error);
    }
  };

  mostrarModal = (usuario) => {
    this.setState({ showModal: true, usuarioSeleccionado: usuario });
  };

  cerrarModal = () => {
    this.setState({ showModal: false, usuarioSeleccionado: null });
  };

  onActualizarUsuario = (usuarioActualizado) => {
    const _id = this.state.usuarioSeleccionado._id;
    fetch(`http://localhost:4500/users/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioActualizado),
    })
      .then((response) => response.json())
      .then((data) => {
        this.cerrarModal();
        this.fetchUsuarios();
      })
      .catch((error) => {
        console.error("Error al actualizar el usuario:", error);
      });
  };

  eliminarUsuario = (_id) => {
    fetch(`http://localhost:4500/users/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        this.fetchUsuarios();
      })
      .catch((error) => {
        console.error("Error al eliminar el usuario:", error);
      });
  };

  render() {
    return (
      <div>
        <div className="container-fluid"></div>
        <div className="container-fluid p-0"></div>
        <div className="container">
          <h2>Listado de Usuarios</h2>
          {this.state.showModal && (
            <div
              className="modal"
              tabIndex="-1"
              role="dialog"
              style={{ display: "block" }}
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Actualizar Usuario</h5>
                    <button
                      type="button"
                      className="close"
                      onClick={this.cerrarModal}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <FormularioActualizacion
                      usuarioId={this.state.usuarioSeleccionado._id}
                      onActualizarUsuario={this.onActualizarUsuario}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={this.cerrarModal}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}








{/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
          <Link to="#" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-5 text-capitalize font-italic text-white"><span className="text-primary">TIKETS</span>agendamiento</h1>
          </Link>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
            <div className="navbar-nav mr-auto py-0">
              <Link to="/dashboardAsesor" className="nav-item nav-link">Menu Asesor</Link>
              <Link to="#" className="nav-item nav-link">🎫-tiket-react</Link>
              <Link to="#" className="nav-item nav-link">🎫-tiket-react</Link>
              <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle active" data-toggle="dropdown">🎫-tiket-react</Link>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link to="#" className="dropdown-item">🎫-tiket-react</Link>
                  <Link to="#" className="dropdown-item">🎫-tiket-react</Link>
                </div>
              </div>
              <Link to="#" className="nav-item nav-link">🎫-tiket-react</Link>
            </div>
            <Link to="/" className="btn btn-lg btn-primary px-3 d-none d-lg-block">LOGOUT</Link>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
      {/* Blog Start */}










          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Contraseña</th>
                <th></th>
                <th scope="col">Rol ⬇️ (0-User // 1-Admin)</th>
              </tr>
            </thead>
            <tbody>
              {this.state.usuarios.map((usuario) => (
                <tr key={usuario._id}>
                  <td>{usuario._id}</td>
                  <td>{usuario.name}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.password1}</td>
                  <td></td> <td></td> <td></td>
                  <td>{usuario.__v}</td>
                  <td>
                    <Link to="#">
                      <button
                        className="btn btn-outline-success"
                        onClick={() => this.mostrarModal(usuario)}
                      >
                        Actualizar
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link to="#">
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => this.eliminarUsuario(usuario._id)}
                      >
                        Eliminar
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListarUsuarios;
