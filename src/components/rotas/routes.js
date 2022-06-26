import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/about';
// import reserva from "../reserva";
// import contato from "../contato";
// import login from "../login/login"

const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <Route component={Home} path='/home' />
                <Route component={About} path='/about' />
                {/* <PrivateRoute component = { reserva } path="/reserva"/>
           <PrivateRoute component = { contato } path="/contato"/>
           <Route component = { login } path="/"/> */}
            </div>
        </BrowserRouter>
    );
}

export default Routes;