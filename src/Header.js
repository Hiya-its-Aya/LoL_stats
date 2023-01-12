import React from "react";
// import { useState, useEffect } from "react";
import { Link, Output } from "react-router-dom";

const Header = () => {
  
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setData(data.message)})
      .catch(a => {console.log(a)})
    }, []);

    return (
      <div>
        <h1>
            {!data ? 'Loading...': data}
        </h1>
        <Link to = "/signin"> Sign Up</Link>
        <Link to = "/login"> Log In</Link>
      </div>
    )
}

export default Header;
