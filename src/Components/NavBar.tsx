import { Typography } from '@material-ui/core'
import React from 'react'
import { Button, Navbar } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand >Sociella</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <div className='nav-links'>
          <Typography>Home</Typography>
          <Typography>Your diary</Typography>
      </div>
      <div className='login-signup-btns'>
      <Button variant='dark'  >Log In</Button>
   <Button variant='outline-dark' className='signup-btn'  >Sign Up</Button>
      </div>
   
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBar
