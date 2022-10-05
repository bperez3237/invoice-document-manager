import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import useFetch from './hooks/useFetch';

function App() {
  // const {workers: data, setWorkers: setData, loading} = useFetch('/workers')
  const {data: workers, setWorkers: setData, loading} = useFetch('/workers')

  // useEffect(()=>{
  //   useFetch
  // },[])

  console.log(loading ? 'nothing' : workers)


  return (
    <BrowserRouter>
    <Navbar/>
      <div className="App">
        <h1>Payroll Spreadsheet Generator</h1>
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
