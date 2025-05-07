import React from 'react'
import Button from '../assets/resuable/Button'

const Header = () => {
  return (
  <>
  <nav className="navbar container pt-3 pb-2">
  <a className="navbar-brand" href="#">Navbar</a>
    <div style={{display:"flex"}}>
      <Button text="Login" classample="btn btn-success"/>
      &nbsp;
      <Button text="Register" classample="btn btn-light"/>
    </div>
  </nav>
  </>
  )
}

export default Header