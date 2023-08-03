import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import axios from 'axios'

import Home from './components/Home'

import Navbar from './components/common/Navbar'

import APOD from './components/APOD'
import MarsRoverPhotos from './components/MarsRoverPhotos'

function App() {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/APOD" element={<APOD/>}/>
          <Route path="/MarsRoverPhotos" element={<MarsRoverPhotos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App