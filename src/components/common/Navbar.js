import React from 'react'

const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-sm justify-content-between bb-3">
      <div className="container-fluid">
        <div className="nav navbar-nav mb-1 mb-lg-0 d-flex align-middle">
          <li className="nav-item m-2">
            <h2 to="/" className="nav-link">home</h2>
          </li>
          <li className="nav-item m-2 dropdown">
            <button className="dropbtn">brands</button>
            <div className="dropdown-content">
              {/* change h2 to Link */}
              <div to="/APOD/" className="nav-link">A Picture of the Day</div>
              <div to="/APOD/" className="nav-link">Mars Rover Images</div>
              <div to="/APOD/" className="nav-link">DONKI</div>
              <hr />
              <h2 to="/APOD/" className="nav-link">...sneaker list</h2>
            </div>
          </li>
        </div>
        <div className="nav navbar-nav mb-1 mb-lg-0">
          <li className="nav-item m-2">
            <h2 to="/about/" className="nav-link">about</h2>
          </li>
        </div>
      </div>
    </nav>
  )

}

export default Navbar