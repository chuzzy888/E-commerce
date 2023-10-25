// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Display from './Display';
import Cart from './Cart'
import Shoe from './Shoe';
import Groom from './Groom';
import Beauty from './Beauty'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Handbag from './Handbag';
import { BsFillCartCheckFill } from "react-icons/bs";

function OffcanvasExample() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };
  return (
    <>
      <BrowserRouter>
        {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-white mb-3">
            <Container fluid>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSTN43CtpYYzxiQilYiH1yoggmR7O68yv4GJlz-b31lzDz0iVqPcTPomA5xTM0NB5oR8&usqp=CAU" alt=".." style={{ height: "50px", width: "200px" }} />
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleToggleOffcanvas} />
              <Navbar.Offcanvas
                show={showOffcanvas}
                onHide={handleCloseOffcanvas}
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                style={{ width: '200px', height: "700px" }}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSTN43CtpYYzxiQilYiH1yoggmR7O68yv4GJlz-b31lzDz0iVqPcTPomA5xTM0NB5oR8&usqp=CAU" alt=".." style={{ height: "50px", width: "200px" }} />

                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} onClick={handleCloseOffcanvas} to="/">Vintage</Nav.Link>
                    <Nav.Link as={Link} onClick={handleCloseOffcanvas} to="/cart">  <h1> <BsFillCartCheckFill /> </h1> </Nav.Link>

                   <DropdownButton  id="dropdown-basic-button" title="categories " variant='success' >
                   <DropdownButton id="dropdown-basic-button" title="male " >
                      <Dropdown.Item as={Link} onClick={handleCloseOffcanvas} to="/shoe">shoe</Dropdown.Item>
                      <Dropdown.Item as={Link} onClick={handleCloseOffcanvas} to="/groom">men's groom</Dropdown.Item>
                        <Nav.Link as={Link} onClick={handleCloseOffcanvas} to="/computer">computer</Nav.Link>

                      <DropdownButton id="dropdown-basic-button" title="female" className='mt-4'>
                      <Dropdown.Item as={Link} onClick={handleCloseOffcanvas} to="/beauty">beauty</Dropdown.Item>
                      <Dropdown.Item as={Link} onClick={handleCloseOffcanvas} to="/handbag">handbag</Dropdown.Item>

                    </DropdownButton>
                    </DropdownButton>

                   </DropdownButton>


                    


                  






                  </Nav>
               
                
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/computer" element={<Display />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shoe" element={<Shoe />} />
          <Route path="/groom" element={<Groom />} />
          <Route path="/beauty" element={<Beauty/>} />
          <Route path="/handbag" element={<Handbag/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default OffcanvasExample;