import React from 'react'
import { Link } from 'react-router-dom';




function Navhead() {
  return (
    <nav class="navbar navbar-expand-lg navbar-secondary bg-secondary sticky-top">
      <Link class="navbar-brand" to={'/home'}>A2Z</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item">
            <Link class="nav-link" to={'/home'}>HOME</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={'/store'}>STORE</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={'/about'}>About</Link>
          </li>

        </ul>
       
      </div>
    </nav>
  );
}

export default Navhead;



