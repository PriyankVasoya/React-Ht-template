import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props) {
  return (
    <>
        <div id="nav">
    <div className="container-fluid">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link to="/" className="navbar-brand">
                <img src={process.env.PUBLIC_URL + "img/logo.png" } alt="Logo"/>
            </Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav ml-auto">
                    <Link to="/" className={`nav-item nav-link ${props.selectedTitle === "home" ? "active" : ""}`}>Home</Link>
                    <Link to="/about" className={`nav-item nav-link ${props.selectedTitle === "about" ? "active" : ""}`}>About</Link>
                    <Link to="/service" className={`nav-item nav-link ${props.selectedTitle === "service" ? "active" : ""}`}>Service</Link>
                    <Link to="/portfolio" className={`nav-item nav-link ${props.selectedTitle === "portfolio" ? "active" : ""}`}>Portfolio</Link>
                    <Link to="/pricing" className={`nav-item nav-link ${props.selectedTitle === "pricing" ? "active" : ""}`}>Pricing</Link>
                    <div className="nav-item dropdown">
                        <a href="#" className={`nav-link dropdown-toggle ${props.selectedTitle === "skill" || props.selectedTitle === "team" || props.selectedTitle === "review" || props.selectedTitle === "client" || props.selectedTitle === "single"   ? "active" : ""}`} data-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu">
                            <Link to="/skill" className={`dropdown-item${props.selectedTitle === "skill" ? "active" : ""}`}>Skills</Link>
                            <Link to="/team" className={`dropdown-item${props.selectedTitle === "team" ? "active" : ""}`}>Team Members</Link>
                            <Link to="/review" className={`dropdown-item${props.selectedTitle === "review" ? "active" : ""}`}>Reviews</Link>
                            <Link to="/client" className={`dropdown-item${props.selectedTitle === "client" ? "active" : ""}`}>Clients</Link>
                            <Link to="/single" className={`dropdown-item${props.selectedTitle === "single" ? "active" : ""}`}>Single Page</Link>
                        </div>
                    </div>
                    <Link to="/contact" className={`nav-item nav-link ${props.selectedTitle === "contact" ? "active" : ""}`}>Contact</Link>
                </div>
            </div>
        </nav>
    </div>
</div>
</>

  )
}
