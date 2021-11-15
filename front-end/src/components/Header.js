import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function Header() {
    return (
      
            <header>
            <Navbar className="padd" bg="light" expand="lg" collapseOnSelect>
                    <Container fluid>
                        <LinkContainer to="/">
                            <Navbar.Brand>TheShop</Navbar.Brand>
                        </LinkContainer>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                        <LinkContainer to="/cart">
                            <Nav.Link ><FontAwesomeIcon icon={faShoppingCart}/> Cart</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/login">
                            <Nav.Link> <FontAwesomeIcon icon={faUser} /> Login</Nav.Link>
                        </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        
    )
}

export default Header
