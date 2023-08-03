import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <h1>NASA API APP</h1>
      <p>Pulling data from the NASA API</p>
      <Link to="/APOD">A Picture of the Day</Link>
      <br />
      <Link to="/MarsRoverPhotos">Mars Rover Photos</Link>

    </>
  )
}

export default Home