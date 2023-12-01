
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
<div>
      {/* Topbar Start */}
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-lg-5">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <Link className="text-white pr-3" to="#">FAQs</Link>
              <span className="text-white">|</span>
              <Link className="text-white px-3" to="#">Help</Link>
              <span className="text-white">|</span>
              <Link className="text-white pl-3" to="#">Support</Link>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <Link className="text-white px-3" to="#">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="text-white px-3" to="#">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="text-white px-3" to="#">
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link className="text-white px-3" to="#">
                <i className="fab fa-instagram" />
              </Link>
              <Link className="text-white pl-3" to="#">
                <i className="fab fa-youtube" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row py-3 px-lg-5">
        <div classname="col-lg-4">
  <link to="/" classname="navbar-brand d-none d-lg-block" />
  <h1 className="text-primary"> <span className="text-light">TIKETS</span>  <span classname="text-primary">    agendamiento</span> </h1><h1><span className="text-light">chats-online</span>
  </h1></div>

          <div className="col-lg-8 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <div className="d-inline-flex flex-column text-center pr-3 border-right">
                <h6>Horarios</h6>
                <p className="m-0">8.00AM - 9.00PM</p>
              </div>
              <div className="d-inline-flex flex-column text-center px-3 border-right">
                <h6>Email</h6>
                <p className="m-0">Tustikets.com</p>
              </div>
              <div className="d-inline-flex flex-column text-center pl-3">
                <h6>Contactanos</h6>
                <p className="m-0">+012 345 6789</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
          <Link to="#" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-5 text-capitalize font-italic text-primary"><span className="text-light">TIKETS</span>agendamiento </h1>
          </Link>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
            <div className="navbar-nav mr-auto py-0">
              <Link to="/dashboard" className="nav-item nav-link">Menu</Link>
              <Link to="/cita" className="nav-item nav-link">Agendar Cita</Link>
              <Link to="#" className="nav-item nav-link">🎫-tiket-react</Link>
              <Link to="#" className="nav-item nav-link">🎫-tiket-react</Link>
              <Link to="#" className="nav-item nav-link">🎫-tiket-react</Link>
              <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle active" data-toggle="dropdown">Pages</Link>
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
      
      
      <div className="container pt-5">
        <div className="d-flex flex-column text-center mb-5 pt-5">
          <h4 className="text-secondary mb-3">Agendamiento</h4>
          <h1 className="display-4 m-0"><span className="text-primary">Reserva </span> <samp className="text-light">TU</samp>   <span className="text-primary">   Cita   </span>   </h1>
        </div>
        <div className="row pb-3">
         
         


          <div className="col-lg-4 mb-4">
            <div className="card border-0 mb-2">
              <img className="card-img-top" src="img/blog-1.jpg" alt="" />
              <div className="card-body bg-light p-4">
                <h4 className="card-title text-truncate">Un Asesor Puede Atender <br></br> tus Solicitusdes </h4>
                <div className="d-flex mb-3">
                  <small className="mr-2"><i className="fa fa-user text-muted" /> User</small>
                  <small className="mr-2"><i className="fa fa-folder text-muted" /> Web Design</small>
                  <small className="mr-2"><i className="fa fa-comments text-muted" /> chat</small>
                </div>
              <Link  to="/chatUser">   <button className="buttonchat"> Iniciar un chat</button>  </Link>

              

              </div>
            </div>
          </div>



        </div>
      </div>
    </div>

          

    );
}

export default Dashboard;