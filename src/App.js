import React from 'react';
import './App.css';

import { Routes, Route } from "react-router-dom"

import Home from './pages/home/home.component';
import Gallery from './pages/gallery/gallery.component';
import Details from './pages/details/details.component';
import Header from './components/header/header';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
