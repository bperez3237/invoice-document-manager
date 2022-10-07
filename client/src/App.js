import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import useFetch from './hooks/useFetch';
import { SubContext} from './context/SubContext'

function App() {
  const {data: workers, setData: setWorkers, loading: loadingWorkers} = useFetch('/workers')
  const {data: subs, setData: setSubs, loading: loadingSubs} = useFetch('/subcontractors')

  // console.log(loadingWorkers ? 'nothing' : workers)
  // console.log(loadingSubs ? 'nothing' : subs)


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
          <SubContext.Provider value={{subs}}>
            <Home />
          </SubContext.Provider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
