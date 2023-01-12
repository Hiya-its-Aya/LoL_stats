import React from "react";
// import { useState, useEffect } from "react";

const Login = () => {
  
  // const [data, setData] = React.useState(null);
  
  // React.useEffect(() => {
  //   }, []);

    return (
      <form>
        <h2>Log In</h2> 
        <br/ >
        <label name = 'email'>Email: 
          <input type='email' required placeholder="leagueisfun@gmail.com"/>
        </label>  
        <br />
        <label name = 'password'>Password: 
          <input type='password' required />
        </label>  
        <br />
        <button>Log In</button>
      </form>
    )
}

export default Login