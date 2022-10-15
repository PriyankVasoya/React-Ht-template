import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props) {
  return (

   <>

  {/* Spinner End */}
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <Link
      to="/"
      className="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      <h2 className="m-0 text-primary">
        <i className="fa fa-book me-3" />
        eLEARNING
      </h2>
    </Link>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">

        <Link to="/" className={`nav-item nav-link ${props.selectedTitle === "home" ? "active" : ""}`}>Home</Link>
        <Link to="/about" className= {`nav-item nav-link ${props.selectedTitle === "about" ? "active" : ""}`}>About</Link>
        <Link to="/courses" className= {`nav-item nav-link ${props.selectedTitle === "courses" ? "active" : ""}`}>Courses</Link>
       
        <div className="nav-item dropdown">
        <Link  to="#" className={`nav-link dropdown-toggle ${props.selectedTitle === "team" || props.selectedTitle === "testimonial" || props.selectedTitle === "404"  ? "active" : ""}`} data-bs-toggle="dropdown">Pages</Link>
          <div className="dropdown-menu fade-down m-0">
            <Link to="/team" className={`dropdown-item${props.selectedTitle === "team" ? "active" : ""}`}>Our Team</Link>
            <Link to="/testimonial" className={`dropdown-item${props.selectedTitle === "testimonial" ? "active" : ""}`}>Testimonial</Link>
            <Link to="/404" className={`dropdown-item${props.selectedTitle === "404" ? "active" : ""}`}>404 Page</Link>
          </div>
        </div>
        <Link to="/contact" className={`nav-item nav-link ${props.selectedTitle === "contact" ? "active" : ""}`}>Contact</Link>
      </div>
      <Link to="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now
        <i className="fa fa-arrow-right ms-3" /></Link>
    </div>
  </nav>
  {/* Navbar End */}
</>

   
  )
}
