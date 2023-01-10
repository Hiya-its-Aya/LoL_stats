import React, {Component} from "react";



class App extends Component {
    
  render(){
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return(
      <div>
        <h1>{!data ? "Loading..." : data}</h1>
      </div>  
    )
  }
}
export default App;