import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContextProvider from "./context/AppContextProvider.js";
import routs from "./routs/routs.js";
import { StyledContent, StyledLayout } from "./App.styles.js";
import Header from "./components/Header";
import BackButton from "./components/BackButton";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <StyledLayout>
            <Header />
            <BackButton />
            <StyledContent>
              {routs.map((component, index) => (
                <Route {...component} key={index} />
              ))}
            </StyledContent>
          </StyledLayout>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
