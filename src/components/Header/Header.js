import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useAuth } from "../../auth/auth.context";
function Header() {
  const { isAuthenticated, logoutAction } = useAuth();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>

          {isAuthenticated ? (
            <>
              <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/user/list'>Users</Nav.Link>
                <Nav.Link as={Link} to='#' onClick={logoutAction}>Logout</Nav.Link>
              </Nav>
            </>

          ) : ""}

        </Container>
      </Navbar>
    </>
  );
}
export default Header;
