import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";


const ChatUser=()=>{

  const [formData, setFormData] = useState({
    chat: ""
  });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:4500/chat");
        const responseData = await response.json();
        if (responseData.success) {
          setMessages(responseData.data);
        } else {
          console.error("Error al obtener mensajes:", responseData.msg);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4500/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log(responseData);

      // Actualizar los mensajes después de enviar uno nuevo
      if (responseData.success) {
        setMessages([...messages, responseData.data]);
        setFormData({ chat: "" });
      }

    } catch (error) {
      console.error("Error ", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      chat: e.target.value,
    });
  };





  return (
    <div>
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
            <h1><span className="text-light">chats-online</span>     <span className="text-primary">Chat-Cliente</span></h1>
          </div>
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
              <Link to="/dashboard" className="nav-item nav-link">Menu Usuario</Link>
              <Link to="#" className="nav-item nav-link">🎫-tiket-react</Link>
              <Link to="#" className="nav-item nav-link">🎫-tiket-react</Link>
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

     

      

      <div className="App">
        <div className="chat-container">
          <div className="chat-messages" style={{ height: "100px", overflowY: "auto", border: "1px solid black", padding: "100px",left:"120px" }}>
            {messages.map((message) => (
              <div key={message._id}>{message.chat}<br /><br /><br />
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="mensaje..."
              type="text"
              value={formData.chat}
              onChange={handleChange}
              required
            />
            <button className='btn btn-outline-success' type="submit">Enviar</button>
          </form>
        </div>
      </div>

      </div>
  );
}

export default ChatUser;
