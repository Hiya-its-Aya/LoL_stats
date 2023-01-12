import React from "react";
// import { useState, useEffect } from "react";
// import { Link, Output } from "react-router-dom";

const Account = () => {
  
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch("http://localhost:3000/profile/:id")
      // .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setData(data)})
      .catch(a => {console.log(a)})
    }, []);

    return (
      <div>
        <h1>
            {!data ? 'Loading...': data}
        </h1>
      </div>
    )
}

export default Account;
