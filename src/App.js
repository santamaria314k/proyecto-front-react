import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './paginas/auth/login';
//crear cuentas de usuario
import CrearCuenta from './paginas/crear_usuario';

import Dashboard from './paginas/dashboard';


function App() {
  return (
   <Fragment>
    <Router>
      <Routes>
        <Route path = "/"exact element = {<Login/>}/>
        <Route path = "/crear-cuenta"exact element = {<CrearCuenta/>}/>
        <Route path = "/dashboard.js"exact element = {<Dashboard/>}/>

      </Routes>
    </Router>
   </Fragment> 
      
   
  );
}
    
export default App;