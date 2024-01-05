import ReactImageGallery from "./ReactImageGallery";
import React from "react";

// React Routings Imports
import { Navbar } from './components/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import { About, Commission, Contact } from "./components/pages";

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
        {/* Redirects the default route to portfolio page */}
        <Route path="/" element={<Navigate replace to='/about' />}/>
          {/* Main Pages for Keyboard Portfolio */}
          <Route path="/portfolio" element={<ReactImageGallery />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/commission" element={<Commission />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
  );
}

export default App;
