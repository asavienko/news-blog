import React from "react";
import "./App.css";
import AppContextProvider from "./context/AppContextProvider.js";

function App() {
  return (
    <AppContextProvider>
      <div className="App">abc</div>
    </AppContextProvider>
  );
}

export default App;
