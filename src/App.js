import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import axios from 'axios'

// import Home from './components/Home'

import Navbar from './components/common/Navbar'

import APOD from './components/APOD/APOD'

function App() {

  // API key
  // const api = 'api_key=3eCYd03zAJvlrgxwpJbPLQWpeO4jptg3ZFT1nd4y'

  // useEffect(() => {
  //   const getData = async() => {
  //     const { data } = await axios(`https://api.nasa.gov/planetary/apod?api_key${api}`)
  //     console.log(data)
  //   }
  //   getData()
  // })

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/APOD" element={<APOD/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App