import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContextProvider from "./context/AppContextProvider.js";
import routs from "./routs/routs.js";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          {routs.map((component, index) => (
            <Route {...component} key={index} />
          ))}
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
