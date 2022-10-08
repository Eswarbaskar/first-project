import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function Navhead() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Navbar bg="light" expand="lg" className='fixed-top'>
            <Container>
              <Navbar.Brand href="/home">A2Z</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                  <Nav.Link href='/home'>Home</Nav.Link>
                  <Nav.Link href='/store'>Store</Nav.Link>
                  <Nav.Link href='/about'>About</Nav.Link>
                  <Nav.Link href='/login'>Login</Nav.Link>
                  <Nav.Link href='/'>Signup</Nav.Link>
                </Nav>

              </Navbar.Collapse>

            </Container>
          </Navbar>
        </div>
      </div>
    </div>


  );
}


export default Navhead;





