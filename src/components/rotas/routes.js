import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/about/about";
// import Usuario from "./Usuario";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { About }  path="/sobre" />
           {/* <Route component = { Usuario }  path="/usuario" /> */}
       </BrowserRouter>
   )
}

export default Routes;