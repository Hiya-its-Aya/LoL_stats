
import React from "react";
import { useState, useEffect } from "react";

const App = () =>{
  
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message)
        setData(data.message)});
    }, []);

    return (
      <h1>
          {!data ? 'Loading...': data}
      </h1>
    )
}

export default App