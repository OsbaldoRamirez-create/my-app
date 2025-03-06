import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Components/Navbar';
import FooterBar from './Components/FooterBar';
import ContactPage from './ContactPage';
import MaintenancePage from './MaintenancePage';
import LandscapingPage from './LandscapingPage';

export default function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
     
      <Routes> 

        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/maintenance' element={<MaintenancePage/>}></Route>
        <Route path='/landscaping' element={<LandscapingPage/>}></Route>
      </Routes>
      
      <FooterBar/>

    </div>
    </Router>
  );
}

