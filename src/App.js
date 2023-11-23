import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './paginas/auth/login';
//crear cuentas de usuario
import CrearCuenta from './paginas/crear_usuario';
//Menu de usuarios
import Dashboard from './paginas/dashboard';
//Menu del accesor
import DashboardAccesor from './paginas/dashboard-accesor';

import ChatAdmin from './paginas/chatAdmin';

import ChatUser from './paginas/chatUser';

import ListarUsuarios from './paginas/ListadoUsuarios';

 
function App() {
  return (
   <Fragment>
    <Router>
      <Routes>

        <Route path = "/"exact element = {<Login/>}/>


        <Route path = "/dashboard"exact element = {<Dashboard/>}/>
        <Route path = "/dashboardAsesor"exact element = {<DashboardAccesor/>}/>

        <Route path = "/chatAdmin"exact element = {<ChatAdmin/>}/>
        <Route path = "/chatUser"exact element = {<ChatUser/>}/>

        <Route path = "/crear-cuenta"exact element = {<CrearCuenta/>}/>
        <Route path = "/listadoUsuarios"exact element = {<ListarUsuarios/>}/>



      </Routes>
    </Router>
   </Fragment> 
      
   
  );
}
    
export default App;