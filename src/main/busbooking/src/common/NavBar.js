import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
  <div className="container-fluid">
    <div data-testid="titletab">
    <Link className="navbar-brand" to={"/"} >
        BUS TICKET BOOKING MANAGEMENT 
    </Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div data-testid="bookingtab"> 
          <Link className="nav-link active" aria-current="page" to={"/view-bookings"} >
            Booking Portal
            </Link>
            </div>
        </li>
        <li className="nav-item">
          <div data-testid="usertab">
          <Link className="nav-link" to={"/view-users"} data-testid="usertab">User Portal</Link>
          </div>
        </li>
        <li className="nav-item">
          <div data-testid="bustab">
          <Link className="nav-link" to={"/view-buses"}>Bus Portal</Link>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar
