import React from 'react';
import { Router } from "@reach/router";
import './App.css';

// Page components
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <div className="App">
      <Router>
      <Home path="/"/>
      <SinglePost path="posts/:slug" />
      </Router>
    </div>
  );
}

export default App;
