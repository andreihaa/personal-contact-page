import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Layout from './components.js/Layout/Layout';
import Home from './components.js/Home/Home';
import About from './components.js/About/About';
import Contact from './components.js/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Route>
    </Routes>
  );
}
 
export default App;
