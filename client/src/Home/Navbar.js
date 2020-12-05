import React, { useState } from 'react';
import {Navbar, NavbarBrand, NavbarToggler,Collapse, Nav, NavItem, Button, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Register from './Register'
import HomePage from '../pages/HomePage'


const Navigation = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  }
  
  return (

    <Navbar color="faded" light expand='md'>
      <NavbarBrand href='/'>It's Workin'</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink href='/HomePage'>Home</NavLink>
          </NavItem>
            {!props.isloggedIn ? (
              <>
              <NavItem>
                <NavLink href='/register'>Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/login'>Login</NavLink>
              </NavItem>
              </>
            ) : null}
          <NavItem>
            <NavLink href='/recipesearch'>Repcipe Search</NavLink>
          </NavItem>
          <NavItem>
            <Button onClick={props.clickLogout}>Logout</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default  Navigation;