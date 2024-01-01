import ReactImageGallery from "./ReactImageGallery";
import React from "react";

// React Routings Imports
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home, About, Commission } from "./components/pages";

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/portfolio" element={<ReactImageGallery />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/commission" element={<Commission />}/>
        </Routes>
      </div>
  );
}

export default App;
