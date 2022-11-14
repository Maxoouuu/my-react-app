/* import logo from './logo.svg'; */
import React from "react";
import "./App.css";
import { Premier } from "./components/Premier";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>test</h1>

      <React.Fragment></React.Fragment>
      <label htmlFor="email">email</label>
      <input typeof="email" id="email"></input>

      <Premier />
    </div>
  );
}

export default App;
