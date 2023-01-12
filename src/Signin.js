import React from "react";
// import { useState, useEffect } from "react";

const Signin = () => {
  
  // const [data, setData] = React.useState(null);
  
  // React.useEffect(() => {
  //   }, []);

    return (
      <form>
        <h2>Sign Up</h2> 
        <br/ >
        <label name = 'email'>Email: 
          <input type='email' required placeholder="leagueisfun@gmail.com"/>
        </label>  
        <br />
        <label name = 'password'>Password: 
          <input type='password' required />
        </label>  
        <br />
        <label name = 'riotID'> Summoner Username:
          <input type='riotID' required placeholder="leagueSummoner"/>
        </label>
        <br />
        <button >Sign Up</button>
      </form>
    )
}

export default Signin