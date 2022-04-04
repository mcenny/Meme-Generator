import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

// THIS WORKS FOR THE MEME GENERATOR
import App from "./components/MemeGenerator/App"
import "./components/MemeGenerator/MemeGenerator.css"

ReactDOM.render(
  <div>
    <App/>
  </div>,
  document.getElementById('root')
)
