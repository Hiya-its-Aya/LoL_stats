
import React from "react";
// import { useState, useEffect } from "react";

const App = () => {
  
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data.message)})
      .catch(a => {console.log(a)})
    }, []);

    return (
      <h1>
          {!data ? 'Loading...': data}
      </h1>
    )
}

export default App