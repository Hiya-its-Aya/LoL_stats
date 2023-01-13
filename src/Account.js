import React from "react";
import { useParams } from "react-router";
// import { useState, useEffect } from "react";
// import { Link, Output } from "react-router-dom";

const Account = () => {
  
  let { id } = useParams();

  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch("http://localhost:3000/profile/"+id +"/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)})
      .catch(a => {console.log(a)})
    }, []);

    return (
      <div>
        <p>ID: {id} </p>
        <p>
            {!data ? 'Loading...': data}
        </p>
      </div>
    )
}

export default Account;
