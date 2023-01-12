import React from "react";
// import { useState, useEffect } from "react";

const Signin = () => {
  
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    league_username: ''
  });
  //create three handlers for recording changes of forms

  // React.useEffect(() => {
  //   }, []);
  const postSignUp = () => {
    fetch("http://localhost:3000/signup")

  }

  return (
    <form>
      <h2>Sign Up</h2> 
      <br/ >
      <label name = 'email'>Email: 
        <input type='email' required 
        placeholder="leagueisfun@gmail.com"
        value = {values.email}/>
      </label>  
      <br />
      <label name = 'password'>Password: 
        <input type='password' required 
        value = {values.password}/>
      </label>  
      <br />
      <label name = 'riotID'> Summoner Username:
        <input type='riotID' required 
        placeholder="leagueSummoner"
        value = {values.league_username}/>
      </label>
      <br />
      <button onClick={postSignUp}>Sign Up</button>
    </form>
  )
}

export default Signin