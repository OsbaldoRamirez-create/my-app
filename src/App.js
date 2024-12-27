import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './Home';
import Navbar from './Components/Navbar';


export default function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
     
      <Routes> 

        <Route path='/' element={<Home/>}></Route>
       
      </Routes>
    
    
    </div>
    </Router>
  );
}

