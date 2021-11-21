import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () =>{
        dispatch(logout())
    }

    return (
      
            <header>
            <Navbar className="padd" bg="dark" variant='light' expand="lg" collapseOnSelect>
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

                        {userInfo ? (
                            <NavDropdown title ={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item> Profile </NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}> LogOut</NavDropdown.Item>
                            </NavDropdown>
                            ) : (<LinkContainer to="/login">
                                <Nav.Link> <FontAwesomeIcon icon={faUser} /> Login</Nav.Link>
                            </LinkContainer>)}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        
    )
}

export default Header
