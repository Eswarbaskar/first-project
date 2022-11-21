import React from 'react'
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';




function Navhead() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        
        <nav className="navbar fixed-top bg-light navbar-expand-lg ">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/home"}>Mobile</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/home"}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/store"}>Store</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/about"}>about</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/"}>Game</Link>
                  </li>

                  </ul>

              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>


  );
}


export default Navhead;





