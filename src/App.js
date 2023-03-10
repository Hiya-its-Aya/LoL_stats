
import React from "react";
// import { Route } from "react-router";
import Signin from "./Signin";
import Header from './Header';
import { HashRouter, BrowserRouter, Routes , Route} from "react-router-dom";
import Login from "./Login";
import Account from "./Account";
// import { useState, useEffect } from "react";


const App = () => {

    return (
        <Routes>
          <Route path ='/' element={<Header /> } />
            <Route path = '/signin' element = {<Signin />}/>
            <Route path = '/login' element = {<Login />}/>
            <Route path ='/profile/:id' element = {<Account />}/>
          <Route/>
        </Routes>
    )
}

export default App