import { Component } from "react";

import Header from "./component/header";
import Button from "./component/Button";

function App() {

const onClick = () => {
  console.log("Click Me")
}

 const name = "Ali"
  return (
    <div className="App">
      <h1>Hello React {name}</h1>
      <Header/>
      <Button color='green' title='Click Me' onClick={onClick}/> 
    </div>
  );
}

export default App;
