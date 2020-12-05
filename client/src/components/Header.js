import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <header>
      <Navbar className='header'>
        <NavbarBrand href='/' className="ml-auto"></NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href='/menu'>Menu</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  )
}