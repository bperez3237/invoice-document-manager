import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>h1</h1>
      </div>
      <Switch>
        <Route path="/view-employees">
          <></>
        </Route>  
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
