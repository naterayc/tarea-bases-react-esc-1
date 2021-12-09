import React from 'react';
import './App.css';

import {Routes ,Route} from "react-router-dom"

import Home from './pages/home/home.component';
import Gallery from './pages/gallery/gallery.component';
import Details from './pages/details/details.component';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
