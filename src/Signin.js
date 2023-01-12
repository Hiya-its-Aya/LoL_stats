
import React from "react";
import { redirect, useNavigate } from "react-router";
// const navigate = useNavigate();
// import { useState, useEffect } from "react";


const Signin = () => {
  
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    league_username: ''
  });
  //create three handlers for recording changes of forms
  const handleEmailChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  const handlePasswordChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };
  const handleLeagueChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      league_username: event.target.value,
    }));
  };
  
  const postSignUp = () => {
    fetch('http://localhost:3000/signin/', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data );
        return redirect(`/profile/${values.league_username}`)
      })
      .catch((error) => {
        console.error('Error:', error);
     });
  }

  const handleSubmit = (e) => {
    e.preventDefault;
    postSignUp();
  }
   
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2> 
      <br/ >
      <label name = 'email'>Email: 
        <input type='email' required 
        placeholder="leagueisfun@gmail.com"
        value = {values.email}
        onChange = {handleEmailChange}/>
      </label>  
      <br />
      <label name = 'password'>Password: 
        <input type='password' required 
        value = {values.password}
        onChange = {handlePasswordChange}/>
      </label>  
      <br />
      <label name = 'riotID'> Summoner Username:
        <input type='riotID' required 
        placeholder="leagueSummoner"
        value = {values.league_username}
        onChange = {handleLeagueChange}/>
      </label>
      <br />
      <button type = 'submit'>Sign Up</button>
    </form>
  )
}

export default Signin