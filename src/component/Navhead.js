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
        
        <nav class="navbar fixed-top bg-light navbar-expand-lg ">
            <div class="container-fluid">
              <Link class="navbar-brand" to={"/home"}>Mobile</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to={"/home"}>Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to={"/store"}>Store</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to={"/about"}>about</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to={"/colourgame"}>Game</Link>
                  </li>

                 
  {/* <div class="container-fluid"> */}
    {/* <a class="navbar-brand" href="#">Fixed top</a>
  </div>
</nav> */}


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





